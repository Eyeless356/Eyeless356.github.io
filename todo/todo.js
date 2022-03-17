$(".form-todolist").on("submit", (e) => {
  e.preventDefault();

  const value = $(".input-todovalue").val();
  console.log(value);

  if (value === "") {
    return;
  }
  $(".list-todo").append(`<li class="ltems-todo">
    <label for=""><input class="checkbox-todoitem" type="checkbox" name="" id="" />
    <span class="text-todo">${value}</span>
    </label>
    <div>
    <button class="btn-fixing" >수정하기</button>
    <button class="btn-clearTodo"></button>
    </div>
  </li>`);

  $(".input-todovalue").val("");
  $(".input-todovalue").focus();
});

$(".btn-clear-all").click(() => {
  $(".list-todo").html("");
});

$(".btn-clearTodo").click((e) => {
  $(e.currentTarget).closest(".ltems-todo").remove();
});

$(".list-todo").on("click", ".btn-clearTodo", (e) => {
  $(e.currentTarget).closest(".ltems-todo").remove();
});

$(document).on("change", ".checkbox-todoitem", (e) => {
  const checked = e.currentTarget.checked;
  console.log(checked);
  if (checked) {
    $(e.currentTarget).closest(".ltems-todo").addClass("done");
  } else {
    $(e.currentTarget);
    $(e.currentTarget).closest(".ltems-todo").removeClass("done");
  }
});

$(document).on("click", ".btn-fixing", (e) => {
  let fixing = prompt("변경할 내용을 입력해주세요");
  console.log($(e.currentTarget).closest(".ltems-todo").find(".text-todo"));
  console.log($(e.currentTarget).closest(".ltems-todo"));
  $(e.currentTarget).closest(".ltems-todo").find(".text-todo").text(fixing);
});

$(".checkbox-all").on("change", () => {
  console.log($(".ltems-todo"));
  $(".ltems-todo").toggleClass("done");
  $(".checkbox-todoitem").
});
