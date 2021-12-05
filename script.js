const email = document.getElementById('email');
const senha = document.getElementById('senha');
const login = document.getElementById('login');
const agreementButton = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const forms = document.getElementById('evaluation-form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const divs = document.getElementsByTagName('div');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');

login.addEventListener('click', () => {
  const emailPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';
  if (email.value === emailPadrao && senha.value === senhaPadrao) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreementButton.addEventListener('click', () => {
  if (button.disabled === true) {
    button.disabled = false;
    button.style.backgroundColor = 'rgb(78, 44, 131)';
  } else {
    button.disabled = true;
    button.style.backgroundColor = 'rgb(79, 72, 90)';
  }
});

const limite = document.querySelector('#textarea');
limite.addEventListener('input', () => {
  const contador = limite.value.length;
  const counter = document.getElementById('counter');
  const number = 500 - contador;
  counter.innerHTML = number;
});

function cleanAll() {
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].style.display = 'none';
  }
  const hrs = document.getElementsByTagName('hr');
  hrs[0].style.display = 'none';
  hrs[1].style.display = 'none';
}

function getName() {
  const name = document.createElement('p');
  name.innerText = `Nome: ${firstName.value} ${lastName.value}`;
  forms.appendChild(name);
}

function getEmail() {
  const emailComplete = document.createElement('p');
  emailComplete.innerText = `Email: ${inputEmail.value}`;
  forms.appendChild(emailComplete);
}

function getHouse() {
  const houseSelected = document.createElement('p');
  houseSelected.innerText = `Casa: ${house.value}`;
  forms.appendChild(houseSelected);
}

function getFamily() {
  const family = document.querySelector('input[name="family"]:checked').value;
  const familySelected = document.createElement('p');
  familySelected.innerText = `Família: ${family}`;
  forms.appendChild(familySelected);
}

function getMaterias() {
  const materias = document.querySelectorAll('input[class="subject"]:checked');
  const materiasSelected = document.createElement('p');
  materiasSelected.innerText = `Matérias: ${materias[0].value}`;
  for (let i = 1; i < materias.length; i += 1) {
    materiasSelected.innerText += `, ${materias[i].value}`;
  }
  forms.appendChild(materiasSelected);
}

function getRate() {
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const rateSelected = document.createElement('p');
  rateSelected.innerHTML = `Avaliação: ${rate}`;
  forms.appendChild(rateSelected);
}

function getText() {
  const text = document.getElementById('textarea');
  const textWrited = document.createElement('p');
  textWrited.innerText = `Observações: ${text.value}`;
  forms.appendChild(textWrited);
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  cleanAll();
  getName();
  getEmail();
  getHouse();
  getFamily();
  getMaterias();
  getRate();
  getText();
});
