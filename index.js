// Date function
const currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent = currentYear;

// drop down menu function
function selectItem(itemText) {
  document.getElementById("dropbtn").textContent = itemText;
}

// toggle menu fuction
function toggleMenu() {
  const menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("show");
}

// progress bar function
function updateProgressBar(step) {
  for (let i = 1; i <= 6; i++) {
    const progressStep = document.getElementById(`progress-step-${i}`);
    if (i <= step) {
      progressStep.classList.add("active");
    } else {
      progressStep.classList.remove("active");
    }
  }
}

function showStep(step, event) {
  if (event) {
    event.preventDefault();
  }

  var steps = document.getElementsByClassName("form-step");
  for (var i = 0; i < steps.length; i++) {
    steps[i].style.display = "none";
  }

  var stepId = "step-" + step;
  document.getElementById(stepId).style.display = "block";

  if (step <= 6) {
    updateProgressBar(step);
    document.getElementById("progress-bar-container").style.display = "block";
  } else {
    document.getElementById("progress-bar-container").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showStep(1);
});
