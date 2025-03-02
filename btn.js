let countElement = document.getElementById("equeal");
let countValue = document.getElementById("lg-value");
let clearHistoryBtn = document.getElementById("clear-history");
let taskHistory = document.getElementById("task-history");
let title = document.querySelector(".card-title");
let buttons = document.getElementsByClassName("complete-btn");
let colorBtn = document.getElementById("color-btn");
let mainTag = document.getElementById("main-tag");

let colors = ["#FFD700", "#FF69B4", "#98FB98", "#87CEEB"];
let currentIndex = 0;

colorBtn.addEventListener("click", function () {
    mainTag.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});

window.onload = function () {
    let tarikh = new Date();

    let day = tarikh.toLocaleString('en-US', { weekday: 'short' });
    let month = tarikh.toLocaleString('en-US', { month: 'short' }); 
    let date = tarikh.getDate(); 
    let year = tarikh.getFullYear();

    document.getElementById("crnt-date").innerText = `${day}, ${month} ${date}, ${year}`;
};




for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        let currentValue = parseInt(countElement.innerText);
        let currentNumber = parseInt(countValue.innerText);

            
            countElement.innerText = currentValue - 1;
            countValue.innerText = currentNumber + 1;
            buttons[i].disabled = true;
            buttons[i].style.backgroundColor = "gray-200";
            buttons[i].style.cursor = "not-allowed";


            let taskTitle = buttons[i].parentElement.parentElement.childNodes[3].innerText
            console.log( taskTitle)
            const task = document.getElementById("task-history")
            const p = document.createElement("p")


                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                let ampm = hours >= 12 ? "pm" :"am";

                hours = hours < 10 ? "0" + hours:hours;
                minutes = minutes < 10 ? "0" + minutes:minutes;
                seconds = seconds < 10 ? "0" + seconds:seconds;
            
            p.innerHTML = `
            <p class="p-2 mt-2 bg-orange-300 rounded-lg mx-2">You have complete the task ${taskTitle} at ${hours}: ${minutes}: ${seconds} ${ampm}</p>
            `
            task.appendChild(p)

            if(i < 5 ){
            alert("Board update successfully");
        }
        else if(i === 5){
            alert("Board update successfully");
            alert("Congrates!!!You have completed all the current task");
        }
        clearHistoryBtn.addEventListener("click",function(){
            task.innerHTML= "";
        })
       
    });
}