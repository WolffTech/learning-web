const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World 2!");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World 3!");
});

function alertFunction() {
    alert("Hello World 4!");
}