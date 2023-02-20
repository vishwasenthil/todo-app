let add = document.getElementById(`add`);
let edit = document.getElementById(`edit`);
let container = document.getElementsByClassName(`container`);
let input = document.getElementById(`task`);
let navloginbutton = document.getElementById('navloginbutton');

let remaining = 0;
let completed = 0;

document.getElementById(`remaining`).innerHTML = `remaining: ${remaining}`;
document.getElementById(`completed`).innerHTML = `completed: ${completed}`;

add.addEventListener(`click`, (e)=>{
    e.preventDefault(); //prevents page from refreshing

    if(input.value === ``) {
        let temp = document.createElement(`div`);
        temp.setAttribute(`class`, `alert alert-danger alert-dismissible`);
        temp.setAttribute(`role`, `alert`);
        temp.innerHTML = `please enter a task to add it to the list
        <button type="button" class="btn btn-close" data-bs-dismiss="alert"></button>`;
        container[0].appendChild(temp);
    } else {
        remaining++;
        document.getElementById(`remaining`).innerHTML = `remaining: ${remaining}`;
        let newRow = document.createElement(`div`);
        let newCol = document.createElement(`col`);

        container[0].appendChild(newRow);
        newRow.appendChild(newCol);

        newRow.setAttribute(`class`, `row`);
        newCol.setAttribute(`class`, `col-12`);

        /*
        let newTask = document.createElement(`p`);
        newTask.innerHTML = input.value;
        newTask.setAttribute(`style`, `text-align:center;`);
        */

        let checkbox = document.createElement(`input`);
        checkbox.setAttribute(`class`, `form-check-input`);
        checkbox.setAttribute(`type`, `checkbox`);
        checkbox.setAttribute(`value`, ``);
        checkbox.setAttribute(`style`, `position:absolute; left:2; top:30%;`);
        

        let newTask = document.createElement(`article`);
        let p = document.createElement(`p`);
        p.innerHTML = input.value;
        p.setAttribute(`style`, `margin:0.5rem 0.5rem 0.5rem 1.5rem;`)
        newTask.appendChild(p);
        newTask.setAttribute(`style`, `position:relative;`);
        newTask.appendChild(checkbox);

        let newForm = document.createElement(`form`);
        let delBtn = document.createElement(`button`);
        let editBtn = document.createElement(`button`);

        delBtn.setAttribute(`class`, `btn btn-danger btn-sm`);
        delBtn.setAttribute(`id`, `delete`);
        delBtn.setAttribute(`type`, `button`);
        delBtn.innerHTML = `delete`;
        
        editBtn.setAttribute(`class`, `btn btn-warning btn-sm`);
        editBtn.setAttribute(`id`, `edit`);
        editBtn.setAttribute(`style`, `margin-right:5px;`);
        editBtn.setAttribute(`type`, `button`);
        editBtn.innerHTML = `edit`;

        newForm.appendChild(editBtn);
        newForm.appendChild(delBtn);
        newTask.appendChild(newForm);

        newCol.appendChild(newTask);
        input.value = ``;
        
        checkbox.addEventListener('click',()=>{
            setTimeout(()=>{
                remaining--;
                completed++;
                document.getElementById(`remaining`).innerHTML = `remaining: ${remaining}`;
                document.getElementById(`completed`).innerHTML = `completed: ${completed}`;
                newCol.removeChild(newTask);
            }, 100);
        });
        delBtn.addEventListener(`click`, ()=>{ //when delete button is clicked
            remaining--;
            document.getElementById(`remaining`).innerHTML = `remaining: ${remaining}`;
            console.log("clicked");
            newCol.removeChild(newTask);
            newTask.setAttribute(`style`, `text-align:center; text-decoration:line-through;`);
        });
        let row = document.createElement(`div`);
        row.setAttribute(`class`, `row`);
        row.setAttribute(`style`, `margin:5px;`);
        
        let col = document.createElement(`div`);
        col.setAttribute(`class`, `col-12`);

        let editDiv = document.createElement(`div`);
        editDiv.setAttribute(`style`, `position:relative;`);

        editBtn.addEventListener(`click`, ()=>{ //when edit button is clicked
            if (editBtn.getAttribute('id')==='edit'){
                p.contentEditable = true;
                p.style.transitionDuration = `0.4s`;
                p.style.color = `red`;
                editBtn.setAttribute(`id`, `end`);
                editBtn.innerHTML = `Confirm`;
                editBtn.setAttribute(`class`, `btn btn-success`);
            }else{
                p.contentEditable = false;  
                p.style.color = 'black';
                editBtn.setAttribute(`id`, `edit`);
                editBtn.innerHTML = `edit`;
                editBtn.setAttribute(`class`, `btn btn-warning`);
            }

        });
    }
});
