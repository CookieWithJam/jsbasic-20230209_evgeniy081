function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text')
  button.addEventListener('click', function () {
    let isTextHidden = text.hidden;
    text.hidden = !isTextHidden;
  })
}
