function toggleSeasonsMenu() {
  const seasonsMenu = document.querySelector('.seasons-menu');
  const seasonsNav = document.querySelector('#seasons-nav button');
  const seasonsNavImg = document.querySelector('#seasons-nav button img');

  seasonsNav.addEventListener('click', e => {
    seasonsMenu.classList.toggle('seasons-menu-active');
    seasonsNav.classList.toggle('seasons-nav-active');

    if (seasonsNav.className === 'seasons-nav-active') {
      seasonsNavImg.src = './assets/svg/icon-opened-caret.svg';
    } else {
      seasonsNavImg.src = './assets/svg/icon-closed-caret.svg';
    }
  });
}

toggleSeasonsMenu();
