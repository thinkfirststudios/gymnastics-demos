/* DEMO — ThinkFirst Studios · [Your name here] — fictional business. */
// ROTATION + LEVELS + COST DATA — replace wholesale from the client's programme and fee schedule
// shape: { stations[{ order, name, apparatusLabel, minutes, note }], levels[{ name, order, hoursPerWeek, daysPerWeek, monthsPerYear, ageRange, meetsPerSeason, tuition, rotationPattern[] }], costLines[{ label, amount, dueMonth, collectedBy, note }] }
var DATA = {
 "stations": [
  {
   "order": 1,
   "name": "The commitment",
   "apparatusLabel": "[APPARATUS 01 — CONFIRM]",
   "minutes": "[MINUTES — CONFIRM]",
   "note": "[NOTE — CONFIRM]"
  },
  {
   "order": 2,
   "name": "The true annual cost",
   "apparatusLabel": "[APPARATUS 02 — CONFIRM]",
   "minutes": "[MINUTES — CONFIRM]",
   "note": "[NOTE — CONFIRM]"
  },
  {
   "order": 3,
   "name": "Tuition and terms",
   "apparatusLabel": "[APPARATUS 03 — CONFIRM]",
   "minutes": "[MINUTES — CONFIRM]",
   "note": "[NOTE — CONFIRM]"
  },
  {
   "order": 4,
   "name": "The training week",
   "apparatusLabel": "[APPARATUS 04 — CONFIRM]",
   "minutes": "[MINUTES — CONFIRM]",
   "note": "[NOTE — CONFIRM]"
  },
  {
   "order": 5,
   "name": "The meet season",
   "apparatusLabel": "[APPARATUS 05 — CONFIRM]",
   "minutes": "[MINUTES — CONFIRM]",
   "note": "[NOTE — CONFIRM]"
  },
  {
   "order": 6,
   "name": "The booster",
   "apparatusLabel": "[APPARATUS 06 — CONFIRM]",
   "minutes": "[MINUTES — CONFIRM]",
   "note": "[NOTE — CONFIRM]"
  }
 ],
 "levels": [
  {
   "id": "t1",
   "name": "[TEAM LEVEL NAME 01 — CONFIRM]",
   "order": 1,
   "hoursPerWeek": "[HOURS PER WEEK — CONFIRM]",
   "daysPerWeek": "[DAYS PER WEEK — CONFIRM]",
   "monthsPerYear": "[MONTHS PER YEAR — CONFIRM]",
   "ageRange": "[TYPICAL AGE RANGE — CONFIRM]",
   "meetsPerSeason": "[MEETS PER SEASON — CONFIRM]",
   "tuition": "$[XXX]/mo",
   "days": [
    0,
    1,
    3
   ],
   "rotationPattern": [
    1,
    3,
    1,
    3
   ]
  },
  {
   "id": "t2",
   "name": "[TEAM LEVEL NAME 02 — CONFIRM]",
   "order": 2,
   "hoursPerWeek": "[HOURS PER WEEK — CONFIRM]",
   "daysPerWeek": "[DAYS PER WEEK — CONFIRM]",
   "monthsPerYear": "[MONTHS PER YEAR — CONFIRM]",
   "ageRange": "[TYPICAL AGE RANGE — CONFIRM]",
   "meetsPerSeason": "[MEETS PER SEASON — CONFIRM]",
   "tuition": "$[XXX]/mo",
   "days": [
    0,
    1,
    3,
    4
   ],
   "rotationPattern": [
    2,
    4,
    2,
    4
   ]
  },
  {
   "id": "t3",
   "name": "[TEAM LEVEL NAME 03 — CONFIRM]",
   "order": 3,
   "hoursPerWeek": "[HOURS PER WEEK — CONFIRM]",
   "daysPerWeek": "[DAYS PER WEEK — CONFIRM]",
   "monthsPerYear": "[MONTHS PER YEAR — CONFIRM]",
   "ageRange": "[TYPICAL AGE RANGE — CONFIRM]",
   "meetsPerSeason": "[MEETS PER SEASON — CONFIRM]",
   "tuition": "$[XXX]/mo",
   "days": [
    0,
    1,
    3,
    4
   ],
   "rotationPattern": [
    3,
    1,
    3,
    1
   ]
  },
  {
   "id": "t4",
   "name": "[TEAM LEVEL NAME 04 — CONFIRM]",
   "order": 4,
   "hoursPerWeek": "[HOURS PER WEEK — CONFIRM]",
   "daysPerWeek": "[DAYS PER WEEK — CONFIRM]",
   "monthsPerYear": "[MONTHS PER YEAR — CONFIRM]",
   "ageRange": "[TYPICAL AGE RANGE — CONFIRM]",
   "meetsPerSeason": "[MEETS PER SEASON — CONFIRM]",
   "tuition": "$[XXX]/mo",
   "days": [
    0,
    1,
    3,
    4,
    5
   ],
   "rotationPattern": [
    4,
    2,
    4,
    2
   ]
  },
  {
   "id": "t5",
   "name": "[TEAM LEVEL NAME 05 — CONFIRM]",
   "order": 5,
   "hoursPerWeek": "[HOURS PER WEEK — CONFIRM]",
   "daysPerWeek": "[DAYS PER WEEK — CONFIRM]",
   "monthsPerYear": "[MONTHS PER YEAR — CONFIRM]",
   "ageRange": "[TYPICAL AGE RANGE — CONFIRM]",
   "meetsPerSeason": "[MEETS PER SEASON — CONFIRM]",
   "tuition": "$[XXX]/mo",
   "days": [
    0,
    1,
    3,
    4,
    5
   ],
   "rotationPattern": [
    1,
    3,
    1,
    3
   ]
  }
 ],
 "costLines": [
  {
   "label": "Monthly team tuition",
   "amount": "$[XXX]/mo",
   "dueMonth": "[MONTHLY]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Annual registration fee",
   "amount": "$[XXX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Club / governing-body athlete registration",
   "amount": "$[XX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Meet entry fee × [0n] meets",
   "amount": "$[XXX]",
   "dueMonth": "[MONTHS]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Per-athlete meet coaching fee",
   "amount": "$[XXX]",
   "dueMonth": "[PER MEET]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Coaches' travel share",
   "amount": "$[XXX]",
   "dueMonth": "[PER TRAVEL MEET]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Booster dues",
   "amount": "$[XXX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[BOOSTER]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Fundraising / volunteer obligation",
   "amount": "$[XXX] or [HOURS]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[BOOSTER]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Competition leotard",
   "amount": "$[XXX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Warm-up and bag",
   "amount": "$[XXX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Practice wear",
   "amount": "$[XX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Choreography fee",
   "amount": "$[XXX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Music fee",
   "amount": "$[XX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CLUB]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "Family travel (estimate)",
   "amount": "$[XXX]",
   "dueMonth": "[MONTHS]",
   "collectedBy": "[FAMILY]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  },
  {
   "label": "[OTHER LINE — CONFIRM]",
   "amount": "$[XXX]",
   "dueMonth": "[MONTH]",
   "collectedBy": "[CONFIRM]",
   "note": "[WHAT THIS COVERS — CONFIRM]"
  }
 ]
};
var DAYS6 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
(function () {
  var root = document.documentElement; root.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.__reduce = reduce;
  document.querySelectorAll("[data-year]").forEach(function (e) { e.textContent = new Date().getFullYear(); });
  var day = new Date().getDay();
  document.querySelectorAll('tr[data-day="' + day + '"]').forEach(function (t) { t.classList.add("is-today"); });

  var head = document.querySelector("[data-head]"), btn = document.querySelector(".menu-btn"), nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.style.setProperty("--nav-top", head.getBoundingClientRect().bottom + "px");
      var o = nav.classList.toggle("is-open"); btn.setAttribute("aria-expanded", o); btn.textContent = o ? "Close" : "Menu";
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { btn.click(); btn.focus(); } });
  }
  var hero = document.querySelector("[data-hero]"), mbar = document.querySelector("[data-mbar]"), trigger = document.querySelector("[data-mbar-after]") || hero;
  function onScroll() {
    var y = window.scrollY;
    if (head) head.classList.toggle("is-condensed", reduce || y > 110);
    if (mbar) mbar.classList.toggle("show", reduce || !trigger || trigger.getBoundingClientRect().bottom < 0);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  var rv = document.querySelectorAll(".rv");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -6% 0px", threshold: .06 });
    rv.forEach(function (e) { io.observe(e); });
  } else rv.forEach(function (e) { e.classList.add("is-in"); });

  // slot pickers echo into a summary
  document.querySelectorAll("[data-slots]").forEach(function (box) {
    var out = document.querySelector(box.getAttribute("data-slots"));
    box.addEventListener("change", function (e) { if (e.target.name === "slot" && out) out.textContent = e.target.getAttribute("data-label"); });
  });

  // demo forms: validate, never send
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); var bad = null;
      form.querySelectorAll("[required]").forEach(function (r) {
        var b = r.type === "checkbox" ? !r.checked : r.type === "radio" ? !form.querySelector('[name="' + r.name + '"]:checked') : (!String(r.value).trim() || (r.type === "email" && !/^\S+@\S+\.\S+$/.test(r.value)));
        r.setAttribute("aria-invalid", b);
        if (b && !bad) bad = r;
      });
      if (bad) { var st = bad.closest("[data-step]"); if (st && st.hidden) st.hidden = false; bad.focus(); return; }
      var s = form.querySelector(".form-status"); s.hidden = false; s.textContent = form.getAttribute("data-ok") + " — Demo only: nothing was sent, stored or charged."; s.focus();
    });
  });
})();


