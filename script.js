let boxes=document.querySelectorAll('.box');
let reset_button=document.querySelector('#reset-btn');
let turn0=true;//false->x,true->o
let clickcount=0;
const winning_pattern=[[0,1,2],
                       [0,3,6],
                       [0,4,8],
                       [1,4,7],
                       [2,5,8],
                       [2,4,6],
                       [3,4,5],
                       [6,7,8]

]
// console.log(boxes[0]);
function check(){
    for(let arr of winning_pattern){
    //    console.log(arr);
      if(boxes[arr[0]].innerText==boxes[arr[1]].innerText&&boxes[arr[2]].innerText==boxes[arr[1]].innerText&&boxes[arr[0]].innerText!=''){
        console.log(arr);
        return true;
      }
    }
    return false;
}
const callback=(evt)=>{
    let ans=turn0===true?'O':'X';
    ++clickcount;
    if(turn0===true){
        turn0=false;
        evt.target.innerText="O";
    }else{
        turn0=true;
        evt.target.innerText="X";
    }
    evt.target.disabled=true;
    ///function to check
   let checker= check();
   if(checker===true){
    console.log("win");
    
    document.querySelector('#win').style.display='flex';
    document.querySelector('.texter').innerText=`Player ${ans}`;
    boxes.forEach((box)=>{
        box.classList.add("blur");
    })
   }else if(clickcount==9){
    document.querySelector('.draw').style.display='flex';
    boxes.forEach((box)=>{
        box.classList.add("blur");
    })
   }
}

for(let box of boxes){
  box.addEventListener('click',callback);
}
const resethandler=()=>{
    for(let i=0;i<boxes.length;++i){
        boxes[i].innerText='';
        boxes[i].disabled=false;
    }
    document.querySelector('#win').style.display='none';
    document.querySelector('.draw').style.display='none';
    boxes.forEach((box)=>{
        box.classList.remove("blur");
    })
    clickcount=0;
}
reset_button.addEventListener('click',resethandler);