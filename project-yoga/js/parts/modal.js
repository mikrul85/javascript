function modal () {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descrBtns = document.querySelectorAll('.description-btn');

    function openModal(a) {
        a.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            a.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    openModal(more);

    descrBtns.forEach(element => {
        openModal(element);
    });

    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
    
        createDiv() {
            let elem = document.createElement('div');
            document.body.appendChild(elem);
            elem.textContent = "Новый текст";
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            elem.style.cssText = param;
        }
    }
    
    const item = new Options(300, 350, "red", 14, "center");
}

module.exports = modal;