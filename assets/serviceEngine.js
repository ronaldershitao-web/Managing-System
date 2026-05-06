// serviceEngine.js (SINGLE SOURCE OF TRUTH)

export function parseSG(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return new Date(Number(y), Number(m) - 1, Number(d));
}

export function isWeekend(dateStr) {
  const d = parseSG(dateStr);
  const day = d.getDay();
  return day === 0 || day === 6;
}

export function formatDate(dateStr) {
  const d = parseSG(dateStr);

  return d.toLocaleDateString("en-SG", {
    day: "2-digit",
    month: "short",
    year: "2-digit"
  });
}

export function getWeekKey(dateStr) {
  const d = parseSG(dateStr);
  const day = d.getDay();

  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.getFullYear(), d.getMonth(), diff);

  return `${monday.getFullYear()}-${monday.getMonth()}-${monday.getDate()}`;
}

export function getRunningServices(services) {

  const today = new Date();

  const min = new Date(today);
  min.setDate(today.getDate() - 14);

  const max = new Date(today);
  max.setDate(today.getDate() + 14);

  // window filter
  let filtered = services.filter(s => {
    const d = parseSG(s.service_date);
    return d >= min && d <= max;
  });

  // weekend only
  filtered = filtered.filter(s => isWeekend(s.service_date));

  // group 2 weekends only
  const grouped = {};

  filtered.forEach(s => {
    const key = getWeekKey(s.service_date);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(s);
  });

  return Object.values(grouped)
    .slice(0, 2)
    .flat()
    .sort((a, b) => parseSG(a.service_date) - parseSG(b.service_date));
}
