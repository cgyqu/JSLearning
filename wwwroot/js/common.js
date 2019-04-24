function append(m) {
    var span = document.createElement("span");
    span.innerHTML = m + "<br>";
    document.getElementById("content").appendChild(span);
}

function reset() {
    var div = document.getElementById("content");
    div.innerHTML = "";
}