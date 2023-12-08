console.log("Hello, World!");

var inputField = document.getElementById('input');
var addButton = document.getElementById('btn');
var listsContainer = document.getElementById('lists');

addButton.addEventListener("click", function () {
    var inputValue = inputField.value;

    if (inputValue.trim() === "") {
        alert("Invalid Blank Task");
    } else {
        var listItem = document.createElement('li');
        listItem.textContent = inputValue;

        listsContainer.appendChild(listItem);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        listItem.appendChild(deleteButton);

        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        inputField.value = "";
    }
});
