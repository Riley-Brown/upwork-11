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

function toggleMobileMenu() {
  const menuToggleNav = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.header-container');
  const menuToggleButton = document.querySelector('.menu-toggle button');
  const menuToggleIcon = document.querySelector('.menu-toggle img');

  menuToggleNav.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu-active');

    if (mobileMenu.className.includes('active')) {
      menuToggleButton.innerText = 'Close';
      menuToggleButton.style.color = 'var(--text-white)';
      menuToggleIcon.src = './assets/svg/icon-opened-caret.svg';
    } else {
      menuToggleButton.innerText = 'Menu';
      menuToggleButton.style.color = 'var(--nav-links)';
      menuToggleIcon.src = './assets/svg/icon-closed-caret.svg';
    }
  });
}

toggleMobileMenu();

// change song img width and height for mobile
function singleColumnSongs(bool) {
  const songImgs = document.querySelectorAll(
    '.twentytwelve .episode div.song img'
  );

  if (bool) {
    songImgs.forEach(song => {
      song.style.width = '75px';
      song.style.height = '75px';
    });
  } else {
    songImgs.forEach(song => {
      song.style.width = '225px';
      song.style.height = '225px';
    });
  }
}

// fires event when window is < 550px and > 550px
const mq = window.matchMedia('(max-width: 550px)');

// initial check
singleColumnSongs(mq.matches);

// listen for matchMedia event
mq.addListener(() => {
  if (mq.matches) {
    singleColumnSongs(true);
  } else {
    singleColumnSongs(false);
  }
});
