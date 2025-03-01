let countElement = document.getElementById("equeal");
let countValue = document.getElementById("lg-value");
let clearHistoryBtn = document.getElementById("clear-history");
let taskHistory = document.getElementById("task-history");
let title = document.querySelector(".card-title")
let buttons = document.getElementsByClassName("complete-btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let currentValue = parseInt(countElement.innerText);
        let currentNumber = parseInt(countValue.innerText);

            
            countElement.innerText = currentValue - 1;
            countValue.innerText = currentNumber + 1;
            buttons[i].disabled = true;
            buttons[i].style.backgroundColor = "gray-200";
            buttons[i].style.cursor = "not-allowed";

            const task = document.getElementById("task-history")
            const p = document.createElement("p")
            p.innerHTML = `
            <p class="p-4 bg-orange-200 mt-2 mx-2 rounded-lg">You have complete the task ${title} </p>
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
}complete-btn