function toggleBar() {
  var x = document.getElementById("menus");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hamburger() {
    var ham_icon = document.getElementById("toggle");
    if(ham_icon.classList.contains("fa-bars")) {
        ham_icon.classList = ["fa-solid fa-x"];
    }
    else if(ham_icon.classList.contains("fa-x")) {
        ham_icon.classList = ["fa-solid fa-bars"];
    }
}