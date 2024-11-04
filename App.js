
let favoriteColors = [];


for (let i = 0; i < 3; i++) {
    let color = prompt("Enter one of your favorite colors:");
    favoriteColors.push(color); 
    console.log("Updated list of favorite colors:", favoriteColors); 
}

let newColor = prompt("Enter another color to add to your favorites:");
favoriteColors.push(newColor);
console.log("Final list of favorite colors:", favoriteColors);
