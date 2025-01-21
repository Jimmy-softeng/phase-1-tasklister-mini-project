document.addEventListener("DOMContentLoaded", () => {
  let form;
  let formInput;
  let taskList;

  form = document.getElementById("create-task-form");
  formInput = document.getElementById("new-task-description");
  taskList = document.getElementById("tasks");

  // Create and add the default task "Wash the dishes"
  function addTask(task) {
    let li = document.createElement("li");
    li.textContent = task;
    
    const btn = document.createElement("button");
    btn.textContent = "x";
    
    btn.addEventListener("click", function () {
      li.remove();
    });
    
    li.appendChild(btn);
    taskList.appendChild(li);
  }

  // Add "Wash the dishes" task when page loads
  addTask("Wash the dishes");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Add the task input by the user
    let task = formInput.value.trim();
    if (task) {
      addTask(task);
    }

    // Clear the input field after the task is added
    formInput.value = '';
  });
});

/*document.addEventListener("DOMContentLoaded",()=>{
 let form=document.querySelector('form')
 form.addEventListener("submit",(e)=>{
   e.preventDefault()
   buildTodo(e.target['new-task-description'].value);
   form.reset()
 })
})
function buildTodo(todo){
  let li=document.createElement("li")
  let btn=document.createElement("button")
  btn.addEventListener("click",handleDelete)
  btn.textContent="X"
  li.textContent=`${todo}`
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
function handleDelete(e){
  e.target.parentNode.remove();
}
*.
// index.js

// Access DOM elements
const taskForm = document.getElementById('create-task-form');
const taskInput = document.getElementById('new-task-description');
const taskList = document.getElementById('tasks');

// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting and page from refreshing
  
  // Get the task description from the input field
  const taskDescription = taskInput.value.trim();

  // If the input is not empty, create and append a new task
  if (taskDescription !== "") {
    const li = document.createElement('li');  // Create a new list item
    li.textContent = taskDescription;  // Set its text content to the input value

    // Optional: Add a delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      li.remove();  // Remove the task when the delete button is clicked
    });

    // Append the delete button to the task list item
    li.appendChild(deleteButton);

    // Append the list item to the tasks list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
  }
});
*/