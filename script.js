document.addEventListener("DOMContentLoaded", function () {
    const layouts = document.querySelector(".has-submenu");
    const submenu = layouts.querySelector(".submenu");

    layouts.addEventListener("click", function (event) {
        if (event.target === layouts) {
            submenu.classList.toggle("show");
        }
    });
});


// const collapseButton = document.getElementById("collapse-button");

// const sidebar = document.querySelector(".sidebar");
// collapseButton.addEventListener("click", function() {
//   sidebar.classList.toggle("collapsed");
// });
