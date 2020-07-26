var list = document.getElementById("list");

function addtodo() {
    var todoitem = document.getElementById("todoitem");
    var li = document.createElement('li')
    var liText = document.createTextNode(todoitem.value)
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick", "deleteItem()")
    delbtn.appendChild(delText)
    li.appendChild(delbtn)

    li.appendChild(liText)
    list.appendChild(li)
    todoitem.value = ''
    console.log(li)
}