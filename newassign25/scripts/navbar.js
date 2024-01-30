document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("btn-nav");
    const searchPopup = document.getElementById("searchPopup");
    const closeButton = document.getElementById("closeButton");
  
    searchButton.addEventListener("click", function () {
      searchPopup.style.display = "block";
      searchButton.style.display = "none";
    });
  
    closeButton.addEventListener("click", function () {
      searchPopup.style.display = "none";
      searchButton.style.display = "block";
    });
  });
  

  function toggleMenu() {
    var menuList = document.getElementById("menuList");
    menuList.classList.toggle("show");
  }
   