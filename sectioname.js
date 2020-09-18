$(window).scroll(function () {
  if ($(this).scrollTop() > 1000) {
    $("#dynamic").addClass(".poppedup");
  } else {
    $(".sectioname-container p").removeClass("poppedup");
  }
});
