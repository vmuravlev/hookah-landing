'use strict';

window.onload = function () {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    let seeMenuButton = document.getElementById("see-menu-button");
    let bookTableButton = document.getElementById("book-table-button");
    let submitButton = document.getElementById("submit-button");

    let menuBlock = document.getElementById("menu-block");
    let bookTableBlock = document.getElementById("book-table-block");

    let timeInput = document.querySelector('.time');
    let timeList = document.querySelector('.time-options');
    let timeItems = document.querySelectorAll('.available-time');
    let timeArrowWhite = document.querySelector('.select-arrow-white img');
    let timeArrowTransparent = document.querySelector('.select-arrow-transparent img');


    // Слайдеры
    $('.video-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="/images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/images/arrow-right.png" alt="next"></button>'
    });

    $('.reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/images/arrow-right.png" alt="next"></button>',
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // Маска из библиотеки
    $('#phone1').inputmask("+9 (999) 999-99-99");


    // Ссылки
    seeMenuButton.addEventListener("click", function () {
        menuBlock.scrollIntoView({behavior: "smooth"});
    });

    bookTableButton.addEventListener("click", function () {
        bookTableBlock.scrollIntoView({behavior: "smooth"});
    });


    // Выбор времени
    timeArrowWhite.addEventListener('click', function (e) {
        e.stopPropagation();
        timeList.classList.toggle('open');
        timeInput.classList.toggle('time-active');
        timeArrowTransparent.classList.add('open');
        timeArrowWhite.classList.add('open');
    });

    timeItems.forEach(option => {
        option.addEventListener('click', () => {
            timeInput.value = option.textContent;
            timeList.classList.remove('open');
            timeInput.classList.remove('time-active');
            timeArrowTransparent.classList.remove('open');
            timeArrowWhite.classList.remove('open');
        });
    });


    // Бургерное меню
    document.getElementById('burger').onclick = function () {
        document.getElementById('burger-menu').classList.add('open');
    }

    document.querySelectorAll('#burger-menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('burger-menu').classList.remove('open');
        }
    })
}