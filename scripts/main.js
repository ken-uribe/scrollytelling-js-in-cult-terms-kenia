console.log("Scrollytelling site loaded");

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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
  const pinDistance = 220;

  conditionalText.forEach((element) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 92%",
        end: "top 40%",
        scrub: 1.4
      }
    })
      .fromTo(element, { opacity: 0.2, y: 40 }, { opacity: 1, y: 0, ease: "none", duration: 0.4 })
      .to(element, { opacity: 1, y: 0, ease: "none", duration: 0.6 });
  });

  if (faithMeter) {
    gsap.fromTo(
      faithMeter,
      { xPercent: 40, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".section--conditionals .section__content",
          start: "top 62%",
          end: "top 42%",
          scrub: 1.2
        }
      }
    );
  }

  if (faithMeterFill) {
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
        start: "top top",
        end: `+=${pinDistance}%`,
        scrub: 1.2,
        pin: conditionalsStack || ".section--conditionals",
        pinSpacing: true
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

    if (rebellionSvg) {
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
  }
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
