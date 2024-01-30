const openSearch = () => {
    $("#search-icon").css("display", "none");
    $("#search-bar").css("display", "block");
    $("#hidden").css("display", "block");
};

const closeSearch = () => {
    $("#search-icon").css("display", "block");
    $("#search-bar").css("display", "none");
    $("#hidden").css("display", "none");
};

const openNav = () => {
    $("#menu-list").addClass("inline-flex");
};

const closeNav = () => {
    $("#menu-list").removeClass("inline-flex");
};

const openNavSearch = () => {
    $("#menu-list").removeClass("inline-flex");
    $("#search-bar").css("display", "block");
    $("#hidden").css("display", "block");
};
