const input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value != "") {
    console.log(input.value);
    input.value = "";
  }
});
