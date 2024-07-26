document.addEventListener("DOMContentLoaded", () => {

    let runAgain = true;

    const canDrive = (age) => {
        return age >= 18 ? true : false;
    };

    while (runAgain) {
        let age = prompt("Enter your age");
        age = Number.parseInt(age);

        console.log("Entered age:", age);

        if (isNaN(age) || age < 0) {
            console.error("Enter a valid age");
            break;
        }

        if (canDrive(age)) {
            alert("You can drive");
        } else {
            alert("You cannot drive");
        }

        runAgain = confirm("Do you want to play again?");
        console.log("Run again:", runAgain);
    }
});
