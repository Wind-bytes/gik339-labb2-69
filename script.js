

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
});

// Koppla funktionen till alla textfält (input-event när användaren skriver)
allTextInputs.forEach(input => {
    input.addEventListener("input", handleInputEvent);
    input.addEventListener("blur", handleInputEvent); 
});

// --- Eventlyssnare för knappen ---
// När knappen klickas ska div-elementet försvinna
removeBtn.addEventListener("click", function() {
    myDiv.style.display = "none"; // tar bort div från visning
});

