const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let scrollSmootherInstance = null;

function prefersReducedMotion() {
  return reducedMotionQuery.matches;
}

function markReducedMotionState() {
  document.documentElement.classList.toggle("is-reduced-motion", prefersReducedMotion());
}

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  if (typeof ScrollSmoother !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  } else {
    gsap.registerPlugin(ScrollTrigger);
  }
}

function setupScrollSmoother() {
  const smoothWrapper = document.querySelector("#smooth-wrapper");
  const smoothContent = document.querySelector("#smooth-content");

  if (!smoothWrapper || !smoothContent || prefersReducedMotion() || typeof ScrollSmoother === "undefined") {
    if (scrollSmootherInstance) {
      scrollSmootherInstance.kill();
      scrollSmootherInstance = null;
    }
    return null;
  }

  if (scrollSmootherInstance) {
    scrollSmootherInstance.kill();
  }

  scrollSmootherInstance = ScrollSmoother.create({
    wrapper: smoothWrapper,
    content: smoothContent,
    smooth: 1.35,
    smoothTouch: 0.12,
    effects: true,
    normalizeScroll: true
  });

  return scrollSmootherInstance;
}

function initMotionExperience() {
  markReducedMotionState();
  setupScrollSmoother();

  if (prefersReducedMotion()) {
    setupNightModeToggleButton();
    return;
  }

  animateHeroFlames();
  animateEventsHeadingOnScroll();
  animateHeroText();
  animateEventsBodyOnScroll();
  animateVariablesHeadingOnScroll();
  animateVariablesBodyOnScroll();
  animateConditionalsTextOnScroll();
  animateVariablesIconsOrbit();
  setupRitualBlackMatter2Path();
  animateRitualBlackMatter();
  animateRitualBlackMatterFlames();
  animateRitualBlackMatter2Flames();
  animateRitualBlackMatterImage();
  animateRitualEyeTracking();
  animateDarkMatterTurbulence();
  animateDarkMatterParallax();
  animateStorageSectionOnScroll();
  animateToggleSectionOnScroll();
  setupNightModeToggleButton();
  animateLambSectionOnScroll();
}

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

function animateVariablesHeadingOnScroll() {
  const variablesHeading = document.querySelector(".section--variables h2");
  if (!variablesHeading || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(variablesHeading, {
    xPercent: 120,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: variablesHeading,
      start: "top 90%",
      end: "top 45%",
      scrub: 1
    }
  });
}

