// Selecting Elements
const navLogo=document.querySelector(".nav__logo img");
const navMenu=document.getElementById("nav-menu");
const navToggle=document.getElementById("nav__toggle");
const navClose=document.getElementById("nav__close");
const navLinks=document.querySelectorAll(".nav__link");
const projectsContainer=document.querySelector(".portfolio__container");
const bodyContainer=document.querySelector("body");
const showMoreBtn=document.getElementById("showmore-btn");
const FormContainer=document.getElementById("form");
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const number=document.getElementById("number");
const message=document.getElementById("message");
const submitBtn=document.querySelector(".submit");

/* Show Menu */
if(navToggle){
  navToggle.addEventListener("click",function(){
    navMenu.classList.toggle("show-menu");
    navClose.classList.toggle("hide");
    navToggle.classList.toggle("hide");
  });
}

if(navClose){
  navClose.addEventListener("click",function(){
    navMenu.classList.toggle("show-menu");
    navClose.classList.toggle("hide");
    navToggle.classList.toggle("hide");
  });
}

/* remove mobile menu when I click the nav links */

const removeMenu=()=>{
  navMenu.classList.remove("show-menu");
  navClose.classList.toggle("hide");
  navToggle.classList.toggle("hide");
}

navLinks.forEach((link)=>{
  link.addEventListener("click",removeMenu)
})

/* Change  header backgroound header*/
function scrollHeader(){

  this.scrollY >=50 ? header.classList.add("bg-header"):
                      header.classList.remove("bg-header")
}
window.addEventListener("scroll",scrollHeader)


let projects = [
{
 title:"Omnifood",
imagesFilePath:["./assets/images/projects/image1.png","./assets/images/projects/image2.png","./assets/images/projects/image3.png"],
 projectLinks:["https://github.com/Johnselastin7854/Omni-Food-.git","https://omni-food-selas.netlify.app/"],
 description:"Fully responsive Omnifood restaurant website project with HTML and CSS.Built with Jona's Course. User-friendly design.Implemented  flexbox and media queries for optimal user experience.",

},

{
    title:"Documentation Page",
    imagesFilePath:["./assets/images/projects/image4.png","./assets/images/projects/image5.png","./assets/images/projects/image6.png"],
    projectLinks:["https://github.com/Johnselastin7854/Documentation-Page.git","https://documentation-javascript.netlify.app/"],
   description:'Fully responsive JavaScript documentation page website project using HTML and CSS. Built with FreeCodeCamp curriculum.Clean, modern design.',
   },

   {
    title:" Notification Page",
    imagesFilePath:["./assets/images/projects/image7.png","./assets/images/projects/image8.png","./assets/images/projects/image9.png"],
    projectLinks:["https://github.com/Johnselastin7854/Notification-Page-Frontend-Mentor.git","https://notificatiopage.netlify.app/"],
    description:"Fully responsive Notification Page project built using HTML, CSS, and JavaScript. Based on Frontend Mentor's design. Sleek, modern design with a focus on user experience. ",
   
   },

   {
    title:" Foods",
    imagesFilePath:["./assets/images/projects/image10.png","./assets/images/projects/image11.png","./assets/images/projects/image12.png"],
    projectLinks:["https://github.com/Johnselastin7854/Notification-Page-Frontend-Mentor.git","https://foods-coursera.netlify.app/"],
    description:'Responsive FOOD Restaurant website project built using HTML, CSS, and JavaScript. Completed as part of a Coursera Frontend Developer course.Sleek, clean design.',
   
   },

   {
    title:" News Flash",
    imagesFilePath:["./assets/images/projects/image13.png","./assets/images/projects/image14.png","./assets/images/projects/image15.png"],
    projectLinks:["https://github.com/Johnselastin7854/blog-page.git","https://newsflash-blog.netlify.app/"],
    description:"Fully responsive Newsflash Blog Page website project built using HTML, CSS, and JavaScript. Based on the design from a FreeCodeCamp YouTube tutorial. Sleek, clean design. ",
   
   },

   {
    title:" Fylo Landing Page",
    imagesFilePath:["./assets/images/projects/image16.png","./assets/images/projects/image17.png","./assets/images/projects/image18.png"],
    projectLinks:["https://github.com/Johnselastin7854/fylo-landing-page.git","https://fylo-landing-page-frontend.netlify.app/"],
    description:"Fully responsive Fylo Landing Page project built using HTML and CSS. Based on Frontend Mentor's design challenge. Mobile-first approach for optimal performance on smaller screens.",
   
   },

   {
    title:" Quiz App",
    imagesFilePath:["./assets/images/projects/image19.png","./assets/images/projects/image20.png","./assets/images/projects/image21.png","./assets/images/projects/image22.png"],
    projectLinks:["https://github.com/Johnselastin7854/Quiz-App.git","https://quizzz-web-app.netlify.app/"],
    description:"Responsive Quiz App project built using HTML, CSS, and JavaScript. Based on a YouTube tutorial.Implements interactive quiz functionality with JavaScript.Sleek ,clean Design.",
   
   },

   {
    title:" Spotify Clone",
    imagesFilePath:["./assets/images/projects/image23.png","./assets/images/projects/image24.png","./assets/images/projects/image25.png"],
    projectLinks:["https://github.com/Johnselastin7854/spotify-clone.git","https://spotify-clone-web-app.netlify.app/"],
    description:"Responsive Spotify Clone project built using HTML, CSS, and JavaScript. Based on a YouTube tutorial. User-friendly design inspired by Spotify's layout and functionality.",
   
   },

   {
    title:" FAQ Accordion",
    imagesFilePath:["./assets/images/projects/image26.png","./assets/images/projects/image27.png","./assets/images/projects/image28.png"],
    projectLinks:["https://github.com/Johnselastin7854/FAQ---Accordion.git","https://faq-accordionn.netlify.app/"],
    description:"Responsive FAQ Accordion project built using HTML, CSS, and JavaScript. Based on Frontend Mentor's design challenge. Implements interactive accordion functionality with JavaScript.",
   },

]


