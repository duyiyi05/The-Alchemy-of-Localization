const ARCANA = [
  {
    title: "I — The Summons",
    prophecy: "Every project begins with a question: what must travel, and why now?",
    meaning: "This card represents intake and kickoff. The localization PM clarifies purpose, audiences, owners, and success outcomes before any file moves.",
    reveals: "Project intent, stakeholders, markets, deliverables, and first constraints.",
    matters: "Without a shared beginning, teams execute tasks but miss the mission.",
    acts: "Frames kickoff, confirms scope boundaries, aligns decision-makers, and establishes accountability."
  },
  {
    title: "II — The Compass",
    prophecy: "Where intention is named, journeys become possible.",
    meaning: "This card represents scope-setting and strategic planning across languages, timelines, quality targets, and dependencies.",
    reveals: "Target locales, deadlines, content volume, requirements, and latent risk.",
    matters: "Direction prevents expensive rework and protects quality under pressure.",
    acts: "Transforms ambiguity into a plan: milestones, ownership, assumptions, and communication rhythm."
  },
  {
    title: "III — The Tower of Babel",
    prophecy: "Complexity speaks in many tongues before it speaks in one voice.",
    meaning: "This card captures source readiness, linguistic risk, cultural fit, terminology coherence, and structural scalability.",
    reveals: "Ambiguity, cultural pitfalls, formatting fragility, and terminology gaps.",
    matters: "Unprepared content multiplies delays downstream across every locale.",
    acts: "Runs readiness checks, resolves terminology, and collaborates early with content and engineering."
  },
  {
    title: "IV — The Chain of Hands",
    prophecy: "No launch reaches the world through one pair of hands.",
    meaning: "This card represents coordination across linguists, reviewers, vendors, engineers, and internal stakeholders.",
    reveals: "Role clarity, handoff quality, communication paths, and approval dependencies.",
    matters: "Localization succeeds when collaboration is designed, not improvised.",
    acts: "Builds feedback loops, aligns timelines, and creates reliable multi-team coordination."
  },
  {
    title: "V — The Clockwork Wheel",
    prophecy: "Rhythm is strategy wearing a clock.",
    meaning: "This card governs orchestration: sequencing work, managing handoffs, and holding delivery rhythm.",
    reveals: "Critical path, bottlenecks, review windows, and turnaround pressures.",
    matters: "Timing decisions determine whether quality survives the deadline.",
    acts: "Maps dependencies, monitors velocity, and adjusts workflow before slippage compounds."
  },
  {
    title: "VI — The Mirror of Meaning",
    prophecy: "Not all accuracy feels true.",
    meaning: "This card reflects linguistic QA, review cycles, tone fidelity, and consistency across markets.",
    reveals: "Meaning drift, style mismatch, terminology inconsistency, and UX text friction.",
    matters: "Global trust depends on nuance, not just literal correctness.",
    acts: "Runs structured QA, routes feedback, and protects brand voice across locales."
  },
  {
    title: "VII — The Hidden Thread",
    prophecy: "Invisible systems decide visible outcomes.",
    meaning: "This card represents tooling and infrastructure: TMS logic, CAT workflows, file handling, and automation.",
    reveals: "Workflow fragility, handoff friction, and opportunities for operational leverage.",
    matters: "Strong systems reduce risk, preserve context, and scale delivery.",
    acts: "Designs process architecture, validates file pipelines, and improves repeatability through automation."
  },
  {
    title: "VIII — The Balancing Scales",
    prophecy: "Judgment is balance under pressure.",
    meaning: "This card is PM decision-making in motion: quality, cost, speed, and risk in real-time trade-offs.",
    reveals: "Escalations, budget tension, timeline compression, and unresolved dependencies.",
    matters: "How trade-offs are handled determines long-term trust and delivery integrity.",
    acts: "Prioritizes impact, escalates clearly, documents decisions, and protects essential quality."
  },
  {
    title: "IX — The World Unveiled",
    prophecy: "Delivery is where intention meets the world.",
    meaning: "This card represents launch, stakeholder handoff, outcomes, and retrospective learning.",
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
    setTimeout(() => { window.location.href = btn.getAttribute("href") || "spread.html"; }, 280);
  }, { capture: true });
})();

(function spreadPage() {
  const spreadBtn = document.getElementById("spreadBtn");
  const grid = document.getElementById("cardsGrid");
  const hint = document.getElementById("hint");
  if (!spreadBtn || !grid) return;

  const tarotButtons = Array.from(grid.querySelectorAll(".tarot"));
  tarotButtons.forEach(async (btn) => {
    const n = String(btn.dataset.card).padStart(2, "0");
    const src = `assets/tarot-${n}.jpg`;
    if (await preloadImage(src)) {
      btn.classList.add("has-img");
      btn.style.backgroundImage = `url("${src}")`;
    }
    btn.title = btn.dataset.whisper || "";
  });

  spreadBtn.addEventListener("click", () => {
    grid.dataset.state = "shown";
    spreadBtn.disabled = true;
    spreadBtn.textContent = "Cards Revealed";
    if (hint) hint.innerHTML = "Touch a card to unveil it, or choose <strong>Start Reading</strong>.";
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".tarot");
    if (!card) return;
    window.location.href = `reading.html?card=${card.dataset.card}`;
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
  const prevBtn = document.getElementById("prevArcana");
  const nextBtn = document.getElementById("nextArcana");
  const rail = document.getElementById("arcanaRail");
  const closing = document.getElementById("closingScene");

  let index = Math.max(0, Math.min(8, Number(new URLSearchParams(window.location.search).get("card") || 1) - 1));

  ARCANA.forEach((card, i) => {
    const a = document.createElement("a");
    a.href = `reading.html?card=${i + 1}`;
    a.textContent = `Arcana ${i + 1}`;
    if (i === index) a.classList.add("is-active");
    rail.appendChild(a);
  });

  function paint() {
    const card = ARCANA[index];
    title.textContent = card.title;
    prophecy.textContent = card.prophecy;
    meaning.textContent = card.meaning;
    reveals.textContent = card.reveals;
    matters.textContent = card.matters;
    acts.textContent = card.acts;
    progress.textContent = `Arcana ${index + 1} of 9`;

    rail.querySelectorAll("a").forEach((el, i) => el.classList.toggle("is-active", i === index));
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === 8 ? "Complete the Reading" : "Turn the Next Arcana";
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
    closing.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  paint();
})();
