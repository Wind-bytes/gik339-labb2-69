

// Hämtade element
const myDiv = document.querySelector(".myDiv");
const allTextInputs = document.querySelectorAll(".textfield");
const removeBtn = document.getElementById("removeBtn");
const divStyleCheckbox = document.getElementById("divStyle");



divStyleCheckbox.addEventListener("change", function() {
    const chosenColor = colorInput.value;
    myDiv.style.backgroundColor = chosenColor;
});


function handleInputEvent(e) {
    console.log("Event triggered by:", e.target);
    const inputName = e.target.name;
    console.log("Input name:", inputName);

    if (inputName === "content") {
        myDiv.innerHTML = e.target.value;
    }
}

// Koppla funktionen till alla textfält (input-event när användaren skriver)
allTextInputs.forEach(input => {
    input.addEventListener("input", handleInputEvent);
    input.addEventListener("blur", handleInputEvent); // även vid focus out
});

// --- Eventlyssnare för knappen ---
// När knappen klickas ska div-elementet försvinna
removeBtn.addEventListener("click", function() {
    myDiv.style.display = "none"; // tar bort div från visning
});

