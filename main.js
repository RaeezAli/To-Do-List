const input = document.getElementById("entryBar");
const list = document.getElementById("listSection");
const listed = document.getElementsByTagName("li");

function addList() {

    if(input.value === '') {

        alert("You must Write Something!");

    }

    else {

        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let button  = document.createElement("span");
        button.innerHTML = '<button id="ebtn" onclick="editList(event)">Edit</button>';
        li.appendChild(button);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    input.value = '' ;
    
    // cls();
}

function editList(event) {

    let convertButton = document.getElementById('addButton');

    if(convertButton.textContent === "Add"){

        convertButton.textContent = "Update";
        let li = document.getElementsByTagName("li");
        let input = document.getElementsByClassName("entryBar");
        input.value = li.value;

        // let textContent = itemElement.textContent;
        // inputElement.value = textContent;

        // let addbtn = document.getElementById('addButton');
        // addbtn.className = 'hide';

        // let updatebtn = document.getElementById('update-btn');
        // updatebtn.className = '';

    }

    else if(convertButton.textContent === "Update"){

        convertButton.textContent = "Add";
    }
}

function clearAllList() {
    
    list.innerHTML = "";

}

list.addEventListener("click", function(e) {

    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");

    }

    else if(e.target.tagName === "SPAN"){ 

        e.target.parentElement.remove();

    }

}, false);

function cls() {
    
    let inputElement = document.getElementById('input')
    inputElement.value ='';
}