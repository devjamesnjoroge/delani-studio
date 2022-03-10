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
});
