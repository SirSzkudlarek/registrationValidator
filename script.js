const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector('.error-text')

  formBox.classList.add('error');
  errorMsg.textContent = msg;
}

const cleanError = input => {
  const formBox = input.parentElement;
  formBox.classList.remove('error');
}

const checkForm = input => {
  input.forEach(el => {
    if(el.value === '') {
      showError(el, el.placeholder);
    } else {
      cleanError(el);
    }
  })
}

const checkLength = (input, min) => {
  if(input.value.length < min) {
    showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`);
  }
}

const checkPassword = (password, password2) => {
  if(password.value !== password2.value) {
    showError(password, `Hasła do siebie nie pasują!`);
  }
}

const checkMail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email.value)) {
    cleanError(email);
  } else {
    showError(email, 'Podaj poprawny mail!');
  }
}

const checkErrors = () => {
  const allInputs = document.querySelectorAll('.form-box');
  const errorCount = 0;

  allInputs.forEach(el => {
    if(el.classList.contains('error')) {
      errorCount++;
    }
  })

  console.log(errorCount);
  if(errorCount === 0) {
    popup.classList.add('show-popup');
  }
}


sendBtn.addEventListener('click', e => {
  e.preventDefault();

  checkForm([username, password, password2, email]);
  checkLength(username, 6);
  checkLength(password, 8);
  checkPassword(password, password2);
  checkMail(email);
  checkErrors();
})

clearBtn.addEventListener('click', e => {
  e.preventDefault();

  [username, password, password2, email].forEach(el => {
    cleanError(el);
  });
  [username, password, password2, email].forEach(el => {
    el.value = '';
  })
});

