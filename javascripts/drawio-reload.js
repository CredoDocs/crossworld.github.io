document$.subscribe(() => {
  if (window.GraphViewer && typeof GraphViewer.processElements === 'function') {
    GraphViewer.processElements();
  }
});
