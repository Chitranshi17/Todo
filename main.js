let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

// submit form 

const saveTodo = (e) => {
    e.preventDefault();
    let li = document.createElement('li')
    console.log(li);
    li.innerText = input.value;
    li.className = "list-group-item rounded-0";
    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.className = "btn btn-danger btn-sm rounded-0 float-end";
    li.appendChild(delbtn);
    ul.appendChild(li);
    form.reset();
}
form.addEventListener("submit",saveTodo );

// ******************************************************************

// Delete 

// Note -----> DOM me jo element exists nhi karta h us per event nhi


const deleteTodo = (e) => {
    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement;
        if(window.confirm("Are You Sure ?")){
            ul.removeChild(li);
        }
}
}


// Search word in js using includes() method --> return true/false
// let word = " i am cat";
// console.log(word.includes("dog"));

ul.addEventListener("click", deleteTodo);

// Event Boobling -> PArant per koi event lagaya ho or automatically childern per bhi vo  event perform ho.


// Remove all List ------> Button

let a = document.getElementById('btn-remove');

const removeBtn = () => {
    if((window.confirm("Are You Sure ?"))){
        ul.remove(ul);
    }
}


let dltAllBtn = document.querySelector('#removeAll');

dltAllBtn.addEventListener('click',removeBtn);

// Dark and Light Mode 

let light = document.getElementById('light');

let dark = document.getElementById('dark');

let div = document.getElementById('back-dark');

let h1 = document.querySelector('h1');

let nav = document.querySelector('nav');

let divnav = document.getElementById('navbar-black');

let headnav = document.getElementById('heading-nav');
console.log(div);

// Dark Mode

const darkMode = (e) => {
    e.preventDefault();
    div.className = "bg-dark";
    h1.className = "text-light w-100 text-center";
    nav.className = "bg-light navbar ";
    headnav.className = "text-dark w-100 text-center h3 mb-0";
}

dark.addEventListener("click",darkMode);


// Light Mode

const lightMode = (e) => {
    e.preventDefault();
    div.className = "bg-light";
    nav.className = "bg-dark navbar ";
    headnav.className = "text-light  w-100 text-center h3 mb-0"
    h1.className = "text-dark w-100 text-center";

}

light.addEventListener("click", lightMode);

// Single Button change theme dark to light and light to dark
