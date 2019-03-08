const $input = $("input"); // Input field
const $links = $("a"); // Links to all <a> selectors which contain the class 'data-title'

//PROGRAM

$("form").on("keyup", () => {
  const $inputVal = $input.val();
});

for (let i = 0; i < $links.length; i += 1) {
  const $caption = $links[i].attr(".data-title");
  console.log($caption);
}

// for (let i = 0; i < $links.length; i += 1) {
//     const $caption = $links[i].getAttribute(".data-title");
//     console.log($caption);
//   }

// $("a").each(function(index, link) {
//   const $url = $(link).attr("data-title");
//   console.log($url);
// });
