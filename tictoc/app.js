let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO = true;    //playerX, player0
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let count = 0;
let gameover= false;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
         if(gameover)return;
        count++;
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;


        checkwinner();
           if (count === 9 && !gameover) {
            msg.innerText = "Match Draw!";
            msgcontainer.classList.remove("hide");
            gameover=true;
        }
    });
});

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !=""&& pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1); 
             
                showwinner(pos1);
            }
        }
    }
};

const disablebox =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner) =>{
  
     msg.innerText=`congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
      disablebox();
      gameover=true;
}

const enablebox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turnO=true;
    count=0;
    gameover= false;
   enablebox();
   msgcontainer.classList.add("hide");
}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);