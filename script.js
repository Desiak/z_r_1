window.addEventListener("load", ()=>{

    const drawBtn= document.querySelector(".draw-numbers-btn");
    const evenList= document.querySelector(".even");
    const oddList= document.querySelector(".odd");
   

    function drawNumbers(){
        let randomNumbers=[];
        for (let i=0;i<20;i++){
            const number=Math.floor(Math.random()*100+1);
            randomNumbers.push(number);
        }
        randomNumbers.sort((a,b)=>a-b);
        document.querySelectorAll(".number").forEach(num=>num.remove());
        randomNumbers.forEach(number=>{
            addNumberToList(number)
        })
    }

    function addNumberToList(number){
        const listElement=document.createElement("li");
        listElement.classList.add("number");
        listElement.innerText=number;
        number%2===0?evenList.appendChild(listElement):oddList.appendChild(listElement);
    }

    drawBtn.addEventListener("click", drawNumbers)
})