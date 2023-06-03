function toggleText() {
    var textContainer = document.getElementById("textContainer");
    var uploadContainer = document.getElementById("uploadContainer");
  
    textContainer.classList.toggle("hidden");
    uploadContainer.classList.add("hidden");
  
    if (!textContainer.classList.contains("hidden")) {
      textContainer.classList.add("popup");
    } else {
      textContainer.classList.remove("popup");
    }
  }
  
  
  function toggleUpload() {
    var textContainer = document.getElementById("textContainer");
    var uploadContainer = document.getElementById("uploadContainer");
  
    uploadContainer.classList.toggle("hidden");
    textContainer.classList.add("hidden");
  
    if (!uploadContainer.classList.contains("hidden")) {
      uploadContainer.classList.add("popup");
    } else {
      uploadContainer.classList.remove("popup");
    }
  }
  
  var uploadContainer = document.getElementById("uploadContainer");
  uploadContainer.addEventListener("dragover", function(e) {
    e.preventDefault();
    this.classList.add("dragover");
  });
  
  uploadContainer.addEventListener("dragleave", function() {
    this.classList.remove("dragover");
  });
  
  uploadContainer.addEventListener("drop", function(e) {
    e.preventDefault();
    this.classList.remove("dragover");
    var fileInput = document.getElementById("fileInput");
    fileInput.files = e.dataTransfer.files;
  });