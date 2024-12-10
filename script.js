

// Array of background colors to change
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"];

// Get the button element
const button = document.getElementById("changeColorButton");

// Initialize a color index
let colorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    
    // Update the color index to cycle through the colors
    colorIndex = (colorIndex + 1) % colors.length;
}

// Add click event listener to the button
button.addEventListener("click", changeBackgroundColor);
