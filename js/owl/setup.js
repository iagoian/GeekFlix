$('.owl-carousel').owlCarousel({
    autoplay:true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop:true,
    margin:10,
    nav:false,
    delay:300,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    
})

var owl = $('.owl-carousel');
owl.owlCarousel();
//listen to owl events:
owl.on('changed.owl.carousel', function(event){

});
