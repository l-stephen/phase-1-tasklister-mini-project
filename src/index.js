document.addEventListener("DOMContentLoaded", () => {

  const button = document.createElement("button")
  button.textContent = "X"
  // your code here

  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Clicked")
    const text = event.target["new-task-description"].value
    console.log(text)
    // const text2 = document.querySelector('#new-task-description').value
    
    const newLi = document.createElement('li')
    newLi.textContent = text

    let list = document.querySelector("#tasks")
    list.appendChild(newLi)
    list.appendChild(button)

    button.addEventListener("click", (e)=>{
      const li = e.target.parentNode
      li.remove()
    })

  })

});