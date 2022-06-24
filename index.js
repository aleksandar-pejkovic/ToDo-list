let input = document.querySelector('#newTaskText')
input.addEventListener("keypress", function(event) {
   
    if (event.key === "Enter") {
      
      event.preventDefault();
      
      document.getElementById("submitBtn").click();
    }
  });

  let counterID = 0

function addTask() {
    counterID++
    let counterText = counterID.toString()

    let unorderedList = document.querySelector('#taskList')

    let newTaskText = document.querySelector('#newTaskText').value

    let containerDiv = document.createElement('div')
    containerDiv.classList.add('task-container')

    let listItem = document.createElement('li')
    listItem.classList.add('list-group-item')
    listItem.innerText = newTaskText

    let button = document.createElement('button')
    button.setAttribute("type", "button")
    button.setAttribute("class", "btn-close btn-close-black")
    button.setAttribute("aria-label", "Close")
    button.setAttribute("id", counterText)
    button.setAttribute("onclick", "removeTask(this.id)")

    containerDiv.appendChild(listItem)
    containerDiv.appendChild(button)
    unorderedList.appendChild(containerDiv)
    document.querySelector('#newTaskText').value = ''

}

function removeTask(btnId) {

    let pressedBtn = document.getElementById(btnId)
    let parentDiv = pressedBtn.parentNode
    parentDiv.remove()

}