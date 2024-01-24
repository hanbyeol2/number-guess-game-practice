//랜덤번호지정
//유저가 번호를 입력하고 go 버튼을 누름  
//숫자를 맞추면 정답 
//랜덤번호 < 유저번호 down
//랜덤번호 > 유저번호 up
//reset버튼 누르면 게임이 리셋
//5번의 기회를 다쓰면 게임이 끝난다. (버튼 disable)
//1~100범위 밖의 숫자를 입력하면 알려준다. 기회 차감 X 
//유저가 이미 입력한 숫자를 다시 입력한 경우 알려준다. 기회차감 X 

let computerNum = 0;
let playBtn = document.getElementById("playBtn");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let history = [];


playBtn.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
});

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1; //랜덤번호 
    console.log(computerNum);
};

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1~100 사이의 숫자를 입력하세요.";
        return;
    };
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자 입니다.";
        return;
    };

    chances--;
    chanceArea.textContent = `남은기회: ${chances}`;

    console.log(userValue);
    if(userValue < computerNum){
        resultArea.textContent = "up";
        console.log("up");
    }else if(userValue > computerNum){
        resultArea.textContent = "down";
        console.log("down");
    }else{
        resultArea.textContent = "good";
        console.log("good");
        gameOver = true;
    };

    history.push(userValue);

    if(chances < 1){
        gameOver = true;
    };

    if(gameOver == true){
        playBtn.disabled = true;
    };
};


function reset(){
    //user input 정리 
    userInput.value = "";
    //새로운 번호 생성
    pickRandomNum();
};

pickRandomNum();