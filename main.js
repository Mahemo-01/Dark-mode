let body = document.querySelector('body')
let darkMode = document.querySelector('#darkMode')
darkMode.addEventListener('click', changeToDarkMode)


if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkMode.setAttribute('checked', true)
  darkMode.classList.add('active')
  document.body.classList.add('is-dark-mode')
} else {
  document.body.classList.add('is-light-mode')
}

function changeToDarkMode() {
  document.body.classList.toggle('is-light-mode')
  document.body.classList.toggle('is-dark-mode')
  darkMode.classList.toggle('active')
}