const toggleButtons = document.querySelectorAll('.toogleBtn');
const sections = document.querySelectorAll('section')

sections.forEach((section) => {
  section.addEventListener('click', () => {
    const paragraph = section.querySelector('p');
    const btn = section.querySelector('button')
    const icon = btn.querySelector('img');

    paragraph.classList.toggle('expand');

    const isOpen = paragraph.classList.contains('expand');

    icon.src = isOpen
      ? './assets/images/icon-minus.svg'
      : './assets/images/icon-plus.svg';
    icon.alt = isOpen ? 'minus icon' : 'plus icon';
  });
});