 document.addEventListener("DOMContentLoaded", function () {
            const elements = document.querySelectorAll('.scroll-efect');
            function checkScroll() {elements.forEach(el => {const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 100) {
                        el.classList.add('show');
                    }
                });
            }

            window.addEventListener('scroll', checkScroll);
            checkScroll();
        });