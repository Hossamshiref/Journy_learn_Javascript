let allLi = document.querySelectorAll("ul li");
let allDiv = document.querySelectorAll(".main div");

allLi.forEach(function (element) {
  element.onclick = function () {
    allDiv.forEach(function (element) {
      element.style.display = "none";
    });

    allLi.forEach(function (element) {
      element.classList.remove("Active");
    });

    this.classList.add("Active");
  };
});
