const contents = document.querySelector("#project_wrap")
const project1_info = document.querySelector("#project1_info")
const project2_info = document.querySelector("#project2_info")
const project3_info = document.querySelector("#project3_info")
const project4_info = document.querySelector("#project4_info")
const info_exit1 = document.querySelector("#project1_info > div > button")
const info_exit2 = document.querySelector("#project2_info > div > button")
const info_exit3 = document.querySelector("#project3_info > div > button")
const info_exit4 = document.querySelector("#project4_info > div > button")


function clickHandler(e){
    const target = e.target
    if(target.id.indexOf("project1")!==-1){
        project1_info.className="on"
        project2_info.className="off"
        project3_info.className="off"
        project4_info.className="off"
    }
    if(target.id.indexOf("project2")!==-1){
        project1_info.className="off"
        project2_info.className="on"
        project3_info.className="off"
        project4_info.className="off"

    }
    if(target.id.indexOf("project3")!==-1){
        project1_info.className="off"
        project2_info.className="off"
        project3_info.className="on"
        project4_info.className="off"
    }
    if(target.id.indexOf("project4")!==-1){
        project1_info.className="off"
        project2_info.className="off"
        project3_info.className="off"
        project4_info.className="on"
    }
}
contents.addEventListener("click", clickHandler)


function exitbutton (){
    project1_info.className="off"
    project2_info.className="off"
    project3_info.className="off"
    project4_info.className="off"
}

info_exit1.addEventListener("click", exitbutton)
info_exit2.addEventListener("click", exitbutton)
info_exit3.addEventListener("click", exitbutton)
info_exit4.addEventListener("click", exitbutton)

const content = "I'm \n BlockChain \n Developer \n \n 백종환";
const text = document.querySelector("#typing");
let i = 0;

function sleep(delay) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        sleep(1500)
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 150)

// const typeContents = `I'm blockchain Developer 백종환 `
// console.log(typeContents)
// const text = document.querySelector("#typing")
// let index = 0;
// function typing(){
//     text.textContent += typeContents[index++]
//     // text.innerHTML === "\n" ? "</br>": "";
//     if(index > typeContents.length){
//         text.textContent = ""
//         index = 0;
//     }
// }
// setInterval(typing, 150)


