function ProjectSwiper(fetchHandler) {
    this.fetchHandler = fetchHandler;
    this.data = fetchHandler.data;
    this.container = document.getElementById('swiper');
    this.swiper = null;

    this.init();
}

ProjectSwiper.prototype = {
    init: function() {
        const swiperWrapper = this.makeProject();
        this.container.appendChild(swiperWrapper);

        this.initSwiper();
        this.initEventsClick();
    },
    initSwiper: function() {
        let swiper;

        if (window.innerWidth < 900) {
            swiper = new Swiper(" .mySwiper ", {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".swiper-button-next ",
                    prevEl: ".swiper-button-prev ",
                },
            })
        } else {
            swiper = new Swiper(" .mySwiper ", {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".swiper-button-next ",
                    prevEl: ".swiper-button-prev ",
                },
            })
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth < 900) {
                swiper.params.slidesPerView = 1;
                swiper.params.slidesPerGroup = 1;
                swiper.params.spaceBetween = 0;
                swiper.update();
            } else {
                swiper.params.slidesPerView = 3;
                swiper.params.slidesPerGroup = 3;
                swiper.params.spaceBetween = 30;
                swiper.update();
            }
        });
    },
    initEventsClick: function() {
        const projects = document.querySelectorAll(".more");

        projects.forEach((project) => {
            project.addEventListener("click", (e) => {
                new ProjectModals(e.currentTarget.id, this.data[e.currentTarget.id]);
            });
        });
    },
    makeProject: function() {
        const swiperWraper = document.createElement('div');
        swiperWraper.classList.add('swiper-wrapper');
        swiperWraper.classList.add('content');
        for (element in this.data) {
            const data = this.data[element];

            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');
            swiperSlide.classList.add('card');

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image');

            const img = document.createElement('img');
            img.src = data.img;
            img.alt = data.projectName;
            img.loading = 'lazy';

            const cardTitle = document.createElement('h2');
            cardTitle.innerText = data.projectName;

            const button = document.createElement('button');
            button.classList.add('more');
            button.id = data.id;
            button.innerHTML = 'En savoir plus';

            imgContainer.appendChild(img);
            cardContent.append(imgContainer, cardTitle, button);
            swiperSlide.appendChild(cardContent);
            swiperWraper.appendChild(swiperSlide);
        }
        return swiperWraper;
    }
};