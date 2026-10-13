import { Link } from 'react-router-dom';
export default function NotFound() {
  return <main id="main-content" className="shell not-found"><p className="eyebrow">404 / Page not found</p><h1>Nothing here. Yet.</h1><p>The page you're looking for doesn't exist.</p><Link className="primary-link" to="/">Return to portfolio ↗</Link></main>;
}
