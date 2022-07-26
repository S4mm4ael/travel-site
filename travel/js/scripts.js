

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
    trigger = document.querySelectorAll(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.forEach( (trigger) => trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  }))
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

  var register = document.getElementById('register');
  
    register.addEventListener('click', e =>{
      if (e.target === register){

       

        modal.innerHTML = ` 
        <div class="modal" style = "height: 436px">
        <div class="modal__close" > <img src="./img/cancel.svg" alt="cancel" width="10px" height="10px" ></div>
        <div class="modal__title" style="margin-bottom: 30px"><span>Create account</span> </div>
        <div class="modal__body">
          <p class="input__p">E-mail</p>
          <input id = "email" type="email" class="modal__input modal__input--regular"></input>
          <span class="input__p">Password</span>
          <input id = "password" type="password" class="modal__input modal__input--regular"></i>
          <div class="modal__input modal__input--signin" style="margin-bottom: 26px">Sign up</div>
          <span class="modal__line"></span>
          <p class="modal__register">Already have an account?<a id = "login-link" class="modal__a" href="#">Log in</a></p>
        </div>
        </div>`;
        loginAttempt ()
      }
      const loginLink = document.getElementById('login-link');
      loginLink.addEventListener('click', e =>{
      if (e.target === loginLink){
        modal.innerHTML = ` 
        <div class="modal">
        <div class="modal__close" > <img src="./img/cancel.svg" alt="cancel" width="10px" height="10px" ></div>
        <div class="modal__title"><span>Log in to your account</span> </div>
        <div class="modal__body">
        <div class="modal__input modal__input--facebook"><div class="modal__logo modal__logo--facebook"></div> Sign In with Facebook</div>
        <div class="modal__input modal__input--google"><div class="modal__logo modal__logo--google"></div>Sign In with Google</div>
        <div class="modal__input modal__input--or"><span class="modal__line"></span>or<span class="modal__line"></span></div>
        <p class="input__p">E-mail</p>
        <input id = "email" type="email" class="modal__input modal__input--regular"></input>
        <span class="input__p">Password</span>
        <input id = "password" type="password" class="modal__input modal__input--regular"></i>
        <div class="modal__input modal__input--signin" >Sign in</div>
        <a class="modal__a" href="#">Forgot Your Password?</a>
        <span class="modal__line"></span>
        <p class="modal__register">Dont have an account?<a id = "register" class="modal__a" href="#">Register</a></p>
        </div>
        </div>`;

      bindModal('.btn__login', '.modal__wrapper', '.modal__close')
      //bindModal('.menu__item--account', '.modal__wrapper', '.modal__close')
    }
    });
  });
  loginAttempt ()
     
  
}

bindModal('.btn__login', '.modal__wrapper', '.modal__close')

function loginAttempt (){
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.querySelector('.modal__input--signin');

  login.addEventListener('click', e =>{
    if (e.target === login){
      alert (` Email is: ${email.value} \n Password is: ${password.value}`)
    }
  })
  
}







console.log('Mark is 100/100');

