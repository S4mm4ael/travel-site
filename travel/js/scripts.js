

// Custom Scripts

function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  const navBtns = document.querySelector('.nav__btns')
  const navLinks = document.querySelectorAll('.menu__item');
  const popup = document.querySelector('.popup');

  function closeBurger (){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
      navBtns.classList.remove('active')
      popup.classList.remove('popup--open');
  }
  function openBurger (){
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
      navBtns.classList.add('active')
      popup.classList.add('popup--open');
}


  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      openBurger ()
    } else {
      closeBurger ()
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 391) {
      closeBurger ()
    }
  })


  navLinks.forEach((navLink) => navLink.addEventListener('click', () => {
    closeBurger ()}
   ));

   document.addEventListener('click', function (event) {
    if (event.target.className !== 'menu active' && menu.classList.contains('active')
    && event.target.className !== 'burger active-burger'
    && event.target.className !== 'burger__span') {
      closeBurger ()
    }
    });
}
burgerMenu()

function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
     body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
       body.classList.remove('locked')
    }
  })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.btn__login', '.modal__wrapper', '.modal__close')

console.log('Mark is 100/100');

