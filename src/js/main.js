$(function () {
  $(".btn-pass").on("click", () => {
    $(".profile-info").addClass("hide");
    $(".change-pass").removeClass("hide");
  });
  $(".btn-edit").on("click", () => {
    $(".profile-info").addClass("hide");
    $(".edit-profile").removeClass("hide");
  });
  $(".btn-delete").on("click", () => {
    $(".profile-info").addClass("hide");
    $(".delete-profile").removeClass("hide");
  });
  $(".btn-edit");
  $(".cancel-btn").on("click", () => {
    $(".profile-info").removeClass("hide");
    $(".change-pass, .edit-profile,.delete-profile,.delete-address").addClass(
      "hide"
    );
  });
  $(".btn-add-address").on("click", () => {
    $(".address").addClass("hide");
    $(".new-address").removeClass("hide");
  });
  $(".cancel-btn").on("click", () => {
    $(".new-address").addClass("hide");
    $(".address").removeClass("hide");
  });
  $("#saveNewAddress").on("click", () => {
    $(".new-address").addClass("hide");
    $(".my-addresses").removeClass("hide");
  });
  $(".close-table").on("click", () => {
    $(".my-addresses").addClass("hide");
    $(".delete-address").removeClass("hide");
  });
});
