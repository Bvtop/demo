function setChange(n) {
    var a = document.getElementsByClassName("afterClick");
    for (x in a) {
        a[x].className = "";
    }
    n.className = "afterClick";
}