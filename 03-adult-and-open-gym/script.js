/* DEMO — ThinkFirst Studios · [Your name here] — fictional business. */
// PROGRAMMES + SESSION SCHEDULE + PRICE DATA — replace wholesale from the client's schedule
// shape: { programmes[{ id, name, kind: 'class'|'dropin', blurb, ageMin, nextStart, blockWeeks, price, capacity, bookUrl }], sessions[{ programmeId, day, time, length, capacity, status, supervision }], prices[{ label, amount, note }] }
var DATA = {
 "programmes": [
  {
   "id": "beginner",
   "name": "[ADULT BEGINNER GYMNASTICS — CONFIRM]",
   "kind": "class",
   "img": "pg-beginner",
   "want": "basics",
   "blurb": "[PLACEHOLDER: 1–2 sentences — client to supply]",
   "ageMin": "[16]+",
   "nextStart": "[NEXT BLOCK STARTS — CONFIRM]",
   "blockWeeks": "[5]",
   "price": "$[XXX]",
   "capacity": "[16] places",
   "bookUrl": "[BOOKING URL — CONFIRM]"
  },
  {
   "id": "tumbling",
   "name": "[ADULT TUMBLING — CONFIRM]",
   "kind": "class",
   "img": "pg-tumbling",
   "want": "tumbling",
   "blurb": "[PLACEHOLDER: 1–2 sentences — client to supply]",
   "ageMin": "[16]+",
   "nextStart": "[NEXT BLOCK STARTS — CONFIRM]",
   "blockWeeks": "[5]",
   "price": "$[XXX]",
   "capacity": "[16] places",
   "bookUrl": "[BOOKING URL — CONFIRM]"
  },
  {
   "id": "cheer",
   "name": "[CHEER TUMBLING — CONFIRM]",
   "kind": "class",
   "img": "pg-cheer",
   "want": "cheer",
   "blurb": "[PLACEHOLDER: 1–2 sentences — client to supply]",
   "ageMin": "[16]+",
   "nextStart": "[NEXT BLOCK STARTS — CONFIRM]",
   "blockWeeks": "[5]",
   "price": "$[XXX]",
   "capacity": "[16] places",
   "bookUrl": "[BOOKING URL — CONFIRM]"
  },
  {
   "id": "parkour",
   "name": "[PARKOUR / FREERUNNING — CONFIRM]",
   "kind": "class",
   "img": "pg-parkour",
   "want": "parkour",
   "blurb": "[PLACEHOLDER: 1–2 sentences — client to supply]",
   "ageMin": "[16]+",
   "nextStart": "[NEXT BLOCK STARTS — CONFIRM]",
   "blockWeeks": "[5]",
   "price": "$[XXX]",
   "capacity": "[16] places",
   "bookUrl": "[BOOKING URL — CONFIRM]"
  },
  {
   "id": "open",
   "name": "[OPEN GYM — CONFIRM]",
   "kind": "dropin",
   "img": "pg-open",
   "want": "gym",
   "blurb": "[PLACEHOLDER: 1–2 sentences — client to supply]",
   "ageMin": "[16]+",
   "nextStart": "[NEXT OPEN GYM — CONFIRM DAY AND TIME]",
   "blockWeeks": "[5]",
   "price": "$[XX]",
   "capacity": "[16] places",
   "bookUrl": "[BOOKING URL — CONFIRM]"
  },
  {
   "id": "other",
   "name": "[PROGRAMME — CONFIRM]",
   "kind": "class",
   "img": "pg-pit",
   "want": "",
   "blurb": "[PLACEHOLDER: 1–2 sentences — client to supply]",
   "ageMin": "[16]+",
   "nextStart": "[NEXT BLOCK STARTS — CONFIRM]",
   "blockWeeks": "[5]",
   "price": "$[XXX]",
   "capacity": "[16] places",
   "bookUrl": "[BOOKING URL — CONFIRM]"
  }
 ],
 "sessions": [
  {
   "programmeId": "open",
   "day": 1,
   "time": "[8:00pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[IS OPEN GYM COACHED OR SUPERVISED? — CONFIRM]"
  },
  {
   "programmeId": "open",
   "day": 4,
   "time": "[7:30pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[IS OPEN GYM COACHED OR SUPERVISED? — CONFIRM]"
  },
  {
   "programmeId": "open",
   "day": 6,
   "time": "[2:00pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[IS OPEN GYM COACHED OR SUPERVISED? — CONFIRM]"
  },
  {
   "programmeId": "beginner",
   "day": 0,
   "time": "[7:00pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[COACHED — CONFIRM]"
  },
  {
   "programmeId": "beginner",
   "day": 5,
   "time": "[10:00am]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[COACHED — CONFIRM]"
  },
  {
   "programmeId": "tumbling",
   "day": 2,
   "time": "[7:00pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[COACHED — CONFIRM]"
  },
  {
   "programmeId": "cheer",
   "day": 3,
   "time": "[6:30pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[COACHED — CONFIRM]"
  },
  {
   "programmeId": "parkour",
   "day": 2,
   "time": "[8:15pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[COACHED — CONFIRM]"
  },
  {
   "programmeId": "parkour",
   "day": 5,
   "time": "[12:00pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[COACHED — CONFIRM]"
  },
  {
   "programmeId": "other",
   "day": 3,
   "time": "[8:00pm]",
   "length": "[90] min",
   "capacity": "[16]",
   "status": "open",
   "supervision": "[COACHED — CONFIRM]"
  }
 ],
 "prices": [
  {
   "label": "Drop-in",
   "amount": "$[XX]",
   "note": "[ONE OPEN GYM SESSION — CONFIRM]"
  },
  {
   "label": "Block",
   "amount": "$[XXX]",
   "note": "[BLOCK LENGTH — CONFIRM, 4–6 WEEKS]"
  },
  {
   "label": "Multi-session pass",
   "amount": "[MULTI-SESSION PASS — CONFIRM SIZE AND PRICE]",
   "note": "[PASS EXPIRY TERMS — CONFIRM]"
  },
  {
   "label": "Private session",
   "amount": "[PRIVATE SESSION — CONFIRM]",
   "note": "[ON ENQUIRY — CONFIRM]"
  }
 ]
};
var DAYS7 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var PANELS = {"beginner": "<article class=\"pn pn--prog\" data-prog=\"beginner\"><figure class=\"shot r-1x1\"><picture><img src=\"assets/img/pg-beginner-1000.webp\" srcset=\"assets/img/pg-beginner-500.webp 500w, assets/img/pg-beginner-1000.webp 1000w\" sizes=\"(min-width:1100px) 25vw, (min-width:700px) 33vw, 50vw\" width=\"1000\" height=\"1000\" alt=\"An adult in a grey vest holding a pair of wooden rings, looking down\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: adult beginner — the rings] STOCK</span></figure><div class=\"pn-b\"><h3><span class=\"ph\">[ADULT BEGINNER GYMNASTICS — CONFIRM]</span></h3><p><span class=\"ph\">[PLACEHOLDER: 1–2 sentences — client to supply]</span></p><ul class=\"pf\"><li><span>Age</span><span class=\"ph\">[16]+</span></li><li><span>Session</span><span class=\"ph\">[SESSION LENGTH — CONFIRM]</span></li><li><span>Next</span><span class=\"ph\">[NEXT BLOCK STARTS — CONFIRM]</span></li><li><span>Price</span><span class=\"ph\">$[XXX] block</span></li></ul><a class=\"btn btn--line\" href=\"start-a-block.html?programme=beginner\">Start the next block</a></div></article>", "tumbling": "<article class=\"pn pn--prog\" data-prog=\"tumbling\"><figure class=\"shot r-1x1\"><picture><img src=\"assets/img/pg-tumbling-1000.webp\" srcset=\"assets/img/pg-tumbling-500.webp 500w, assets/img/pg-tumbling-1000.webp 1000w\" sizes=\"(min-width:1100px) 25vw, (min-width:700px) 33vw, 50vw\" width=\"1000\" height=\"1000\" alt=\"Blue landing mats laid across a training floor\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: tumbling — the mats] STOCK</span></figure><div class=\"pn-b\"><h3><span class=\"ph\">[ADULT TUMBLING — CONFIRM]</span></h3><p><span class=\"ph\">[PLACEHOLDER: 1–2 sentences — client to supply]</span></p><ul class=\"pf\"><li><span>Age</span><span class=\"ph\">[16]+</span></li><li><span>Session</span><span class=\"ph\">[SESSION LENGTH — CONFIRM]</span></li><li><span>Next</span><span class=\"ph\">[NEXT BLOCK STARTS — CONFIRM]</span></li><li><span>Price</span><span class=\"ph\">$[XXX] block</span></li></ul><a class=\"btn btn--line\" href=\"start-a-block.html?programme=tumbling\">Start the next block</a></div></article>", "cheer": "<article class=\"pn pn--prog\" data-prog=\"cheer\"><figure class=\"shot r-1x1\"><picture><img src=\"assets/img/pg-cheer-1000.webp\" srcset=\"assets/img/pg-cheer-500.webp 500w, assets/img/pg-cheer-1000.webp 1000w\" sizes=\"(min-width:1100px) 25vw, (min-width:700px) 33vw, 50vw\" width=\"1000\" height=\"1000\" alt=\"A sprung mat laid out on a wooden hall floor\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: cheer tumbling — the mat] STOCK</span></figure><div class=\"pn-b\"><h3><span class=\"ph\">[CHEER TUMBLING — CONFIRM]</span></h3><p><span class=\"ph\">[PLACEHOLDER: 1–2 sentences — client to supply]</span></p><ul class=\"pf\"><li><span>Age</span><span class=\"ph\">[16]+</span></li><li><span>Session</span><span class=\"ph\">[SESSION LENGTH — CONFIRM]</span></li><li><span>Next</span><span class=\"ph\">[NEXT BLOCK STARTS — CONFIRM]</span></li><li><span>Price</span><span class=\"ph\">$[XXX] block</span></li></ul><a class=\"btn btn--line\" href=\"start-a-block.html?programme=cheer\">Start the next block</a></div></article>", "parkour": "<article class=\"pn pn--prog\" data-prog=\"parkour\"><figure class=\"shot r-1x1\"><picture><img src=\"assets/img/pg-parkour-1000.webp\" srcset=\"assets/img/pg-parkour-500.webp 500w, assets/img/pg-parkour-1000.webp 1000w\" sizes=\"(min-width:1100px) 25vw, (min-width:700px) 33vw, 50vw\" width=\"1000\" height=\"1000\" alt=\"An adult in a black t-shirt vaulting over a blue concrete block in a park\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: parkour — a vault] STOCK</span></figure><div class=\"pn-b\"><h3><span class=\"ph\">[PARKOUR / FREERUNNING — CONFIRM]</span></h3><p><span class=\"ph\">[PLACEHOLDER: 1–2 sentences — client to supply]</span></p><ul class=\"pf\"><li><span>Age</span><span class=\"ph\">[16]+</span></li><li><span>Session</span><span class=\"ph\">[SESSION LENGTH — CONFIRM]</span></li><li><span>Next</span><span class=\"ph\">[NEXT BLOCK STARTS — CONFIRM]</span></li><li><span>Price</span><span class=\"ph\">$[XXX] block</span></li></ul><a class=\"btn btn--line\" href=\"start-a-block.html?programme=parkour\">Start the next block</a></div></article>", "open": "<article class=\"pn pn--prog\" data-prog=\"open\"><figure class=\"shot r-1x1\"><picture><img src=\"assets/img/pg-open-1000.webp\" srcset=\"assets/img/pg-open-500.webp 500w, assets/img/pg-open-1000.webp 1000w\" sizes=\"(min-width:1100px) 25vw, (min-width:700px) 33vw, 50vw\" width=\"1000\" height=\"1000\" alt=\"Two adults doing push-ups on a wooden floor beside a pommel horse in a loft gym\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: open gym — the floor] STOCK</span></figure><div class=\"pn-b\"><h3><span class=\"ph\">[OPEN GYM — CONFIRM]</span></h3><p><span class=\"ph\">[PLACEHOLDER: 1–2 sentences — client to supply]</span></p><ul class=\"pf\"><li><span>Age</span><span class=\"ph\">[16]+</span></li><li><span>Session</span><span class=\"ph\">[SESSION LENGTH — CONFIRM]</span></li><li><span>Next</span><span class=\"ph\">[NEXT OPEN GYM — CONFIRM DAY AND TIME]</span></li><li><span>Price</span><span class=\"ph\">$[XX] drop-in</span></li></ul><a class=\"btn\" href=\"drop-in.html\">Drop in [TUE] [8:00PM]</a></div></article>", "other": "<article class=\"pn pn--prog\" data-prog=\"other\"><figure class=\"shot r-1x1\"><picture><img src=\"assets/img/pg-pit-1000.webp\" srcset=\"assets/img/pg-pit-500.webp 500w, assets/img/pg-pit-1000.webp 1000w\" sizes=\"(min-width:1100px) 25vw, (min-width:700px) 33vw, 50vw\" width=\"1000\" height=\"1000\" alt=\"A pit of foam blocks beside blue mats\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: the foam pit] STOCK</span></figure><div class=\"pn-b\"><h3><span class=\"ph\">[PROGRAMME — CONFIRM]</span></h3><p><span class=\"ph\">[PLACEHOLDER: 1–2 sentences — client to supply]</span></p><ul class=\"pf\"><li><span>Age</span><span class=\"ph\">[16]+</span></li><li><span>Session</span><span class=\"ph\">[SESSION LENGTH — CONFIRM]</span></li><li><span>Next</span><span class=\"ph\">[NEXT BLOCK STARTS — CONFIRM]</span></li><li><span>Price</span><span class=\"ph\">$[XXX] block</span></li></ul><a class=\"btn btn--line\" href=\"start-a-block.html?programme=other\">Start the next block</a></div></article>"};
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
  function prog(id) { for (var i = 0; i < DATA.programmes.length; i++) if (DATA.programmes[i].id === id) return DATA.programmes[i]; return null; }
  var pr = document.querySelector("[data-promo-x]"); if (pr) pr.addEventListener("click", function () { document.querySelector("[data-promo]").classList.add("is-gone"); });

  // ---- boundaries draw once on first reveal ----
  var bs = document.querySelectorAll("[data-bound]");
  if (reduce || !("IntersectionObserver" in window)) bs.forEach(function (b) { b.classList.add("is-drawn"); });
  else { var bo = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-drawn"); bo.unobserve(en.target); } }); }, { threshold: .08 }); bs.forEach(function (b) { bo.observe(b); }); }

  // ---- the finder: want -> before -> commit; commit maps straight to the two doors ----
  var st = { want: "", before: "", commit: "" };
  var WANT = { basics: "beginner", tumbling: "tumbling", cheer: "cheer", parkour: "parkour", gym: "open" };
  function readURL() { var p = new URLSearchParams(location.search); st.want = p.get("want") || ""; st.before = p.get("before") || ""; st.commit = p.get("commit") || ""; }
  function best() {
    if (st.commit === "one") return prog("open");
    if (!st.want) return st.commit === "few" ? prog("beginner") : null;
    var p = prog(WANT[st.want]);
    if (st.commit === "few" && p && p.kind === "dropin") return prog(st.before === "never" ? "beginner" : "tumbling");
    if (st.before === "never" && p && p.id === "tumbling") return p;
    return p;
  }
  function paint(push) {
    document.querySelectorAll("[data-finder] .chip").forEach(function (b) { b.setAttribute("aria-pressed", st[b.getAttribute("data-q")] === b.getAttribute("data-v")); });
    var m = best(), any = st.want || st.commit;
    document.querySelectorAll("[data-result]").forEach(function (r) {
      if (!any) { r.innerHTML = ""; return; }
      if (!m) { r.innerHTML = '<p class="empty-state">Nothing matches that yet. The next open gym is ' + ph("[NEXT OPEN GYM — CONFIRM DAY AND TIME]") + ' — <a href="drop-in.html">drop in</a>.</p>'; return; }
      var adj = DATA.programmes.filter(function (p) { return p.id !== m.id; }).slice(0, 2);
      var nx = DATA.sessions.filter(function (s) { return s.programmeId === m.id; })[0];
      r.innerHTML = '<p class="best-l">Best match' + (nx ? " · next: " + DAYS7[nx.day] + " " + ph(nx.time) : "") + '</p><div class="panels panels--2">' + PANELS[m.id] + "</div>" +
        '<p class="best-l" style="margin-top:10px">Also on the floor</p><div class="panels panels--2">' + adj.map(function (p) { return PANELS[p.id]; }).join("") + "</div>";
    });
    document.querySelectorAll("[data-readout]").forEach(function (r) { r.style.opacity = 0; setTimeout(function () { r.innerHTML = !any ? "Pick what you want to do to see the best match." : m ? "Best match: " + ph(m.name) + (m.kind === "dropin" ? " — door one, drop in" : " — door two, a short block") : "No match yet."; r.style.opacity = 1; }, reduce ? 0 : 140); });
    document.querySelectorAll("[data-prog]").forEach(function (p) { if (p.closest("[data-result]")) return; var on = !any || (m && p.getAttribute("data-prog") === m.id); p.classList.toggle("is-match", !!(any && on)); p.classList.toggle("is-out", !!(any && !on)); });
    paintWeek();
    var q = new URLSearchParams(); ["want", "before", "commit"].forEach(function (k) { if (st[k]) q.set(k, st[k]); });
    var qs = q.toString();
    document.querySelectorAll("[data-carry]").forEach(function (a) { a.href = a.getAttribute("href").split("?")[0] + (qs ? "?" + qs : ""); });
    if (document.querySelector("[data-finder]") && push !== null) { var url = location.pathname + (qs ? "?" + qs : "") + location.hash; if (push) history.pushState(null, "", url); else history.replaceState(null, "", url); }
  }
  // ---- the week ----
  var mq = window.matchMedia("(max-width: 760px)");
  var times = DATA.sessions.map(function (s) { return s.time; }).filter(function (t, i, a) { return a.indexOf(t) === i; });
  function cellFor(d, t, only) {
    return DATA.sessions.filter(function (s) { return s.day === d && s.time === t && (!only || s.programmeId === only); }).map(function (s) {
      var p = prog(s.programmeId), href = p.kind === "dropin" ? "drop-in.html" : "start-a-block.html?programme=" + p.id;
      return '<div class="wc" data-pid="' + p.id + '"><span>' + ph(s.time) + "</span><b>" + esc(p.name) + "</b><span>" + ph(s.length) + " · " + ph(p.ageMin) + " · " + ph(s.capacity) + " places</span><span>" + ph(s.supervision) + '</span><a href="' + href + '" data-booking-target="[BOOKING URL — CONFIRM]">' + (p.kind === "dropin" ? "Drop in" : "Start the block") + "</a></div>";
    }).join("");
  }
  function renderWeek(el) {
    var only = el.getAttribute("data-only"), cap = "<caption>Adult sessions this week · " + ph("[LAST UPDATED — CONFIRM]") + "</caption>", h, d;
    var ts = times.filter(function (t) { return !only || DATA.sessions.some(function (s) { return s.time === t && s.programmeId === only; }); });
    if (!mq.matches) {
      h = '<table class="wkt seams">' + cap + '<thead><tr><th scope="col">Time</th>' + DAYS7.map(function (x) { return '<th scope="col">' + x.slice(0, 3) + "</th>"; }).join("") + "</tr></thead><tbody>";
      ts.forEach(function (t) { h += '<tr><th scope="row">' + ph(t) + "</th>"; for (d = 0; d < 7; d++) { var c = cellFor(d, t, only); h += c ? "<td>" + c + "</td>" : '<td class="empty">—<span class="sr"> no session</span></td>'; } h += "</tr>"; });
    } else {
      h = '<table class="wkt wkt--m reflow">' + cap + '<thead><tr><th scope="col">Day</th><th scope="col">Sessions</th></tr></thead><tbody>';
      for (d = 0; d < 7; d++) { var cs = ts.map(function (t) { return cellFor(d, t, only); }).join(""); h += '<tr><th scope="row">' + DAYS7[d] + '</th><td data-l="Sessions"' + (cs ? ">" + cs : ' class="empty">— none') + "</td></tr>"; }
    }
    el.innerHTML = h + "</tbody></table>";
  }
  function paintWeek() {
    var m = best();
    document.querySelectorAll(".wkt td").forEach(function (td) {
      var w = td.querySelectorAll(".wc"); if (!w.length) return;
      var hit = m && [].some.call(w, function (x) { return x.getAttribute("data-pid") === m.id; });
      td.classList.toggle("is-match", !!(m && hit)); td.classList.toggle("is-out", !!(m && !hit));
    });
  }
  var weeks = document.querySelectorAll("[data-week]");
  weeks.forEach(renderWeek);
  var rr = function () { weeks.forEach(renderWeek); paintWeek(); };
  if (mq.addEventListener) mq.addEventListener("change", rr); else mq.addListener(rr);
  readURL(); paint(false);
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-finder] .chip");
    if (b) { var k = b.getAttribute("data-q"), v = b.getAttribute("data-v"); st[k] = st[k] === v ? "" : v; paint(true); }
    if (e.target.closest("[data-clear]")) { st = { want: "", before: "", commit: "" }; paint(true); }
  });
  window.addEventListener("popstate", function () { readURL(); paint(null); });

  // ---- conversion forms: pick a session / a block, echoed ----
  document.querySelectorAll("[data-pick]").forEach(function (el) {
    var kind = el.getAttribute("data-pick"), echo = document.querySelector("[data-echo]"), pre = new URLSearchParams(location.search).get("programme");
    var h = '<div class="pick" role="radiogroup">', first = true;
    if (kind === "open") DATA.sessions.filter(function (s) { return s.programmeId === "open"; }).forEach(function (s, i) { h += '<label><input type="radio" name="session" value="' + i + '"' + (first ? " required" : "") + ' data-l="' + DAYS7[s.day] + " " + esc(s.time) + '"> <span>' + DAYS7[s.day] + " " + ph(s.time) + " · " + ph(s.length) + " · " + ph(s.supervision) + "</span></label>"; first = false; });
    else DATA.programmes.filter(function (p) { return p.kind === "class"; }).forEach(function (p) { h += '<label><input type="radio" name="programme" value="' + p.id + '"' + (first ? " required" : "") + (pre === p.id ? " checked" : "") + ' data-l="' + esc(p.name) + '"> <span>' + ph(p.name) + " · starts " + ph(p.nextStart) + " · " + ph(p.price) + "</span></label>"; first = false; });
    el.innerHTML = h + "</div>";
    function show() { var c = el.querySelector("input:checked"); if (echo) echo.innerHTML = c ? ph(c.getAttribute("data-l")) + (kind === "open" ? "<br>" + ph("$[XX]") + " drop-in" : "<br>The block ends. Nothing renews.") : (kind === "open" ? "Choose a session in step 1." : "Choose a programme in step 1."); }
    el.addEventListener("change", show); show();
  });
})();

