const student_cards = document.querySelector(".student-cards");

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
  const buttons = document.getElementsByClassName("techDegree")
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
        if (buttonText !== techDegree && buttonText.length < 7) {
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