const addProject=(project)=>{
    
    // Creating Card
    const projectDiv=document.createElement("div");
    projectDiv.classList.add("project__card");

    // For Card Animation
    const span1=document.createElement("span");
    const span2=document.createElement("span");
    const span3=document.createElement("span");
    const span4=document.createElement("span");
   
    // Creating Card Body
    const cardBody=document.createElement("div");
    cardBody.classList.add("card-body");

    // Creating Card Carousel
    const carousel=document.createElement("div");
    carousel.classList.add("card__carousel");

    // Adding Image inside the Carousel
        for(let j=0; j<project.imagesFilePath.length; j++) {
            const projectImage=document.createElement("img");
            projectImage.src=project.imagesFilePath[j];  
            carousel.appendChild(projectImage);
        }

     // Creating Card Footer
     const cardFooter=document.createElement("div");
     cardFooter.classList.add("card__footer");


     // Creating Footer Title
     const cardTitle=document.createElement("h2");
     cardTitle.classList.add("card__title");
     cardTitle.innerHTML=project.title;

     // Creating Project Description

     const cardDescription=document.createElement("p");
     cardDescription.classList.add("card__description");
     cardDescription.innerHTML=project.description;
 

     // Creating Social Link Tab
     const socialLink= document.createElement("div");
     socialLink.classList.add("card__footer--link");
     
     socialLink.innerHTML=`
     <a href="${project.projectLinks[0]}" target="_blank" rel="noreferrer">
     <img src="./assets/images/icons/github.png"  class="card__footer__icon"> 
     </a>
     <a href="${project.projectLinks[1]}" target="_blank" rel="noreferrer">
     <img src="./assets/images/icons/netlify.png"  class="card__footer__icon"> 
     </a>`;

  
     // Add all items to project container
    projectsContainer.append(projectDiv);
    projectDiv.append(span1);
    projectDiv.append(span2);
    projectDiv.append(span3);
    projectDiv.append(span4);
    projectDiv.append(cardBody);
    cardBody.appendChild(carousel);
    projectDiv.appendChild(cardFooter);
    cardFooter.append(cardTitle);
    cardFooter.appendChild(cardDescription);
    cardFooter.appendChild(socialLink);
}

projects.forEach((project) => {
    addProject(project);
})


// Carousel For project Section

const carousels = document.getElementsByClassName("card-body");
for (let i = 0; i < carousels.length; i++) {
  let carousel = carousels[i];
  let images = carousel.getElementsByTagName("img");
  let currentImageIndex = 0;

  images[currentImageIndex].style.display = "block";

  carousel.addEventListener("click", function() {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = "block";
  })
}


//  Show More Projects

let currentItem = 3;

function showMore() {
 let boxes =[...document.querySelectorAll(".project__card ")];
 
 for (let i = currentItem; i < currentItem + 3; i++) {
  boxes[i].style.display = "inline-block";
 }

 currentItem +=3;

 if(currentItem >= boxes.length) {
  showMoreBtn.style.display = "none";
 }

}

showMoreBtn.addEventListener("click", showMore);


// Form Validation



