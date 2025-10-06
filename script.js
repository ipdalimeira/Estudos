console.log("Script está funcionando!");
// Abrir/fechar menu no celular
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
});
