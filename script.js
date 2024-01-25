// Select all elements with the id "stars" that are of type 'i'
let stars = document.querySelectorAll("#stars i");

// Select the container element with the id "stars"
let rateContainer = document.getElementById("stars");

// Iterate over each star element
stars.forEach(function (star, index1) {
    // Add a click event listener to each star
    star.addEventListener("click", function () {
        // Iterate over each star again to toggle colors based on the index
        stars.forEach(function (star, index2) {
            // If the current star's index is greater than the clicked star's index
            if (index2 > index1) {
                // Change the color to lightgray
                star.style.color = 'lightgray';
            } else {
                // Change the color to orange
                star.style.color = "orange";
            }
        })
    })
})

// Add a double-click event listener to the container element
rateContainer.addEventListener("dblclick", function () {
    // Iterate over each star and set the color to lightgray
    stars.forEach(function (star, index) {
        star.style.color = "lightgray";
    })
})
