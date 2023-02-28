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

function clickHandler(message: string) {
    console.log('clicked' + message);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, "yor're welcome"));
}