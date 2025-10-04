// Generate stars in stars-background container
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".stars-background");
  const numStars = 250; // increase for more stars

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    if (Math.random() < 0.07) star.classList.add("red");

    const size = Math.random() * 4 + 1; // star size
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;

    container.appendChild(star);
  }
});
