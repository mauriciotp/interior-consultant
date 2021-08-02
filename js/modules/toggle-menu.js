export default function initToggleMenu() {
  const hamburguer = document.querySelector('.hamburguer-button');
  const ulNav = document.querySelector('.nav ul');
  const bars = document.querySelectorAll('.hamburguer-button div');
  const lis = document.querySelectorAll('.nav ul li');

  hamburguer.addEventListener('click', handleClick);

  function handleClick() {
    ulNav.classList.toggle('ativa');
    bars.forEach(bar => {
      bar.classList.toggle('ativa');
    });
    lis.forEach(li => {
      if (li.style.animation) {
        li.style.animation = '';
      } else {
        li.style.animation = `ulFade .8s ease-in forwards`;
      }
    });
  }
}