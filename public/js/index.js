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
    const target = e.target.offsetParent
    // console.dir(target.offsetParent)
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


/* mobile일 때는 id=typing으로 추적 */
if(screen.width <769){
    const content = " I'm\nBlockChain \n Developer \n \n 백종환 \n\n\n\n\n\n";
    const text = document.querySelector(".typing");
    console.log(text)
    let i = 0;
    
    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 150)

}else{
    /* web일 때는 id=typing으로 추적 */
    const textcon = " I'm \n BlockChain \n Developer \n \n 백종환 \n\n\n\n\n\n";
    const text2 = document.querySelector("#typing");
    let i=0
    function typing2(){
        let txt = textcon[i++];
        text2.innerHTML += txt=== "\n" ? "": txt;
        if (i > textcon.length) {
            text2.textContent = "";
            i = 0;
        }
    }
    setInterval(typing2, 150)

}

const menuBtn = document.querySelector("#menu_icon")
const mMenuBtn = document.querySelector("#m_gnb")
const mCheckOut = document.querySelectorAll("#m_gnb")
const mCloseBtn = document.querySelector("#m_gnb > .close")
const mGnb = document.querySelector("#m_gnb")
const homeBtn = document.querySelector(".m_gnb_menu > li:nth-child(1)")
const aboutBtn = document.querySelector(".m_gnb_menu > li:nth-child(2)")
const projectBtn = document.querySelector(".m_gnb_menu > li:nth-child(3)")
const contactBtn = document.querySelector(".m_gnb_menu > li:nth-child(4)")


function displayOn(){
    mMenuBtn.classList.toggle('m_gnb_off')
}
mCloseBtn.addEventListener("click", displayOn)


function menuBtnHandler(){
    console.log(mCloseBtn.className)
    mMenuBtn.classList.toggle('m_gnb_off')
}
menuBtn.addEventListener("click", menuBtnHandler)


function homeBtnHandler(e){
    mMenuBtn.classList.toggle('m_gnb_off')
}
homeBtn.addEventListener("click",homeBtnHandler)

function aboutBtnHandler(e){
    mMenuBtn.classList.toggle('m_gnb_off')
}
aboutBtn.addEventListener("click",aboutBtnHandler)

function projectBtnHandler(e){
    mMenuBtn.classList.toggle('m_gnb_off')
}
projectBtn.addEventListener("click",projectBtnHandler)

function contactBtnHandler(e){
    mMenuBtn.classList.toggle('m_gnb_off')
}
contactBtn.addEventListener("click",contactBtnHandler)

console.log(scrollY)
const mVisual = document.querySelector("#m_visual")
const mAboutCard = document.querySelector("#m_about_card")
const returnCard = document.querySelector("#visual_card1")
// const project = document.querySelector("#project_wrap")
const projectClosed = document.querySelectorAll(".project_close")
// console.log(returnCard.getBoundingClientRect())
// console.log(mAboutCard.getBoundingClientRect())

window.addEventListener("scroll", function(e){
    const screenY = this.scrollY
    if(screenY == 900 ){
        returnCard.scrollIntoView({Behavior:'smooth'})
        
    }
})

const loading = document.querySelector("#loading")
const classLoading = document.querySelector(".loading")


function loadHandler(){
    loading.classList.add('off')
    classLoading.classList.add('off')
}

setTimeout(loadHandler, 2800);

// const wProjectWrap = document.querySelector("#project_wrap")
// const mProjectWrap = document.querySelector("#m_project_wrap")
// if(document.innerWidth < 769) {
//     wProjectWrap.classList.add("off")
// }else{
//     mProjectWrap.classList.add("off")
// }

let slides = document.querySelector("#project_wrap")
let slideItem = document.querySelectorAll("#project_wrap > li")
let firstItemClone = slides.firstElementChild.cloneNode(true);
let prevBtn = document.querySelector("#prev_btn")
let nextBtn = document.querySelector("#next_btn")


let count =1
let intervalId = 0

function slide (){
    if(window.innerWidth < 769){
        for (let i=0; i < slideItem.length; i++){
            if(i === count) {
                slideItem[i].classList.remove("off")
            }else {
                slideItem[i].classList.add("off")
            }
        }
        if(++count === 4) count =0 
        console.log(count)
    }else{

        slideItem[0].classList.remove("off")
        slideItem[1].classList.remove("off")
        slideItem[2].classList.remove("off")
        slideItem[3].classList.remove("off")
    }
}

intervalId = setInterval(slide, 1500)

// function prevHandler(e){
//     clearInterval(intervalId)
//     console.log(count)
//     let index = count === 0 ? slideItem.length -1 :count - 1
//     console.log(index)
//     count = index
//     if(window.innerWidth < 769){
//         for (let i=count; i < slideItem.length; i++){
//             if(i === count) {
//                 slideItem[i].classList.remove("off")
//             }else {
//                 slideItem[i].classList.add("off")
//             }
//         }
//         if(++count === 4) count =0 
//     }else{
        
//         slideItem[0].classList.remove("off")
//         slideItem[1].classList.remove("off")
//         slideItem[2].classList.remove("off")
//         slideItem[3].classList.remove("off")
//     }
//     intervalId = setInterval(slide, 1500)
// }

// prevBtn.addEventListener("click", prevHandler)
