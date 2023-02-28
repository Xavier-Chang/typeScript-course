let appId = "abc";

//TS can't dive in the HTML file and see if the button is existed. So it may be null
const button = document.querySelector("button")!; //! -> I make sure to TS that button is existed

//runtime check
// if (button) {
//   button.addEventListener("click", () => {
//     console.log("Clicked!!");
//   });
// }

// button.addEventListener("click", () => {
//     console.log("Clicked!!");
//   });

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  } else {
    return 0
  }
}

function clickHandler(message: string) {
  let unserName = "Xavier";
  console.log("clicked" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "yor're welcome"));
}
