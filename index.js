let input = document.querySelector('#newTaskText')
input.addEventListener("keypress", function(event) {
   
    if (event.key === "Enter") {
      
      event.preventDefault();
      
      document.getElementById("submitBtn").click();
    }
  });


function addTask() {

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
    button.setAttribute("onclick", "removeTask(this)")

    containerDiv.appendChild(listItem)
    containerDiv.appendChild(button)
    unorderedList.appendChild(containerDiv)
    document.querySelector('#newTaskText').value = ''

}

function removeTask(button) {
  let containerDiv = button.closest('.task-container')
  containerDiv.remove()
}