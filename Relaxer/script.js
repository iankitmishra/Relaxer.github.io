const container = document.querySelector('.container') // selecting class of container
const text = document.querySelector('#text')  // selecting id of text

const totalTime =7500   // Creating variable of total time and setting it acc to 7.5 minutes i.e. 7500 milliseconds
const breatheTime = (totalTime/5) * 2  // Creating variable of Breathing Time
const holdTime = (totalTime)/5   // Creating variable for holding Time

breatheAnimation()   // we want to call function immediatley

function breatheAnimation() {     // Creating a function for breathe cycle
    text.innerHTML = 'Breathe In!'  //There is no text in circle so we are putting text
    container.className = 'container grow'   // container is used as circle will grow or shrink in that container. so we will have class of shrink or grow

    setTimeout(() => {
       text.innerText = 'Hold'        // Inner text will change to Hold
       
       setTimeout(() => {          
         text.innerText = 'Breathe Out!'      // After waiting for Hold time, we want text to be Breathe Out
         container.className = 'container shrink' // we need 2 class properties container and shrink
       }, holdTime)

    },breatheTime)                // After waiting till breathe time, hold will be executed.

}

setInterval(breatheAnimation, totalTime) // We want to repeat all this after every 7.5 seconds.


