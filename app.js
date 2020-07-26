var list = document.getElementById("list");

function additem(){


    //Get input field
    var todoitem = document.getElementById("addtodo");
    if(todoitem.value == "" || todoitem.value == " ")
    {
        alert("Please Enter Anything ");

    }
    else
    {
        //create li tag
    var li = document.createElement('li');
    li.setAttribute("class","li1")
    var litext = document.createTextNode(todoitem.value);
    li.appendChild(litext);


    //create delt btn
    var deltbtn = document.createElement("button");
    var deletetext = document.createTextNode("DELETE");
    deltbtn.setAttribute("class","btn");
    deltbtn.setAttribute("onclick","deleteitem(this)");
    deltbtn.appendChild(deletetext);
    li.appendChild(deltbtn);

    //create edit btn
    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("EDIT");
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","edititem(this)");
    editbtn.appendChild(edittext);
    li.appendChild(editbtn);



  
    list.appendChild(li);

    todoitem.value = "";
}
    }

function deleteitem(e){
    e.parentNode.remove();
}

function deleteall(){

    if(list.innerHTML === "")
    {
        alert("There's Nothing Anything To Delete");

    }
    else
    {
        list.innerHTML = "";
    }
    
}

function edititem(e){


    var val = prompt("Enter Updated Value" ,e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;

}