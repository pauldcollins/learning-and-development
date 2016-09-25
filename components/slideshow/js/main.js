// TIPS 
// Remove IDs
// What to show on page when loading
// Naming convention for widget
// Hide JS Code in IIFE
// Ask if they would like something that's not complete but rock solid, vs something that's working but will need refactoring
// Call out how you would do it given more time
// Lookup fragment 
// Images should all be in one array, as they will change

(function () {
    'use strict';

    const images = [{
        src: 'img/01.jpg',
        alt: 'Thumbnail 1',
        title: 'Title 1',
        description: 'Description 1'
    }, {
        src: 'img/02.jpg',
        alt: 'Thumbnail 2',
        title: 'Title 2',
        description: 'Description 2'
    }, {
        src: 'img/03.jpg',
        alt: 'Thumbnail 3',
        title: 'Title 3',
        description: 'Description 3'
    }];

    let slideshow = {
        data: null,
        $image: null,
        $slideshow: null,

        // get data
        getData: function() {
            this.data = images;
        },

        // initialise
        init: function() {
            this.$slideshow = document.querySelector('.slideshow');
            this.$loader = document.getElementById('loader');
            this.setup();
        },

        // setup
        setup: function() {
            this.getData();
            this.renderSlides();

            if (this.data) {
                this.$slideshow.style.display = 'block';
                this.$loader.style.display = 'none';
                this.animateSlides();
            }
        },

        // thumbnail template
        thumbnailTemplate: function(src, alt, title, description) {
          return `
            <img src="${src}" alt="${alt}" />
            <figcaption>
                <h2>${title}</h2>
                <p>${description}</p>
            </figcaption>
          `;
        },

        // renderSlides
        renderSlides: function() {
            this.$slideshow.innerHTML = '';
            let $fragment = document.createDocumentFragment();
            let images = this.data;

            images.forEach(item => {
                let $listItem = document.createElement('figure');
                $listItem.innerHTML = this.thumbnailTemplate(item.src, item.alt, item.title);
                $fragment.appendChild($listItem);
            });

            this.$slideshow.appendChild($fragment);
        },

        // animate slides
        animateSlides: function() {
            let slideshow = this.$slideshow;
            let $childNodes = this.$slideshow.childNodes;
            let itemIndexToShow = 0;

            slideshow.style.height = '600';

            // hide all except first item
            $childNodes.forEach((item, index) => {
                if (index !== 0) {
                    item.style.display = 'none';
                }
            });

            // show images in intervals
            setInterval(function() {
                $childNodes[itemIndexToShow].style.display = 'none';
                itemIndexToShow ++;

                if (itemIndexToShow >= $childNodes.length -1) {
                    itemIndexToShow = 0;
                }
                $childNodes[itemIndexToShow].style.display = 'block';
                const heightOfElement = $childNodes[itemIndexToShow].offsetHeight + 40;
                slideshow.style.height = heightOfElement + 'px';
            }, 5000);
        }
    };

    window.slideshow = slideshow;

})();

