// Fills the planner's left page with the current week, draws the corner
// calendar, and wires up the mobile page-flip buttons.
(function () {
  const JP = ['日', '月', '火', '水', '木', '金', '土']; // Sun..Sat
  const EN = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const MON = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const MOON = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

  const now = new Date();
  const dow = (now.getDay() + 6) % 7;             // 0 = Mon … 6 = Sun
  const monday = new Date(now);
  monday.setDate(now.getDate() - dow);

  const monthLabel = `${MON[now.getMonth()]} ${now.getMonth() + 1}月 ${now.getFullYear()}`;
  document.querySelectorAll('.month-label').forEach((e) => { e.textContent = monthLabel; });

  function moon(d) {
    const lunar = 29.530588853;
    const ref = Date.UTC(2000, 0, 6, 18, 14) / 86400000;
    let phase = ((d.getTime() / 86400000 - ref) % lunar) / lunar;
    if (phase < 0) phase += 1;
    return MOON[Math.round(phase * 8) % 8];
  }

  // ----- left page week rows -----
  const cells = document.querySelectorAll('.left-page .day .date');
  cells.forEach((cell, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const wd = d.getDay();
    cell.innerHTML = '';
    [d.getDate(), EN[wd], JP[wd], moon(d)].forEach((t) => {
      const p = document.createElement('p');
      p.textContent = t;
      cell.appendChild(p);
    });
    if (wd === 0) cell.classList.add('sun');
    if (d.toDateString() === now.toDateString()) cell.classList.add('today-highlight');
  });

  // ----- corner calendar -----
  const cal = document.getElementById('calendar');
  if (cal) {
    cal.innerHTML = '';
    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach((l) => {
      const d = document.createElement('div');
      d.className = 'day-label';
      d.textContent = l;
      cal.appendChild(d);
    });

    const year = now.getFullYear(), month = now.getMonth();
    const startDow = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDays = new Date(year, month, 0).getDate();

    const list = [];
    for (let i = 0; i < startDow; i++) list.push({ n: prevDays - startDow + 1 + i, prev: true });
    for (let d = 1; d <= daysInMonth; d++) list.push({ n: d, prev: false });
    while (list.length % 7 !== 0) list.push({ n: list.length - (startDow + daysInMonth) + 1, prev: true });

    const rows = list.length / 7;
    let todayIndex = -1;
    list.forEach((c, i) => {
      const div = document.createElement('div');
      div.textContent = c.n;
      const col = i % 7;
      if (c.prev) div.classList.add('prev');
      else {
        if (col === 6) div.classList.add('sunday');
        else if (col === 5) div.classList.add('saturday');
        if (c.n === now.getDate()) { div.classList.add('today'); todayIndex = i; }
      }
      cal.appendChild(div);
    });

    const border = document.getElementById('week-border');
    if (border && todayIndex >= 0) {
      const totalRows = rows + 1;              // + the weekday-label row
      const weekRow = Math.floor(todayIndex / 7);
      border.style.left = '0%';
      border.style.width = '100%';
      border.style.top = `${((weekRow + 1) / totalRows) * 100}%`;
      border.style.height = `${(1 / totalRows) * 100}%`;
    }
  }

  // ----- mobile page flip -----
  const lp = document.getElementById('left-page');
  const rp = document.getElementById('right-page');
  document.getElementById('flip-right')?.addEventListener('click', () => {
    lp.classList.remove('visible'); rp.classList.add('visible');
  });
  document.getElementById('flip-left')?.addEventListener('click', () => {
    rp.classList.remove('visible'); lp.classList.add('visible');
  });
  if (window.matchMedia('(max-width: 768px)').matches) rp?.classList.add('visible');
})();
