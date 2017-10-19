//다각형을 계산하는 함수
//3개의 함수를 정의,호출 해서 그 결과를 한줄씩 출력. 
//인자가 부족할 시 'n개의 인자가 필요합니다.' 라는 메세지를 출력

//인자부족시 에러메세지 출력, 인자값이 0 일때 에러메세지 출력
function printErrMsg(arg){
    console.log(arg+"개의 인자가 필요합니다.");
}
//원 넓이 구하기
function getCircle(radius){
    //if(!radius) return console.log("인자가 부족합니다.");
    if(arguments.length<1) printErrMsg(1);
    else console.log(radius * radius * Math.PI);
}
getCircle();
getCircle(5);

//사각형넓이 구하기
function getRect(width,height){
    if(width && height) return console.log(width * height);
    printErrMsg(2);
}
getRect(5);
getRect(5,10);

//사다리꼴 넓이 구하기
function getTrap(bottom,top,height){
    if(arguments.length<3) return printErrMsg(3);
    else if(bottom <= 0){ console.log("0보다 큰 bottom값을 입력해주세요"); }
    else if(top <= 0) { console.log("0보다 큰 top값을 입력해주세요"); }
    else if(height <= 0) { console.log("0보다 큰 height값을 입력해주세요"); }
    else return console.log((bottom + top) * height / 2);
}
getTrap(5,10);
getTrap(5,10,15);
getTrap(-5,5,10);
getTrap(5,-2,10);
getTrap(6,4,-5);