// var slideIndex = 0; 
// let imgEl = document.querySelectorAll('.slideImage')
// let btnEl = document.querySelectorAll('.click')
// btnEl.forEach((currentBtnValue,btnIndex)=>{
//     currentBtnValue.addEventListener('click',()=>{
//         imgEl.forEach((currentImgValue,imgIndex)=>{
//             if(!currentImgValue.classList.contains('noneImage')){
//                 currentImgValue.classList.add('noneImage')
//                 // currentImgValue.classList.add('data-aos="fade-up"')
               
//             }
//             if(btnEl[imgIndex].classList.contains('tabActive')){
//                 btnEl[imgIndex].classList.remove('tabActive')
//             }
//             slideIndex = btnIndex
//             btnEl[btnIndex].classList.add('tabActive')
//             imgEl[btnIndex].classList.remove('noneImage')
//         })
//     })
// });
// setInterval(autoSlide,3000)
// function autoSlide(){
//     slideIndex+=1

//     if(slideIndex>7){
//         imgEl[7].classList.add('noneImage')
//         btnEl[7].classList.remove('tabActive')
//         slideIndex=0
//     }
//     if(imgEl[slideIndex].classList.contains('noneImage')){
//         imgEl[slideIndex].classList.remove('noneImage')
//     }
//     if(imgEl[slideIndex].previousElementSibling){
//         imgEl[slideIndex].previousElementSibling.classList.add('noneImage')
//         btnEl[slideIndex].previousElementSibling.classList.remove('tabActive')
//     }
//     btnEl[slideIndex].classList.add('tabActive')
// }





// Auto carousel 

// let slideEl = document.querySelectorAll('.carousel-item-2')
// let carouselIndex = 0
// setInterval(autoCarousel,2000)
// function autoCarousel(){
//     let nextCarouselIndex = (carouselIndex + 1) % slideEl.length
//     slideEl[carouselIndex].style.animation = 'slideLeft2 0.5s forwards'
//     slideEl[nextCarouselIndex].style.animation = 'slideInRight2 0.5s forwards'
//     carouselIndex = nextCarouselIndex
// }


// Slide with buttons
  
//   let slideEl = document.querySelectorAll('.carousel-item-2')
//   let buttonEl = document.querySelectorAll('.carousel-button-2')
//   let currentIndexValue = 0

//   function autoCarousel(index){
//     if(currentIndexValue === index){
//         return
//     }
//     const nextItem = slideEl[index]
//     buttonEl[currentIndexValue].classList.remove('active2')
//     slideEl[currentIndexValue].style.animation = 'slideLeft2 0.5 forwards'
    
//     nextItem.style.animation ='slideInRight2 0.5s forwards'
//     buttonEl[index].classList.add('active2')
//     currentIndexValue = index
//   }

// buttonEl.forEach((currentValue,index)=>{
//     currentValue.addEventListener('click',()=>{
//         autoCarousel(index)
//         buttonEl.forEach((btn)=>{
//             btn.classList.remove('active2')
//            })
//     })
//     // currentValue.classList.add('active2')
// })
// function startCarousel(){
//     setInterval(()=>{
//       const nextIndexValue = (currentIndexValue + 1) % slideEl.length;
//       autoCarousel(nextIndexValue)
//     }, 2000);
// }
// startCarousel()

let carouselBtnEl = document.querySelectorAll('.carousel-button-2')
let carouselImgEl = document.querySelectorAll('.carousel-item-2')
let currentItem = 0
function Carousel(index){
    if(currentItem === index){
        return
    }
    carouselImgEl[currentItem].classList.remove('active2')
    carouselBtnEl[currentItem].classList.remove('active2')
    carouselImgEl[currentItem].style.animation = 'slideLeft2 0.5s forwards'

    carouselBtnEl[index].classList.add('active2')
    carouselImgEl[index].classList.add('active2')
    carouselImgEl[index].style.animation = 'slideInRight2 0.5s forwards'

    currentItem = index

}

carouselBtnEl.forEach((currentButtonValue,index)=>{
    currentButtonValue.addEventListener('click',()=>{
        Carousel(index)
        carouselBtnEl.forEach((btn)=>{
            btn.classList.remove('active2')
           })
        currentButtonValue.classList.add('active2')
    })
})

