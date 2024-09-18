function loadHTMLComponent(selector, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading component:", error);
    });
}

// Load the components
loadHTMLComponent("#header", "sections/header.html");
loadHTMLComponent("#image-section", "sections/image-section.html");
loadHTMLComponent("#products", "sections/products-section.html");
