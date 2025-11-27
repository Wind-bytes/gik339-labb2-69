
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

// Hämtade element
const myDiv = document.querySelector(".myDiv");
const allTextInputs = document.querySelectorAll(".textfield");
const removeBtn = document.getElementById("removeBtn");
const divStyleCheckbox = document.getElementById("divStyle");


function handleInputEvent(e) {
    console.log("Event triggered by:", e.target);
    const inputName = e.target.name;
    console.log("Input name:", inputName);

     if (inputName === "content") {
        myDiv.innerHTML = e.target.value;
    } else if (inputName === "color") {
        myDiv.style.color = e.target.value; // uppdaterar textfärg
    }
}

divStyleCheckbox.addEventListener("change", function(e) {
    if (e.target.checked) {
        myDiv.style.border = "2px solid crimson";
        myDiv.style.borderRadius = "10px";
        myDiv.style.padding = "10px";
    } 
    else {
        console.log("Unchecked");
        myDiv.style.border = "";       // removes the border
        myDiv.style.borderRadius = ""; // removes border radius
        myDiv.style.padding = "";      // removes padding
       
    }
});

// Koppla funktionen till alla textfält (input-event när användaren skriver)
allTextInputs.forEach(input => {
    input.addEventListener("input", handleInputEvent);
    input.addEventListener("blur", handleInputEvent); 
});

// --- Eventlyssnare för knappen ---
// När knappen klickas ska div-elementet försvinna
removeBtn.addEventListener("click", function() {
    if (myDiv.style.display === "none" || myDiv.style.display === "") {
        myDiv.style.display = "block"; // show it again
    } else {
        myDiv.style.display = "none"; // hide it
    }
});