function startCarousel2(){
    setInterval(() => {
        const nextItem = (currentItem+1) % carouselImgEl.length
        Carousel(nextItem)
    }, 3000);
}

startCarousel2()



let draggableEl = document.getElementsByClassName('draggable')
for(let i=0; i < draggableEl.length; i++){
    draggableElement(draggableEl[i])
}
function draggableElement(element){
    let pos1,pos2,pos3,pos4
    element.onmousedown = dragMouseDown
    function dragMouseDown(e){
        e.preventDefault()
        pos3 = e.clientX
        console.log(pos3)
        pos4 = e.clientY
        console.log(pos4)
        document.onmouseup = closeDragElement
        document.onmouseleave = closeDragElement
        document.onmousemove = elementDrag

    }
    function elementDrag(e){
        pos1= pos3 - e.clientX
        console.log(pos1)
        pos2= pos4 - e.clientY
        console.log(pos3)
        pos3 = e.clientX
        pos4 = e.clientY
    element.style.top = (element.offsetTop - pos2)+"px"
    console.log(element.style.top)
    element.style.left = (element.offsetLeft - pos1)+"px"
    console.log(element.style.left)
    }
    function closeDragElement(){
        document.onmouseup = null
        document.onmousemove = null
    }
}


let pitchEl = document.getElementById('pitch')
let bool = true
pitchEl.addEventListener('click',()=>{
    if(bool === true){
        pitchEl.style.border = ' 2px solid red'
    }
    else{
        pitchEl.style.border = 'none'

    }
    bool= !bool
})





let arrEl = document.querySelectorAll('.arrow-circle')
let circleh2El = document.querySelectorAll('.circle-h2')
let circleDivEL = document.querySelectorAll('.circle-images')

let index = 0

function circle(Index){

if(index === Index){
    return
}

    arrEl[Index].innerHTML=`<svg width="36" height="30">
    <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
    <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
  </svg>`
 

 
circleh2El[Index].classList.add('circleActive')
circleDivEL[Index].classList.add('circleDivActive')

  if(arrEl[index]){
  arrEl[index].innerHTML= `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`

  circleh2El[index].classList.remove('circleActive')

  circleDivEL[index].classList.remove('circleDivActive')

  index = Index
}

}


arrEl.forEach((current,index)=>{
    current.addEventListener('click',()=>{
        circle(index)
        arrEl.forEach((btn)=>{
            arrEl[btn].innerHTML = `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`
           })
        current.innerHTML = `<svg width="36" height="30">
        <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
        <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
      </svg>`
    })
    
})


function startCircle(){
    setInterval(() => {
        const nextItem = (index+1) % arrEl.length
        circle(nextItem)
    }, 4000);
}
startCircle()






let arrEl2 = document.querySelectorAll('.arrow-circle-2')
let circleh2El2 = document.querySelectorAll('.circle-h2-2')
let circleDivEL2 = document.querySelectorAll('.circle-images-2')


let index2 = 0

function circle2(Index){

    if(index2 === Index){
        return
    }
    
       
      arrEl2[Index].innerHTML=`<svg width="36" height="30">
      <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
      <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
    </svg>`
    
     
   
    circleh2El2[Index].classList.add('circleActive')
    
    circleDivEL2[Index].classList.add('circleDivActive')
    
      if(arrEl2[index2]){
      arrEl2[index2].innerHTML= `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`
    
      circleh2El2[index2].classList.remove('circleActive')
    
      circleDivEL2[index2].classList.remove('circleDivActive')
    
      index2 = Index
    }
    
    }


arrEl2.forEach((current,index)=>{
    current.addEventListener('click',()=>{
        circle2(index)
        arrEl2.forEach((btn)=>{
            arrEl2[btn].innerHTML = `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`
           })
        current.innerHTML = `<svg width="36" height="30">
        <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
        <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
      </svg>`
    })
    
})


function startCircle2(){
    setInterval(() => {
        const nextItem = (index2+1) % arrEl.length
        circle2(nextItem)
    }, 4000);
}
startCircle2()





let index3 = 0
let arrEl3 = document.querySelectorAll('.arrow-circle-3')
let circleh2El3 = document.querySelectorAll('.circle-h2-3')
let circleDivEL3 = document.querySelectorAll('.circle-images-3')

