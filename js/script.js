const student_cards = document.querySelector(".student-cards");
const studentCardsFSJS = document.getElementsByClassName('student-card fsjs');
const studentCardsData = document.getElementsByClassName('student-card data');
const studentCardsUX = document.getElementsByClassName('student-card ux');
const studentCardsFEWD = document.getElementsByClassName('student-card fewd');
const studentCardsWeb = document.getElementsByClassName('student-card web');
const studentCardsPython = document.getElementsByClassName('student-card python');
const backgroundColor = document.querySelector('body');



let student_cards_html = "";

// Loop through the student data and display each student's information in a card, but randomized order
// Resource: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const randomizeStudentDisplay = data
  .sort((a, b) => 0.5 - Math.random())
  .forEach((student) => {
    student_cards_html +=
      `<div class='student-card ${student.techdegree_slug}'>` +
      `<a target="_blank" href='https://teamtreehouse.com/profiles/${student.treehouse_username}'>` +
      `<h3 class='student-name'>${student.name}</h3>` +
      "</a>" +
      "<div class='techdegree'>" +
      "<h4>Current TechDegree</h4>" +
      `<p>${slug_map[student.techdegree_slug]}</p>` +
      "</div>" +
      "<div class='favourite'>" +
      "<h4>Favourite Video/Course</h4>" +
      `<p><a href='${student.favorite_course_url}'>${student.favorite_course_name}</a></p>` +
      "</div>" +
      "</div>";
  });

student_cards.innerHTML = student_cards_html;

// Tech degree filter function

const main = document.querySelector("main");
addFilterButtons();

function addFilterButtons() {
  main.innerHTML += 
  `<div class="filterButtons">
  <button class="techDegree">FSJS</button>
  <button class="techDegree" style="animation-delay:0.07s">FEWD</button>
  <button class="techDegree" style="animation-delay:0.14s">WEB</button>
  <button class="techDegree" style="animation-delay:0.21s">PYTHON</button>
  <button class="techDegree" style="animation-delay:0.28s">DATA</button>
  <button class="techDegree" style="animation-delay:0.35s">UX</button>
  <button class="techDegree" style="animation-delay:0.41s">ALL</button>
  </div>`;
  const filterButtons = document.querySelector(".filterButtons");
  const buttons = document.getElementsByClassName("techDegree");
  filterButtons.addEventListener("click", e =>{
    for (i=0; i<buttons.length; i++){
      buttons[i].classList.remove("techDegree-active")
    }
    e.target.classList.add("techDegree-active")
    filterTechDegree(e.target);
    
  }); 
}



let hiddenCount = 0;
function filterTechDegree(e) {
  buttonText = e.innerHTML.toLowerCase();
  let degrees = '';
  if(buttonText === "all") {
    degrees = document.getElementsByClassName("student-card");
    hiddenCount = 1;
    for (const degree of degrees) {
      degree.style.display = '';
    }

  } else {
      hiddenCount = 0;
      for (let i=0; i<data.length;i++){
        const student = data[i];
        const techDegree = student.techdegree_slug;
        if (buttonText !== techDegree) {
          degrees = document.getElementsByClassName(`${techDegree}`)
          for (const degree of degrees) {
            degree.style.display = 'none';
          } 
          hiddenCount++;
        } else {
          degrees = document.getElementsByClassName(`${techDegree}`)
          for (const degree of degrees) {
            degree.style.display = '';
          }
        }
}
    if (hiddenCount === data.length) {
      alert("No Students for this TechDegree. Please select a new TechDegree");
      degrees = document.getElementsByClassName("student-card");
      for (const degree of degrees) {
        degree.style.display = '';
      }
      hiddenCount = 0;
      e.classList.remove("techDegree-active")
    }
}
}
const addMike = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomStudentCard = document.querySelectorAll(".student-card")[randomIndex];
    randomStudentCard.insertAdjacentHTML("beforeend", '<img src="./images/mike-wave.gif" alt"Mike waving" class="mike">');
}

addMike();

/* 
  CSS styling dependent on what tech degree.
*/

const colorUpdate = (degree, color) => {
  Array.from(degree).forEach(student => {
    student.style.borderColor = color;
    student.children[0].style.color = color;
    student.children[2].children[1].children[0].style.color = color;
    

  });
}
//  const buttons = document.getElementsByClassName("techDegree");

// console.log(buttons)

// buttons.addEventListener('click', e=>{
//   console.log(target.e)
// })

const updateBackground= (degreeText,color) =>{
  backgroundColor.style.backgroundColor =color;
  Array.from(degreeText).forEach(button =>{
    button.style.backgroundColor =color
    button.style.borderColor ='white'
    button.style.color ='white'
  })
}

function returnStyleToDefault(degreeText){
  backgroundColor.style.backgroundColor = "#5fcf80";
  Array.from(degreeText).forEach(button =>{
    button.style.backgroundColor ='white';
    button.style.borderColor ='#3ac162';
    button.style.color ='#5fcf80';
  })


}

const filterButtons = document.querySelector(".filterButtons");
const buttons = document.getElementsByClassName("techDegree");

filterButtons.addEventListener("click", e =>{
  let buttonText = e.target.innerHTML.toLowerCase();
  console.log(buttonText)

  if(buttonText=== "data" || buttonText=== 'python' ){
    updateBackground(buttons,'#9f4b84');
  }
  else if(buttonText==='web' || buttonText==='fsjs'){
    updateBackground(buttons,'#0e8397');
  }
  else if(buttonText==='fewd'){
    updateBackground(buttons,'#3659a2');
  }
  else if(buttonText==='ux'){
    updateBackground(buttons,'#4a4290');
  }
  
  else{
    returnStyleToDefault(buttons);
  }
  
}); 
  

  




colorUpdate(studentCardsFSJS, '#0e8397');
colorUpdate(studentCardsWeb, '#0e8397');
colorUpdate(studentCardsData, '#9f4b84');
colorUpdate(studentCardsPython, '#9f4b84');
colorUpdate(studentCardsFEWD, '#3659a2');
colorUpdate(studentCardsUX, '#4a4290');