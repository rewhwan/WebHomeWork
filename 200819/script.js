function init57() {
    urlObject = document.getElementById("url");
    domainObject = document.getElementById("domain");
    fileObject = document.getElementById("fileName");
    extObject = document.getElementById("ext");
}

function subString() {
    var url = urlObject.value;

    // 도메인 받아오는 부분
    var p1 = url.indexOf("://");
    var p2 = url.indexOf("/",p1+3);

    var domain = url.substring(p1+3,p2);
    domainObject.innerHTML = domain;
    domainObject.href = domain;

    // 파일이름 받아오는 부분
    var p3 = url.lastIndexOf("/");
    var p4 = url.lastIndexOf(".");

    var fileName = url.substring(p3,p4);
    fileObject.innerHTML = fileName;

    //확장자 가져오기
    var ext = url.substring(p4+1);
    extObject.innerHTML = ext;

}

function init67() {
    spYear = document.getElementById("year");
    spMonth = document.getElementById("month");
    spDate = document.getElementById("date");
    spHour = document.getElementById("hour");
    spMinute = document.getElementById("minute");
    spSecond = document.getElementById("second");
}

function start() {
    setInterval(clockStart,500)
}

function clockStart() {
    //요일 배열 생성
    var days = ["일", "월", "화", "수", "목", "금", "토"];

    var mydate = new Date();

    var yy = mydate.getFullYear();
    spYear.innerHTML = yy+'년';

    var mm = mydate.getMonth();
    spMonth.innerHTML = mm+1+'월';

    var date = mydate.getDate();
    spDate.innerHTML = date+'일';

    var hour = mydate.getHours();
    spHour.innerHTML = hour+'시';

    var minute = mydate.getMinutes();
    spMinute.innerHTML = minute+'분';

    var seconds = mydate.getSeconds();
    spSecond.innerHTML = seconds+'초';

}

function init69() {
    ipDate1 = document.getElementById("date1");
    ipDate2 = document.getElementById("date2");
    h1Date = document.getElementById("date");
}

function test() {
    var date1 = new Date(ipDate1.value);
    var date2 = new Date(ipDate2.value);

    var result = (date1-date2)/(24*60*60*1000);

    h1Date.innerHTML = result+"일 차이납니다"

}

function init74() {
}

function open1() {
    window.open('');
}

function open2() {
    window.open('',null,'width=300, height=500, scrollbars=no,toolbar=no, menubar=no,status=no,location=no');
}

function open3(url) {
    window.open(url,'mywin','width=500, height=300, scrollbars=no, toolbar=no, menubar=no, status=no, location=no');
}
