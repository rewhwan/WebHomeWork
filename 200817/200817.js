function printDate() {
    //변수 선언
    var date = new Date();
    var hours = date.getHours();
    var minuates = date.getMinutes();

    var flag = "yes";

    while (flag != "no") {
        //조건문
        if(hours < 12) {
            alert("현재 시간 : 오전 "+hours+"시 "+minuates+"분 입니다.");
        }else {
            alert("현재 시간 : 오후 "+hours+"시 "+minuates+"분 입니다.");
        }
        flag = prompt("더할래? (YES = 반복 , NO = 종료)");
    }

}

function condition() {
    var date = new Date();
    var hours = date.getHours();

    switch (hours) {

        case 1:
        case 2:
        case 3:
        case 4:
            alert("잠을 자렴........");
            break;

        case 5:
        case 6:
            alert("준비");
            break;

        case 7:
        case 8:
            alert("출근");
            break;

        case 9:
        case 10:
        case 11:
            alert("빈둥빈둥");
            break;

        case 12:
        case 13:
            alert("식사");
            break;

        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            alert("TEST");
            break;
    }
}

function loop() {

    var array = ['이상한 나라의 솜사탕','엄마는 외계인','아빠의 싱싱농장'];

    for (var i in array) {
        alert(i +"번째 : "+ array[i]);
    }
}