var num = 0; // global variable
function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x"+num;
}
function brown_mode() {
    document.getElementById('page_style').setAttribute("href", "style.css");
}
function bright_mode() {
    document.getElementById('page_style').setAttribute("href","alt_style.css");
}