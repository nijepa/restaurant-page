const menuPage = (() => {
  const wrapper = document.querySelector('#content');

  const createMenuPage = () => {
    let menu = document.createElement('div');
    menu.classList.add('menu-item');
    menu.setAttribute("id", "menu");
    menu.style.display = 'none';

    createText(`Serbian Barbeque

    Mixed meat 990 rsd
    Cevapi,Leskovac style meat fritters,chicken fillet,barbeque sausage,and pork chop. Side dish - baked potato
    
    Mildy smoked pork neck stake 980 rsd
    Beech-wood smoked pork neck steak
    
    Ćevapi "Three Hats" 760 rsd
    
    Ćevapčići mix 800 rsd
    Skadarlija, Leskovac and Pazar style ćevapi on kaymak
    
    Leskovac style meat fritters 850 rsd
    On urnebes salad and kaymak
    
    Serbian meat patty 770 rsd
    
    Miloš Saber 1290 rsd
    Chicken fillet, fillet mignon, meatball, grilled bacon, medallion in bacon and pork chop
    
    Homemade sausage 790 rsd
    Barbeque sausage with fried sour cabbage and baked potatoes
    
    Skadarlija "opanak" 980 rsd
    Pljeskavica stuffed with beef prosciutto paprika and cheese with chicken fillet on kaymak.
    
    Serbian plate for two 2720 rsd
    Cevapi,meat fritters,chicken kebab in bacon,fillet mignon,sausages,pork ribs,grilled bacon and kaymak.
    `, 'address', menu);

    wrapper.appendChild(menu);
  };

  const createText = (str, className, parent) => {
    let textEl = document.createElement('div');
    textEl.classList.add(className);
    textEl.textContent = str;
    parent.appendChild(textEl);
  }

  const showMenu = () => {
    let menu = document.getElementById('menu');
    menu.style.display = '';
  }

  const menuInit = () => {
    createMenuPage();
  };

  return {
    menuInit, showMenu
  };
})();

export { menuPage }; 