(function () {
  var reduce = window.__reduce;
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function ph(s) { return '<span class="ph">' + esc(s) + "</span>"; }
  var pr = document.querySelector("[data-promo-x]"); if (pr) pr.addEventListener("click", function () { document.querySelector("[data-promo]").classList.add("is-gone"); });
  document.querySelectorAll("[data-portal-target]").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); alert("Demo: links out to the club's existing portal — parent accounts only. " + a.getAttribute("data-portal-target")); }); });

  // ---- one level control drives the cost table, the training week and the commitment strip ----
  var lv = new URLSearchParams(location.search).get("level") || DATA.levels[0].id;
  function L() { for (var i = 0; i < DATA.levels.length; i++) if (DATA.levels[i].id === lv) return DATA.levels[i]; return DATA.levels[0]; }
  function costHTML(full) {
    var l = L();
    var head = '<thead><tr><th scope="col">Line</th><th scope="col">Amount</th><th scope="col" class="due">When it falls due</th><th scope="col">Collected by</th>' + (full ? '<th scope="col">Note</th>' : "") + "</tr></thead>";
    var rows = DATA.costLines.map(function (c, k) {
      return '<tr style="--r:' + k + '"><th scope="row">' + (c.label.charAt(0) === "[" ? ph(c.label) : esc(c.label)) + '</th><td data-l="Amount">' + ph(k === 0 ? l.tuition : c.amount) + '</td><td data-l="When it falls due">' + ph(c.dueMonth) + '</td><td data-l="Collected by">' + ph(c.collectedBy) + "</td>" + (full ? '<td data-l="Note">' + ph(c.note) + "</td>" : "") + "</tr>";
    }).join("");
    var cols = full ? 4 : 3;
    return '<table class="cost reflow' + (reduce ? "" : " is-fresh") + '"><caption>The year at ' + esc(l.name) + " · " + ph("[LAST UPDATED — CONFIRM]") + "<small>Every amount is a placeholder until the club confirms it. No line has been left off because it is awkward.</small></caption>" + head + "<tbody>" + rows + "</tbody>" +
      '<tfoot><tr><th scope="row">Estimated annual total</th><td data-l="Estimated annual total" colspan="' + cols + '">' + ph("$[X,XXX]") + "<small>[ESTIMATE — BASED ON PLACEHOLDER FIGURES. NOT A QUOTE. CONFIRM EVERY LINE.]</small></td></tr></tfoot></table>";
  }
  function weekHTML() {
    var l = L(), h = '<table class="wkt reflow"><caption>The week at ' + esc(l.name) + '</caption><thead><tr><th scope="col">Day</th>';
    for (var r = 1; r <= 4; r++) h += '<th scope="col">Rotation ' + r + "</th>";
    h += "</tr></thead><tbody>";
    DAYS6.forEach(function (d, i) {
      var on = l.days.indexOf(i) > -1;
      h += '<tr><th scope="row">' + d + "</th>";
      for (var r = 0; r < 4; r++) {
        var st = DATA.stations[(l.rotationPattern[r] + i) % DATA.stations.length];
        h += on ? '<td data-l="Rotation ' + (r + 1) + '">' + ph(st.apparatusLabel) + "<br>" + ph(st.minutes) + "</td>" : '<td class="rest" data-l="Rotation ' + (r + 1) + '">—<span class="sr"> no training</span></td>';
      }
      h += "</tr>";
    });
    return h + '</tbody><tfoot><tr><th scope="row">Totals</th><td colspan="4" data-l="Totals">' + ph(l.hoursPerWeek) + " · " + ph(l.daysPerWeek) + " · " + ph(l.monthsPerYear) + "</td></tr></tfoot></table>";
  }
  function render(swap) {
    document.querySelectorAll(".lvbtn").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lv") === lv); });
    document.querySelectorAll("[data-cost]").forEach(function (el) {
      var go = function () { el.innerHTML = costHTML(el.getAttribute("data-full") === "1"); var t = el.querySelector(".cost"); if (swap || reduce) { t.classList.remove("is-fresh"); } else if ("IntersectionObserver" in window) { var o = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { t.classList.add("is-in"); o.disconnect(); } }, { threshold: .1 }); o.observe(t); } else t.classList.add("is-in"); };
      if (swap && !reduce) { var t0 = el.querySelector(".cost"); if (t0) t0.classList.add("is-swap"); setTimeout(go, 150); } else go();
    });
    document.querySelectorAll("[data-week]").forEach(function (el) { el.innerHTML = weekHTML(); });
    document.querySelectorAll("[data-cstrip]").forEach(function (el) { var l = L(); el.innerHTML = ph(l.hoursPerWeek) + " · " + ph(l.daysPerWeek) + " · " + ph(l.monthsPerYear) + " · " + ph("[12]") + "-month commitment"; });
    document.querySelectorAll("[data-carry]").forEach(function (a) { a.href = a.getAttribute("href").split("?")[0] + "?level=" + lv; });
  }
  render(false);
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lvbtn");
    if (b) { lv = b.getAttribute("data-lv"); history.replaceState(null, "", location.pathname + "?level=" + lv + location.hash); render(true); }
  });

  // ---- the rotation follows the stations, always the same way round ----
  var segs = document.querySelectorAll(".seg"), plates = document.querySelectorAll("[data-plate]");
  function setOn(n) { segs.forEach(function (s) { s.classList.toggle("is-on", +s.getAttribute("data-seg") === n); }); plates.forEach(function (p) { p.classList.toggle("is-on", +p.getAttribute("data-plate") === n); }); }
  var stations = document.querySelectorAll("[data-station]");
  if (stations.length && "IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) setOn(+en.target.getAttribute("data-station")); }); }, { rootMargin: "-40% 0px -55% 0px" });
    stations.forEach(function (s) { so.observe(s); });
  }
  setOn(1);

  // ---- tryout: the chosen date is echoed back ----
  var tf = document.querySelector("[data-tryout]");
  if (tf) tf.addEventListener("change", function (e) { if (e.target.name === "date") { var o = document.querySelector("[data-echo]"); if (o) o.innerHTML = ph(e.target.getAttribute("data-date")) + "<br>Levels " + ph("[LEVELS — CONFIRM]"); } });
})();

