function display(){
  var searchInput = document.querySelector('.form-control');

  if (searchInput.style.display === "none" || searchInput.style.display === "") {
      searchInput.style.display = "block";
  } 
  else {
      if (!searchInput.value.trim()) {
          searchInput.style.display = "none";
      }
  }

}

  