function circle3(Index){

    if(index3 === Index){
        return
    }
    
      arrEl3[Index].innerHTML=`<svg width="36" height="30">
      <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
      <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
    </svg>`
    
     
   
    circleh2El3[Index].classList.add('circleActive')
    
    circleDivEL3[Index].classList.add('circleDivActive')
    
      if(arrEl3[index3]){
      arrEl3[index3].innerHTML= `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`
    
      circleh2El3[index3].classList.remove('circleActive')
    
      circleDivEL3[index3].classList.remove('circleDivActive')
    
      index3 = Index
    }
    
    }


arrEl3.forEach((current,index)=>{
    current.addEventListener('click',()=>{
        circle3(index)
        arrEl3.forEach((btn)=>{
            arrEl3[btn].innerHTML = `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`
           })
        current.innerHTML = `<svg width="36" height="30">
        <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
        <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
      </svg>`
    })
    
})


function startCircle3(){
    setInterval(() => {
        const nextItem = (index3+1) % arrEl3.length
        circle3(nextItem)
    },4000);
}
startCircle3()



let carouselBtnEl2 = document.querySelectorAll('.carousel-button-3')
let carouselImgEl2 = document.querySelectorAll('.carousel-item-3')
let currentItem2 = 0
function Carousel2(index){
    if(currentItem2 === index){
        return
    }
    carouselImgEl2[currentItem2].classList.remove('active2')
    carouselBtnEl2[currentItem2].classList.remove('active2')
    carouselImgEl2[currentItem2].style.animation = 'slideLeft2 0.5s forwards'

    carouselBtnEl2[index].classList.add('active2')
    carouselImgEl2[index].classList.add('active2')
    carouselImgEl2[index].style.animation = 'slideInRight2 0.5s forwards'

    currentItem2 = index

}

carouselBtnEl2.forEach((currentButtonValue,index)=>{
    currentButtonValue.addEventListener('click',()=>{
        Carousel2(index)
        carouselBtnEl2.forEach((btn)=>{
            btn.classList.remove('active2')
           })
        currentButtonValue.classList.add('active2')
    })
})

function startCarousel3(){
    setInterval(() => {
        const nextItem = (currentItem2+1) % carouselImgEl2.length
        Carousel2(nextItem)
    }, 3000);
}

startCarousel3()



let index4 = 0

let arrEl4 = document.querySelectorAll('.arrow-circle-4')
let circleh2El4 = document.querySelectorAll('.circle-h2-4')
let circleDivEL4 = document.querySelectorAll('.circle-images-4')

function circle4(Index){

    if(index4 === Index){
        return
    }
    
      arrEl4[Index].innerHTML=`<svg width="36" height="30">
      <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
      <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
    </svg>`
    
     
   
    circleh2El4[Index].classList.add('circleActive')
    
    circleDivEL4[Index].classList.add('circleDivActive')
    
      if(arrEl4[index4]){
      arrEl4[index4].innerHTML= `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`
    
      circleh2El4[index4].classList.remove('circleActive')
    
      circleDivEL4[index4].classList.remove('circleDivActive')
    
      index4 = Index
    }
    
    }


arrEl4.forEach((current,index)=>{
    current.addEventListener('click',()=>{
        circle4(index)
        arrEl4.forEach((btn)=>{
            arrEl4[btn].innerHTML = `<i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>`
           })
        current.innerHTML = `<svg width="36" height="30">
        <circle cx="16" cy="16" r="12" stroke="#F26725" stroke-width="4" fill="none" stroke-opacity="0.3"></circle>
        <circle class="progress-circle" cx="16" cy="16" r="12" stroke="#FF7843" stroke-width="4" fill="none" stroke-opacity="1" stroke-dasharray="75" stroke-dashoffset="0"></circle>
      </svg>`
    })
})


function startCircle4(){
    setInterval(() => {
        const nextItem = (index4+1) % arrEl4.length
        circle4(nextItem)
    }, 4000);
}
startCircle4()





function runProgressAnimation() {
    const progressCircle = document.querySelector('.progress-circle');
    progressCircle.classList.add('active');
  
    setTimeout(() => {
      progressCircle.classList.remove('active');
      setTimeout(runProgressAnimation, 2000); 
    }, 2000);
  }
  
  runProgressAnimation();
  



