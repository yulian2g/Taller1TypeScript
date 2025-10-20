import { series } from './data.js';
function renderTable() {
    const tbody = document.getElementById('series-body');
    if (!tbody)
        return;
    tbody.innerHTML = '';
    series.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <th scope="row">${s.id}</th>
      <td><a href="#">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
        tbody.appendChild(tr);
    });
    const totalSeasons = series.reduce((sum, s) => sum + s.seasons, 0);
    const avg = series.length ? totalSeasons / series.length : 0;
    const avgStr = Number.isInteger(avg) ? avg.toFixed(0) : avg.toFixed(2);
    const avgContainer = document.getElementById('avg-container');
    if (avgContainer) {
        avgContainer.innerHTML = `
      <div class="border rounded bg-light p-3">
        <div class="font-weight-bold">Seasons average: ${avgStr}</div>
      </div>
    `;
    }
}
document.addEventListener('DOMContentLoaded', renderTable);