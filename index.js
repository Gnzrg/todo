let h1El = document.createElement("h1")
let pEl = document.createElement("p")
h1El.innerText = 'Todo List App';
pEl.innerText = 'Он сар өдөр :'
let containerEl = document.getElementById("container")
let sectionTopEl = document.getElementById("sectionTop") 
let sectionBottomEl = document.getElementById("sectionBottom")
let div2El = document.createElement("div")
sectionTopEl.appendChild(h1El)
sectionTopEl.appendChild(div2El)
div2El.appendChild(pEl)



let date = new Date()

pEl.innerHTML=`Он сар өдөр: ${date.getFullYear()} : ${date.getMonth()} : ${date.getDay()}`
// div2El.appendChild(date)






let divEl = document.createElement("div")
let inpEl = document.createElement("input")
inpEl.setAttribute("type" , 'text')
inpEl.setAttribute("placeholder" , "Таскын нэрээ оруулах...")
let btnEl = document.createElement("button")
btnEl.innerHTML= "Нэмэх"
btnEl.addEventListener("click" ,addTask)
sectionTopEl.appendChild(divEl)
divEl.appendChild(inpEl)
divEl.appendChild(btnEl)


function addTask(){
//     let p2El = document.createElement('p')
// p2El.setAttribute("id" , "12")
    let add = inpEl.value;
    let a = document.createElement("a")
    a.href = "#";
    a.innerHTML = add;
    let div4El = document.createElement("div")
    div4El.appendChild(a);
    sectionBottomEl.appendChild(div4El)
}
addTask()

let h2El = document.createElement("h2")
h2El.innerText = "Жагсаалт"
let div3El = document.createElement('div')
// sectionBottomEl.appendChild(h2El)
// let hrEl = document.createElement("hr")
// sectionBottomEl.appendChild(hrEl)
sectionBottomEl.appendChild(div3El)
div3El.appendChild(h2El)
