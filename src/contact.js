const contactPage = (() => {
  const wrapper = document.querySelector('#content');

  const createContactPage = () => {
    let contact = document.createElement('div');
    contact.classList.add('menu-item');
    contact.setAttribute("id", "contact");
    contact.style.display = 'none';
    
    createText('Address: Neverland, Nowhere nn', 'address', contact);
    createText('Phone: ++555 67 89 000', 'phone', contact);
    createText('Opening Hours: Always 0 - 24', 'working', contact);

    wrapper.appendChild(contact);
  };

  const createText = (str, className, parent) => {
    let textEl = document.createElement('div');
    textEl.classList.add(className);
    textEl.textContent = str;
    parent.appendChild(textEl);
  }

  const showContact = () => {
    let contact = document.getElementById('contact');
    contact.style.display = '';
  }

  const contactInit = () => {
    createContactPage();
  };

  return {
    contactInit, showContact
  };
})();

export { contactPage }; 