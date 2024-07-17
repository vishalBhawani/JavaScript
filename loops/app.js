document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector('#userData tbody');
    const display = "";
    const userData = [

        {
            name: "vishal",
            email: "vishal@gmail.com",
            id: 1009,
            phone: 787659228
        },
        {
            name: "vishal",
            email: "vishal@gmail.com",
            id: 1009,
            phone: 787659228
        }

    ]

    // for loop

    for (let i = 0; i < userData.length; i++) {



        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${userData[i].name}</td>
         <td>${userData[i].email}</td>
          <td>${userData[i].phone}</td>
        `
        table.appendChild(tr);
    }
    // console.log(table)

    //change the main heading toUpperCase  
    // const appHeadings = document.querySelectorAll('.border-bottom:nth-of-type(2)');
    // const appHeading = appHeadings[0];
    // const appText = appHeading.innerHTML;
    // const appModified = appText.slice(6, 10);
    // const appTextChange = appModified.toUpperCase();
    // appHeading.innerHTML = appTextChange;
    // console.log(appTextChange);

    const appHeadings = document.querySelectorAll('.border-bottom:nth-of-type(2)');
    if (appHeadings.length > 0) {
        // New text to replace the sliced portion
        const newText = 'CC'; // Replace with your desired text

        // Iterate over each element matching the selector
        appHeadings.forEach(appHeading => {
            // Get the current innerHTML
            let currentText = appHeading.innerHTML;

            // Replace the sliced portion (6th to 9th character) with newText
            let modifiedText = currentText.slice(0, 6) + newText + currentText.slice(0, 6);

            // Assign the modified text back to the element
            appHeading.innerHTML = modifiedText;

            // Log the modified text for verification
            console.log('Modified Text:', modifiedText);
        });
    } else {
        console.log('Elements not found');
    }




});