const $links = $("a"); // Links to all <a> selectors which contain the class 'data-title'

$("input").on("keyup", e => {
  let val = e.target.value;
  for (let i = 0; i < $links.length; i += 1) {
    var $caption = $links[i].getAttribute("data-title");
    if ($caption.toUpperCase().indexOf(val.toUpperCase()) != -1) {
      $links[i].style.display = "block";
    } else {
      $links[i].style.display = "none";
    }
  }
});