function animateVariablesBodyOnScroll() {
  const variablesTextElements = document.querySelectorAll(".section--variables p:not(.code), .section--variables ul");
  const variablesCode = document.querySelector(".section--variables .code");
  if ((!variablesTextElements.length && !variablesCode) || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  variablesTextElements.forEach((element) => {
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

  if (variablesCode) {
    gsap.fromTo(
      variablesCode,
      { opacity: 0.25 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: variablesCode,
          start: "top 92%",
          end: "top 65%",
          scrub: 1
        }
      }
    );
  }
}

function animateConditionalsTextOnScroll() {
  const conditionalsStack = document.querySelector(".section--conditionals .conditionals-stack");
  const conditionalText = document.querySelectorAll(".section--conditionals .section__content h2, .section--conditionals .section__content ul, .section--conditionals .section__content p");
  const faithMeter = document.querySelector(".section--conditionals .faith-meter");
  const faithMeterFill = document.querySelector(".section--conditionals .faith-meter-fill");
  const rebellionSvg = document.querySelector(".section--conditionals .rebellion-svg");
  if (!conditionalText.length || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

  function buildConditionalsTimeline(isSmallScreen) {
    const pinDistance = isSmallScreen ? 165 : 220;
    const pinTarget = isSmallScreen ? faithMeter : (conditionalsStack || ".section--conditionals");

    conditionalText.forEach((element) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 92%",
          end: "top 40%",
          scrub: 1.4,
          invalidateOnRefresh: true
        }
      })
        .fromTo(element, { opacity: 0.2, y: 40 }, { opacity: 1, y: 0, ease: "none", duration: 0.4 })
        .to(element, { opacity: 1, y: 0, ease: "none", duration: 0.6 });
    });

    if (faithMeter) {
      gsap.fromTo(
        faithMeter,
        { xPercent: isSmallScreen ? 0 : 40, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".section--conditionals .section__content",
            start: isSmallScreen ? "bottom 82%" : "top 62%",
            end: isSmallScreen ? "bottom 58%" : "top 42%",
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        }
      );
    }

    if (!faithMeterFill) {
      return;
    }

    if (rebellionSvg) {
      gsap.set(rebellionSvg, {
        autoAlpha: 0,
        scale: 1,
        transformOrigin: "50% 50%"
      });
    }

    const conditionalsProgressTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section--conditionals",
        start: isSmallScreen ? "top 8%" : "top top",
        end: `+=${pinDistance}%`,
        scrub: 1.2,
        pin: pinTarget,
        pinSpacing: true,
        invalidateOnRefresh: true
      }
    });

    conditionalsProgressTl.to(
      faithMeterFill,
      {
        attr: { y: 334, height: 0 },
        ease: "none",
        duration: 1
      },
      0
    );

    if (!rebellionSvg) {
      return;
    }

    conditionalsProgressTl.to(
      rebellionSvg,
      {
        autoAlpha: 1,
        ease: "none",
        duration: 0.001
      },
      0.5
    );

    conditionalsProgressTl.to(
      rebellionSvg,
      {
        scale: 4,
        ease: "none",
        duration: 0.001
      },
      1
    );

    conditionalsProgressTl.to(
      rebellionSvg,
      {
        keyframes: [
          { x: -16, y: 10, rotation: -2.8 },
          { x: 18, y: -12, rotation: 3.1 },
          { x: -20, y: 12, rotation: -3.4 },
          { x: 22, y: -14, rotation: 3.6 },
          { x: -24, y: 12, rotation: -3.8 },
          { x: 26, y: -13, rotation: 4 },
          { x: -18, y: 9, rotation: -2.6 },
          { x: 0, y: 0, rotation: 0 }
        ],
        ease: "none",
        duration: 0.22
      },
      1
    );

    conditionalsProgressTl.to(
      rebellionSvg,
      {
        scale: 12,
        autoAlpha: 0,
        ease: "none",
        duration: 0.22
      },
      1
    );
  }

  mm.add("(max-width: 480px)", () => {
    buildConditionalsTimeline(true);
  });

  mm.add("(min-width: 481px)", () => {
    buildConditionalsTimeline(false);
  });
}

function animateVariablesIconsOrbit() {
  const variablesIconsWrap = document.querySelector(".variables-icons");
  const variablesIcons = document.querySelectorAll(".variables-icons .variables-icon");
  if (!variablesIconsWrap || !variablesIcons.length || typeof gsap === "undefined") {
    return;
  }

  gsap.set(variablesIconsWrap, { transformOrigin: "50% 50%" });

  gsap.to(variablesIconsWrap, {
    rotation: 360,
    duration: 12,
    ease: "none",
    repeat: -1
  });

  gsap.to(variablesIcons, {
    rotation: -360,
    duration: 12,
    ease: "none",
    repeat: -1,
    transformOrigin: "50% 50%"
  });

  const orbitDuration = 12;
  const topSpacing = orbitDuration / variablesIcons.length;

  variablesIcons.forEach((icon, index) => {
    gsap.fromTo(
      icon,
      { scale: 1.52 },
      {
        scale: 1,
        duration: orbitDuration / 2,
        yoyo: true,
        repeat: -1,
        delay: index * topSpacing,
        ease: "sine.inOut",
        transformOrigin: "50% 50%"
      }
    );
  });
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

  const maxX = 2.6;
  const maxY = 1.8;
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

  const resetPupilImmediate = () => {
    gsap.killTweensOf(ritualPupil);
    gsap.set(ritualPupil, { x: 0, y: 0 });
  };

  window.addEventListener("pointermove", (event) => {
    if (!ritualIsActive) {
      return;
    }

    const rect = ritualStack.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalizedX = (event.clientX - centerX) / (rect.width / 2);
    const normalizedY = (event.clientY - centerY) / (rect.height / 2);

    const targetX = gsap.utils.clamp(-maxX, maxX, normalizedX * maxX * 1.1);
    const targetY = gsap.utils.clamp(-maxY, maxY, normalizedY * maxY * 1.1);

    xTo(targetX);
    yTo(targetY);
  });

  window.addEventListener("pointerleave", () => {
    resetPupilImmediate();
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
      resetPupilImmediate();
    }
  });
}

