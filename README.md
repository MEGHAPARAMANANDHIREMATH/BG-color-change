# BG-color-change

**/index.html**

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>Click the button to change the background color!</h1>
        <button id="changeColorButton">Change Color</button>
    </div>

    <script src="script.js"></script>
</body>
</html>

**/style.css**

/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: background-color 0.5s ease;
}

.container {
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}


**/script.js**

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
