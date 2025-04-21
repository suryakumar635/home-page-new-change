// // document.getElementById("contactLink1").addEventListener("click", function(e) {
// //   e.preventDefault(); // prevent default anchor behavior
// //   const target = document.querySelector(".form-container");
// //   target.scrollIntoView({ behavior: "smooth" });
// // });

// document.addEventListener('DOMContentLoaded', function() {
//   const menuButton = document.querySelector('.menu-button');
//   const navigationUl = document.querySelector('.navigation ul');
//   const navLinks = document.querySelectorAll('.navigation a');

//   menuButton.addEventListener('click', function() {
//       navigationUl.style.display = navigationUl.style.display === 'flex' ? 'none' : 'flex';
//   });

//   navLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//           // Prevent default link behavior for demonstration
//           event.preventDefault();
//           const href = this.getAttribute('href');
//           goToPage(href);
//       });
//   });

//   function goToPage(url) {
//       console.log();
//       // In a real application, you would use window.location.href = url;
//       // For this example, we'll just log the navigation.
//   }

//   // Add event listener to the "Donate Now" button
//   const donateButton = document.querySelector('.donate-button');
//   donateButton.addEventListener('click', function() {
//       console.log('Donate button clicked!');
//       // In a real application, you would redirect to a donation page.
//       // window.location.href = 'donate.html';
//   });
// });

// document.getElementById('menu-btn').addEventListener('click', () => {
//   alert("Menu clicked!");
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelectorAll('.slide');
//   const dots = document.querySelectorAll('.nav-dot');
//   const prevBtn = document.querySelector('.prev-btn');
//   const nextBtn = document.querySelector('.next-btn');
  
//   let currentSlide = 0;
//   let slideInterval;
  
//   // Function to show a specific slide
//   function showSlide(index) {
//     // Hide all slides
//     slides.forEach(slide => {
//       slide.classList.remove('active');
//     });
    
//     // Remove active class from all dots
//     dots.forEach(dot => {
//       dot.classList.remove('active');
//     });
    
//     // Show the selected slide
//     slides[index].classList.add('active');
//     dots[index].classList.add('active');
    
//     currentSlide = index;
//   }
  
//   // Set up automatic slideshow
//   function startSlideshow() {
//     slideInterval = setInterval(() => {
//       let nextIndex = (currentSlide + 1) % slides.length;
//       showSlide(nextIndex);
//     }, 6000); // Change slide every 6 seconds
//   }
  
//   // Stop slideshow
//   function stopSlideshow() {
//     clearInterval(slideInterval);
//   }
  
//   // Previous button click
//   prevBtn.addEventListener('click', () => {
//     stopSlideshow();
//     let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(prevIndex);
//     startSlideshow();
//   });
  
//   // Next button click
//   nextBtn.addEventListener('click', () => {
//     stopSlideshow();
//     let nextIndex = (currentSlide + 1) % slides.length;
//     showSlide(nextIndex);
//     startSlideshow();
//   });
  
//   // Dot navigation
//   dots.forEach(dot => {
//     dot.addEventListener('click', () => {
//       stopSlideshow();
//       let index = parseInt(dot.getAttribute('data-index'));
//       showSlide(index);
//       startSlideshow();
//     });
//   });
  
//   // Start the slideshow
//   startSlideshow();
// });


// const amountButtons = document.querySelectorAll(".amount-btn");
// const donationInput = document.getElementById("donation-amount");

// amountButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     amountButtons.forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");

//     if (!btn.classList.contains("custom")) {
//       donationInput.value = btn.dataset.amount;
//     } else {
//       donationInput.focus();
//     }
//   });
// });

// document.querySelector(".donate-btn").addEventListener("click", () => {
//   const amount = donationInput.value;
//   alert(`Thank you for donating $${amount}!`);
// });


// // You can add any JavaScript functionality here if needed.
// // For this static layout, you might not need any.
// console.log("Script loaded.");


// // You can add any JavaScript functionality here if needed.
// // For this static layout, you might not need any.
// console.log("Scripts loaded.");

// // scripts.js
// console.log("Donation cards script loaded.");

// // You can add JavaScript functionality here, such as:
// // - Handling donate button clicks
// // - Implementing progress bar updates
// // - Adding animations or interactive elements

// // scripts.js
// console.log("Donation cards script loaded.");

// // You can add JavaScript functionality here, such as:
// // - Handling "Read More" clicks
// // - Implementing the "View All Donations" button action
// // - Adding any interactive elements

//  // You can add JavaScript for dynamic behavior if needed
//  // JavaScript could be used here to animate the circular progress bars
//         // based on the numerical values. For a static representation, it's not strictly needed.