function animateDarkMatterTurbulence() {
  const turbulence = document.querySelector("#turbulence");
  if (!turbulence || typeof gsap === "undefined") {
    return;
  }

  gsap.to(turbulence, {
    attr: { baseFrequency: "0.02 0.05" },
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

function animateDarkMatterParallax() {
  const parallaxSection = document.querySelector(".section--dark-matter-parallax");
  const backLayer = document.querySelector(".parallax-layer--back");
  const middleLayer = document.querySelector(".parallax-2");
  const frontLayer = document.querySelector(".parallax-3");

  if (
    !parallaxSection ||
    !backLayer ||
    !middleLayer ||
    !frontLayer ||
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined"
  ) {
    return;
  }

  // Stretch the transition across a taller sticky section so the fall reads clearly.
  const layerSettings = [
    { element: backLayer, startY: 18, endY: -34 },
    { element: middleLayer, startY: 28, endY: -52 },
    { element: frontLayer, startY: 40, endY: -78 }
  ];

  layerSettings.forEach(({ element, startY, endY }) => {
    gsap.fromTo(
      element,
      { yPercent: startY },
      {
        yPercent: endY,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxSection,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.4
        }
      }
    );
  });
}

function animateStorageSectionOnScroll() {
  const storageSection = document.querySelector(".section--storage");
  const storageTextElements = document.querySelectorAll(".section--storage h2, .section--storage ul, .section--storage .code, .section--storage p:not(.code)");
  const saveIcon = document.querySelector(".section--storage .save-icon");
  const saveIconPath = document.querySelector(".section--storage .save-icon path");

  if (
    !storageSection ||
    !storageTextElements.length ||
    !saveIcon ||
    !saveIconPath ||
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined"
  ) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(storageTextElements, {
    autoAlpha: 0,
    y: 44
  });

  const saveIconLength = saveIconPath.getTotalLength();

  gsap.set(saveIcon, {
    autoAlpha: 0.18,
    y: 40
  });

  gsap.set(saveIconPath, {
    strokeDasharray: saveIconLength,
    strokeDashoffset: saveIconLength
  });

  const storageTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: storageSection,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.4
    }
  });

  storageTimeline
    .to(storageTextElements, {
      autoAlpha: 1,
      y: 0,
      ease: "none",
      stagger: 0.22,
      duration: 0.9
    })
    .to(saveIcon, {
      autoAlpha: 1,
      y: 0,
      ease: "none",
      duration: 0.45
    }, ">-0.15")
    .to(saveIconPath, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 1.2
    }, "<")
    .to({}, {
      duration: 0.35
    });
}

