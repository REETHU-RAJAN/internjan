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
$(document).ready(function(){
    $('.main_block1').slick({
        dots:true,
        slidesToShow: 1,  
        slidesToScroll:1,
        infinite:true,
        autoplay: true,
        autoplaySpeed:2000,
        
    });
  });