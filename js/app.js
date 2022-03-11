$(document).ready(function () {
  $(".design").click(function () {
    $(this).css("display", "none");
    $(".design-p").css("display", "flex");
    $(".dev-p").css("margin", "0");
  });
  $(".design-p").click(function () {
    $(this).css("display", "none");
    $(".design").css("display", "initial");
  });
  $(".dev").click(function () {
    $(this).css("display", "none");
    $(".dev-p").css("display", "flex");
  });
  $(".dev-p").click(function () {
    $(this).css("display", "none");
    $(".dev").css("display", "initial");
  });
  $(".product").click(function () {
    $(this).css("display", "none");
    $(".product-p").css("display", "flex");
  });
  $(".product-p").click(function () {
    $(this).css("display", "none");
    $(".product").css("display", "initial");
  });

  //PORTFOLIO HOVER EFFECTS
  $("#work1").mouseenter(function () {
    $("#work1-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work1").mouseleave(function () {
    $("#work1-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
  $("#work2").mouseenter(function () {
    $("#work2-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work2").mouseleave(function () {
    $("#work2-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
  $("#work3").mouseenter(function () {
    $("#work3-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work3").mouseleave(function () {
    $("#work3-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
  $("#work4").mouseenter(function () {
    $("#work4-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work4").mouseleave(function () {
    $("#work4-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
  $("#work5").mouseenter(function () {
    $("#work5-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work5").mouseleave(function () {
    $("#work5-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
  $("#work6").mouseenter(function () {
    $("#work6-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work6").mouseleave(function () {
    $("#work6-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
  $("#work7").mouseenter(function () {
    $("#work7-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work7").mouseleave(function () {
    $("#work7-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
  $("#work8").mouseenter(function () {
    $("#work8-overlay").css(
      "clipPath",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
  });
  $("#work8").mouseleave(function () {
    $("#work8-overlay").css(
      "clipPath",
      "polygon(0 0, 0 0, 100% 100%, 38% 38%)"
    );
  });
});

//FORM
$("form").submit(function () {
  event.preventDefault();
  let name = $("#name").val();
  let email = $("#email").val();
  alert(
    name + ", your message has been received. You will receive an email shortly"
  );
  location.reload(true);
});
