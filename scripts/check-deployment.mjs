import assert from 'node:assert/strict';

const supplied = process.argv[2];
if (!supplied) throw new Error('Usage: npm run check:deployment -- https://your-site.vercel.app');
const origin = new URL(supplied).origin;
if (!origin.startsWith('https://')) throw new Error('Use an HTTPS deployment URL.');

async function get(path, type) {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(30_000) });
  assert.equal(response.status, 200, `${path} must be publicly accessible (HTTP ${response.status})`);
  assert.ok(response.headers.get('content-type')?.includes(type), `${path} should serve ${type}`);
  return response;
}
const html = await (await get('/', 'text/html')).text();
assert.ok(html.includes('Gibran Myageri | Full Stack Software Engineer'), 'Portfolio metadata is present');
assert.ok(html.includes(`${origin}/social-preview.png`), 'Social preview has an absolute production URL');
assert.ok((await (await get('/resume', 'text/html')).text()).includes('id="root"'), 'Resume SPA fallback is present');
const assets = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)].map(match => match[1]);
assert.ok(assets.some(asset => asset.endsWith('.js')), 'JavaScript bundle is present');
assert.ok(assets.some(asset => asset.endsWith('.css')), 'CSS bundle is present');
for (const asset of assets) await get(asset, asset.endsWith('.js') ? 'javascript' : 'text/css');
await get('/favicon.svg', 'image/svg+xml');
await get('/robots.txt', 'text/plain');
const image = Buffer.from(await (await get('/social-preview.png', 'image/png')).arrayBuffer());
assert.equal(image.readUInt32BE(16), 1200, 'Social preview width');
assert.equal(image.readUInt32BE(20), 630, 'Social preview height');
console.log(`Verified public portfolio, resume route, assets, and metadata: ${origin}`);
