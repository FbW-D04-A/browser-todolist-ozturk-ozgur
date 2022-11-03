
document.getElementById("submit").addEventListener("click",(e)=> {
    e.preventDefault()
    let input = document.getElementById("input")
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)
    input.value = ""
})
