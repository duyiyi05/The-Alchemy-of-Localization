const ARCANA = [
  {
    title: "I — The Summons",
    prophecy: "Every journey begins the moment someone dares to ask the right question.",
    meaning: "This card represents project intake and kickoff: understanding purpose, stakeholders, markets, and success before execution begins.",
    realExample: "A product team requests 8 new locales in one release. The Localization PM runs kickoff questions to clarify owner, launch goals, and acceptance criteria before scope is locked.",
    reveals: "Project intent, stakeholders, markets, deliverables, and first constraints.",
    matters: "Without a shared beginning, teams execute tasks but miss the mission.",
    acts: "Frames kickoff, confirms scope boundaries, aligns decision-makers, and establishes accountability."
  },
  {
    title: "II — The Compass",
    prophecy: "Direction is the difference between movement and progress.",
    meaning: "This card represents scope-setting and strategic planning across languages, timelines, quality targets, and dependencies.",
    realExample: "For a multilingual release, the PM maps language tiers, delivery milestones, review windows, and fallback plans so engineering and linguistic teams move in sync.",
    reveals: "Target locales, deadlines, content volume, requirements, and latent risk.",
    matters: "Direction prevents expensive rework and protects quality under pressure.",
    acts: "Transforms ambiguity into a plan: milestones, ownership, assumptions, and communication rhythm."
  },
  {
    title: "III — The Tower of Babel",
    prophecy: "Languages do not merely translate words — they reshape meaning.",
    meaning: "This card captures source readiness, linguistic risk, cultural fit, terminology coherence, and structural scalability.",
    realExample: "Before translation, the PM flags product strings with ambiguous gendered language and requests source rewrites to avoid inconsistent meanings across locales.",
    reveals: "Ambiguity, cultural pitfalls, formatting fragility, and terminology gaps.",
    matters: "Unprepared content multiplies delays downstream across every locale.",
    acts: "Runs readiness checks, resolves terminology, and collaborates early with content and engineering."
  },
  {
    title: "IV — The Chain of Hands",
    prophecy: "No global project moves forward by one pair of hands alone.",
    meaning: "This card represents coordination across linguists, reviewers, vendors, engineers, and internal stakeholders.",
    realExample: "A PM coordinates vendor linguists, in-country reviewers, and product designers over three time zones with a shared tracker and escalation rhythm.",
    reveals: "Role clarity, handoff quality, communication paths, and approval dependencies.",
    matters: "Localization succeeds when collaboration is designed, not improvised.",
    acts: "Builds feedback loops, aligns timelines, and creates reliable multi-team coordination."
  },
  {
    title: "V — The Clockwork Wheel",
    prophecy: "Time is the silent force guiding every project toward its fate.",
    meaning: "This card governs orchestration: sequencing work, managing handoffs, and holding delivery rhythm.",
    realExample: "When copy updates arrive late, the PM reorders tasks, protects high-impact locales first, and preserves final QA dates through controlled replanning.",
    reveals: "Critical path, bottlenecks, review windows, and turnaround pressures.",
    matters: "Timing decisions determine whether quality survives the deadline.",
    acts: "Maps dependencies, monitors velocity, and adjusts workflow before slippage compounds."
  },
  {
    title: "VI — The Mirror of Meaning",
    prophecy: "A translation is true only when meaning survives the journey.",
    meaning: "This card reflects linguistic QA, review cycles, tone fidelity, and consistency across markets.",
    realExample: "In a 12-language launch, reviewers report inconsistent onboarding tone; the PM coordinates priority fixes and termbase updates without missing the release window.",
    reveals: "Meaning drift, style mismatch, terminology inconsistency, and UX text friction.",
    matters: "Global trust depends on nuance, not just literal correctness.",
    acts: "Runs structured QA, routes feedback, and protects brand voice across locales."
  },
  {
    title: "VII — The Hidden Thread",
    prophecy: "Invisible systems hold the entire world of localization together.",
    meaning: "This card represents tooling and infrastructure: TMS logic, CAT workflows, file handling, and automation.",
    realExample: "The PM introduces automated file validation and glossary sync in the TMS, reducing manual errors and improving turnaround consistency.",
    reveals: "Workflow fragility, handoff friction, and opportunities for operational leverage.",
    matters: "Strong systems reduce risk, preserve context, and scale delivery.",
    acts: "Designs process architecture, validates file pipelines, and improves repeatability through automation."
  },
  {
    title: "VIII — The Balancing Scales",
    prophecy: "Every project demands a choice between speed, cost, and perfection.",
    meaning: "This card is PM decision-making in motion: quality, cost, speed, and risk in real-time trade-offs.",
    realExample: "A surprise legal update compresses schedule; the PM protects compliance-critical content first and negotiates phased delivery for lower-risk pages.",
    reveals: "Escalations, budget tension, timeline compression, and unresolved dependencies.",
    matters: "How trade-offs are handled determines long-term trust and delivery integrity.",
    acts: "Prioritizes impact, escalates clearly, documents decisions, and protects essential quality."
  },
  {
    title: "IX — The World Unveiled",
    prophecy: "When languages align, a message finally belongs everywhere.",
    meaning: "This card represents launch, stakeholder handoff, outcomes, and retrospective learning.",
    realExample: "After launch, the PM gathers locale feedback, defect trends, and cycle-time metrics to strengthen the next global release.",
    reveals: "Readiness signals, market response, completion quality, and process insight.",
    matters: "A release is not only an endpoint — it is operational knowledge for the next cycle.",
    acts: "Closes the loop with postmortems, metrics, and improvements that strengthen future launches."
  }
];

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

