window.onload = function() {
    main();
};

function main() {
    const btn = document.getElementById('click-btn');
    const title = document.getElementById('title');
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    let currentTitle = title.textContent;
    let nextTitle = 'Changed DOM Element';

    btn.addEventListener('click', function() {
        title.innerText = nextTitle;

        const temp = currentTitle;
        currentTitle = nextTitle;
        nextTitle = temp;

        // Shorthand
        title.classList.toggle('title1');
        title.classList.toggle('title2');

        // Longhand
        // if (title.classList.contains('title1')) {
        //     title.classList.remove('title1');
        //     title.classList.add('title2');
        // } else {
        //     title.classList.remove('title2');
        //     title.classList.add('title1');
        // };
    });

    input.addEventListener('focus', function(){
        input.style.padding = '.5rem';
    });

    input.addEventListener('blur', function(){
        input.style.padding = '0';
    });

    input.addEventListener('keyup', function(e) {
        output.innerText = e.target.value;
    });

};

