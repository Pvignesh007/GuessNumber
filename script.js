// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎇 Correct Answer: '
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=7;
// document.querySelector('.score').textContent=10;


let secretno =Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
let display=function(message){
    document.querySelector('.message').textContent=message
}
document.querySelector(".check").addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value) ;
    console.log(guess,typeof guess);
    
    //this is no input
    if(!guess)
    {
        // document.querySelector(".message").textContent='⛔🚫 NO number entered!'
        display('⛔🚫 NO number entered!');
    }
    //this is player win
    else if(guess===secretno)
    {
       
        // document.querySelector('.message').textContent='correct Answer 🎇🎇';
        display('correct Answer 🎇🎇')
        document.querySelector('.number').textContent=secretno
        document.querySelector('body').style.backgroundColor=' #60b347'
        document.querySelector('.number').style.width='30rem'
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }   
    else if(guess!==secretno)
    {
        if(score>1)
        {
        // document.querySelector('.message').textContent=(guess>secretno)?'📈 To High':'📈 To High';
        display((guess>secretno)?'📈 To High':'📈 To Low')
        score--;
        document.querySelector('.score').textContent=score;
        }
        else {
            //document.querySelector('.message').textContent='😫 You Lost!';
            display('😫 You Lost!')
            document.querySelector('.score').textContent=0;
        }
    }
    //this is too high guessed value 
    // else if(guess>secretno)
    // {
    //     if(score>1)
    //     {
    //     document.querySelector('.message').textContent='📈 To High';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent='😫 You Lost!';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }

    //this is too low guessed value

    // else if(guess<secretno)
    // {
    //     if(score>0)
    //     {
    //     document.querySelector('.message').textContent='📉 To Low ';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent='😫 You Lost!';
    //     }
    // }
})
document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    //highscore=0;
    secretno =Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    //document.querySelector('.message').textContent='Start guessing...'
    display('Start guessing');
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').style.width='15rem'; 
    document.querySelector('.guess').textContent='';
    //document.querySelector('.highscore').textContent=highscore;

})

