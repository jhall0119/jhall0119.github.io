$(document).ready(function() {
console.log("Sanity Check");




$(function() {
    $('body').vegas({
    delay: 7000,
    timer: false,
    shuffle: true,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'slideDown2',
    transitionDuration: 2000,
        slides: [
            { src: 'https://i.imgur.com/pRWZR0X.jpg' },
            { src: 'https://i.imgur.com/AcR0hqH.jpg' },
            { src: 'https://i.imgur.com/sjgT51e.jpg' },
            { src: 'https://i.imgur.com/Hw1arTI.jpg' },
            { src: 'https://i.imgur.com/CmVVsxL.jpg' }
        ]
    });
});











});
