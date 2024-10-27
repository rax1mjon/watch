
window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("header");

function shrink() {
    if (scrollY > 780) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 46,
    nav: true,
    responsive: {
        0: {
            items: 2
        }
        //     250: {
        //         items: 3
        //     },
        //     500: {
        //         items: 5
        //     },
        //     750: {
        //         items: 7
        //     },
        //     1000: {
        //         items: 9
        // }
    }
})