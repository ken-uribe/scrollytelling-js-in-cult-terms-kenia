console.log("Scrollytelling site loaded");

function animateHeroFlames() {
  const heroPaths = document.querySelectorAll(".hero-svg path, .hero2-svg path");
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

function animateEventsHeadingOnScroll() {
  const eventsHeading = document.querySelector(".section--events h2");
  if (!eventsHeading || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(eventsHeading, {
    xPercent: -120,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: eventsHeading,
      start: "top 90%",
      end: "top 45%",
      scrub: 1
    }
  });
}

function animateHeroText() {
  const heroText = document.querySelector(".hero-text");
  if (!heroText || typeof gsap === "undefined") {
    return;
  }

  gsap.from(heroText, {
    x: "-100%",
    duration: 3,
    ease: "power2.out"
  });
}

function animateEventsBodyOnScroll() {
  const eventsTextElements = document.querySelectorAll(".section--events p, .section--events ul");
  if (!eventsTextElements.length || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  eventsTextElements.forEach((element) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "top 25%",
        scrub: 1
      }
    })
      .fromTo(element, { opacity: 0.25 }, { opacity: 1, ease: "none", duration: 0.25 })
      .to(element, { opacity: 1, ease: "none", duration: 0.5 })
      .to(element, { opacity: 0.25, ease: "none", duration: 0.25 });
  });
}

animateHeroFlames();
animateEventsHeadingOnScroll();
animateHeroText();
animateEventsBodyOnScroll();
