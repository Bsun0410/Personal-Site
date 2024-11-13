//References: Project 3: Interactivity JavaScript Snippets


$("#accept-modal").on("click", function () {
    $("#contact-modal").addClass("hidden");
    $("#maincontact").addClass("unblur");
    $("#maincontact2").addClass("unblur");

});

$("#hamburger-button").on("click", function () {
    if ($("#nav-menu").hasClass("hidden")) {
        $("#nav-menu").removeClass("hidden");
    }
    else {
        $("#nav-menu").addClass("hidden");
    }
});
