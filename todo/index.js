let items = []

const item = document.getElementById("item")
const additemP = document.getElementById("addItem")
const storageKey = "items"


function addItem(){
    const value = item.value
    if(!value){
        alert("you cannot add an empty item")
        return
    }
    items.push(value)
    render()
    item.value = ""
    saveItems()
}

function deleteItem(idx){
    items.splice(idx, 1)
    render()
    saveItems()
}

function render(){
    additemP.innerHTML = null

    for(const [idx, item] of Object.entries(items)){

        const container = document.createElement("div")
        container.style.marginBottom = "10px"


        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item
        
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.onclick = () => deleteItem(idx)

        container.appendChild(text)
        container.appendChild(deleteButton)

       
        additemP.appendChild(container)


    }
}

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

document.addEventListener("DOMContentLoaded", loadItems)