document.getElementById('problem1Button').addEventListener('click', function() {
    let nickname = prompt("Enter your nickname:");
    let height = parseInt(prompt("Enter your height in inches:"));
    let weight = parseFloat(prompt("Enter your weight in kg:"));
    
    let heightInFeet = Math.floor(height / 12);
    let heightInInches = height % 12;
    let weightInPounds = weight * 2.20462;

    alert(`Name: ${nickname}\nHeight: ${heightInFeet}’${heightInInches}”\nWeight: ${weightInPounds.toFixed(3)} lbs`);
});
