alert('Уважаемый проверяющий, не могли бы Вы проверить работу после 13:00 четверга? Буду крайне Вам благодарен')


// Custom Scripts

function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  const navBtns = document.querySelector('.nav__btns')
  const navLinks = document.querySelectorAll('.menu__item');


  function closeBurger (){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
      navBtns.classList.remove('active')
  }
  function openBurger (){
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
      navBtns.classList.add('active')
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


console.log('Mark is 75/75');

