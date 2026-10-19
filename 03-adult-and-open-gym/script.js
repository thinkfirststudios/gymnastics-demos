/* DEMO — ThinkFirst Studios · [Your name here] — fictional business. */
(function () {
  var d = document, root = d.documentElement; root.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  d.querySelectorAll("[data-year]").forEach(function (e) { e.textContent = new Date().getFullYear(); });

  // header: condense on scroll, mobile menu
  var head = d.querySelector(".site-head"), btn = d.querySelector(".menu-btn"), nav = d.getElementById("site-nav"), mbar = d.querySelector(".mbar"), hero = d.querySelector("[data-hero]");
  function onScroll() {
    var y = window.scrollY;
    if (head) head.classList.toggle("is-c", y > 40);
    if (mbar) mbar.classList.toggle("show", reduce || !hero || hero.getBoundingClientRect().bottom < 60);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.style.setProperty("--navtop", head.getBoundingClientRect().bottom + "px");
      var o = nav.classList.toggle("is-open"); btn.setAttribute("aria-expanded", o); btn.textContent = o ? "Close" : "Menu";
      if (o) head.classList.add("is-c");
    });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { btn.click(); btn.focus(); } });
  }

  // reveals
  var rv = d.querySelectorAll(".rv, .rv-z");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    rv.forEach(function (e) { io.observe(e); });
  } else rv.forEach(function (e) { e.classList.add("in"); });

  // dates: fill this week's dates into schedule headers and anything with data-dow
  var now = new Date(), mon = new Date(now); mon.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  var MON = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  d.querySelectorAll("[data-dow]").forEach(function (e) { var x = new Date(mon); x.setDate(mon.getDate() + (+e.getAttribute("data-dow"))); e.textContent = MON[x.getMonth()] + " " + x.getDate(); });

  // schedule filters (any table with data-filterable; chips carry data-f / data-v; cells carry data-<f>)
  d.querySelectorAll("[data-filters]").forEach(function (box) {
    var target = d.querySelector(box.getAttribute("data-filters")), state = {};
    var p = new URLSearchParams(location.search);
    box.querySelectorAll(".fchip").forEach(function (c) { var f = c.getAttribute("data-f"); if (p.get(f) && p.get(f).split(",").indexOf(c.getAttribute("data-v")) > -1) { (state[f] = state[f] || []).push(c.getAttribute("data-v")); } });
    function paint(push) {
      box.querySelectorAll(".fchip").forEach(function (c) { var f = c.getAttribute("data-f"); c.setAttribute("aria-pressed", !!(state[f] && state[f].indexOf(c.getAttribute("data-v")) > -1)); });
      var shown = 0, total = 0;
      target.querySelectorAll("[data-item]").forEach(function (it) {
        total++;
        var ok = Object.keys(state).every(function (f) { return !state[f].length || state[f].indexOf(it.getAttribute("data-" + f)) > -1; });
        it.classList.toggle("is-out", !ok); if (ok) shown++;
      });
      var ro = box.querySelector("[data-readout]"); if (ro) ro.textContent = shown + " of " + total + " classes showing";
      var q = new URLSearchParams(); Object.keys(state).forEach(function (f) { if (state[f].length) q.set(f, state[f].join(",")); });
      var url = location.pathname + (q.toString() ? "?" + q : "") + location.hash;
      if (push) history.replaceState(null, "", url);
    }
    box.addEventListener("click", function (e) {
      var c = e.target.closest(".fchip"); if (c) { var f = c.getAttribute("data-f"), v = c.getAttribute("data-v"); state[f] = state[f] || []; var i = state[f].indexOf(v); if (i > -1) state[f].splice(i, 1); else state[f].push(v); paint(true); }
      if (e.target.closest("[data-clear]")) { state = {}; paint(true); }
    });
    paint(false);
  });

  // tabs (direction toggle)
  d.querySelectorAll("[data-tabs]").forEach(function (t) {
    var bs = t.querySelectorAll("[role=tab]");
    bs.forEach(function (b) { b.addEventListener("click", function () { bs.forEach(function (x) { var on = x === b; x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1; d.getElementById(x.getAttribute("aria-controls")).hidden = !on; }); }); });
  });

  // federation questionnaire: diamond sliders -> best match tile
  d.querySelectorAll("[data-quiz]").forEach(function (q) {
    var tiles = d.querySelectorAll(q.getAttribute("data-quiz") + " [data-match]"), st = {};
    function score() {
      var best = null, bs = -1;
      tiles.forEach(function (t) {
        var s = 0; Object.keys(st).forEach(function (k) { var w = (t.getAttribute("data-" + k) || "").split(" "); if (w.indexOf(st[k]) > -1) s += 2; });
        if (s > bs) { bs = s; best = t; }
      });
      tiles.forEach(function (t) { t.classList.toggle("dim", Object.keys(st).length > 0 && t !== best); var b = t.querySelector(".best"); if (b) b.hidden = t !== best || !Object.keys(st).length; });
      var out = d.querySelector("[data-quizout]"); if (out && best) out.textContent = Object.keys(st).length ? "Best match: " + best.getAttribute("data-name") : "";
    }
    q.addEventListener("click", function (e) {
      var o = e.target.closest(".dopt"); if (!o) return;
      var row = o.closest("[data-q]"); row.querySelectorAll(".dopt").forEach(function (x) { x.setAttribute("aria-pressed", x === o); });
      st[row.getAttribute("data-q")] = o.getAttribute("data-v"); score();
    });
    score();
  });

  // video placeholder dialog
  var dlg = d.getElementById("vdlg");
  d.addEventListener("click", function (e) {
    if (e.target.closest("[data-video]") && dlg) { e.preventDefault(); if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", ""); }
    if (e.target.closest("[data-vclose]") && dlg) { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); }
  });

  // pickers echo into a summary panel
  d.querySelectorAll("[data-echo]").forEach(function (box) {
    var out = d.querySelector(box.getAttribute("data-echo"));
    var pre = new URLSearchParams(location.search).get("pick");
    if (pre) { var r = box.querySelector('input[value="' + pre + '"]'); if (r) r.checked = true; }
    function show() { var c = box.querySelector("input:checked"); if (out && c) out.innerHTML = c.getAttribute("data-sum"); }
    box.addEventListener("change", show); show();
  });
  d.querySelectorAll("[data-weeks]").forEach(function (inp) {
    inp.addEventListener("change", function () { var t = new Date(inp.value), o = d.querySelector("[data-weeksout]"); if (!isNaN(t) && o) o.textContent = Math.max(0, Math.round((t - new Date()) / 6048e5)) + " weeks to go"; });
  });

  // demo forms: validate, never send
  d.querySelectorAll("form[data-demo]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault(); var bad = null;
      f.querySelectorAll("[required]").forEach(function (r) {
        var b = r.type === "checkbox" ? !r.checked : r.type === "radio" ? !f.querySelector('[name="' + r.name + '"]:checked') : (!String(r.value).trim() || (r.type === "email" && !/^\S+@\S+\.\S+$/.test(r.value)));
        r.setAttribute("aria-invalid", b); if (b && !bad) bad = r;
      });
      if (bad) { bad.focus(); return; }
      var s = f.querySelector(".form-status"); s.hidden = false; s.textContent = f.getAttribute("data-ok") + " Demo only: nothing was sent, stored or charged."; s.focus();
    });
  });
  d.querySelectorAll("[data-handoff]").forEach(function (a) { a.addEventListener("click", function (e) { if (a.getAttribute("href").charAt(0) === "#") { e.preventDefault(); alert("Demo: this hands off to the business's own booking system."); } }); });
})();

