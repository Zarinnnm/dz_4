// phone checker

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}

// tab slider

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = "none"
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = "block"
    tabs[id].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) =>{
    if (event.target.classList.contains('tab_content_item')){
      tabs.forEach((tab,tabIndex) => {
          if (event.target === tab){
              hideTabContent()
              showTabContent(tabIndex)
          }
      })
    }
}
let slideIndex = 0
const slideTimer  = () => {
    slideIndex++
    if (slideIndex>4){
        slideIndex= 0
    }
    hideTabContent()
    showTabContent(slideIndex)
    console.log(slideIndex)

}
setInterval(() => slideTimer(), 3000)




const request = new XMLHttpRequest();
request.open("GET", "../data/persons.json");
request.setRequestHeader("Content-type", "application/json");
request.addEventListener('load', () => {
    const response = JSON.parse(request.response)
    console.log(response)
})
request.send()