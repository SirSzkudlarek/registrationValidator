const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');

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
  console.log(input.previousElementSibling.innerText.slice(0, -1))
  if(input.value.length < min) {
    showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`);
  }
}

const checkPassword = (password, password2) => {
  if(password.value !== password2.value) {
    showError(password, `Hasła do siebie nie pasują!`);
  }
}


sendBtn.addEventListener('click', e => {
  e.preventDefault();

  checkForm([username, password, password2, email]);
  checkLength(username, 6);
  checkLength(password, 8);
  checkPassword(password, password2);
})

clearBtn.addEventListener('click', e => {
  e.preventDefault();

  [username, password, password2, email].forEach(el => {
    el.value = '';
  })
});

