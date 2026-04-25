export function escapeHTML(str) {
  return str?.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
}

export function formatDate(d) {
  if (!d) return "-";
  return new Date(d).toLocaleString();
}
