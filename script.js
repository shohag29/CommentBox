const commentHere = document.getElementById("commentHere");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.onclick = () => {
    const value = input.value;
    commentHere.innerText = `${value}`;
};