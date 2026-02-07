let num = 0;
        let courseName = []
        let CourseUnit = []
        let Grade = []
        let CP = []

document.getElementById("creating").onclick = function () {
  num++;

  let row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" class="CN"></td>
    <td><input type="number" class="CU"></td>
    <td><input type="text" class="grade"></td>
  `;
  document.querySelector("tbody").append(row);
};


function result() {
  let courseUnits = document.querySelectorAll(".CU");
  let grades = document.querySelectorAll(".grade");

  let totalPoints = 0;
  let totalUnits = 0;

  for (let i = 0; i < courseUnits.length; i++) {
    let unit = parseInt(courseUnits[i].value);
    let grade = grades[i].value.toUpperCase();

    if (isNaN(unit)) continue;

    let points = 0;
    if (grade === "A"){
        points = 5;
    } 
    else if (grade === "B") {
        points = 4;
    }
    else if (grade === "C") {
        points = 3;
    }
    else if (grade === "D") {
        points = 2;
    }
    else if (grade === "E") {
        points = 1;
    }

    totalPoints += points * unit;
    totalUnits += unit;
  }

  let gpa = (totalPoints / totalUnits).toFixed(2);
  document.getElementById("gpaboard").innerText = gpa;
}
