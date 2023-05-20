document.getElementById("main-action").onclick = function() {
    document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
};

var buttons = document.getElementsByName("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("prise").scrollIntoView({ behavior: "smooth" });
    };
}

document.getElementById("price-action").onclick = function() {
    if(document.getElementById("name").value == "") {
        alert("Заполните поле имя");
    } else if (document.getElementById("phone").value == "") {
        alert("Заполните поле  телефон");
    } else if (document.getElementById("car").value == "") {
        alert("Заполните поле  автомобиля");
    } else {
        alert("Спасибо за заявку, ми свяжемся с вами в ближайшое время")
    }

};

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});

function scrollToPriceForm() {
    var priceForm = document.getElementById("price-form");
    priceForm.scrollIntoView({behavior: "smooth"});
}


