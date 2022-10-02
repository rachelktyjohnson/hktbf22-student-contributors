const student_cards = document.querySelector(".student-cards");
const studentCardsFSJS = document.getElementsByClassName('student-card fsjs');
const studentCardsData = document.getElementsByClassName('student-card data');
const studentCardsUX = document.getElementsByClassName('student-card ux');
const studentCardsFEWD = document.getElementsByClassName('student-card fewd');
const studentCardsWeb = document.getElementsByClassName('student-card web');
const studentCardsPython = document.getElementsByClassName('student-card python');
const a = document.getElementsByTagName('a');

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

const addMike = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomStudentCard = document.querySelectorAll(".student-card")[randomIndex];
    randomStudentCard.insertAdjacentHTML("beforeend", '<img src="./images/mike-wave.gif" alt"Mike waving" class="mike">');
}

addMike();

/* 
  CSS styling dependent on what tech degree.
*/

const colorUpdate = (degree, color, a) => {
  Array.from(degree).forEach(student => {
    student.style.borderColor = color;
  });
}

colorUpdate(studentCardsFSJS, '#0e8397', a);
colorUpdate(studentCardsWeb, '#0e8397', a);
colorUpdate(studentCardsData, '#9f4b84', a);
colorUpdate(studentCardsPython, '#9f4b84', a);
colorUpdate(studentCardsFEWD, '#3659a2', a);
colorUpdate(studentCardsUX, '#4a4290', a);