function seedDust(container, count = 34) {
  if (!container || container.dataset.seeded === "true") return;
  container.dataset.seeded = "true";
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `${-5 + Math.random() * 30}%`;
    particle.style.animationDuration = `${10 + Math.random() * 16}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.opacity = String(0.22 + Math.random() * 0.3);
    container.appendChild(particle);
  }
}

(function petals() {
  const layer = document.getElementById("petalLayer");
  if (!layer) return;

  let gate = 0;
  window.addEventListener("pointermove", (event) => {
    const now = Date.now();
    if (now - gate < 55) return;
    gate = now;

    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${event.clientX}px`;
    petal.style.top = `${event.clientY}px`;
    petal.style.setProperty("--dx", `${(Math.random() - 0.5) * 70}px`);
    petal.style.setProperty("--dy", `${50 + Math.random() * 70}px`);
    layer.appendChild(petal);
    setTimeout(() => petal.remove(), 1500);
  });
})();

(function coverPage() {
  const btn = document.getElementById("beginReading");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.transition = "opacity 300ms ease";
    document.body.style.opacity = "0.2";
    setTimeout(() => {
      window.location.href = btn.getAttribute("href") || "spread.html";
    }, 280);
  }, { capture: true });
})();

(function spreadPage() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  const ritual = document.getElementById("spreadRitualText");
  const whisper = document.getElementById("spreadWhisper");
  const startBtn = document.getElementById("startReading");
  const tarotButtons = Array.from(grid.querySelectorAll(".tarot"));

  tarotButtons.forEach(async (btn, index) => {
    btn.style.setProperty("--i", String(index));
    const n = String(btn.dataset.card).padStart(2, "0");
    const src = `assets/tarot-${n}.jpg`;
    if (await preloadImage(src)) {
      btn.classList.add("has-img");
      btn.style.backgroundImage = `url("${src}")`;
    }
  });

  setTimeout(() => {
    grid.dataset.state = "spread";
    if (ritual) ritual.textContent = "The reading is ready.";
  }, 1200);

  startBtn?.addEventListener("click", () => {
    sessionStorage.setItem("readingStarted", "1");
  });

  let idleTimer = setTimeout(() => {
    const chosen = tarotButtons[Math.floor(Math.random() * tarotButtons.length)];
    chosen?.classList.add("tarot--chosen");
    if (whisper) whisper.textContent = "Sometimes the cards choose the reader.";
  }, 10000);

  const resetIdle = () => {
    clearTimeout(idleTimer);
    tarotButtons.forEach((card) => card.classList.remove("tarot--chosen"));
    idleTimer = setTimeout(() => {
      const chosen = tarotButtons[Math.floor(Math.random() * tarotButtons.length)];
      chosen?.classList.add("tarot--chosen");
      if (whisper) whisper.textContent = "Sometimes the cards choose the reader.";
    }, 10000);
  };

  let lastPoint = null;
  let slowMoves = 0;
  grid.addEventListener("pointermove", (event) => {
    resetIdle();
    const now = performance.now();
    if (!lastPoint) {
      lastPoint = { x: event.clientX, y: event.clientY, t: now };
      return;
    }
    const dt = now - lastPoint.t;
    const dx = event.clientX - lastPoint.x;
    const dy = event.clientY - lastPoint.y;
    const speed = Math.hypot(dx, dy) / Math.max(dt, 1);
    if (speed < 0.18) slowMoves += 1;
    else slowMoves = Math.max(0, slowMoves - 1);

    if (slowMoves > 8 && whisper) {
      whisper.textContent = "The cards reveal their secrets only to those who move with patience.";
      grid.classList.add("cardsGrid--petal-circle");
      setTimeout(() => grid.classList.remove("cardsGrid--petal-circle"), 1100);
      slowMoves = 0;
    }
    lastPoint = { x: event.clientX, y: event.clientY, t: now };
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".tarot");
    if (!card) return;

    const cardNumber = Number(card.dataset.card);
    if (cardNumber === 9 && sessionStorage.getItem("readingStarted") !== "1") {
      if (whisper) whisper.textContent = "The future cannot be revealed before the past is understood.";
      return;
    }

    sessionStorage.setItem("readingStarted", "1");
    if (whisper) whisper.textContent = "The card turns…";
    card.classList.add("tarot--flipping");
    setTimeout(() => {
      window.location.href = `reading.html?card=${card.dataset.card}`;
    }, 430);
  });
})();

