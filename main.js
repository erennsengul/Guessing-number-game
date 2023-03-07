let heartLimit = 2;
let randomNumber = Math.floor(Math.random()*10);
let getGuess;
document.getElementById('guess').addEventListener('input', e=>{
    getGuess = e.target.value;
})

let getHearts = document.getElementsByClassName('hearts')

const btnGuess = document.getElementById('btn-guess')
const btnAgain = document.getElementById('btn-again')
let result = document.getElementById('result');

    btnGuess.addEventListener('click', ()=>{

        if(!getGuess){
            document.getElementById('result').innerText = `Please enter a number!`;
        }

        if(getGuess!=randomNumber){     
            getHearts[heartLimit].classList.add('heartsBlack')
                if(heartLimit>0){         
                    heartLimit--;               
                    document.getElementById('guess').value = '';
                }else{
                    btnGuess.style.display = 'none';
                    btnAgain.style.display = 'block';
                    document.getElementById('result').innerText = `Fail. Number was ${randomNumber}.`;
                }
        }
        
        if(getGuess==randomNumber){
            btnGuess.style.display = 'none';
            btnAgain.style.display = 'block';
            document.getElementById('result').innerText = `Correct. Number was ${randomNumber}.`;
            document.getElementById('result').style.color = 'green';
        }

    });

    btnAgain.addEventListener('click', ()=>{
        window.location.reload()
    });




