/* DEMO — ThinkFirst Studios · [Your name here] — fictional business. */
// LEVELS + CLASSES + SCHEDULE DATA — replace wholesale from the client's curriculum and scheduler export
// shape: { id, levelName, order, ageRange, duration, skills[{name, state}], sessions[{day, time, length, capacity, enrolled, status}], price, enrolUrl }
var LEVELS = [
 {
  "id": "tot",
  "kind": "pre",
  "levelName": "[PARENT AND TOT — CONFIRM NAME]",
  "ages": [
   "tot"
  ],
  "exp": [
   "first",
   "little"
  ],
  "img": null,
  "sessions": [
   {
    "day": 1,
    "time": "[9:30am]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "full",
    "part": "wkm"
   },
   {
    "day": 5,
    "time": "[9:00am]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "open",
    "part": "sat"
   }
  ],
  "order": 1,
  "ageRange": "[AGE RANGE — CONFIRM]",
  "duration": "[45] min",
  "price": "$[XXX]",
  "enrolUrl": "[REGISTRATION URL — CONFIRM]",
  "skills": [
   {
    "name": "[WHAT A SESSION CONTAINS — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[DOES A PARENT STAY? — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[COACH-TO-ATHLETE RATIO — CONFIRM]",
    "state": "not"
   }
  ]
 },
 {
  "id": "pre",
  "kind": "pre",
  "levelName": "[PRESCHOOL — CONFIRM NAME]",
  "ages": [
   "pre"
  ],
  "exp": [
   "first",
   "little",
   "level"
  ],
  "img": null,
  "sessions": [
   {
    "day": 0,
    "time": "[10:00am]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "nearly",
    "part": "wkm"
   },
   {
    "day": 2,
    "time": "[4:00pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "full",
    "part": "wka"
   },
   {
    "day": 5,
    "time": "[10:00am]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "open",
    "part": "sat"
   }
  ],
  "order": 2,
  "ageRange": "[AGE RANGE — CONFIRM]",
  "duration": "[45] min",
  "price": "$[XXX]",
  "enrolUrl": "[REGISTRATION URL — CONFIRM]",
  "skills": [
   {
    "name": "[WHAT A SESSION CONTAINS — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[DOES A PARENT STAY? — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[COACH-TO-ATHLETE RATIO — CONFIRM]",
    "state": "not"
   }
  ]
 },
 {
  "id": "l1",
  "kind": "rec",
  "levelName": "[LEVEL NAME 01 — CONFIRM]",
  "ages": [
   "5-7",
   "7-9"
  ],
  "exp": [
   "first"
  ],
  "img": "app-1",
  "sessions": [
   {
    "day": 0,
    "time": "[4:30pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "open",
    "part": "wka"
   },
   {
    "day": 3,
    "time": "[4:30pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "full",
    "part": "wka"
   },
   {
    "day": 5,
    "time": "[11:00am]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "nearly",
    "part": "sat"
   }
  ],
  "order": 3,
  "ageRange": "[AGE RANGE — CONFIRM]",
  "duration": "[45] min",
  "price": "$[XXX]",
  "enrolUrl": "[REGISTRATION URL — CONFIRM]",
  "skills": [
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "working"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   }
  ]
 },
 {
  "id": "l2",
  "kind": "rec",
  "levelName": "[LEVEL NAME 02 — CONFIRM]",
  "ages": [
   "5-7",
   "7-9",
   "9-12"
  ],
  "exp": [
   "little"
  ],
  "img": "app-2",
  "sessions": [
   {
    "day": 1,
    "time": "[5:00pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "full",
    "part": "wke"
   },
   {
    "day": 4,
    "time": "[4:30pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "open",
    "part": "wka"
   }
  ],
  "order": 4,
  "ageRange": "[AGE RANGE — CONFIRM]",
  "duration": "[45] min",
  "price": "$[XXX]",
  "enrolUrl": "[REGISTRATION URL — CONFIRM]",
  "skills": [
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "working"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   }
  ]
 },
 {
  "id": "l3",
  "kind": "rec",
  "levelName": "[LEVEL NAME 03 — CONFIRM]",
  "ages": [
   "7-9",
   "9-12",
   "12"
  ],
  "exp": [
   "little",
   "level"
  ],
  "img": "app-3",
  "sessions": [
   {
    "day": 2,
    "time": "[5:30pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "nearly",
    "part": "wke"
   },
   {
    "day": 6,
    "time": "[1:00pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "open",
    "part": "sun"
   }
  ],
  "order": 5,
  "ageRange": "[AGE RANGE — CONFIRM]",
  "duration": "[45] min",
  "price": "$[XXX]",
  "enrolUrl": "[REGISTRATION URL — CONFIRM]",
  "skills": [
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "working"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   }
  ]
 },
 {
  "id": "l4",
  "kind": "rec",
  "levelName": "[LEVEL NAME 04 — CONFIRM]",
  "ages": [
   "9-12",
   "12"
  ],
  "exp": [
   "level"
  ],
  "img": "app-4",
  "sessions": [
   {
    "day": 3,
    "time": "[6:00pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "closed",
    "part": "wke"
   },
   {
    "day": 5,
    "time": "[1:00pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "full",
    "part": "sat"
   }
  ],
  "order": 6,
  "ageRange": "[AGE RANGE — CONFIRM]",
  "duration": "[45] min",
  "price": "$[XXX]",
  "enrolUrl": "[REGISTRATION URL — CONFIRM]",
  "skills": [
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "working"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   }
  ]
 },
 {
  "id": "l5",
  "kind": "rec",
  "levelName": "[LEVEL NAME 05 — CONFIRM]",
  "ages": [
   "12"
  ],
  "exp": [
   "level"
  ],
  "img": "app-5",
  "sessions": [
   {
    "day": 1,
    "time": "[6:30pm]",
    "length": "[45] min",
    "capacity": "[00]",
    "enrolled": "[0]",
    "status": "open",
    "part": "wke"
   }
  ],
  "order": 7,
  "ageRange": "[AGE RANGE — CONFIRM]",
  "duration": "[45] min",
  "price": "$[XXX]",
  "enrolUrl": "[REGISTRATION URL — CONFIRM]",
  "skills": [
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "achieved"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "working"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   },
   {
    "name": "[SKILL — CONFIRM]",
    "state": "not"
   }
  ]
 }
];
var AGES = [{"id": "tot", "name": "[18 MONTHS–3 — CONFIRM]"}, {"id": "pre", "name": "[3–5 — CONFIRM]"}, {"id": "5-7", "name": "[5–7 — CONFIRM]"}, {"id": "7-9", "name": "[7–9 — CONFIRM]"}, {"id": "9-12", "name": "[9–12 — CONFIRM]"}, {"id": "12", "name": "[12+ — CONFIRM]"}];
var DAYS7 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var CARDS = {"tot": "<article class=\"scard scard--pre\" id=\"lv-tot\" data-card><div class=\"sc-h\"><span class=\"sc-l\">Programme</span><h3><span class=\"ph\">[PARENT AND TOT — CONFIRM NAME]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[01]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div><ul class=\"sc-list\"><li aria-label=\"[WHAT A SESSION CONTAINS — CONFIRM] — not yet\" style=\"--n:0\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[WHAT A SESSION CONTAINS — CONFIRM]</span></span></li><li aria-label=\"[DOES A PARENT STAY? — CONFIRM] — not yet\" style=\"--n:1\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[DOES A PARENT STAY? — CONFIRM]</span></span></li><li aria-label=\"[COACH-TO-ATHLETE RATIO — CONFIRM] — not yet\" style=\"--n:2\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[COACH-TO-ATHLETE RATIO — CONFIRM]</span></span></li></ul><p class=\"sc-words\">Described in words only — this programme is never illustrated.</p><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wkm\"><span class=\"sl-t\">Tuesday <span class=\"ph\">[9:30am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=tot&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[9:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=tot&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></article>", "pre": "<article class=\"scard scard--pre\" id=\"lv-pre\" data-card><div class=\"sc-h\"><span class=\"sc-l\">Programme</span><h3><span class=\"ph\">[PRESCHOOL — CONFIRM NAME]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[02]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div><ul class=\"sc-list\"><li aria-label=\"[WHAT A SESSION CONTAINS — CONFIRM] — not yet\" style=\"--n:0\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[WHAT A SESSION CONTAINS — CONFIRM]</span></span></li><li aria-label=\"[DOES A PARENT STAY? — CONFIRM] — not yet\" style=\"--n:1\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[DOES A PARENT STAY? — CONFIRM]</span></span></li><li aria-label=\"[COACH-TO-ATHLETE RATIO — CONFIRM] — not yet\" style=\"--n:2\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[COACH-TO-ATHLETE RATIO — CONFIRM]</span></span></li></ul><p class=\"sc-words\">Described in words only — this programme is never illustrated.</p><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wkm\"><span class=\"sl-t\">Monday <span class=\"ph\">[10:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places <span class=\"nearly\">· filling</span></span><a class=\"btn\" href=\"enrol.html?class=pre&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Wednesday <span class=\"ph\">[4:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=pre&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[10:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=pre&amp;session=2\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></article>", "l1": "<article class=\"scard\" id=\"lv-l1\" data-card><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 01 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[03]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Monday <span class=\"ph\">[4:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l1&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Thursday <span class=\"ph\">[4:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=l1&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[11:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places <span class=\"nearly\">· filling</span></span><a class=\"btn\" href=\"enrol.html?class=l1&amp;session=2\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></article>", "l2": "<article class=\"scard\" id=\"lv-l2\" data-card><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 02 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[04]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Tuesday <span class=\"ph\">[5:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=l2&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Friday <span class=\"ph\">[4:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l2&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></article>", "l3": "<article class=\"scard\" id=\"lv-l3\" data-card><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 03 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[05]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Wednesday <span class=\"ph\">[5:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places <span class=\"nearly\">· filling</span></span><a class=\"btn\" href=\"enrol.html?class=l3&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div><div class=\"sl\" data-part=\"sun\"><span class=\"sl-t\">Sunday <span class=\"ph\">[1:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l3&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></article>", "l4": "<article class=\"scard\" id=\"lv-l4\" data-card><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 04 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[06]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Thursday <span class=\"ph\">[6:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[WAITLIST CLOSED — CONFIRM]</span> <span class=\"ph\">[NEXT SESSION OPENS — CONFIRM]</span></span><a class=\"link-arrow\" href=\"fees.html#reenrol\">The re-enrolment window →</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[1:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=l4&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div></div></div></article>", "l5": "<article class=\"scard\" id=\"lv-l5\" data-card><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 05 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[07]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Tuesday <span class=\"ph\">[6:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l5&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div><p class=\"sc-after\"><span class=\"ph\">[WHAT COMES AFTER — CONFIRM]</span> — then the next session starts again.</p></div></article>"};
var CARDS_C = {"tot": "<details class=\"scard scard--c\" id=\"lv-tot\"><summary><div class=\"sc-h\"><span class=\"sc-l\">Programme</span><h3><span class=\"ph\">[PARENT AND TOT — CONFIRM NAME]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[01]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div></summary><ul class=\"sc-list\"><li aria-label=\"[WHAT A SESSION CONTAINS — CONFIRM] — not yet\" style=\"--n:0\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[WHAT A SESSION CONTAINS — CONFIRM]</span></span></li><li aria-label=\"[DOES A PARENT STAY? — CONFIRM] — not yet\" style=\"--n:1\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[DOES A PARENT STAY? — CONFIRM]</span></span></li><li aria-label=\"[COACH-TO-ATHLETE RATIO — CONFIRM] — not yet\" style=\"--n:2\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[COACH-TO-ATHLETE RATIO — CONFIRM]</span></span></li></ul><p class=\"sc-words\">Described in words only — this programme is never illustrated.</p><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wkm\"><span class=\"sl-t\">Tuesday <span class=\"ph\">[9:30am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=tot&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[9:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=tot&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></details>", "pre": "<details class=\"scard scard--c\" id=\"lv-pre\"><summary><div class=\"sc-h\"><span class=\"sc-l\">Programme</span><h3><span class=\"ph\">[PRESCHOOL — CONFIRM NAME]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[02]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div></summary><ul class=\"sc-list\"><li aria-label=\"[WHAT A SESSION CONTAINS — CONFIRM] — not yet\" style=\"--n:0\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[WHAT A SESSION CONTAINS — CONFIRM]</span></span></li><li aria-label=\"[DOES A PARENT STAY? — CONFIRM] — not yet\" style=\"--n:1\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[DOES A PARENT STAY? — CONFIRM]</span></span></li><li aria-label=\"[COACH-TO-ATHLETE RATIO — CONFIRM] — not yet\" style=\"--n:2\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[COACH-TO-ATHLETE RATIO — CONFIRM]</span></span></li></ul><p class=\"sc-words\">Described in words only — this programme is never illustrated.</p><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wkm\"><span class=\"sl-t\">Monday <span class=\"ph\">[10:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places <span class=\"nearly\">· filling</span></span><a class=\"btn\" href=\"enrol.html?class=pre&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Wednesday <span class=\"ph\">[4:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=pre&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[10:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=pre&amp;session=2\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></details>", "l1": "<details class=\"scard scard--c\" id=\"lv-l1\"><summary><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 01 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[03]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div></summary><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Monday <span class=\"ph\">[4:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l1&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Thursday <span class=\"ph\">[4:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=l1&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[11:00am]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places <span class=\"nearly\">· filling</span></span><a class=\"btn\" href=\"enrol.html?class=l1&amp;session=2\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></details>", "l2": "<details class=\"scard scard--c\" id=\"lv-l2\"><summary><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 02 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[04]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div></summary><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Tuesday <span class=\"ph\">[5:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=l2&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div><div class=\"sl\" data-part=\"wka\"><span class=\"sl-t\">Friday <span class=\"ph\">[4:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l2&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></details>", "l3": "<details class=\"scard scard--c\" id=\"lv-l3\"><summary><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 03 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[05]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div></summary><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Wednesday <span class=\"ph\">[5:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places <span class=\"nearly\">· filling</span></span><a class=\"btn\" href=\"enrol.html?class=l3&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div><div class=\"sl\" data-part=\"sun\"><span class=\"sl-t\">Sunday <span class=\"ph\">[1:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l3&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div></div></details>", "l4": "<details class=\"scard scard--c\" id=\"lv-l4\"><summary><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 04 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[06]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div></summary><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Thursday <span class=\"ph\">[6:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[WAITLIST CLOSED — CONFIRM]</span> <span class=\"ph\">[NEXT SESSION OPENS — CONFIRM]</span></span><a class=\"link-arrow\" href=\"fees.html#reenrol\">The re-enrolment window →</a></div><div class=\"sl\" data-part=\"sat\"><span class=\"sl-t\">Saturday <span class=\"ph\">[1:00pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"plate\">Full · waitlist open</span></span><a class=\"btn btn--wait\" href=\"waitlist.html?class=l4&amp;session=1\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Join the waitlist</a></div></div></div></details>", "l5": "<details class=\"scard scard--c\" id=\"lv-l5\"><summary><div class=\"sc-h\"><span class=\"sc-l\">Level</span><h3><span class=\"ph\">[LEVEL NAME 05 — CONFIRM]</span></h3><span class=\"sc-n\">Level <span class=\"ph\">[07]</span> of <span class=\"ph\">[0n]</span></span><p class=\"sc-m\"><span class=\"ph\">[AGE RANGE — CONFIRM]</span> · <span class=\"ph\">[45] min</span></p></div></summary><ul class=\"sc-list\"><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:0\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — achieved\" style=\"--n:1\"><span class=\"mk mk--achieved\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — working\" style=\"--n:2\"><span class=\"mk mk--working\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:3\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li><li aria-label=\"[SKILL — CONFIRM] — not yet\" style=\"--n:4\"><span class=\"mk mk--not\" aria-hidden=\"true\"><i></i></span><span><span class=\"ph\">[SKILL — CONFIRM]</span></span></li></ul><div class=\"sc-f\"><p class=\"sc-p\"><span class=\"ph\">$[XXX]</span> per <span class=\"ph\">[10]</span>-week session</p><div class=\"sess\"><div class=\"sl\" data-part=\"wke\"><span class=\"sl-t\">Tuesday <span class=\"ph\">[6:30pm]</span> · <span class=\"ph\">[45] min</span></span><span class=\"sl-s\"><span class=\"ph\">[0]</span> of <span class=\"ph\">[00]</span> places</span><a class=\"btn\" href=\"enrol.html?class=l5&amp;session=0\" data-registration-target=\"[REGISTRATION URL — CONFIRM]\">Enrol</a></div></div><p class=\"sc-after\"><span class=\"ph\">[WHAT COMES AFTER — CONFIRM]</span> — then the next session starts again.</p></div></details>"};
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
  function byId(id) { for (var i = 0; i < LEVELS.length; i++) if (LEVELS[i].id === id) return LEVELS[i]; return null; }
  var pr = document.querySelector("[data-promo-x]"); if (pr) pr.addEventListener("click", function () { document.querySelector("[data-promo]").classList.add("is-gone"); });

  // ---- the finder: age (required) -> experience -> when. One best match, adjacent levels collapsed beneath ----
  var st = { age: "", exp: "", when: "" };
  function readURL() { var p = new URLSearchParams(location.search); st.age = p.get("age") || ""; st.exp = p.get("exp") || ""; st.when = p.get("when") || ""; }
  function best() {
    if (!st.age) return null;
    var c = LEVELS.filter(function (l) { return l.ages.indexOf(st.age) > -1; });
    if (!c.length) return null;
    if (st.exp) { var e = c.filter(function (l) { return l.exp.indexOf(st.exp) > -1; }); if (e.length) c = e; }
    if (st.when) { var w = c.filter(function (l) { return l.sessions.some(function (s) { return s.part === st.when; }); }); if (w.length) c = w; }
    return c[0];
  }
  function paint(push) {
    document.querySelectorAll("[data-finder] .chip").forEach(function (b) { b.setAttribute("aria-pressed", st[b.getAttribute("data-q")] === b.getAttribute("data-v")); });
    var m = best();
    document.querySelectorAll("[data-result]").forEach(function (r) {
      if (!st.age) { r.innerHTML = ""; return; }
      if (!m) { r.innerHTML = '<p class="empty-state">No class matches that age yet. Nearest: the next age band up — or <a href="waitlist.html">join the waitlist</a> and the club will contact you.</p>'; return; }
      var adj = LEVELS.filter(function (l) { return Math.abs(l.order - m.order) === 1; });
      r.innerHTML = '<p class="best-l">Best match</p>' + CARDS[m.id] + (adj.length ? '<p class="best-l" style="margin-top:10px">Either side of it</p>' + adj.map(function (l) { return CARDS_C[l.id]; }).join("") : "");
      r.querySelectorAll("[data-card]").forEach(function (c) { c.classList.add("is-stamped"); });
      if (st.when) r.querySelectorAll('.sl[data-part="' + st.when + '"]').forEach(function (s) { s.classList.add("is-when"); });
    });
    document.querySelectorAll("[data-readout]").forEach(function (r) {
      r.style.opacity = 0; setTimeout(function () { r.innerHTML = !st.age ? "Choose an age to see the best match." : m ? "Best match: " + ph(m.levelName) + (st.when ? " · sessions at that time are highlighted" : "") : "No match for that age yet."; r.style.opacity = 1; }, reduce ? 0 : 150);
    });
    // the same state narrows the week and the class cards in place
    document.querySelectorAll(".cards--c .scard").forEach(function (c) { var id = c.id.replace("lv-", ""), on = !st.age || (m && (id === m.id)); c.classList.toggle("is-match", !!(st.age && on)); c.classList.toggle("is-out", !!(st.age && !on)); });
    paintWeek();
    var q = new URLSearchParams(); ["age", "exp", "when"].forEach(function (k) { if (st[k]) q.set(k, st[k]); });
    var qs = q.toString();
    document.querySelectorAll("[data-carry]").forEach(function (a) { a.href = a.getAttribute("href").split("?")[0] + (qs ? "?" + qs : ""); });
    if (document.querySelector("[data-finder]") && push !== null) { var url = location.pathname + (qs ? "?" + qs : "") + location.hash; if (push) history.pushState(null, "", url); else history.replaceState(null, "", url); }
  }
  // ---- the week ----
  var mq = window.matchMedia("(max-width: 760px)");
  var slots = []; LEVELS.forEach(function (l) { l.sessions.forEach(function (s, i) { slots.push({ l: l, s: s, i: i }); }); });
  var times = slots.map(function (x) { return x.s.time; }).filter(function (t, i, a) { return a.indexOf(t) === i; });
  function stat(x) {
    var s = x.s, q = "?class=" + x.l.id + "&session=" + x.i;
    if (s.status === "full") return '<span class="plate">Full · waitlist open</span><a href="waitlist.html' + q + '" data-registration-target="[REGISTRATION URL — CONFIRM]">Join the waitlist</a>';
    if (s.status === "closed") return ph("[WAITLIST CLOSED — CONFIRM]");
    return '<span>' + ph(s.enrolled) + " of " + ph(s.capacity) + ' places</span><a href="enrol.html' + q + '" data-registration-target="[REGISTRATION URL — CONFIRM]">Enrol</a>';
  }
  function cellFor(d, t) {
    var xs = slots.filter(function (x) { return x.s.day === d && x.s.time === t; });
    return xs.map(function (x) { return '<div class="wc" data-lid="' + x.l.id + '" data-part="' + x.s.part + '"><span>' + ph(x.s.time) + "</span><b>" + esc(x.l.levelName) + "</b><span>" + ph(x.s.length) + " · " + ph(x.l.ageRange) + "</span>" + stat(x) + "</div>"; }).join("");
  }
  function renderWeek(el) {
    var cap = "<caption>This session · " + ph("[LAST UPDATED — CONFIRM]") + "</caption>", h, d;
    if (!mq.matches) {
      h = '<table class="wk">' + cap + '<thead><tr><th scope="col">Time</th>' + DAYS7.map(function (x) { return '<th scope="col">' + x.slice(0, 3) + "</th>"; }).join("") + "</tr></thead><tbody>";
      times.forEach(function (t) { h += '<tr><th scope="row">' + ph(t) + "</th>"; for (d = 0; d < 7; d++) { var c = cellFor(d, t); h += c ? "<td>" + c + "</td>" : '<td class="empty">—<span class="sr"> no class</span></td>'; } h += "</tr>"; });
    } else {
      h = '<table class="wk wk--m reflow">' + cap + '<thead><tr><th scope="col">Day</th><th scope="col">Classes</th></tr></thead><tbody>';
      for (d = 0; d < 7; d++) { var cs = times.map(function (t) { return cellFor(d, t); }).join(""); h += '<tr><th scope="row">' + DAYS7[d] + '</th><td data-l="Classes"' + (cs ? ">" + cs : ' class="empty">— no classes') + "</td></tr>"; }
    }
    el.innerHTML = h + "</tbody></table>";
  }
  function paintWeek() {
    var m = best();
    document.querySelectorAll(".wk td").forEach(function (td) {
      var wcs = td.querySelectorAll(".wc"); if (!wcs.length) return;
      var hit = [].some.call(wcs, function (w) { return m && w.getAttribute("data-lid") === m.id && (!st.when || w.getAttribute("data-part") === st.when); });
      td.classList.toggle("is-match", !!(st.age && hit)); td.classList.toggle("is-out", !!(st.age && !hit));
    });
  }
  var weeks = document.querySelectorAll("[data-sched]");
  weeks.forEach(renderWeek);
  var rr = function () { weeks.forEach(renderWeek); paintWeek(); };
  if (mq.addEventListener) mq.addEventListener("change", rr); else mq.addListener(rr);
  readURL(); paint(false);
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-finder] .chip");
    if (b) { var k = b.getAttribute("data-q"), v = b.getAttribute("data-v"); st[k] = st[k] === v ? "" : v; paint(true); }
    if (e.target.closest("[data-clear]")) { st = { age: "", exp: "", when: "" }; paint(true); }
  });
  window.addEventListener("popstate", function () { readURL(); paint(null); });

  // ---- cards stamp once on first reveal ----
  var cards = document.querySelectorAll("[data-card]");
  if (reduce || !("IntersectionObserver" in window)) cards.forEach(function (c) { c.classList.add("is-stamped"); });
  else { var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-stamped"); io.unobserve(en.target); } }); }, { threshold: .3 }); cards.forEach(function (c) { io.observe(c); }); }
  // ---- progression strip reflects to the URL ----
  document.querySelectorAll("[data-lvl]").forEach(function (a) { a.addEventListener("click", function () { document.querySelectorAll("[data-lvl]").forEach(function (x) { x.setAttribute("aria-current", x === a); }); history.replaceState(null, "", location.pathname + "?level=" + a.getAttribute("data-lvl") + "#lv-" + a.getAttribute("data-lvl")); }); });
  var lp = new URLSearchParams(location.search).get("level"); if (lp) { var la = document.querySelector('[data-lvl="' + lp + '"]'); if (la) la.setAttribute("aria-current", "true"); }

  // ---- enrol / waitlist: the class echoed back and persistent ----
  document.querySelectorAll("[data-pick]").forEach(function (el) {
    var kind = el.getAttribute("data-pick"), p = new URLSearchParams(location.search), l = byId(p.get("class") || ""), si = +(p.get("session") || 0);
    var echo = document.querySelector("[data-echo]");
    function show(l, si) {
      if (!echo) return; if (!l) { echo.innerHTML = "<h3>Your class</h3><p>Choose a class in step 1.</p>"; return; }
      var s = l.sessions[si] || l.sessions[0];
      echo.innerHTML = "<h3>Your class</h3><p><b>" + esc(l.levelName) + "</b></p><p>" + DAYS7[s.day] + " " + ph(s.time) + " · " + ph(s.length) + "</p><p>" + ph(l.ageRange) + "</p><p>" + ph(l.price) + " per " + ph("[10]") + "-week session</p><p>" + (s.status === "full" ? '<span class="plate">Full · waitlist open</span>' : ph(s.enrolled) + " of " + ph(s.capacity) + " places") + "</p>";
    }
    if (l) { el.innerHTML = '<input type="hidden" name="class" value="' + l.id + ":" + si + '"><p><b>' + esc(l.levelName) + '</b> — <a href="classes.html">choose a different class</a></p>'; show(l, si); return; }
    var h = '<div class="pick" role="radiogroup" aria-label="Choose a class">', first = true;
    LEVELS.forEach(function (lv) { lv.sessions.forEach(function (s, i) {
      if (kind === "wait" ? s.status !== "full" : (s.status === "full" || s.status === "closed")) return;
      h += '<label><input type="radio" name="class" value="' + lv.id + ":" + i + '"' + (first ? " required" : "") + "> <span>" + esc(lv.levelName) + " · " + DAYS7[s.day] + " " + ph(s.time) + "</span></label>"; first = false; }); });
    el.innerHTML = h + "</div>";
    el.addEventListener("change", function (e) { var v = e.target.value.split(":"); show(byId(v[0]), +v[1]); });
    show(null);
  });
})();

