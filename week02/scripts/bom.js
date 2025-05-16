const myInput = document.getElementById('favchap');
const myButton = document.getElementById('myButton');
const myList = document.getElementById('list');


myButton.addEventListener('click', function () {
    if (myInput.value.trim() !== '') {
        //create newList item and delete button
        const newList = document.createElement('li');
        const deleteButton = document.createElement('button');

        //set newList content to match user input
        newList.textContent = myInput.value;
        deleteButton.textContent = '❌';

        //add newList item to ul 'list'
        newList.append(deleteButton);
        myList.append(newList);

        deleteButton.addEventListener('click', function () {
            myList.removeChild(newList);
        });

        myInput.value = '';
        myInput.focus();
    }
});

