
// Load modular sections into the main HTML
const sections = ["header", "landing", "showcase", "product-listing", "contact", "address"];

sections.forEach(id => {
  fetch(`includes/${id}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(`Error loading ${id}:`, err));
});
