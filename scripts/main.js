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
  const eventsTextElements = document.querySelectorAll(".section--events p:not(.code), .section--events ul");
  const eventsCode = document.querySelector(".section--events .code");
  if ((!eventsTextElements.length && !eventsCode) || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
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

  if (eventsCode) {
    gsap.fromTo(
      eventsCode,
      { opacity: 0.25 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: eventsCode,
          start: "top 92%",
          end: "top 65%",
          scrub: 1
        }
      }
    );
  }
}

function setupRitualBlackMatter2Path() {
  const ritualBlackMatter2 = document.querySelector(".ritual-black-matter2");
  const sourcePath = document.querySelector("#ritual-black-matter-shape");
  if (!ritualBlackMatter2 || !sourcePath || ritualBlackMatter2.querySelector("path")) {
    return;
  }

  const clonedPath = sourcePath.cloneNode(true);
  clonedPath.removeAttribute("id");
  clonedPath.classList.add("ritual-black-matter2__path");

  ritualBlackMatter2.innerHTML = "";
  ritualBlackMatter2.appendChild(clonedPath);
}

function animateRitualBlackMatter() {
  const ritualBlackMatter = document.querySelector("#ritual-black-matter");
  const ritualBlackMatter2 = document.querySelector(".ritual-black-matter2");
  if (!ritualBlackMatter || typeof gsap === "undefined") {
    return;
  }

  gsap.to(ritualBlackMatter, {
    rotation: 90,
    scale: 0.82,
    transformOrigin: "50% 50%",
    duration: 6.4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  });

  if (ritualBlackMatter2) {
    gsap.set(ritualBlackMatter2, { scaleX: -1, transformOrigin: "50% 50%" });
    gsap.to(ritualBlackMatter2, {
      rotation: -90,
      scaleX: -0.82,
      scaleY: 0.82,
      transformOrigin: "50% 50%",
      duration: 6.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }
}

function animateRitualBlackMatter2Flames() {
  const ritualBlackMatter2Path = document.querySelector(".ritual-black-matter2__path");
  if (!ritualBlackMatter2Path || typeof gsap === "undefined") {
    return;
  }

  gsap.to(ritualBlackMatter2Path, {
    keyframes: [
      { x: 4, y: -6, rotation: 1.6, scaleX: 1.014, scaleY: 0.988 },
      { x: -3, y: 5, rotation: -1.1, scaleX: 0.992, scaleY: 1.012 },
      { x: 5, y: -8, rotation: 2, scaleX: 1.016, scaleY: 0.986 },
      { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 }
    ],
    transformOrigin: "50% 50%",
    duration: 2.6,
    ease: "sine.inOut",
    repeat: -1
  });
}

function animateRitualBlackMatterFlames() {
  const ritualBlackMatterPath = document.querySelector("#ritual-black-matter-shape");
  if (!ritualBlackMatterPath || typeof gsap === "undefined") {
    return;
  }

  gsap.to(ritualBlackMatterPath, {
    keyframes: [
      { x: 4, y: -6, rotation: 1.6, scaleX: 1.014, scaleY: 0.988 },
      { x: -3, y: 5, rotation: -1.1, scaleX: 0.992, scaleY: 1.012 },
      { x: 5, y: -8, rotation: 2, scaleX: 1.016, scaleY: 0.986 },
      { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 }
    ],
    transformOrigin: "50% 50%",
    duration: 2.6,
    ease: "sine.inOut",
    repeat: -1
  });
}

function animateRitualBlackMatterImage() {
  const ritualBlackMatterImage = document.querySelector(".ritual-black-matter");
  if (!ritualBlackMatterImage || typeof gsap === "undefined") {
    return;
  }

  gsap.to(ritualBlackMatterImage, {
    rotation: 360,
    transformOrigin: "50% 50%",
    duration: 14,
    ease: "none",
    repeat: -1
  });
}

function animateRitualEyeTracking() {
  const ritualEye = document.querySelector(".ritual-eye-animation");
  const ritualPupil = document.querySelector(".ritual-eye-pupil");
  const ritualStack = document.querySelector(".ritual-stack");
  const ritualButton = document.querySelector(".ritual-button");
  if (!ritualEye || !ritualPupil || !ritualStack || !ritualButton || typeof gsap === "undefined") {
    return;
  }

  const maxX = 1.8;
  const maxY = 1.2;
  let ritualIsActive = false;

  gsap.set(ritualPupil, {
    x: 0,
    y: 0,
    transformOrigin: "50% 50%"
  });
  gsap.set(ritualEye, {
    scale: 1,
    transformOrigin: "50% 50%"
  });

  const xTo = gsap.quickTo(ritualPupil, "x", { duration: 0.2, ease: "power3.out" });
  const yTo = gsap.quickTo(ritualPupil, "y", { duration: 0.2, ease: "power3.out" });

  window.addEventListener("pointermove", (event) => {
    if (!ritualIsActive) {
      return;
    }

    const rect = ritualStack.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalizedX = (event.clientX - centerX) / (rect.width / 2);
    const normalizedY = (event.clientY - centerY) / (rect.height / 2);

    const targetX = gsap.utils.clamp(-maxX, maxX, normalizedX * maxX);
    const targetY = gsap.utils.clamp(-maxY, maxY, normalizedY * maxY);

    xTo(targetX);
    yTo(targetY);
  });

  window.addEventListener("pointerleave", () => {
    xTo(0);
    yTo(0);
  });

  ritualButton.addEventListener("click", () => {
    ritualIsActive = !ritualIsActive;
    ritualButton.textContent = ritualIsActive ? "End Ritual" : "Begin ritual";
    ritualButton.setAttribute("aria-pressed", ritualIsActive ? "true" : "false");

    gsap.to(ritualEye, {
      scale: ritualIsActive ? 1.2 : 1,
      duration: 0.35,
      ease: "power2.out"
    });

    if (!ritualIsActive) {
      xTo(0);
      yTo(0);
    }
  });
}

animateHeroFlames();
animateEventsHeadingOnScroll();
animateHeroText();
animateEventsBodyOnScroll();
setupRitualBlackMatter2Path();
animateRitualBlackMatter();
animateRitualBlackMatterFlames();
animateRitualBlackMatter2Flames();
animateRitualBlackMatterImage();
animateRitualEyeTracking();
