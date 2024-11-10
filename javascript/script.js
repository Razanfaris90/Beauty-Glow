/*  THIS JS for the  Massge window  made by SABAH  */
window.addEventListener('DOMContentLoaded', () => {
    const windowElement = document.getElementById('window');
    const deleteButton = document.getElementById('deleteButton');
  
    // show the window
    windowElement.style.display = 'block';
  
    // Delete the window when it clicked
    deleteButton.addEventListener('click', () => {
      windowElement.remove();
    });
  });
  // Function to change the background color of the header when clicked
function changeHeaderColor() {
    var header = document.querySelector("header");
    header.style.backgroundColor = "pink";
}
  
  // Function to display a random makeup tip in a popup
  function showRandomMakeupTip() {
    var tips = [
      "Use a damp beauty blender to blend foundation for a seamless finish.",
      "Apply mascara to both upper and lower lashes for a more defined look.",
      "Use a lip liner to prevent your lipstick from feathering or bleeding.",
      "Apply highlighter on the high points of your face for a radiant glow."
    ];
  
    var randomIndex = Math.floor(Math.random() * tips.length);
    var randomTip = tips[randomIndex];
  
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = randomTip;
  
    document.body.appendChild(popup);
  
    setTimeout(function () {
      popup.remove();
    }, 3000);
  }

  // Function to animate the logo on mouseover
function animateLogo() {
    var logo = document.querySelector("header img");
    logo.classList.add("animated-logo");
  }
  
  // Function to reset the logo animation on mouseout
  function resetLogoAnimation() {
    var logo = document.querySelector("header img");
    logo.classList.remove("animated-logo");
  }

  // this made by wafaa
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
  
    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Yay, Thank You!!";
        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    });
  
    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;
  
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
  
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
  });
  
  // this made by wafaa
  document.querySelectorAll('nav ul li').forEach(function (parentListItem) {
    parentListItem.addEventListener('mouseover', function (e) {
      const submenu = e.currentTarget.querySelector('ul.submenu');
      if (submenu) {
        submenu.style.display = 'block';
        submenu.style.opacity = 1;
      }
    });
    parentListItem.addEventListener('mouseout', function (e) {
      const submenu = e.currentTarget.querySelector('ul.submenu');
      if (submenu) {
        submenu.style.display = 'none';
        submenu.style.opacity = 0;
      }
    });
  });
// // subscribe!********************
function submitMessage() {
    var message = document.getElementById("emailS").value;

    if (message.trim() !== "") {
        alert("Your Email submitted: " + message);
    } else {
        alert("Please enter your Email before submitting.");
    }
}
  
  // this made by wafaa
  // script.js

// document.addEventListener("DOMContentLoaded", function () {
//     // Add click event listeners to all read more buttons
//     var readMoreButtons = document.querySelectorAll(".read-more-btn");
//     readMoreButtons.forEach(function (button) {
//         button.addEventListener("click", toggleReadMore);
//     });
// });

// function toggleReadMore(event) {
//     // Get the parent article element
//     var article = event.target.closest("article");

//     // Find the read-more-text span inside the current article
//     var readMoreText = article.querySelector(".read-more-text");

//     // Toggle the display style between "block" and "none"
//     if (readMoreText.style.display === "none" || readMoreText.style.display === "") {
//         readMoreText.style.display = "block";


//         var fullText = document.getElementById("fullText").innerText;
//         alert(fullText);
//         // document.getElementById("moreT").innerText += fullText;
//         // article.appendChild(fullText);
//         event.target.innerText = "read less...";
//     } else {
//         readMoreText.style.display = "none";
//         event.target.innerText = "read more...";
//     }
// }



function addTextToParagraph() {
  var sourceParagraph = document.getElementById("fullText");
  var destinationParagraph = document.getElementById("moreT");
  var mybtn = document.getElementById("mybtn");

  if (mybtn.innerText == "read more...") {
      destinationParagraph.innerHTML = sourceParagraph.innerHTML;
      mybtn.innerText = "read less...";

  } else if (mybtn.innerText == "read less...") {
      destinationParagraph.innerHTML = "";
      mybtn.innerText = "read more...";

  } else {
      console.error("Source or destination element not found.");
  }
}

function addTextToParagraph2() {

  var sourceParagraph = document.getElementById("fullText2");
  var destinationParagraph = document.getElementById("moreT2");
  var mybtn = document.getElementById("mybtn2");
  
  if (mybtn.innerText == "read more...") {
      destinationParagraph.innerHTML = sourceParagraph.innerHTML;
      mybtn.innerText = "read less...";

  }else if (mybtn.innerText == "read less...")  {
      destinationParagraph.innerHTML = "";
      mybtn.innerText = "read more...";

  }else{
      console.error("Source or destination element not found.");
  }
}
/* for do it correclty page , fix it button */


function showCorrectVideo(button) {
  var container = button.parentElement.previousElementSibling;
  var wrongVideo = container.querySelector(".wrong-video");
  var correctVideo = container.querySelector(".correct-video");
  
  wrongVideo.style.display = "none";
  correctVideo.style.display = "block";
  correctVideo.play();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Your custom logic here, for example, displaying an alert
  alert("Thank you for your valuable feedback! We've received it and are committed to continuously improving based on your input.");   });
