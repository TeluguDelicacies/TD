document.addEventListener("DOMContentLoaded", function () {
  const sections = ["header", "landing", "showcase", "product-listing", "contact", "address"];

  sections.forEach(section => {
    fetch(`includes/${section}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${section}.html`);
        }
        return response.text();
      })
      .then(html => {
        document.getElementById(section).innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading section:", section, error);
      });
  });
});