function animateToggleSectionOnScroll() {
  const toggleSection = document.querySelector(".section--toggle");
  const toggleTextElements = document.querySelectorAll(".section--toggle h2, .section--toggle ul, .section--toggle .chapter-highlight");
  const toggleCode = document.querySelector(".section--toggle .code");
  const crownWrap = document.querySelector(".section--toggle .cult-crown-wrap");
  const crown = document.querySelector(".section--toggle .cult-crown");

  if (
    !toggleSection ||
    !toggleTextElements.length ||
    !crownWrap ||
    !crown ||
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined"
  ) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const toggleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: toggleSection,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        if (self.progress > 0.62) {
          crownFloatTween.play();
        } else {
          crownFloatTween.pause(0);
          gsap.set(crown, { yPercent: 0 });
        }
      }
    }
  });

  const textCuePoints = [0.04, 0.2, 0.76];

  toggleTextElements.forEach((element, index) => {
    const cuePoint = textCuePoints[index] ?? 0.2 + index * 0.18;
    toggleTimeline
      .fromTo(element, { opacity: 0.22 }, { opacity: 1, ease: "none", duration: 0.15 }, cuePoint)
      .to(element, { opacity: 1, ease: "none", duration: 0.18 }, cuePoint + 0.15)
      .to(element, { opacity: 0.32, ease: "none", duration: 0.14 }, cuePoint + 0.33);
  });

  if (toggleCode) {
    toggleTimeline
      .fromTo(toggleCode, { opacity: 0.22 }, { opacity: 1, ease: "none", duration: 0.18 }, 0.36)
      .to(toggleCode, { opacity: 1, ease: "none", duration: 0.24 }, 0.54);
  }

  gsap.set(crownWrap, {
    autoAlpha: 0,
    yPercent: 8,
    scale: 0.72,
    transformOrigin: "50% 50%"
  });

  const crownFloatTween = gsap.to(crown, {
    yPercent: -9,
    duration: 2.45,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    paused: true
  });

  toggleTimeline
    .to(crownWrap, {
      autoAlpha: 1,
      yPercent: 0,
      scale: 1,
      ease: "none",
      duration: 0.24
    }, 0.46)
    .to(crownWrap, {
      autoAlpha: 1,
      yPercent: 0,
      scale: 1,
      ease: "none",
      duration: 0.24
    }, 0.7);
}

function setupNightModeToggleButton() {
  const toggleSection = document.querySelector(".section--toggle");
  const toggleButton = document.querySelector(".night-mode-toggle-button");
  const toggleKnob = document.querySelector(".night-mode-toggle__knob");
  const toggleHighlightText = document.querySelector(".section--toggle .chapter-highlight");
  const rootElement = document.documentElement;

  if (
    !toggleSection ||
    !toggleButton ||
    !toggleKnob ||
    typeof gsap === "undefined"
  ) {
    return;
  }

  let lightsOff = rootElement.dataset.theme === "dark";

  function setNightModeState(nextLightsOff, options = {}) {
    const { animate = true } = options;
    lightsOff = nextLightsOff;
    toggleSection.classList.toggle("is-lights-off", lightsOff);
    rootElement.dataset.theme = lightsOff ? "dark" : "light";
    toggleButton.setAttribute("aria-pressed", String(lightsOff));

    gsap.to(toggleKnob, {
      x: lightsOff ? 40 : 0,
      duration: animate && !prefersReducedMotion() ? 0.6 : 0,
      ease: "power2.inOut",
      overwrite: true
    });

    if (toggleHighlightText) {
      gsap.to(toggleHighlightText, {
        color: lightsOff ? "var(--neutral-0)" : "var(--neutral-100)",
        duration: animate && !prefersReducedMotion() ? 0.75 : 0,
        ease: "power1.out",
        overwrite: true
      });
    }
  }

  gsap.set(toggleKnob, {
    transformOrigin: "50% 50%",
    x: lightsOff ? 40 : 0
  });

  setNightModeState(lightsOff, { animate: false });

  toggleButton.addEventListener("click", () => {
    setNightModeState(!lightsOff);

    gsap.to(toggleButton, {
      scale: lightsOff ? 0.98 : 1,
      duration: prefersReducedMotion() ? 0 : 0.32,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });
  });

  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      trigger: toggleSection,
      start: "top bottom",
      end: "bottom top",
      onLeaveBack: () => {
        setNightModeState(false, { animate: true });
      }
    });
  }
}

