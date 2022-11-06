const d = new Date();
let count = 0;
document.getElementById("time").innerHTML = d.toLocaleTimeString();

function counter() {
    count++;
    updateCount();
    updateColor();
}
function updateCount() {
    document.getElementById("count").innerHTML = count;
}
function updateColor() {
    if (count % 2 === 0)
        document.getElementById("time").style.color = "green";
    else
        document.getElementById("time").style.color = "red";

}