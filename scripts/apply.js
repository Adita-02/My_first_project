let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let slide = document.querySelector('.slide');
    let items = document.querySelectorAll('.item');

    slide.appendChild(items[0]); // Move first item to the end
});

prev.addEventListener('click', function() {
    let slide = document.querySelector('.slide');
    let items = document.querySelectorAll('.item');

    slide.prepend(items[items.length - 1]); // Move last item to the start
});