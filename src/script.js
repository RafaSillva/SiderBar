

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".toggle").addEventListener("click", function() {
        if (document.querySelector(".item").classList.contains("active")) {
            document.querySelector(".item").classList.remove("active");
        } else {
            document.querySelector(".item").classList.add("active");
        }
    });
});