  let status = document.getElementById("status");
        let enterBtn = document.getElementById("enterBtn");
        let output = document.getElementById("output");

        // Add a click event listener to the button
        enterBtn.addEventListener("click", function() {
            // Change the text in the p tag
            status.textContent = "Entered Metaverse";

            // Display the updated text in the h1 tag
            output.textContent = "Entered Metaverse";
        });