(function readingPage() {
  const title = document.getElementById("arcanaTitle");
  if (!title) return;

  const prophecy = document.getElementById("arcanaProphecy");
  const meaning = document.getElementById("arcanaMeaning");
  const reveals = document.getElementById("arcanaReveals");
  const matters = document.getElementById("arcanaMatters");
  const acts = document.getElementById("arcanaActs");
  const progress = document.getElementById("progress");
  const progressDots = document.getElementById("progressDots");
  const lensHeading = document.getElementById("lensHeading");
  const lensButtons = Array.from(document.querySelectorAll(".lensToggle [data-lens]"));
  const prevBtn = document.getElementById("prevArcana");
  const nextBtn = document.getElementById("nextArcana");
  const rail = document.getElementById("arcanaRail");
  const closing = document.getElementById("closingScene");
  const closingDust = closing?.querySelector(".magic-dust");
  const oracleCard = document.getElementById("oracleCard");

  let lens = "tarot";
  let index = Math.max(0, Math.min(8, Number(new URLSearchParams(window.location.search).get("card") || 1) - 1));

  ARCANA.forEach((_, i) => {
    const a = document.createElement("a");
    a.href = `reading.html?card=${i + 1}`;
    a.textContent = `Arcana ${i + 1}`;
    if (i === index) a.classList.add("is-active");
    rail.appendChild(a);

    const dot = document.createElement("span");
    progressDots?.appendChild(dot);
  });

  lensButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      lens = btn.dataset.lens || "tarot";
      lensButtons.forEach((other) => other.classList.toggle("is-active", other === btn));
      paint();
    });
  });

  function paint() {
    const card = ARCANA[index];
    title.textContent = card.title;
    prophecy.textContent = card.prophecy;
    meaning.textContent = lens === "real" ? card.realExample : card.meaning;
    lensHeading.textContent = lens === "real" ? "Real Localization Example" : "Meaning in Localization Project Management";
    reveals.textContent = card.reveals;
    matters.textContent = card.matters;
    acts.textContent = card.acts;
    progress.textContent = `Revelation ${index + 1} of 9`;

    rail.querySelectorAll("a").forEach((el, i) => el.classList.toggle("is-active", i === index));
    progressDots?.querySelectorAll("span").forEach((el, i) => el.classList.toggle("is-active", i <= index));
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === 8 ? "Complete the Reading" : "Reveal the Next Arcana";
  }

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index -= 1;
      history.replaceState(null, "", `reading.html?card=${index + 1}`);
      paint();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (index < 8) {
      index += 1;
      history.replaceState(null, "", `reading.html?card=${index + 1}`);
      paint();
      return;
    }

    closing.hidden = false;
    seedDust(closingDust);
    requestAnimationFrame(() => closing.classList.add("is-revealed"));
    setTimeout(() => closing.classList.add("is-text-visible"), 520);
    setTimeout(() => {
      if (oracleCard) {
        oracleCard.hidden = false;
        closing.classList.add("is-oracle-visible");
      }
    }, 1300);
    closing.scrollIntoView({ behavior: "smooth", block: "start" });
    sessionStorage.setItem("readingCompleted", "1");
  });

  paint();
})();
