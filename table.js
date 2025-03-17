const form = document.getElementById('form');

const done = document.getElementById('done-button');

const question_area = document.getElementById('setup_question');

const categories_row = document.getElementById('categories_row');

const first_row = document.getElementById('row1');

const add_row = document.getElementById('add_row');

const tbody = document.getElementById('tbody');

const count_columns = document.getElementById('categories');

form.addEventListener("submit", generateTable);
done.addEventListener("click", hideQuestion);
add_row.addEventListener("click", addRow);

function generateTable(event) {
    event.preventDefault();
    
    const columns = parseInt(count_columns.value);
    
    const rowButton = document.getElementById('add_row');

    var categories = `<th><input class="category" placeholder="Category Name" type="text"></th>`;

    for (i=0; i < columns; i++){
        categories_row.innerHTML += categories;
    }

    rowButton.style.visibility = "visible";
    question_area.style.visibility = "hidden";


}

function hideQuestion(event) {
    event.preventDefault();

    question_area.style.visibility = "hidden";
}

let even_odd = 1;

function addRow(event) {
    event.preventDefault();

    const columns = parseInt(count_columns.value);
    var items = `<td><input class="category-item" placeholder="Answer" type="text"></td>`;
    var evenItem = `<tr id="row${even_odd}" class="item-area even"></tr>`;
    var oddItem = `<tr id="row${even_odd}" class="item-area odd"></tr>`;

    if (even_odd % 2 == 0) {
        tbody.innerHTML += evenItem;
        for (i=0; i< columns; i++){
            document.getElementById(`row${even_odd}`).innerHTML += items;
        }
    }
    else {
        tbody.innerHTML += oddItem;
        for (i=0; i< columns; i++){
            document.getElementById(`row${even_odd}`).innerHTML += items;
        }
    }
    even_odd++;
}

generateNewLetter()