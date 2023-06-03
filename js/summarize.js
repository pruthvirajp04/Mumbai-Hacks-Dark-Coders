function toggleText() {
    var textContainer = document.getElementById("textContainer");
    var uploadContainer = document.getElementById("uploadContainer");
    var submitButton = document.getElementById("submitButton");
    var resetButton = document.getElementById("resetButton");
  
    textContainer.classList.toggle("hidden");
    uploadContainer.classList.add("hidden");
  
    if (!textContainer.classList.contains("hidden")) {
      textContainer.classList.add("popup");
      submitButton.classList.remove("hidden");
      resetButton.classList.remove("hidden");
    } else {
      textContainer.classList.remove("popup");
      submitButton.classList.add("hidden");
      resetButton.classList.add("hidden");
    }
  }
  
  function toggleUpload() {
    var textContainer = document.getElementById("textContainer");
    var uploadContainer = document.getElementById("uploadContainer");
    var submitButton = document.getElementById("submitButton");
    var resetButton = document.getElementById("resetButton");
  
    uploadContainer.classList.toggle("hidden");
    textContainer.classList.add("hidden");
  
    if (!uploadContainer.classList.contains("hidden")) {
      uploadContainer.classList.add("popup");
      submitButton.classList.remove("hidden");
      resetButton.classList.add("hidden");
    } else {
      uploadContainer.classList.remove("popup");
      submitButton.classList.add("hidden");
      resetButton.classList.add("hidden");
    }
  }
  
  // Hide the submit and reset buttons by default
  document.getElementById("submitButton").classList.add("hidden");
  document.getElementById("resetButton").classList.add("hidden");
  