//         // Optional: Add interactivity to the stats circles
// document.querySelectorAll('.circle').forEach(circle => {
//   circle.addEventListener('click', () => {
//       const number = circle.querySelector('.number').textContent;
//       console.log(Clickedonstat .$ ,{number});
//       // Add more functionality here if needed, e.g., show a modal or animate the circle
//   });
// })

// /* have questions start  */

// document.addEventListener('DOMContentLoaded', function() {
//   const faqItems = document.querySelectorAll('.faq-item');

//   faqItems.forEach(item => {
//       const question = item.querySelector('.question');
//       const answer = item.querySelector('.answer');
//       const toggleButton = item.querySelector('.toggle-button');

//       question.addEventListener('click', () => {
//           answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
//           toggleButton.textContent = toggleButton.textContent === '+' ? '-' : '+';
//       });
//   });
// });

// // GIVING OF YOURS//

// // No JavaScript is strictly needed for the static layout shown in the image.
// // However, you might add JavaScript later for interactive elements like:
// // - Filtering articles based on the navigation links.
// // - Adding hover effects or animations.
// // - Implementing lazy loading for images.

// // Example of basic navigation link activation (optional):
// document.addEventListener('DOMContentLoaded', function() {
//   const navLinks = document.querySelectorAll('nav ul li a');

//   navLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//           event.preventDefault(); // Prevent default link behavior

//           // Remove active class from all links
//           navLinks.forEach(l => l.classList.remove('active'));

//           // Add active class to the clicked link
//           this.classList.add('active');

//           // In a real application, you would also filter the articles here
//           const category = this.textContent.toLowerCase();
//           console.log(Filtering-articles- by -$-{category});
//           // ... your filtering logic here ...
//       });
//   });
// });

// // grit container//

// // No JavaScript is strictly necessary for the static layout presented in the image.
// // You might add JavaScript later for interactive features like:
// // - Image carousels or sliders
// // - Dynamic content loading
// // - Clickable "Read More" actions that expand content or navigate to a new page.

// // Example of a simple hover effect on the read more link (optional):
// document.addEventListener('DOMContentLoaded', function() {
//   const readMoreLinks = document.querySelectorAll('.read-more');

//   readMoreLinks.forEach(link => {
//       link.addEventListener('mouseover', function() {
//           this.style.textDecoration = 'underline';
//       });

//       link.addEventListener('mouseout', function() {
//           this.style.textDecoration = 'none';
//       });
//   });
// });

// // last page//

// // No JavaScript is strictly necessary for the static layout presented in the image.
// // You might add JavaScript later for interactive features like:
// // - Image carousels or sliders
// // - Dynamic content loading
// // - Clickable "Read More" actions that expand content or navigate to a new page.

// // Example of a simple hover effect on the read more link (optional):
// document.addEventListener('DOMContentLoaded', function() {
//   const readMoreLinks = document.querySelectorAll('.read-more');

//   readMoreLinks.forEach(link => {
//       link.addEventListener('mouseover', function() {
//           this.style.textDecoration = 'underline';
//       });

//       link.addEventListener('mouseout', function() {
//           this.style.textDecoration = 'none';
//       });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const highlightImages = document.querySelectorAll('.highlight-image');
//   highlightImages.forEach((img, index) => {
//       img.src = https//via.placeholder.com/100x70/333/eee?Text=Image${index + 1};
//   });
// });
// alert("surya")

// const faqbtn = document.querySelector(".toggle-button")
// const answer = document.querySelector(".answer")


// faqbtn.addEventListener("click",function(){
//   answer.style.toggle("block")
// })

// banner start///////////////////



document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.nav-dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentSlide = 0;
  let slideInterval;
  
  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the selected slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
  }
  
  // Set up automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(() => {
      let nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }, 6000); // Change slide every 6 seconds
  }
  
  // Stop slideshow
  function stopSlideshow() {
    clearInterval(slideInterval);
  }
  
  // Previous button click
  prevBtn.addEventListener('click', () => {
    stopSlideshow();
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
    startSlideshow();
  });
  
  // Next button click
  nextBtn.addEventListener('click', () => {
    stopSlideshow();
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
    startSlideshow();
  });
  
  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopSlideshow();
      let index = parseInt(dot.getAttribute('data-index'));
      showSlide(index);
      startSlideshow();
    });
  });
  
  // Start the slideshow
  startSlideshow();
});

// banner end////////////////////////////////////










const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.closest('.faq-item').querySelector('.answer');

        // Toggle visibility of the answer
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            this.textContent = '-'; // Change button to minus
        } else {
            answer.style.display = 'none';
            this.textContent = '+'; // Change button back to plus
        }
    });
});





