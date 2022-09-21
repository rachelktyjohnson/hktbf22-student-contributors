const student_cards = document.querySelector(".student-cards")

let student_cards_html = "";

data.forEach((student) => {
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
        "</div>"

})

student_cards.innerHTML = student_cards_html