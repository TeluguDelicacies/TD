document.addEventListener("DOMContentLoaded", () => {
  const sectionIds = [
    "header",
    "landing",
    "showcase",
    "product-listing",
    "contact",
    "address"
  ];

  sectionIds.forEach(id => {
    const container = document.getElementById(id);
    if (container) {
      fetch(`includes/${id}.html`)
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error ${response.status}`);
          return response.text();
        })
        .then(html => {
          container.innerHTML = html;
        })
        .catch(error => {
          container.innerHTML = `<p style="color:red;">Error loading ${id}.html</p>`;
          console.error(`Error loading includes/${id}.html:`, error);
        });
    } else {
      console.warn(`No element with ID "${id}" found in index.html`);
    }
  });
});
