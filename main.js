const $input = $("input"); // Input field
const $links = $("a"); // Links to all <a> selectors which contain the class 'data-title'

//PROGRAM

$("input").on("keyup", () => {
  const $inputVal = $input.val();
  for (let i = 0; i < $links.length; i += 1) {
    var $caption = $links[i].getAttribute("data-title");
    if ($caption.toUpperCase().indexOf($inputVal.toLowerCase()) != -1) {
      $links[i].style.display = "block";
    } else {
      $links[i].style.display = "none";
    }
  }
});
