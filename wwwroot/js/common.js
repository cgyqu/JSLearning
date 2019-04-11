function append(m){
    var span = document.createElement("span");
    span.innerHTML = m + "<br>";
    document.getElementById("content").appendChild(span);
}
