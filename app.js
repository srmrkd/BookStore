document.addEventListener('DOMContentLoaded', function() {
    
    const list = document.querySelector("#book-list ul");

    //delete Books
    list.addEventListener('click', e => {
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            console.log(e);
            list.removeChild(li);
        }
    })

    // add books
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', e => {
        e.preventDefault();

        const inputField = addForm.querySelector('input[type="text"]');
        const inputValue = addForm.querySelector('input[type="text"]').value;        
        if(inputValue === ''){
            return;
        }else{
            // create elements
            const li = document.createElement('li');
            const bookName = document.createElement('span');
            const deleteBtn = document.createElement('span');

            // add content
            deleteBtn.textContent = 'delete';
            bookName.textContent = inputValue;

            // append to DOM
            li.appendChild(bookName);
            li.appendChild(deleteBtn);
            list.appendChild(li);

            // add classes to the form elements
            bookName.classList.add("name");
            deleteBtn.classList.add("delete");

            // clear the input field
            inputField.value = '';
        }


    })
    // hide books
    const hideBox = document.querySelector('#hideBoxContainer input[type="checkbox"]');
    hideBox.addEventListener('change', e => {
        if(hideBox.checked){
            list.style.display = "none";
        }
        else{
            list.style.display = "block";
        }
    })

    //filter books
    
    

});