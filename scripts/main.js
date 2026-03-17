console.log("Scrollytelling site loaded");

function setupHeroSvgDuplicate() {
  const heroSection = document.querySelector(".section--hero.hero");
  const primaryHeroSvg = heroSection?.querySelector(".hero-svg");
  if (!heroSection || !primaryHeroSvg) {
    return;
  }

  if (heroSection.querySelector(".hero-svg--drift")) {
    return;
  }

  const duplicateHeroSvg = primaryHeroSvg.cloneNode(true);
  duplicateHeroSvg.classList.add("hero-svg--drift");
  duplicateHeroSvg.setAttribute("aria-hidden", "true");
  duplicateHeroSvg.setAttribute("focusable", "false");

  heroSection.insertBefore(duplicateHeroSvg, primaryHeroSvg.nextSibling);
}

function animateHeroFlames() {
  const heroPaths = document.querySelectorAll(".hero-svg path");
  if (!heroPaths.length) {
    return;
  }

  heroPaths.forEach((path, index) => {
    const seed = index + 1;
    const rise = 15 + (seed % 7) * 2.2;
    const spread = 0.014 + (seed % 5) * 0.0045;
    const squeeze = 0.024 + (seed % 4) * 0.005;
    const lift = 0.036 + (seed % 6) * 0.006;
    const duration = 2.6 + (seed % 8) * 0.24;
    const delay = ((seed % 9) * -0.32).toFixed(2);

    path.style.setProperty("--flame-rise", `${rise.toFixed(2)}px`);
    path.style.setProperty("--flame-spread", spread.toFixed(3));
    path.style.setProperty("--flame-squeeze", squeeze.toFixed(3));
    path.style.setProperty("--flame-lift", lift.toFixed(3));
    path.style.setProperty("--flame-duration", `${duration.toFixed(2)}s`);
    path.style.setProperty("--flame-delay", `${delay}s`);
  });
}

setupHeroSvgDuplicate();
animateHeroFlames();
