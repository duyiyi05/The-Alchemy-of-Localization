// Helper: check if an image exists (no binary required; works when you upload later)
function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

// COVER PAGE: Begin Reading
(function coverPage() {
  const btn = document.getElementById("beginReading");
  const coverPhoto = document.querySelector(".coverPhoto");

  // If you upload assets/cover-front.jpg later, fade it in automatically
  if (coverPhoto) {
    preloadImage("assets/cover-front.jpg").then((ok) => {
      if (ok) coverPhoto.classList.add("is-loaded");
    });
  }

  if (!btn) return;

  btn.addEventListener("click", (e) => {
    // optional little "reveal" before leaving
    e.preventDefault();
    coverPhoto?.classList.add("is-opening");
    setTimeout(() => {
      window.location.href = btn.getAttribute("href") || "spread.html";
    }, 380);
  }, { capture: true });
})();

// SPREAD PAGE: Spread button reveals the grid, then pick a card → reading
(function spreadPage() {
  const spreadBtn = document.getElementById("spreadBtn");
  const grid = document.getElementById("cardsGrid");
  if (!spreadBtn || !grid) return;

  // When you upload tarot images later, buttons become photographic automatically
  const tarotButtons = Array.from(grid.querySelectorAll(".tarot"));
  tarotButtons.forEach(async (btn) => {
    const n = String(btn.dataset.card).padStart(2, "0");
    const src = `assets/tarot-${n}.jpg`;
    const ok = await preloadImage(src);
    if (ok) {
      btn.classList.add("has-img");
      btn.style.backgroundImage = `url("${src}")`;
      btn.querySelector("span")?.remove(); // remove label when real photo exists
    }
  });

  spreadBtn.addEventListener("click", () => {
    grid.dataset.state = "shown";
    spreadBtn.disabled = true;
    spreadBtn.textContent = "Pick a Card";
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".tarot");
    if (!card) return;

    const n = card.dataset.card;
    // route to reading with anchor
    window.location.href = `reading.html#arcana-${n}`;
  });
})();
