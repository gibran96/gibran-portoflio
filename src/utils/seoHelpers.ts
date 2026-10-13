export const updateMetaTags = (title: string, description: string) => {
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
};
