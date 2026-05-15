    const dropdownLinks = document.querySelectorAll<HTMLAnchorElement>('.dropdown-content a');
const selectedValueEl = document.getElementById('selectedValue');

if (selectedValueEl) {
  dropdownLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const topic = link.dataset.topic ?? 'Unknown';
      const value = link.dataset.value ?? 'Unknown';
      selectedValueEl.textContent = `${topic}: ${value}`;
    });
  });
} else {
  console.warn('Selected value element not found');
}
