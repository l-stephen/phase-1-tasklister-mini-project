document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const button = document.createElement("button")
  button.textContent = "X"

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const taskTxt = event.target["new-task-description"].value
  
    // button.addEventListener("click", (e)=>{
    //   const li = e.target.parentNode
    //   li.remove()
    // })
   
    const newLi = document.createElement('li')
    newLi.textContent = taskTxt
    const list = document.querySelector('#tasks')
    const tasks = document.querySelector()
    

    list.appendChild(newLi)
    list.appendChild(button)
  })
});