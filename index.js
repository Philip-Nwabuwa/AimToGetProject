const currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent = currentYear;

function updateProgressBar(step) {
  // Update the progress bar based on the current step
  for (let i = 1; i <= 6; i++) {
    const progressStep = document.getElementById(`progress-step-${i}`);
    if (i <= step) {
      progressStep.classList.add("active");
    } else {
      progressStep.classList.remove("active");
    }
  }
}

function showStep(step) {
  // Hide all steps
  var steps = document.getElementsByClassName("form-step");
  for (var i = 0; i < steps.length; i++) {
    steps[i].style.display = "none";
  }

  // Show the specified step
  var stepId = "step-" + step;
  document.getElementById(stepId).style.display = "block";

  // Update the progress bar if it's one of the first 6 steps
  if (step <= 6) {
    updateProgressBar(step);
    document.getElementById("progress-bar-container").style.display = "block";
  } else {
    // Hide the progress bar if the current step is 7
    document.getElementById("progress-bar-container").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showStep(1); // Show the first step and update the progress bar
});
