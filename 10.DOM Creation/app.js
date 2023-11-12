window.onload = function() {
    main();
};

function main() {
    const input = document.getElementById('input-name');
    const addBtn = document.getElementById('add-btn');
    const nameList = document.getElementById('name-list');

    addBtn.addEventListener('click', function() {
        if (input.value) {
            const li = document.createElement('li');
            // const titleAttr = document.createAttribute('title');
            // titleAttr.value = 'List Title';
            // li.setAttributeNode(titleAttr);
            li.setAttribute('title', 'List Title');

            // li.innerHTML = input.value;
            // nameList.appendChild(li);
            // input.value = '';
            li.innerText = input.value;
            li.addEventListener('click', function(){
                li.remove();
            });

            nameList.appendChild(li);
            input.value = '';

        }
    });
};

