const inputCheckbox = document.getElementById('divStyle');
const inputField1 = document.getElementById('color');
const inputField2 = document.getElementById('content');
const inputButton = document.getElementById('button');
const inputDiv = document.getElementById('inputDiv');

function eventListener(e) {
  console.log(e.target)
  let fieldName = e.target.name
  if (fieldName === "content") {
        inputDiv.innerHTML = e.target.value;
    }
}

inputField1.addEventListener('input', eventListener);
inputField2.addEventListener('input', eventListener);
inputCheckbox.addEventListener('input', eventListener);
inputButton.addEventListener('click', eventListener);

inputCheckbox.addEventListener('change', (e) => {
  if(e.target.checked) {
    console.log("Checked")
    inputDiv.style.border = '2px solid crimson'
    inputDiv.style.backgroundColor = inputField1.value
    inputDiv.style.border.visibility = 'visible'
    if(inputDiv.innerHTML.trim() === ""){
      inputDiv.style.border = ""
    }
  }
  
  else {
    console.log("Unchecked")
    inputDiv.style.border = ''
    inputDiv.style.border.visibility = 'hidden'
    inputDiv.style.backgroundColor = 'black'
  }
})

inputButton.addEventListener('click', () => {
  inputField1.value = '';
  inputField2.value = '';
  inputDiv.style.border = '';
  inputDiv.style.border.visibility = 'hidden';
  inputDiv.style.backgroundColor = 'black';
  inputDiv.innerHTML = '';
})


// Lite kul
function spawnHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  const startX = Math.random() * window.innerWidth;
  const duration = 3000 + Math.random() * 3000;
  const size = 16 + Math.random() * 32;

  heart.style.left = startX + 'px';
  heart.style.animationDuration = duration + 'ms';
  heart.style.fontSize = size + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration);
}
setInterval(spawnHeart, 300);