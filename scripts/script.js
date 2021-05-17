const container = document.querySelector('.listContainer');
let inputValue = document.querySelector('.input');
let duedate = document.querySelector('.dueDate')
const add = document.querySelector('.addButton');

if(window.localStorage.getItem("todos") == undefined){
     let todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

let todosEX = window.localStorage.getItem("todos");
let todos = JSON.parse(todosEX);


class itemList{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	let itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('listInput');

        let completetask = document.createElement('button');
        completetask.classList.add('doneButton');
        completetask.innerHTML = '<i class="far fa-check-circle"></i>';
        completetask.addEventListener('click', () => this.completetask(name));

    	let edittask = document.createElement('button');
    	edittask.classList.add('editButton');
    	edittask.innerHTML = '<i class="fas fa-pen-fancy">';
    	edittask.addEventListener('click', () => this.edittask(input, name));

    	let deletetask = document.createElement('button');
    	deletetask.classList.add('deleteButton');
    	deletetask.innerHTML = '<i class="far fa-trash-alt">';
    	deletetask.addEventListener('click', () => this.deletetask(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(completetask);
        itemBox.appendChild(edittask);
        itemBox.appendChild(deletetask);
    }

    //completetask(name){
    //    if (item !== ''){
    //    }
    //    let indexof = todos.indexOf(name);
    //        todos[indexof] = input.value;
    //        window.localStorage.setItem("todos", JSON.stringify(todos));
    //}

    edittask(input, name){
        if(input.disabled = true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    deletetask(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

    
}

add.addEventListener('click', check);
window.addEventListener('keydown', (event) => {
	if(event == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new itemList(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (let i = 0 ; i < todos.length ; i++){
    new itemList(todos[i]);
}

