import {contactPage} from './contact';
import {aboutPage} from './about';
import {menuPage} from './menu';

const homePage = (() => {
  const wrapper = document.querySelector('#content');
  let menuList = ['Menu', 'About', 'Contact'];
  document.body.style.background = "url('../img/has.jpg') no-repeat ";
  document.body.style.backgroundSize = "cover";

  const createMenu = (menuList) => {
    let menu = document.createElement('div');
    menu.classList.add('tabs');
    
    for (let i = 0; i < menuList.length; i++) {
      let menuEl = document.createElement("INPUT");
      menuEl.setAttribute("type", "radio");
      menuEl.setAttribute("name", "tabs");
      menuEl.setAttribute("id", i);
      menuEl.addEventListener("click", function(e) {
        if (e.target.tagName.toUpperCase() === "INPUT") {
          var value = e.target.value; // The value of the clicked radio button
          selectMenu(menuList[i]);
          console.log("The value of that radio button is " + value);
        }
      });
    
      let content = document.createElement('label');
      content.setAttribute("for", i);
      content.textContent = menuList[i];

      menu.appendChild(menuEl);
      menu.appendChild(content);
    }
    
    wrapper.appendChild(menu);
  };

  const selectMenu = (selectedItem) => {
    clearContent();
    if (selectedItem == 'Menu') {
      menuPage.showMenu();
    } else if (selectedItem == 'Contact') {
      contactPage.showContact();
    } else if (selectedItem == 'About') {
      aboutPage.showAbout();
    }
  }

  const clearContent = () => {
    let array = document.getElementsByClassName("menu-item");

    for(let i = 0; i < array.length; i++)
    {
      array[i].style.display = 'none';
      array[i].onclick = function(){
          // do stuff
      };
      /* or:
      array[i].addEventListener('click',functionToCall);
      */
    }
  }

  const homeInit = () => {
    createMenu(menuList);
  };

  return {
    homeInit,
  };
})();

homePage.homeInit();
contactPage.contactInit();
aboutPage.aboutInit();
menuPage.menuInit();