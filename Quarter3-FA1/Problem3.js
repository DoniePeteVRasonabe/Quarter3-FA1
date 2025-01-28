document.getElementById('problem3Button').addEventListener('click', function() {
    let agree = confirm("Do you agree to share your personal information with our site?");
    if (agree) {
        console.log(`Name: ${nickname}\nHeight: ${heightInFeet}’${heightInInches}”\nWeight: ${weightInPounds.toFixed(3)} lbs`);
    } else {
        console.log("User does not wish to share his/her information.");
    }
});
