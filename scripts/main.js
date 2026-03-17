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
  const conditionalsSection = document.querySelector(".section--conditionals");
  const conditionalsStack = document.querySelector(".section--conditionals .conditionals-stack");
  const conditionalText = document.querySelectorAll(".section--conditionals .section__content h2, .section--conditionals .section__content ul, .section--conditionals .section__content p");
  const faithMeter = document.querySelector(".section--conditionals .faith-meter");
  const faithMeterFill = document.querySelector(".section--conditionals .faith-meter-fill");
  const rebellionSvg = document.querySelector(".section--conditionals .rebellion-svg");
  if (!conditionalText.length || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const pinDistance = 180;

  if (conditionalsSection && conditionalsStack) {
    ScrollTrigger.create({
      trigger: conditionalsSection,
      start: "top top",
      end: `+=${pinDistance}%`,
      pin: conditionalsStack,
      pinSpacing: true
    });
  }

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
        scrub: 1.2
      }
    });

    conditionalsProgressTl.to(
      faithMeterFill,
      {
        attr: { y: 2, height: 332 },
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
          duration: 0.2
        },
        0.8
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
