/*! Aldermoor Advisory — demonstration website by Virellion Apex (https://virellionapex.com)
 *  The firm, people, testimonials and business details are fictional.
 *  No API keys or credentials are used or required. Forms run in demonstration mode.
 */
/* ---- Content data (edit here to change services, team, articles, appointment types) ---- */
var SERVICES = [{"slug": "business-consulting", "name": "Business Consulting", "img": "photo-1517245386807-bb43f82c33c4", "alt": "Advisor gesturing across a meeting table while colleagues listen", "short": "An outside view of the whole business, and a short list of what to fix first.", "summary": "A senior, independent review of how your business really runs, ending in a prioritised plan your leadership team agrees to own.", "duration": "6–8 weeks", "idealFor": "Owner-led firms at a turning point", "overview": ["Most leadership teams know something is off: margins are thinning, decisions take too long, or growth has stalled. What they lack is the time and distance to see which problem is the cause and which are symptoms.", "We interview your leadership and front-line staff, read the numbers, and walk the operation. Within six to eight weeks you receive a plain-language diagnosis and a ranked list of interventions, each with an owner, a cost and an expected effect."], "benefits": [["A shared diagnosis", "Your leadership team stops debating symptoms and agrees on the two or three issues that matter most."], ["Ranked priorities", "Every recommendation carries an estimated impact and effort, so you can sequence work without guesswork."], ["Clear ownership", "Each action has a named owner and a 90-day milestone, which keeps momentum after we leave."], ["Board-ready narrative", "A concise written account you can share with investors, lenders or a board."]], "process": [["Listen", "Confidential interviews with leaders, staff and, where useful, two or three customers.", "Weeks 1–2"], ["Measure", "A review of financials, KPIs and workflows to test what we heard against the data.", "Weeks 2–4"], ["Diagnose", "A working session where we present findings and pressure-test them with your team.", "Week 5"], ["Plan", "A prioritised 12-month roadmap with owners, milestones and a simple scorecard.", "Weeks 6–8"]], "deliverables": ["Diagnostic report (20–30 pages)", "Prioritised 12-month roadmap", "Leadership workshop and materials", "One-page scorecard template"], "faqs": [["How much of our team's time does this take?", "Typically two hours per leader across the engagement, plus a half-day workshop. We schedule around your operating rhythm."], ["Do you stay to implement?", "Optional. Many clients run the plan themselves; others retain us monthly to keep it on track."], ["Will our staff speak openly to you?", "Interviews are confidential and we report themes, not names. That is usually enough for candour."]]}, {"slug": "strategic-planning", "name": "Strategic Planning", "img": "photo-1531403009284-440f080d1e12", "alt": "Person arranging planning cards on a board", "short": "A three-year direction your team can say in one breath, and a plan to fund it.", "summary": "Facilitated strategy work that turns ambition into a short, defensible plan: where you will compete, how you will win and what you will stop doing.", "duration": "8–10 weeks", "idealFor": "Leadership teams planning the next 3 years", "overview": ["Strategy documents often fail because they try to say everything. We help you make a few hard choices and write them down in a form people actually use.", "The work combines market and customer research with a sequence of facilitated sessions. The output is a one-page strategy, a set of measurable objectives and an annual operating plan aligned to your budget."], "benefits": [["Fewer, sharper choices", "A focused strategy that names where you will not play, which makes resourcing decisions simpler."], ["Alignment that lasts", "The leadership team builds the plan together, so commitment survives the first difficult quarter."], ["Linked to the budget", "Objectives translate into headcount, investment and targets, not just slogans."], ["A review cadence", "A quarterly rhythm for checking progress and adjusting without restarting the process."]], "process": [["Research", "Customer interviews, competitor scan and a review of your current performance.", "Weeks 1–3"], ["Frame", "An offsite to agree ambition, constraints and the critical choices to make.", "Week 4"], ["Choose", "Two working sessions to test options against evidence and decide.", "Weeks 5–7"], ["Translate", "Objectives, key results and an operating plan tied to next year's budget.", "Weeks 8–10"]], "deliverables": ["One-page strategy", "Three-year objectives and measures", "Annual operating plan", "Quarterly review toolkit"], "faqs": [["Do you write the strategy for us?", "No. We facilitate, research and draft, but the choices are yours. That is what makes the plan stick."], ["Can you run the offsite?", "Yes. We design and facilitate offsites, on site at your offices or at a venue you choose."], ["How is this different from a business plan?", "A business plan describes; a strategy decides. We focus on the decisions, then document them."]]}, {"slug": "financial-consulting", "name": "Financial Consulting", "img": "photo-1543286386-2e659306cd6c", "alt": "Pen resting on printed charts and financial figures", "short": "Forecasts, pricing and cash discipline that make the numbers useful to run the business.", "summary": "Practical financial advisory for growing firms: forecasting, margin analysis, pricing and cash management, built in tools your team already uses.", "duration": "4–12 weeks", "idealFor": "Firms outgrowing spreadsheet finance", "overview": ["Many growing firms have accurate bookkeeping but little forward visibility. Leaders cannot easily answer which customers are profitable, how long cash will last, or what a price change would do.", "We build the models and reporting that answer those questions, then train your team to maintain them. Typical work includes a 13-week cash forecast, product and customer margin analysis, and a pricing review."], "benefits": [["Forward visibility", "A rolling forecast that shows cash, profit and headroom months ahead."], ["Margin clarity", "Know which products, services and customers make money once true costs are allocated."], ["Better pricing", "Evidence-based price changes, tested against customer and competitor behaviour."], ["Lender confidence", "Reporting packs that make banking and investor conversations faster."]], "process": [["Baseline", "Review of accounts, systems and current reporting.", "Week 1"], ["Model", "Build the forecast and margin models with your finance lead.", "Weeks 2–5"], ["Decide", "Pricing and cost options presented with their financial effect.", "Weeks 6–8"], ["Embed", "Handover, training and a monthly reporting pack.", "Weeks 9–12"]], "deliverables": ["13-week cash forecast", "Customer and product margin analysis", "Pricing recommendations", "Monthly management reporting pack"], "faqs": [["Are you accountants or auditors?", "In this demonstration, no. The fictional firm offers management advisory; statutory accounts, audit and tax filing stay with your accountant."], ["Which software do you work with?", "We work with common accounting platforms and spreadsheets, and recommend tools only when they clearly pay for themselves."], ["Can you act as a part-time finance lead?", "Yes, through a retained advisory arrangement, usually two to four days a month."]]}, {"slug": "marketing-strategy", "name": "Marketing Strategy", "img": "photo-1542626991-cbc4e32524cc", "alt": "Sticky notes arranged in columns on a corkboard", "short": "Positioning, channels and a budget that ties marketing spend to pipeline.", "summary": "Clear positioning and a measurable go-to-market plan, so marketing spend can be traced to qualified leads and revenue.", "duration": "6–8 weeks", "idealFor": "B2B and service firms with uneven lead flow", "overview": ["Professional and B2B firms often market by habit: a newsletter, some events, an agency retainer. Spend rises, but no one can say what it produces.", "We start with the customer: who buys, why, and how they choose. From there we define positioning, pick the few channels that fit, set a budget and build the measurement to see what works."], "benefits": [["Distinct positioning", "A clear statement of who you serve and why you are the better choice, tested with real buyers."], ["Focused channels", "Effort concentrated on the two or three channels your buyers actually use."], ["Measurable spend", "A simple attribution model that links activity to pipeline."], ["Aligned sales and marketing", "Shared definitions of a qualified lead and a handoff process both teams agree to."]], "process": [["Understand buyers", "Interviews with recent wins, losses and prospects.", "Weeks 1–2"], ["Position", "Draft and test positioning and core messages.", "Weeks 3–4"], ["Plan", "Channel mix, content plan, budget and targets.", "Weeks 5–6"], ["Measure", "Dashboard and lead definitions set up with your team.", "Weeks 7–8"]], "deliverables": ["Buyer research summary", "Positioning and messaging guide", "12-month marketing plan and budget", "Pipeline dashboard specification"], "faqs": [["Do you run campaigns?", "We plan and measure; execution is usually done by your team or an agency we help you brief."], ["We already have an agency. Is that a problem?", "Not at all. We often work alongside agencies and help set clearer briefs and targets."], ["How quickly will we see results?", "Measurement is in place within eight weeks; the effect on pipeline typically shows over two to three quarters."]]}, {"slug": "operations-consulting", "name": "Operations Consulting", "img": "photo-1586528116311-ad8dd3c8310d", "alt": "Rows of yellow storage crates on warehouse shelving", "short": "Find the bottleneck, simplify the handoffs and make performance visible.", "summary": "Hands-on operational improvement: process mapping, capacity planning and performance management that lifts throughput without adding headcount.", "duration": "8–12 weeks", "idealFor": "Service, distribution and light manufacturing", "overview": ["Operational problems are rarely about effort. They live in handoffs, unclear ownership and work that waits in queues. Fixing them starts with seeing the work as it actually flows.", "We map your core processes with the people who run them, measure where time and quality are lost, and redesign the few steps that matter. Changes are piloted before they are rolled out."], "benefits": [["Higher throughput", "More work completed with the same team by removing waiting and rework."], ["Fewer errors", "Standard work and checkpoints at the steps where mistakes occur."], ["Visible performance", "A small set of daily and weekly measures every team can see."], ["Scalable processes", "Documented workflows that make hiring and onboarding faster."]], "process": [["Observe", "Walk the process and map it with frontline staff.", "Weeks 1–2"], ["Measure", "Collect cycle-time, quality and capacity data.", "Weeks 3–4"], ["Redesign", "Co-design improvements and run pilots.", "Weeks 5–9"], ["Sustain", "Standard work, visual management and coaching for supervisors.", "Weeks 10–12"]], "deliverables": ["Current and future-state process maps", "Capacity model", "Pilot results and rollout plan", "Operations scorecard"], "faqs": [["Will this mean redundancies?", "Our focus is capacity for growth. Most clients redeploy freed-up time rather than reduce headcount."], ["Do you recommend new software?", "Only when process changes alone cannot deliver the result. Process comes first."], ["Can you work across multiple sites?", "Yes. We usually pilot at one site, then roll out with a site-by-site plan."]]}, {"slug": "business-development", "name": "Business Development", "img": "photo-1542744173-8e7e53415bb0", "alt": "Presenter standing beside a table of colleagues with laptops", "short": "A repeatable way to win new clients, from target list to signed proposal.", "summary": "A structured approach to growth: target markets, partnerships, pipeline management and proposal discipline that raises win rates.", "duration": "6–10 weeks", "idealFor": "Firms reliant on founder-led selling", "overview": ["In many firms, new business depends on one or two people. That limits growth and creates risk. A repeatable process lets more of the team contribute without diluting quality.", "We help define target accounts and partners, design a pipeline your team will maintain, and improve how proposals are qualified, priced and written."], "benefits": [["Less founder dependence", "A process others can follow, so growth is not capped by one calendar."], ["Better-fit clients", "Clear targeting criteria that steer effort toward profitable work."], ["Higher win rates", "Qualification gates and proposal standards that cut wasted bids."], ["Predictable pipeline", "Weekly pipeline reviews with forecastable stages."]], "process": [["Audit", "Review recent wins, losses and current pipeline.", "Weeks 1–2"], ["Target", "Define ideal clients, segments and partner channels.", "Weeks 3–4"], ["Build", "Pipeline stages, qualification and proposal templates.", "Weeks 5–7"], ["Coach", "Run live pursuits together and refine.", "Weeks 8–10"]], "deliverables": ["Target account and partner list", "Pipeline stage definitions", "Proposal and pricing templates", "Pursuit coaching sessions"], "faqs": [["Do you generate leads for us?", "No. We build your team's capability and process; we do not sell on your behalf."], ["We don't have a CRM. Do we need one?", "Not to start. We often begin in a shared spreadsheet and introduce a CRM once the process is stable."], ["Can you help with a specific bid?", "Yes, as part of coaching we support live proposals end to end."]]}, {"slug": "custom-solutions", "name": "Customized Professional Solutions", "img": "photo-1557804506-669a67965ba0", "alt": "Advisor at a whiteboard presenting to colleagues using laptops", "short": "When the question doesn't fit a box: interim leadership, deals and special projects.", "summary": "Tailored engagements for situations that do not fit a standard offer: interim leadership, acquisition support, succession planning and board advisory.", "duration": "Scoped to the brief", "idealFor": "Unusual or time-critical situations", "overview": ["Some of the most important moments for a business are one-offs: buying a competitor, preparing for sale, handing over to the next generation, or covering a leadership gap.", "We scope these engagements around your specific objective and timeline, drawing on the full team. Every engagement starts with a written scope and fixed fee for the first phase."], "benefits": [["Built around your brief", "Scope, team and timeline designed for the situation, not adapted from a template."], ["Senior attention", "A partner leads every custom engagement from first call to close."], ["Fixed first phase", "A clearly priced first phase so you can judge value before committing further."], ["Discretion", "Sensitive situations handled with confidentiality agreements as standard."]], "process": [["Brief", "An initial conversation to understand the objective and constraints.", "Week 1"], ["Scope", "A written proposal with phases, team, fees and decision points.", "Week 2"], ["Deliver", "Work delivered in phases with a review at each decision point.", "Varies"], ["Transition", "Handover to your team or a long-term arrangement.", "Varies"]], "deliverables": ["Written scope and phased plan", "Dedicated partner-led team", "Decision-point reviews", "Transition plan"], "faqs": [["What kinds of projects qualify?", "Interim COO or CFO cover, acquisition integration, succession planning, board advisory and similar one-off needs."], ["How fast can you start?", "For urgent leadership gaps, the fictional firm describes starting within two weeks of a signed scope."], ["Do you sign NDAs?", "Yes. For sensitive matters we sign a mutual confidentiality agreement before the first detailed conversation."]]}];
var TEAM = [{"slug": "margaux-ellery", "name": "Margaux Ellery", "role": "Managing Partner · Strategy", "short": "Leads strategy and business consulting engagements.", "bio": ["Margaux founded the (fictional) firm after running operations for a family-owned distribution business through two decades of growth and one difficult downturn.", "She leads strategy and diagnostic engagements and facilitates most leadership offsites. Clients describe her as direct, calm and unusually good at ending a debate."], "focus": ["Strategic planning", "Leadership offsites", "Owner transitions"]}, {"slug": "tobias-renwick", "name": "Tobias Renwick", "role": "Partner · Finance", "short": "Forecasting, pricing and cash discipline for growing firms.", "bio": ["Tobias spent his early career in corporate financial planning before moving into advisory work for mid-sized firms.", "He builds forecasting and margin models that leadership teams actually use, and is the firm's lead on pricing projects."], "focus": ["Cash forecasting", "Pricing", "Lender reporting"]}, {"slug": "priya-haldane", "name": "Priya Haldane", "role": "Principal · Operations", "short": "Process redesign and performance management.", "bio": ["Priya has led process improvement programmes in logistics, field services and light manufacturing.", "She works on the floor with frontline teams and is known for pilots that prove a change before anyone is asked to adopt it."], "focus": ["Process mapping", "Capacity planning", "Visual management"]}, {"slug": "julian-okafor", "name": "Julian Okafor", "role": "Principal · Marketing & Growth", "short": "Positioning and go-to-market for B2B and service firms.", "bio": ["Julian has built marketing functions for professional-services and B2B technology businesses.", "He leads buyer research and positioning work, and helps sales and marketing teams agree on what a good lead looks like."], "focus": ["Positioning", "Buyer research", "Pipeline measurement"]}, {"slug": "hana-lindqvist", "name": "Hana Lindqvist", "role": "Senior Manager · Business Development", "short": "Pipeline design, proposals and partnerships.", "bio": ["Hana helps firms move beyond founder-led selling with clear targeting, pipeline discipline and better proposals.", "She coaches teams through live pursuits and manages the firm's partnership programme."], "focus": ["Pipeline design", "Proposal strategy", "Partnerships"]}, {"slug": "desmond-achterberg", "name": "Desmond Achterberg", "role": "Senior Advisor · Special Situations", "short": "Interim leadership, acquisitions and succession.", "bio": ["Desmond has served as an interim operating executive and board advisor to founder-owned companies.", "He leads custom engagements including acquisition integration and leadership succession."], "focus": ["Interim leadership", "Acquisition integration", "Board advisory"]}];
var ARTICLES = [{"slug": "one-page-strategy", "cat": "Strategy", "date": "October 2026", "read": "6 min read", "title": "The one-page strategy: why most plans fail before the offsite ends", "excerpt": "Long strategy documents feel thorough but rarely change behaviour. A single page forces the choices that do.", "body": ["Every leadership team has a strategy document somewhere. Few can summarise it without opening the file. That gap between the document and daily decisions is where most strategies quietly fail.", {"h": "Length hides indecision"}, "When a plan runs to forty pages, it usually contains every idea the team discussed. Nothing has been ruled out, so nothing has really been chosen. The document becomes a list of intentions rather than a guide for trade-offs.", {"q": "If your strategy cannot tell a manager which opportunity to decline, it is not finished."}, "A one-page strategy makes the trade-offs explicit. It names the customers you will prioritise, the few capabilities you will invest in, and, just as importantly, what you will stop doing.", {"h": "What belongs on the page"}, "We recommend five short sections: the ambition in one sentence, where you will compete, how you will win, the three to five objectives for the next year, and the measures that will tell you whether it is working.", "The discipline of fitting this on one page is the point. Each line should survive the question: would a reasonable competitor choose differently? If not, it is probably a platitude."], "img": "photo-1623652653308-d49d335c92eb", "alt": "Facilitator and participants during an idea-generation workshop"}, {"slug": "thirteen-week-cash-forecast", "cat": "Finance", "date": "September 2026", "read": "7 min read", "title": "Thirteen weeks: building a cash forecast your bank will believe", "excerpt": "A rolling 13-week forecast is the most useful financial tool most growing firms do not have.", "body": ["Profit and cash are not the same thing, and growing firms often learn this at the worst possible moment. A business can be profitable on paper and still run short of cash because customers pay late or inventory builds up.", {"h": "Why thirteen weeks"}, "Thirteen weeks is one quarter: long enough to see a problem coming, short enough to forecast with reasonable accuracy from known receipts and payments.", "Build it weekly, from the bottom up. Start with the opening bank balance, list expected receipts by customer and expected payments by supplier, payroll and tax, and roll the closing balance forward.", {"q": "The value is not in being right. It is in seeing, every week, how wrong you were and why."}, {"h": "Making it credible"}, "Lenders trust forecasts that are updated consistently and reconciled to actuals. Keep last week's forecast, compare it to what happened, and note the reasons for large variances. Over a few months, your accuracy and your credibility both improve."], "img": "photo-1579532582937-16c108930bf6", "alt": "Close-up of printed financial figures"}, {"slug": "before-you-hire-sales", "cat": "Growth", "date": "August 2026", "read": "5 min read", "title": "Before you hire a VP of Sales, fix these three things", "excerpt": "A senior sales hire cannot fix unclear targeting, an undefined pipeline or inconsistent pricing.", "body": ["When founder-led growth plateaus, the instinct is to hire an experienced sales leader. Sometimes that is right. Often the hire struggles because the foundations they need are missing.", {"h": "1. Know who you are selling to"}, "Write down the characteristics of your most profitable clients. If the team cannot agree, a new sales leader will spend their first six months working it out at your expense.", {"h": "2. Define the pipeline"}, "Agree what each stage means and what evidence moves a deal forward. Without shared definitions, pipeline reports are opinions.", {"h": "3. Make pricing consistent"}, "If every proposal is priced from scratch, margins vary and approvals slow down. A simple pricing framework protects margin and speeds up the sales cycle.", "Fix these first, and the right sales leader will be productive in weeks rather than quarters."], "img": "photo-1517048676732-d65bc937f952", "alt": "Colleagues around a table taking notes"}, {"slug": "bottlenecks-in-handoffs", "cat": "Operations", "date": "July 2026", "read": "6 min read", "title": "Bottlenecks hide in handoffs, not in people", "excerpt": "When work slows down, look at the moments it passes from one team to the next.", "body": ["Ask a manager why work is late and the answer is usually about people: not enough of them, or not working hard enough. Map the process, and a different picture emerges.", "In most service and distribution operations, work spends far more time waiting than being worked on. That waiting happens at handoffs: between sales and operations, between shifts, between a request and an approval.", {"q": "A process is only as fast as the slowest handoff in it."}, {"h": "How to find them"}, "Follow a handful of real jobs from start to finish and record when each one was touched and when it was waiting. The pattern is usually obvious within a week.", "Fixes are often simple: clearer ownership, a standard handoff checklist, or moving an approval to the person closest to the work."], "img": "photo-1586528116311-ad8dd3c8310d", "alt": "Stacked yellow crates on warehouse shelving"}, {"slug": "pricing-is-strategy", "cat": "Strategy", "date": "June 2026", "read": "5 min read", "title": "Pricing is a strategy decision, not a finance one", "excerpt": "Your prices tell the market who you are for. Treat them that way.", "body": ["In many firms, pricing is set by finance as cost plus a margin and revisited only when costs rise. That approach ignores what pricing communicates.", "Price signals positioning. A premium price, supported by evidence of value, attracts clients who care about outcomes. A low price attracts clients who will leave for a lower one.", {"h": "Questions to ask"}, "Which clients would pay more without hesitation, and why? Where are you discounting by habit? Which services are underpriced relative to the value they create?", {"q": "The most profitable price change is often the one nobody noticed."}, "Pricing reviews should involve leadership, sales and finance together, and be tested in small steps before they are rolled out."], "img": "photo-1628348068343-c6a848d2b6dd", "alt": "Person in a suit holding a tablet showing charts"}, {"slug": "first-consultation", "cat": "Working with us", "date": "May 2026", "read": "4 min read", "title": "What to bring to a first consultation", "excerpt": "A little preparation makes a 30-minute introductory call far more useful.", "body": ["An introductory call is a chance for both sides to decide whether working together makes sense. A small amount of preparation helps.", {"h": "Bring the question, not the answer"}, "Describe the problem as you experience it. You do not need a diagnosis; that is our job. A few sentences on what is happening and why it matters now is enough.", {"h": "Share a little context"}, "Rough revenue, team size and the last year's major changes help us ask better questions. Confidential documents can wait until a confidentiality agreement is in place.", {"h": "Know what a good outcome looks like"}, "If this went well, what would be different in twelve months? That answer shapes everything else."], "img": "photo-1505209487757-5114235191e5", "alt": "Minimal desk with monitor and laptop"}];
var APPT_TYPES = [{"id": "intro", "name": "Introductory call", "length": "30 min", "minutes": 30, "step": 30, "price": "Complimentary", "desc": "A first conversation to understand your situation and whether we can help."}, {"id": "strategy", "name": "Strategy session", "length": "60 min", "minutes": 60, "step": 60, "price": "Illustrative fee: $350", "desc": "A focused working session on one strategic question with a partner."}, {"id": "financial", "name": "Financial review", "length": "60 min", "minutes": 60, "step": 60, "price": "Illustrative fee: $350", "desc": "Walk through your numbers, forecast or pricing with our finance lead."}, {"id": "workshop", "name": "On-site working session", "length": "Half day", "minutes": 240, "step": 240, "price": "Illustrative fee: $1,800", "desc": "A half-day facilitated session at your offices for your leadership team."}];

