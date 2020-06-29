const aboutPage = (() => {
  const wrapper = document.querySelector('#content');

  const createAboutPage = () => {
    let about = document.createElement('div');
    about.classList.add('menu-item');
    about.setAttribute("id", "about");
    about.style.display = 'none';

    createText('Nice place by the sea. Good food crazy mood.', 'address', about);

    wrapper.appendChild(about);
  };

  const createText = (str, className, parent) => {
    let textEl = document.createElement('div');
    textEl.classList.add(className);
    textEl.textContent = str;
    parent.appendChild(textEl);
  }

  const showAbout = () => {
    let about = document.getElementById('about');
    about.style.display = '';
  }

  const aboutInit = () => {
    createAboutPage();
  };

  return {
    aboutInit, showAbout
  };
})();

export { aboutPage }; 