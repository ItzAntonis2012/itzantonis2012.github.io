const URLs = {
  tab1: 'https://github.com/itzAntonis2012/evalpatch/releases/latest',
  subtab1: 'https://github.com/ItzAntonis2012/modernizepspgames/releases/tag/v1-SteamArtwork',
  subsubtab1: 'https://github.com/ItzAntonis2012/modernizepspgames/releases/tag/v1-LCS',
  subsubtab2: 'https://github.com/ItzAntonis2012/modernizepspgames/releases/tag/v1-VCS'
};

document.addEventListener('DOMContentLoaded', () => {
  const mainTabs = document.getElementById('main-tabs');
  const submenu1 = document.getElementById('submenu1');
  const submenu2 = document.getElementById('submenu2');

  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');

  const subtab1 = document.getElementById('subtab1');
  const subtab2 = document.getElementById('subtab2');

  const subsubtab1 = document.getElementById('subsubtab1');
  const subsubtab2 = document.getElementById('subsubtab2');

  const back1 = document.getElementById('back1');
  const back2 = document.getElementById('back2');

  // Tab 1 - redirect
  tab1.onclick = () => {
    window.location.href = URLs.tab1;
  };

  // Tab 2 - show submenu1, hide main tabs
  tab2.onclick = () => {
    mainTabs.classList.add('hidden');
    submenu1.classList.remove('hidden');
  };

  // Subtab 1 - redirect
  subtab1.onclick = () => {
    window.location.href = URLs.subtab1;
  };

  // Subtab 2 - show submenu2, hide submenu1
  subtab2.onclick = () => {
    submenu1.classList.add('hidden');
    submenu2.classList.remove('hidden');
  };

  // Subsubtab 1 - redirect
  subsubtab1.onclick = () => {
    window.location.href = URLs.subsubtab1;
  };

  // Subsubtab 2 - redirect
  subsubtab2.onclick = () => {
    window.location.href = URLs.subsubtab2;
  };

  // Back buttons
  back1.onclick = () => {
    submenu1.classList.add('hidden');
    mainTabs.classList.remove('hidden');
  };

  back2.onclick = () => {
    submenu2.classList.add('hidden');
    submenu1.classList.remove('hidden');
  };
});
