GitHub Pages: https://ken-uribe.github.io/scrollytelling-js-in-cult-terms-kenia/

(I used AI to make it sound better because when I first tried to type this it didn't make sense.)

# Srollytelling: JS Concepts Explained in Cult of the Lamb Terms
# Description

This project is a scrollytelling website that explains beginner JavaScript concepts using the world and logic of Cult of the Lamb. The goal is to help new coders better understand abstract programming ideas by connecting them to something more visual, narrative-driven, and familiar. The tone of the project balances the darker, cult-inspired aesthetic of the game with a more friendly and approachable experience so that it still feels welcoming to first-time learners.

Users interact with the site by scrolling, clicking, and triggering animations that visually demonstrate how different JavaScript concepts work. Instead of only reading definitions, users can see how things like events, conditionals, and variables behave through motion and interaction. These animations are powered by GSAP and ScrollTrigger, allowing each section to activate as the user moves through the page.

The site is structured into multiple sections, each focusing on a different JavaScript concept. These include events, variables, conditionals, local storage, and toggles. Each section attempts to translate a coding concept into a metaphor inspired by Cult of the Lamb. While some sections, like conditionals, closely match the intended interaction design, others (such as toggle and the parallax section) were more experimental and did not fully achieve the original vision. To adapt, I focused on strengthening depth and layering effects, especially in the hero section, to still create a sense of immersion.

The project is built using several core files. The index.html file provides the structure and layout of the site. There are three CSS files: a reset stylesheet to normalize browser styles, a variables file to manage design tokens and make theme changes easier, and a main stylesheet to handle layout, color, and visual styling. The main.js file controls animations and interactivity using GSAP. The project also includes multiple asset folders (SVGs, images, and icons) that are used throughout the experience to build the visual theme.

Design-wise, I chose a color palette inspired by the game while keeping it simple enough to remain flexible and easy to adjust in the future. The motion style is generally smooth with some playful elements to reflect the tone of Cult of the Lamb. Typography was chosen to balance theme and readability—headings lean more stylized and expressive, while body text stays clear and accessible for learning purposes.

# Links

Live Site: (https://ken-uribe.github.io/scrollytelling-js-in-cult-terms-kenia/)

GitHub Repo: (https://github.com/ken-uribe/scrollytelling-js-in-cult-terms-kenia?tab=readme-ov-file)

Portfolio (optional): (not at this moment)

Tech Stack

HTML

CSS

JavaScript

GSAP

ScrollTrigger

ScrollSmoother (or equivalent techniques)

# Reflection
# Metaphor Summary

This project uses Cult of the Lamb as a metaphor for understanding JavaScript concepts. The systems, rules, and interactions within the game helped me map ideas like conditionals, events, and variables into something more visual and narrative-driven. For example, the idea of rules and outcomes in the game directly relates to how JavaScript logic works, making it easier to understand how code behaves through cause and effect.

# Section I’m Most Proud Of

The section I am most proud of is the conditionals section. The animation in this part came very close to what I originally envisioned. It clearly demonstrates how different outcomes can happen based on certain conditions, while also being playful and engaging. It’s a section that invites repeated interaction, which reinforces the concept in a more memorable way.

# Technical Bug I Solved

One of the main challenges I faced was working with SVGs that had multiple parts I wanted to animate. I also ran into issues with inconsistent or unclear naming, especially when importing assets or working quickly. This caused animations to break or not target the correct elements. To fix this, I went back and cleaned up my naming conventions, made sure classes and IDs were consistent, and double-checked how elements were being referenced in my code. I also used debugging and external tools to help identify where things were not connecting properly. There were also moments where files did not save correctly or sections disappeared, which required me to retrace my steps and rebuild parts of the project.

# Accessibility Decision

I made an effort to include accessibility considerations by adding alt text to SVGs where possible and adjusting animation speeds to reduce motion intensity. Some animations were originally too fast and could potentially cause discomfort, so I refined them to feel smoother and less overwhelming. I also kept readability in mind when choosing typography and contrast.

# What I Would Improve With More Time

With more time, I would focus on refining the execution of some sections so they more closely match my original ideas, especially the toggle and parallax sections. I would also improve the overall visual polish by adding more detailed styling and enhancing the depth of the experience. Additionally, I would troubleshoot and fix the current live site error so the project can be fully accessible online.

# Project 2 Student Hub: Lost in the Scroll

Student-facing repo for final project execution and turn-in.

## Why This Repo Uses Issues

Issues are required because they mirror real development workflow.

You will use them to:

- plan and sequence work
- track progress publicly
- report blockers with evidence
- verify final completion


## Start Here

1. Read [Start Here](docs/01-start-here.md) and follow the step-by-step issue setup
2. Open [GSAP Scroll](https://gsap.com/scroll/) and study examples
3. Track progress using [Progress Tracking Options](docs/08-progress-tracking-options.md)
4. Build, test, and check items off as you complete them
5. Submit using [Final Turn-In Spec](docs/03-final-turn-in-spec.md)

## What Is In This Repo

- [Project Completion Checklist (Reference)](docs/02-project-completion-checklist.md)
- [Final Turn-In Spec](docs/03-final-turn-in-spec.md)
- [Project Structure Suggestion](docs/04-project-structure-suggestion.md)
- [Resources](docs/05-resources.md)
- [Copy This Template](docs/06-copy-this-template.md)
- [Kickoff Assignment](docs/07-assignment-kickoff-template-and-tracking.md)
- [Progress Tracking Options](docs/08-progress-tracking-options.md)
- GitHub issue templates for progress tracking and blocker reporting

## How To Use Issues

1. Create `Project 2 Master Checklist` issue first.
2. Create all required sub-issues from templates.
3. Link sub-issues back into the master issue.
4. Use `Blocker Report` if stuck for more than 20 minutes.


