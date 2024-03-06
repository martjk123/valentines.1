
        let clickCount = 0;
        const buttonText = ["Are you sure?", "Sure na sure?", "Super sure?"];

        function clickNo() {
            document.querySelector("#no").innerHTML = buttonText[clickCount % buttonText.length];
            clickCount++;
        
            // document.querySelector("#viewpic").innerHTML = imagesElements[imageIndex % imagesElements.length].outerHTML;
            // imageIndex++;  images sad view
          
            const yesButton = document.getElementById("yes");
            const currentHeight = parseInt(window.getComputedStyle(yesButton).height);
            const currentWidth = parseInt(window.getComputedStyle(yesButton).width);
            const currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize)

            const scaleFactor = 1.5;
            const newHeight = currentHeight * scaleFactor;
            const newWidth = currentWidth * scaleFactor;
            const newFontSize = currentFontSize * scaleFactor;

            yesButton.style.backgroundColor = "rgb(25, 214, 25);";
            yesButton.style.height = newHeight + "px";
            yesButton.style.width = newWidth + "px";
            yesButton.style.fontSize = newFontSize + "px";
        }

        // function yesClick() {

        //     document.querySelector("#view").style.display = "block";
        //     document.querySelector("img").style.display = "block";
        //     document.querySelector(".container").style.display = "none";
        //     document.querySelector(".pdiv").style.display = "none";
        //     document.querySelector("#gif2").style.display = "block";
        //     document.querySelector("#gif3").style.display = "block";

            
        // }