/* ==========================================================================
   Application logic
   Every form on this site runs in DEMONSTRATION MODE: nothing is transmitted
   to a server. See README.md → "Connecting real services" before going live.
   ========================================================================== */
(function () {
  "use strict";

  var doc = document;
  doc.documentElement.classList.remove("no-js");

  /* ---------- Helpers ---------- */
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function param(name) {
    try { return new URLSearchParams(window.location.search).get(name); } catch (e) { return null; }
  }
  function findBy(list, key, val) { for (var i = 0; i < list.length; i++) { if (list[i][key] === val) return list[i]; } return null; }
  function photo(id, w) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + (w || 1200) + "&q=72"; }
  function store(key, val) { try { if (val === undefined) return JSON.parse(localStorage.getItem(key)); if (val === null) localStorage.removeItem(key); else localStorage.setItem(key, JSON.stringify(val)); } catch (e) { return null; } }
  function demoRef(prefix) {
    var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", out = "";
    for (var i = 0; i < 5; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
    return prefix + "-DEMO-" + out;
  }
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = doc.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); doc.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("show"); }, 4200);
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = $(".menu-btn");
  var rail = $("#site-rail");
  function setMenu(open) {
    doc.body.classList.toggle("menu-open", open);
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      $(".menu-label", menuBtn).textContent = open ? "Close" : "Menu";
    }
    if (open && rail) { var first = $("a", rail); if (first) first.focus(); }
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () { setMenu(!doc.body.classList.contains("menu-open")); });
    doc.addEventListener("keydown", function (e) { if (e.key === "Escape" && doc.body.classList.contains("menu-open")) { setMenu(false); menuBtn.focus(); } });
    $$("#site-rail a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1100 && doc.body.classList.contains("menu-open")) setMenu(false); });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Local fallback for remote photos (e.g. if a CDN is blocked) */
  $$("img[data-fallback]").forEach(function (im) {
    function swap() { if (im.getAttribute("src") !== im.getAttribute("data-fallback")) { im.removeAttribute("srcset"); im.src = im.getAttribute("data-fallback"); } }
    if (im.complete && im.naturalWidth === 0) swap(); else im.addEventListener("error", swap);
  });

  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Practice-area index: floating preview image ---------- */
  var preview = $(".index-preview");
  if (preview && window.matchMedia("(hover: hover)").matches) {
    $$(".index-row[data-img]").forEach(function (row) {
      row.addEventListener("mouseenter", function () { preview.style.backgroundImage = "url('" + photo(row.getAttribute("data-img"), 600) + "')"; preview.classList.add("show"); });
      row.addEventListener("mouseleave", function () { preview.classList.remove("show"); });
      row.addEventListener("mousemove", function (e) { preview.style.left = (e.clientX + 170) + "px"; preview.style.top = e.clientY + "px"; });
    });
  }

  /* ---------- Testimonials ---------- */
  $$(".quote-stage").forEach(function (stage) {
    var slides = $$(".quote-slide", stage);
    if (!slides.length) return;
    var i = 0, timer;
    var count = $(".quote-count", stage.parentNode), bar = $(".quote-bar span", stage.parentNode);
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("active", k === i); s.setAttribute("aria-hidden", k === i ? "false" : "true"); });
      if (count) count.textContent = String(i + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
      if (bar) bar.style.width = ((i + 1) / slides.length * 100) + "%";
    }
    function auto() { if (reduceMotion) return; clearInterval(timer); timer = setInterval(function () { show(i + 1); }, 8000); }
    var prev = $("[data-quote-prev]", stage.parentNode), next = $("[data-quote-next]", stage.parentNode);
    if (prev) prev.addEventListener("click", function () { show(i - 1); auto(); });
    if (next) next.addEventListener("click", function () { show(i + 1); auto(); });
    stage.parentNode.addEventListener("mouseenter", function () { clearInterval(timer); });
    stage.parentNode.addEventListener("mouseleave", auto);
    stage.parentNode.addEventListener("focusin", function () { clearInterval(timer); });
    show(0); auto();
  });

  /* ==========================================================================
     Validation
     ========================================================================== */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_RE = /^[+()\-.\s\d]{7,20}$/;
  var URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

  function errorEl(field) {
    var id = (field.id || field.getAttribute("data-group")) + "-error";
    return doc.getElementById(id);
  }
  function setError(field, msg) {
    var err = errorEl(field);
    if (msg) { field.setAttribute("aria-invalid", "true"); } else { field.removeAttribute("aria-invalid"); }
    if (err) err.textContent = msg || "";
    return !msg;
  }
  function validateField(field) {
    var v = (field.value || "").trim();
    var label = field.getAttribute("data-label") || "This field";
    if (field.type === "checkbox" && field.required && !field.checked) return setError(field, field.getAttribute("data-msg") || "Please confirm to continue.");
    if (field.required && !v) return setError(field, label + " is required.");
    if (v && field.type === "email" && !EMAIL_RE.test(v)) return setError(field, "Enter a valid email address, like name@company.com.");
    if (v && field.type === "tel" && !PHONE_RE.test(v)) return setError(field, "Enter a valid phone number (digits, spaces, + ( ) - only).");
    if (v && field.type === "url" && !URL_RE.test(v)) return setError(field, "Enter a valid web address, like company.com.");
    var min = parseInt(field.getAttribute("minlength"), 10);
    if (v && min && v.length < min) return setError(field, label + " needs at least " + min + " characters.");
    return setError(field, "");
  }
  function validateGroup(container) {
    // radio/checkbox groups marked with data-required-group
    var ok = true;
    $$("[data-required-group]", container).forEach(function (g) {
      var name = g.getAttribute("data-required-group");
      var checked = $$("input[name='" + name + "']:checked", g).length;
      var err = doc.getElementById(name + "-error");
      var msg = checked ? "" : (g.getAttribute("data-msg") || "Please choose an option.");
      if (err) err.textContent = msg;
      g.classList.toggle("invalid", !checked);
      if (!checked) ok = false;
    });
    return ok;
  }
  function validateScope(scope) {
    var ok = true, firstBad = null;
    $$("input, select, textarea", scope).forEach(function (f) {
      if (f.disabled || f.type === "radio" || (f.type === "checkbox" && !f.required) || f.closest("[hidden]")) return;
      if (!validateField(f)) { ok = false; if (!firstBad) firstBad = f; }
    });
    if (!validateGroup(scope)) {
      ok = false;
      if (!firstBad) { var g = $(".invalid input", scope); if (g) firstBad = g; }
    }
    if (firstBad) firstBad.focus();
    return ok;
  }
  function liveValidate(form) {
    $$("input, select, textarea", form).forEach(function (f) {
      if (f.type === "radio") { f.addEventListener("change", function () { validateGroup(f.closest("[data-required-group]") || form); }); return; }
      if (f.type === "checkbox" && !f.required) { f.addEventListener("change", function () { var g = f.closest("[data-required-group]"); if (g) validateGroup(g.parentNode); }); return; }
      f.addEventListener("blur", function () { if (f.value || f.getAttribute("aria-invalid")) validateField(f); });
      f.addEventListener("input", function () { if (f.getAttribute("aria-invalid")) validateField(f); });
      f.addEventListener("change", function () { if (f.type === "checkbox") validateField(f); });
    });
  }
  function formData(form) {
    var out = {};
    $$("input, select, textarea", form).forEach(function (f) {
      if (!f.name) return;
      if (f.type === "radio") { if (f.checked) out[f.name] = f.value; return; }
      if (f.type === "checkbox") {
        if (f.hasAttribute("data-multi")) { out[f.name] = out[f.name] || []; if (f.checked) out[f.name].push(f.value); }
        else out[f.name] = f.checked;
        return;
      }
      out[f.name] = f.value.trim();
    });
    return out;
  }
  function labelFor(input) {
    var l = input && doc.querySelector("label[for='" + input.id + "'] .c-title");
    return l ? l.textContent : (input ? input.value : "");
  }
  function scrollToEl(el) { if (!el) return; var y = el.getBoundingClientRect().top + window.pageYOffset - 90; window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" }); }

  /* ==========================================================================
     Service detail page
     ========================================================================== */
  var detailRoot = $("#service-detail");
  if (detailRoot) {
    var slug = param("service");
    var svc = findBy(SERVICES, "slug", slug) || SERVICES[0];
    var idx = SERVICES.indexOf(svc);
    doc.title = svc.name + " — Aldermoor Advisory (Demo)";
    var md = $("meta[name='description']"); if (md) md.setAttribute("content", svc.summary);
    var crumb = $("#crumb-current"); if (crumb) crumb.textContent = svc.name;
    var navHtml = SERVICES.map(function (s, k) {
      return '<li><a href="service-details.html?service=' + s.slug + '"' + (s === svc ? ' aria-current="true"' : "") + '><span>' + String(k + 1).padStart(2, "0") + "</span>" + esc(s.name) + "</a></li>";
    }).join("");
    $("#detail-nav-list").innerHTML = navHtml;
    var prevS = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length], nextS = SERVICES[(idx + 1) % SERVICES.length];
    detailRoot.innerHTML =
      '<header class="detail-hero">' +
        "<div>" +
          '<p class="mono eyebrow">Practice area ' + String(idx + 1).padStart(2, "0") + " of " + String(SERVICES.length).padStart(2, "0") + "</p>" +
          "<h1 id=\"detail-title\">" + esc(svc.name) + "</h1>" +
          '<p class="lede">' + esc(svc.summary) + "</p>" +
          '<div class="spread-facts mono"><span>Typical length · ' + esc(svc.duration) + "</span><span>Best for · " + esc(svc.idealFor) + "</span></div>" +
          '<div class="btn-row"><a class="btn btn-primary" href="appointments.html?type=intro&amp;service=' + svc.slug + '">Request a consultation</a><a class="btn btn-outline" href="onboarding.html?service=' + svc.slug + '">Start an inquiry</a></div>' +
        "</div>" +
        '<div class="thumb"><img src="' + photo(svc.img, 1000) + '" alt="' + esc(svc.alt) + '" width="1000" height="750"></div>' +
      "</header>" +
      '<section class="detail-block" aria-labelledby="ov-h"><span class="mono">Overview</span><h2 id="ov-h" class="visually-hidden">Overview</h2>' +
        '<div class="prose">' + svc.overview.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></section>" +
      '<section class="detail-block" aria-labelledby="bn-h"><span class="mono">Benefits</span><h2 id="bn-h">What changes for your business</h2><div class="benefit-grid">' +
        svc.benefits.map(function (b) { return "<div><h3>" + esc(b[0]) + "</h3><p>" + esc(b[1]) + "</p></div>"; }).join("") + "</div></section>" +
      '<section class="detail-block" aria-labelledby="pr-h"><span class="mono">Process</span><h2 id="pr-h">How the engagement runs</h2><ol class="process">' +
        svc.process.map(function (p) { return '<li><div><h3>' + esc(p[0]) + ' <span class="dur">· ' + esc(p[2]) + "</span></h3><p>" + esc(p[1]) + "</p></div></li>"; }).join("") + "</ol></section>" +
      '<section class="detail-block" aria-labelledby="dl-h"><span class="mono">Deliverables</span><h2 id="dl-h">What you leave with</h2><ul class="deliverables">' +
        svc.deliverables.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul></section>" +
      '<section class="detail-block" aria-labelledby="fq-h"><span class="mono">Questions</span><h2 id="fq-h">Frequently asked</h2><div class="faq">' +
        svc.faqs.map(function (f) { return "<details><summary>" + esc(f[0]) + '</summary><div class="answer"><p>' + esc(f[1]) + "</p></div></details>"; }).join("") + "</div></section>" +
      '<aside class="detail-cta on-dark" aria-label="Request a consultation"><div><p class="mono eyebrow">Next step</p><h2>Talk it through with a partner.</h2></div>' +
        '<a class="btn btn-primary" href="appointments.html?type=intro&amp;service=' + svc.slug + '">Request consultation</a></aside>' +
      '<nav class="detail-pager" aria-label="Other practice areas"><a href="service-details.html?service=' + prevS.slug + '"><span class="mono muted">← Previous</span><strong>' + esc(prevS.name) + '</strong></a>' +
        '<a class="next" href="service-details.html?service=' + nextS.slug + '"><span class="mono muted">Next →</span><strong>' + esc(nextS.name) + "</strong></a></nav>";
  }

  /* ==========================================================================
     Team dialog
     ========================================================================== */
  var teamDialog = $("#person-dialog");
  if (teamDialog) {
    $$("[data-person]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var p = findBy(TEAM, "slug", btn.getAttribute("data-person"));
        if (!p) return;
        $(".sheet-body", teamDialog).innerHTML =
          '<div class="person-sheet"><img src="images/team/' + p.slug + '.svg" alt="Illustrated portrait placeholder for ' + esc(p.name) + '" width="400" height="500">' +
          '<div><p class="mono eyebrow">' + esc(p.role) + '</p><h2 id="person-dialog-title">' + esc(p.name) + "</h2>" +
          p.bio.map(function (b) { return "<p>" + esc(b) + "</p>"; }).join("") +
          '<p class="mono muted">Focus areas</p><ul class="chips">' + p.focus.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
          '<div class="btn-row"><a class="btn btn-primary" href="appointments.html?advisor=' + p.slug + '">Book with ' + esc(p.name.split(" ")[0]) + "</a></div>" +
          '<p class="hint gap-top">Fictional team member created for this demonstration.</p></div></div>';
        if (typeof teamDialog.showModal === "function") teamDialog.showModal(); else teamDialog.setAttribute("open", "");
      });
    });
  }
  $$("dialog.sheet").forEach(function (dlg) {
    $$("[data-close]", dlg).forEach(function (b) { b.addEventListener("click", function () { dlg.close(); }); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  });

  /* ==========================================================================
     Insights
     ========================================================================== */
  var articleDialog = $("#article-dialog");
  function openArticle(slug) {
    var a = findBy(ARTICLES, "slug", slug);
    if (!a || !articleDialog) return;
    var body = a.body.map(function (blk) {
      if (blk.h) return "<h3>" + esc(blk.h) + "</h3>";
      if (blk.q) return '<p class="pullquote">' + esc(blk.q) + "</p>";
      return "<p>" + esc(blk) + "</p>";
    }).join("");
    $(".sheet-body", articleDialog).innerHTML =
      '<article class="article-sheet"><div class="article-meta mono"><span class="cat">' + esc(a.cat) + "</span><span>" + esc(a.date) + " · " + esc(a.read) + "</span></div>" +
      '<h2 id="article-dialog-title">' + esc(a.title) + '</h2><p class="lede">' + esc(a.excerpt) + "</p>" +
      '<img class="hero-img" src="' + photo(a.img, 1400) + '" alt="' + esc(a.alt) + '" width="1400" height="700">' + body +
      '<hr class="rule"><p class="hint">Sample article written for this demonstration site. It is general commentary, not professional advice.</p>' +
      '<div class="btn-row"><a class="btn btn-primary" href="appointments.html?type=intro">Discuss this with an advisor</a></div></article>';
    if (typeof articleDialog.showModal === "function") articleDialog.showModal(); else articleDialog.setAttribute("open", "");
    try { history.replaceState(null, "", "?article=" + a.slug); } catch (e) {}
  }
  if (articleDialog) {
    articleDialog.addEventListener("close", function () { try { history.replaceState(null, "", window.location.pathname); } catch (e) {} });
  }
  function articleCard(a) {
    return '<button type="button" class="article-card" data-article="' + a.slug + '"><div class="article-meta mono"><span class="cat">' + esc(a.cat) + "</span><span>" + esc(a.read) + "</span></div>" +
      '<div class="thumb"><img src="' + photo(a.img, 700) + '" alt="' + esc(a.alt) + '" loading="lazy" width="700" height="525"></div>' +
      "<h3>" + esc(a.title) + "</h3><p>" + esc(a.excerpt) + '</p><span class="read">Read article →</span></button>';
  }
  var insightsList = $("#insights-list");
  if (insightsList) {
    var activeCat = "All", query = "";
    var feature = ARTICLES[0];
    var featureBtn = $("#feature-article");
    featureBtn.setAttribute("data-article", feature.slug);
    featureBtn.innerHTML = '<div class="thumb"><img src="' + photo(feature.img, 1300) + '" alt="' + esc(feature.alt) + '" width="1300" height="900"></div>' +
      '<div><div class="article-meta mono"><span class="cat">Featured · ' + esc(feature.cat) + "</span><span>" + esc(feature.read) + "</span></div><h2>" + esc(feature.title) + '</h2><p class="lede">' + esc(feature.excerpt) + '</p><span class="link-arrow">Read the article</span></div>';
    var cats = ["All"]; ARTICLES.forEach(function (a) { if (cats.indexOf(a.cat) < 0) cats.push(a.cat); });
    var chipWrap = $("#filter-chips");
    chipWrap.innerHTML = cats.map(function (c) { return '<button type="button" aria-pressed="' + (c === "All") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>"; }).join("");
    function renderList() {
      var q = query.toLowerCase();
      var items = ARTICLES.filter(function (a) {
        return (activeCat === "All" || a.cat === activeCat) && (!q || (a.title + " " + a.excerpt + " " + a.cat).toLowerCase().indexOf(q) > -1);
      });
      insightsList.innerHTML = items.length ? items.map(articleCard).join("") : '<p class="empty-state span-all">No articles match “' + esc(query) + '”. Try a different term or category.</p>';
      $("#result-count").textContent = items.length + (items.length === 1 ? " article" : " articles");
    }
    chipWrap.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-cat]"); if (!b) return;
      activeCat = b.getAttribute("data-cat");
      $$("button", chipWrap).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      renderList();
    });
    $("#insight-search").addEventListener("input", function (e) { query = e.target.value.trim(); renderList(); });
    renderList();
    var deep = param("article"); if (deep) openArticle(deep);
  }
  var homeArticles = $("#home-articles");
  if (homeArticles) homeArticles.innerHTML = ARTICLES.slice(0, 3).map(articleCard).join("");
  doc.addEventListener("click", function (e) {
    var card = e.target.closest("[data-article]");
    if (!card) return;
    if (articleDialog) openArticle(card.getAttribute("data-article"));
    else window.location.href = "insights.html?article=" + card.getAttribute("data-article");
  });

  /* ==========================================================================
     Simple forms: contact + newsletter
     ========================================================================== */
  $$("form[data-demo-form]").forEach(function (form) {
    liveValidate(form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var alertBox = $(".form-alert", form);
      if (!validateScope(form)) { if (alertBox) { alertBox.hidden = false; alertBox.textContent = "Please correct the highlighted fields and try again."; } return; }
      if (alertBox) alertBox.hidden = true;
      var data = formData(form);
      var kind = form.getAttribute("data-demo-form");
      if (kind === "newsletter") {
        form.reset();
        toast("Demo mode: " + data.email + " was not subscribed — no data left your browser.");
        return;
      }
      var done = doc.getElementById(form.getAttribute("data-confirm"));
      if (done) {
        $("[data-ref]", done).textContent = demoRef("MSG");
        $("[data-name]", done).textContent = data.name ? data.name.split(" ")[0] : "there";
        form.hidden = true; done.hidden = false; done.setAttribute("tabindex", "-1"); done.focus(); scrollToEl(done);
      }
    });
  });
  $$("[data-reset-form]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var form = doc.getElementById(btn.getAttribute("data-reset-form"));
      var done = btn.closest(".confirmation");
      form.reset(); $$("[aria-invalid]", form).forEach(function (f) { f.removeAttribute("aria-invalid"); }); $$(".error-msg", form).forEach(function (m) { m.textContent = ""; });
      done.hidden = true; form.hidden = false; var f = $("input", form); if (f) f.focus();
    });
  });
  var topicSel = $("#c-topic");
  if (topicSel && param("topic")) { var t = param("topic"); $$("option", topicSel).forEach(function (o) { if (o.value === t) topicSel.value = t; }); }

  /* ==========================================================================
     Multi-step engine (used by booking + onboarding)
     ========================================================================== */
  function Stepper(root, opts) {
    this.root = root; this.opts = opts || {};
    this.panels = $$(".step-panel", root);
    this.marks = $$(".stepper li", root);
    this.bar = $(".progress span", root);
    this.i = 0;
    var self = this;
    $$("[data-next]", root).forEach(function (b) { b.addEventListener("click", function () { self.next(); }); });
    $$("[data-back]", root).forEach(function (b) { b.addEventListener("click", function () { self.go(self.i - 1); }); });
    root.addEventListener("click", function (e) { var ed = e.target.closest("[data-edit]"); if (ed) self.go(parseInt(ed.getAttribute("data-edit"), 10)); });
    this.go(0, true);
  }
  Stepper.prototype.go = function (n, silent) {
    if (n < 0 || n >= this.panels.length) return;
    this.i = n;
    var self = this;
    this.panels.forEach(function (p, k) { p.hidden = k !== n; });
    this.marks.forEach(function (m, k) {
      m.classList.toggle("done", k < n); m.classList.toggle("current", k === n);
      if (k === n) m.setAttribute("aria-current", "step"); else m.removeAttribute("aria-current");
    });
    if (this.bar) this.bar.style.width = ((n + 1) / this.panels.length * 100) + "%";
    var stat = $(".step-status", this.root); if (stat) stat.textContent = "Step " + (n + 1) + " of " + this.panels.length;
    if (this.opts.onShow) this.opts.onShow(n);
    if (!silent) { var h = $("h2", this.panels[n]); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); } scrollToEl(this.root); }
    void self;
  };
  Stepper.prototype.next = function () {
    var panel = this.panels[this.i];
    if (this.opts.validate && !this.opts.validate(this.i, panel)) return;
    if (!validateScope(panel)) return;
    if (this.opts.onLeave) this.opts.onLeave(this.i);
    this.go(this.i + 1);
  };

  /* ==========================================================================
     Appointment booking
     ========================================================================== */
  var booking = $("#booking");
  if (booking) {
    var B = { type: null, date: null, time: null };
    var bForm = $("#booking-form");
    liveValidate(bForm);
    var tz = "Central Time (CT)";

    // Prefill from URL
    var pType = param("type"), pAdvisor = param("advisor"), pService = param("service");
    if (pType) { var r = doc.getElementById("type-" + pType); if (r) r.checked = true; }
    if (pAdvisor) { var advSel = $("#b-advisor"); if (findBy(TEAM, "slug", pAdvisor)) advSel.value = pAdvisor; }
    if (pService) { var topic = $("#b-topic"); if (findBy(SERVICES, "slug", pService)) topic.value = pService; }

    function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
    function ymd(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
    function fmtDate(d) { return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }); }
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var minDate = new Date(today); minDate.setDate(minDate.getDate() + 1);
    var maxDate = new Date(today); maxDate.setDate(maxDate.getDate() + 60);
    var view = new Date(minDate.getFullYear(), minDate.getMonth(), 1);

    function selectedType() { var c = $("input[name='appt-type']:checked", bForm); return c ? findBy(APPT_TYPES, "id", c.value) : null; }
    function slotsFor(dateStr, type) {
      var out = [], t = type || APPT_TYPES[0];
      var start = 9 * 60, end = 17 * 60, step = t.step;
      for (var m = start; m + t.minutes <= end; m += step) {
        if (m >= 12 * 60 && m < 13 * 60 && t.minutes < 240) continue; // lunch
        var hh = Math.floor(m / 60), mm = m % 60;
        var label = ((hh + 11) % 12 + 1) + ":" + String(mm).padStart(2, "0") + (hh < 12 ? " AM" : " PM");
        out.push({ label: label, h: hh, m: mm, open: hash(dateStr + label + t.id) % 3 !== 0 });
      }
      return out;
    }
    function dayAvailable(d) {
      var dow = d.getDay();
      if (dow === 0 || dow === 6 || d < minDate || d > maxDate) return false;
      if (hash(ymd(d)) % 6 === 0) return false; // fully booked (demo)
      return slotsFor(ymd(d), selectedType()).some(function (s) { return s.open; });
    }
    function renderCal() {
      var title = $("#cal-title"), grid = $("#cal-grid");
      title.textContent = view.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      var first = new Date(view.getFullYear(), view.getMonth(), 1);
      var days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
      var html = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (d) { return '<div class="cal-dow" aria-hidden="true">' + d + "</div>"; }).join("");
      for (var b = 0; b < first.getDay(); b++) html += '<span class="cal-day blank" aria-hidden="true"></span>';
      for (var dd = 1; dd <= days; dd++) {
        var d = new Date(view.getFullYear(), view.getMonth(), dd);
        var ok = dayAvailable(d), key = ymd(d), sel = B.date === key;
        html += '<button type="button" class="cal-day' + (key === ymd(today) ? " today" : "") + '" data-date="' + key + '"' + (ok ? "" : " disabled") +
          ' aria-pressed="' + sel + '" aria-label="' + fmtDate(d) + (ok ? ", available" : ", unavailable") + '">' + dd + (ok ? '<span class="dot" aria-hidden="true"></span>' : "") + "</button>";
      }
      grid.innerHTML = html;
      $("#cal-prev").disabled = view <= new Date(minDate.getFullYear(), minDate.getMonth(), 1);
      $("#cal-next").disabled = new Date(view.getFullYear(), view.getMonth() + 1, 1) > maxDate;
    }
    function renderSlots() {
      var wrap = $("#slots"), head = $("#slots-title");
      if (!B.date) { head.textContent = "Select a date to see available times"; wrap.innerHTML = ""; return; }
      var d = new Date(B.date + "T00:00:00");
      head.textContent = "Available times · " + d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      var list = slotsFor(B.date, selectedType());
      wrap.innerHTML = list.map(function (s) {
        return '<button type="button" class="slot" data-time="' + s.label + '"' + (s.open ? "" : " disabled") + ' aria-pressed="' + (B.time === s.label) + '" aria-label="' + s.label + (s.open ? "" : " (booked)") + '">' + s.label + "</button>";
      }).join("");
    }
    $("#cal-prev").addEventListener("click", function () { view.setMonth(view.getMonth() - 1); renderCal(); });
    $("#cal-next").addEventListener("click", function () { view.setMonth(view.getMonth() + 1); renderCal(); });
    $("#cal-grid").addEventListener("click", function (e) {
      var b = e.target.closest(".cal-day"); if (!b || b.disabled) return;
      B.date = b.getAttribute("data-date"); B.time = null; renderCal(); renderSlots(); updateSummary();
      $("#datetime-error").textContent = "";
      var focusBtn = $(".cal-day[data-date='" + B.date + "']"); if (focusBtn) focusBtn.focus();
    });
    $("#slots").addEventListener("click", function (e) {
      var b = e.target.closest(".slot"); if (!b || b.disabled) return;
      B.time = b.getAttribute("data-time"); renderSlots(); updateSummary(); $("#datetime-error").textContent = "";
      var fb = $(".slot[data-time='" + B.time + "']"); if (fb) fb.focus();
    });
    $$("input[name='appt-type']", bForm).forEach(function (r) { r.addEventListener("change", function () { B.time = null; if (B.date && !dayAvailable(new Date(B.date + "T00:00:00"))) B.date = null; renderCal(); renderSlots(); updateSummary(); }); });
    $$("#b-advisor, #b-format, #b-topic").forEach(function (el) { el.addEventListener("change", updateSummary); });
    $$("input[name='format']", bForm).forEach(function (el) { el.addEventListener("change", updateSummary); });

    function updateSummary() {
      var t = selectedType();
      var adv = $("#b-advisor"), advName = adv.value ? findBy(TEAM, "slug", adv.value).name : "First available advisor";
      var fmt = $("input[name='format']:checked", bForm);
      function put(id, val) { var el = doc.getElementById(id); el.textContent = val || "Not selected"; el.classList.toggle("empty", !val); }
      put("sum-type", t ? t.name + " · " + t.length : "");
      put("sum-advisor", advName);
      put("sum-date", B.date ? fmtDate(new Date(B.date + "T00:00:00")) : "");
      put("sum-time", B.time ? B.time + " " + tz : "");
      put("sum-format", fmt ? labelFor(fmt) : "");
    }

    function buildReview() {
      var d = formData(bForm), t = selectedType();
      var adv = d.advisor ? findBy(TEAM, "slug", d.advisor).name : "First available advisor";
      var topicS = d.topic ? (findBy(SERVICES, "slug", d.topic) || { name: d.topic }).name : "General discussion";
      var fmt = $("input[name='format']:checked", bForm);
      var rows = [
        ["Appointment", t.name + " (" + t.length + ")", 0], ["Advisor", adv, 0],
        ["Date", fmtDate(new Date(B.date + "T00:00:00")), 1], ["Time", B.time + " " + tz, 1],
        ["Name", d.name, 2], ["Email", d.email, 2], ["Phone", d.phone || "Not provided", 2], ["Company", (d.company || "—") + (d.role ? " · " + d.role : ""), 2],
        ["Meeting format", fmt ? labelFor(fmt) : "", 3], ["Topic", topicS, 3], ["Reminder", d.reminder ? "Email reminder requested" : "No reminder", 3]
      ];
      var html = rows.map(function (r) { return "<div><dt>" + esc(r[0]) + ' <button type="button" class="edit-link" data-edit="' + r[2] + '">Edit<span class="visually-hidden"> ' + esc(r[0]) + "</span></button></dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("");
      if (d.notes) html += '<div class="full"><dt>Notes</dt><dd>' + esc(d.notes) + "</dd></div>";
      $("#booking-review").innerHTML = html;
    }

    var bStepper = new Stepper(booking, {
      validate: function (i) {
        if (i === 0 && !selectedType()) { validateGroup(booking.querySelector(".step-panel")); return false; }
        if (i === 1 && (!B.date || !B.time)) { $("#datetime-error").textContent = !B.date ? "Choose an available date." : "Choose an available time."; var target = !B.date ? $(".cal-day:not(:disabled)") : $(".slot:not(:disabled)"); if (target) target.focus(); return false; }
        return true;
      },
      onShow: function (i) { if (i === 4) buildReview(); }
    });

    function icsDate(dateStr, h, m) { return dateStr.replace(/-/g, "") + "T" + String(h).padStart(2, "0") + String(m).padStart(2, "0") + "00"; }
    function parseTime(label) { var p = label.match(/(\d+):(\d+) (AM|PM)/); var h = parseInt(p[1], 10) % 12 + (p[3] === "PM" ? 12 : 0); return { h: h, m: parseInt(p[2], 10) }; }

    bForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var last = bStepper.panels[bStepper.panels.length - 1];
      if (!validateScope(last)) return;
      var t = selectedType(), ref = demoRef("ALD");
      var d = formData(bForm);
      var st = parseTime(B.time), endMin = st.h * 60 + st.m + t.minutes;
      var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Aldermoor Advisory Demo//EN", "BEGIN:VEVENT",
        "UID:" + ref + "@aldermoor-demo", "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
        "DTSTART;TZID=America/Chicago:" + icsDate(B.date, st.h, st.m),
        "DTEND;TZID=America/Chicago:" + icsDate(B.date, Math.floor(endMin / 60), endMin % 60),
        "SUMMARY:[DEMO] " + t.name + " — Aldermoor Advisory (fictional)",
        "DESCRIPTION:Demonstration booking only. No appointment exists. Reference " + ref + ".",
        "END:VEVENT", "END:VCALENDAR"].join("\r\n");
      var blob = new Blob([ics], { type: "text/calendar" });
      var link = $("#ics-link");
      link.href = URL.createObjectURL(blob); link.download = "aldermoor-demo-" + B.date + ".ics";
      $("#conf-ref").textContent = ref;
      $("#conf-name").textContent = (d.name || "").split(" ")[0] || "there";
      $("#conf-when").textContent = t.name + " on " + fmtDate(new Date(B.date + "T00:00:00")) + " at " + B.time + " " + tz;
      $("#conf-email").textContent = d.email;
      booking.hidden = true;
      var conf = $("#booking-confirmation"); conf.hidden = false; conf.setAttribute("tabindex", "-1"); conf.focus(); scrollToEl(conf);
      $("#booking-aside").hidden = true;
    });
    $("#book-again").addEventListener("click", function () {
      bForm.reset(); B.date = null; B.time = null;
      $("#booking-confirmation").hidden = true; booking.hidden = false; $("#booking-aside").hidden = false;
      renderCal(); renderSlots(); updateSummary(); bStepper.go(0);
    });

    renderCal(); renderSlots(); updateSummary();
  }

  /* ==========================================================================
     Client onboarding
     ========================================================================== */
  var onboard = $("#onboarding");
  if (onboard) {
    var oForm = $("#onboarding-form");
    var DRAFT_KEY = "aldermoor-demo-onboarding";
    liveValidate(oForm);

    function restore(data) {
      if (!data) return;
      Object.keys(data).forEach(function (k) {
        var val = data[k];
        $$("[name='" + k + "']", oForm).forEach(function (f) {
          if (f.type === "radio") f.checked = f.value === val;
          else if (f.type === "checkbox" && f.hasAttribute("data-multi")) f.checked = Array.isArray(val) && val.indexOf(f.value) > -1;
          else if (f.type === "checkbox") f.checked = !!val;
          else f.value = val;
        });
      });
    }
    var draft = store(DRAFT_KEY);
    var draftNote = $("#draft-note");
    if (draft && draft.data) {
      restore(draft.data);
      draftNote.hidden = false;
      $("#draft-time").textContent = new Date(draft.saved).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
    }
    var pre = param("service");
    if (pre) { var cb = doc.getElementById("svc-" + pre); if (cb) cb.checked = true; }

    var saveTimer;
    oForm.addEventListener("input", function () {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        var data = formData(oForm); delete data.consent;
        store(DRAFT_KEY, { saved: Date.now(), data: data });
        var s = $("#autosave"); if (s) s.textContent = "Draft saved on this device · " + new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
      }, 500);
    });
    $("#clear-draft").addEventListener("click", function () {
      store(DRAFT_KEY, null); oForm.reset(); draftNote.hidden = true;
      $$("[aria-invalid]", oForm).forEach(function (f) { f.removeAttribute("aria-invalid"); });
      $$(".error-msg", oForm).forEach(function (m) { m.textContent = ""; });
      toast("Draft cleared from this device.");
      oStepper.go(0);
    });

    var objCount = $("#o-objectives"), objOut = $("#o-objectives-count");
    if (objCount && objOut) objCount.addEventListener("input", function () { objOut.textContent = objCount.value.length + " / 1200"; });

    function buildOReview() {
      var d = formData(oForm);
      var svcNames = (d.services || []).map(function (s) { var x = findBy(SERVICES, "slug", s); return x ? x.name : s; }).join(", ");
      function lab(name) { var r = $("input[name='" + name + "']:checked", oForm); return r ? labelFor(r) : "—"; }
      function opt(id) { var s = doc.getElementById(id); return s && s.value ? s.options[s.selectedIndex].text : "—"; }
      var rows = [
        ["Contact", d.fullname + " · " + d.title, 0], ["Email / phone", d.email + (d.phone ? " · " + d.phone : ""), 0],
        ["Business", d.company + (d.website ? " · " + d.website : ""), 0], ["Industry / size", opt("o-industry") + " · " + opt("o-size"), 0],
        ["Years in business / location", opt("o-years") + " · " + (d.location || "—"), 0],
        ["Service interests", svcNames || "—", 1], ["Main challenge", d.challenge || "—", 1],
        ["Objectives", d.objectives || "—", 2], ["Measure of success", d.success || "—", 2], ["Ideal start", opt("o-start") + " · " + lab("urgency"), 2],
        ["Budget range", lab("budget"), 3], ["Consultation method", lab("method"), 3], ["Decision makers", d.decision || "—", 3], ["Heard about us", opt("o-source"), 3]
      ];
      $("#onboarding-review").innerHTML = rows.map(function (r) { return '<div class="' + (r[1].length > 70 ? "full" : "") + '"><dt>' + esc(r[0]) + ' <button type="button" class="edit-link" data-edit="' + r[2] + '">Edit<span class="visually-hidden"> ' + esc(r[0]) + "</span></button></dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("");
    }
    var oStepper = new Stepper(onboard, { onShow: function (i) { if (i === 4) buildOReview(); } });

    oForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateScope(oStepper.panels[4])) return;
      var d = formData(oForm), ref = demoRef("ONB");
      $("#o-conf-ref").textContent = ref;
      $("#o-conf-name").textContent = (d.fullname || "").split(" ")[0] || "there";
      $("#o-conf-company").textContent = d.company;
      var m = $("input[name='method']:checked", oForm);
      $("#o-conf-method").textContent = m ? labelFor(m).toLowerCase() : "your preferred method";
      store(DRAFT_KEY, null);
      onboard.hidden = true;
      var conf = $("#onboarding-confirmation"); conf.hidden = false; conf.setAttribute("tabindex", "-1"); conf.focus(); scrollToEl(conf);
    });
    $("#onboard-again").addEventListener("click", function () {
      oForm.reset(); draftNote.hidden = true; $("#onboarding-confirmation").hidden = true; onboard.hidden = false; oStepper.go(0);
    });
  }
})();
