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
        $slideshowList: null,

        init: function () {
            this.$slideshow = document.querySelector('.slideshow');    
            this.$loader = document.querySelector('.loader');        
            this.setup();
        },

        getData: function () {
            this.data = images;
        },

        setup: function () {
            this.getData();
            this.renderSlideshow();

            if (this.data) {
                this.$slideshow.style.display = 'block';
                this.$loader.style.display = 'none';
            }

        },

        thumbnailTemplate: function(src, alt, title, description) {
            return `
                <img src="${src}" alt="${alt}" />
                <figcaption>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </figcaption>    
                `;   
        }, 

        renderSlideshow: function () {
            this.$slideshow.innerHTML = '';
            let $fragment = document.createDocumentFragment();
            let images = this.data;

            images.forEach(item => {
                let $listItem = document.createElement('figure');
                $listItem.innerHTML = this.thumbnailTemplate(item.src, item.alt, item.title);
                $fragment.appendChild($listItem);
            });

            this.$slideshow.appendChild($fragment);
        }
    }

    window.slideshow = slideshow;

})();