function animateLambSectionOnScroll() {
  const lambSection = document.querySelector(".lamb-appears");
  const lambContent = document.querySelector(".lamb-appears .section__content");
  const lamb = document.querySelector(".lamb-appears .lamb-outline-svg");
  const lambHeading = document.querySelector(".lamb-appears h2");
  const lambText = document.querySelectorAll(".lamb-appears p");
  const memoryWord = document.querySelector(".lamb-appears .memory-word");
  const rootElement = document.documentElement;
  const bodyElement = document.body;

  if (
    !lambSection ||
    !lambContent ||
    !lamb ||
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined"
  ) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(lamb, {
    autoAlpha: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotation: 0,
    transformOrigin: "50% 50%"
  });

  gsap.set(lambSection, {
    backgroundColor: "var(--red-300)"
  });

  gsap.set(lambContent, {
    yPercent: 0
  });

  if (memoryWord) {
    gsap.set(memoryWord, {
      color: "inherit",
      x: 0,
      y: 0,
      rotation: 0,
      transformOrigin: "50% 50%"
    });
  }

  const lambTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: lambSection,
      start: "top top",
      end: "+=132%",
      scrub: 1.2,
      pin: lambContent,
      pinSpacing: false,
      onUpdate: (self) => {
        const shouldBlackout = self.progress >= 0.74;
        rootElement.classList.toggle("is-end-blackout", shouldBlackout);
        bodyElement.classList.toggle("is-end-blackout", shouldBlackout);
      },
      onLeave: () => {
        rootElement.classList.add("is-end-blackout");
        bodyElement.classList.add("is-end-blackout");
      },
      onEnterBack: () => {
        rootElement.classList.remove("is-end-blackout");
        bodyElement.classList.remove("is-end-blackout");
      },
      onLeaveBack: () => {
        rootElement.classList.remove("is-end-blackout");
        bodyElement.classList.remove("is-end-blackout");
      }
    }
  });

  lambTimeline.to(
    lamb,
    {
      autoAlpha: 1,
      ease: "none",
      duration: 0.001
    },
    0.18
  );

  lambTimeline.fromTo(
    lamb,
    {
      scale: 1,
    },
    {
      scale: 14,
      ease: "none",
      duration: 0.52
    },
    0.18
  );

  lambTimeline.to(
    lamb,
    {
      autoAlpha: 0,
      ease: "none",
      duration: 0.18
    },
    0.8
  );

  lambTimeline.to(
    lambContent,
    {
      yPercent: 26,
      ease: "none",
      duration: 0.26
    },
    0.72
  );

  lambTimeline.to(
    lambSection,
    {
      backgroundColor: "var(--neutral-700)",
      ease: "none",
      duration: 0.26
    },
    0.72
  );

  if (lambHeading) {
    lambTimeline.to(
      lambHeading,
      {
        color: "var(--neutral-100)",
        ease: "none",
        duration: 0.18
      },
      0.72
    );
  }

  if (memoryWord) {
    lambTimeline.to(
      memoryWord,
      {
        color: "var(--color-accent-primary)",
        ease: "none",
        duration: 0.08
      },
      0.84
    );

    lambTimeline.to(
      memoryWord,
      {
        keyframes: [
          { x: -2, y: 1, rotation: -1.2 },
          { x: 2, y: -1, rotation: 1.1 },
          { x: -2.5, y: 1.4, rotation: -1.5 },
          { x: 2.5, y: -1.4, rotation: 1.5 },
          { x: -1.8, y: 1, rotation: -0.9 },
          { x: 0, y: 0, rotation: 0 }
        ],
        ease: "none",
        duration: 0.12
      },
      0.88
    );
  }

  if (lambText.length) {
    lambTimeline.to(
      lambText,
      {
        color: "var(--neutral-200)",
        opacity: 1,
        ease: "none",
        duration: 0.18
      },
      0.72
    );
  }
}

initMotionExperience();

reducedMotionQuery.addEventListener("change", () => {
  window.location.reload();
});
