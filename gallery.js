const modal = document.querySelector(".descr p");
const preview = document.querySelectorAll(".gallery img");
const caption = document.querySelector(".descr p");

preview.forEach((preview) => {
  preview.addEventListener("mouseover", () => {
    modal.classList.add("hovered");

    const altText = preview.alt;
    caption.textContent = altText;
  });
});
