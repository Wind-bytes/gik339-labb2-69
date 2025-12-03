// 1. getElementById
const inputCheckbox = document.getElementById('divStyle');  

// 2. getElementsByClassName   (returns a collection → pick index 0)
const inputField1 = document.getElementsByClassName('textfield')[0];

// 3. getElementsByTagName     (the "content" field is an <input>)
const inputField2 = document.getElementsByTagName('input')[1];

// 4. querySelector            (single element, first match)
const inputButton = document.querySelector('#button');

// 5. querySelectorAll         (static list → pick first match)
const inputDiv = document.querySelectorAll('#inputDiv')[0];

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
  inputDiv.remove()
})


// Lite kul (chat-gpt)
//function spawnHeart() {
//  const heart = document.createElement('div');
//  heart.className = 'heart';
//  heart.textContent = '❤';
//  const startX = Math.random() * window.innerWidth;
//  const duration = 3000 + Math.random() * 3000;
//  const size = 16 + Math.random() * 32;
//
//  heart.style.left = startX + 'px';
//  heart.style.animationDuration = duration + 'ms';
//  heart.style.fontSize = size + 'px';
//
//  document.body.appendChild(heart);
//
//  setTimeout(() => {
//    heart.remove();
//  }, duration);
//}
//setInterval(spawnHeart, 300);