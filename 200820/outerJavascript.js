function check() {
    var selecter = document.getElementById("select");

    selecter.onchange = function () {
        if(!(selecter.value == 0)) {
            var url = "http://"+selecter.value
            var nwin = confirm("새창에서 열까요?");
            if(nwin){
                window.open(url);
            }else {
                window.location.href = url;
            }
        }
    }
}

//=====================================================================================

function init2() {
    img = document.getElementById("picture");
    checkedButton = 0;
    autoImageFlag = false;
}

function imageChange(btn) {
    var image = ["image/pic1.png","image/pic2.png","image/pic3.png","image/pic4.png"];
    var button = btn;

    var checkedButtonObject = document.getElementById("btn"+checkedButton);

    img.src = image[button.value];
    button.classList.add("checked");

    if(!(checkedButton == button.value)){
        checkedButtonObject.classList.remove("checked");
    }

    checkedButton = button.value;
}

function autoImageToggle(btn) {
    var i = checkedButton;
    var button = btn;

    if(autoImageFlag) {
        //멈추는 코드
        clearInterval(autoimageInterval);
        autoImageFlag = false;

        button.innerHTML = "슬라이드 시작";
        button.classList.remove("checked");
    }else {
        //움직이는 코드
        autoimageInterval = setInterval(function () {
            if(i == 3) i=-1;
            i++;
            imageChange(document.getElementById("btn"+i));
        },1000);
        autoImageFlag = true;

        button.innerHTML = "슬라이드 정지";
        button.classList.add("checked");
    }
}

function changeImage(image,id) {
    document.getElementById(id).src = image;
}

//=====================================================================================

function init4() {
    userID = document.getElementById("userID");
    domain = document.getElementById("domain");
    userEmail = document.getElementById("userEmail");
    check14 = document.getElementById("14");
}

function checkForm(btn) {

    var idValue = userID.value.replace(/(\s*)/g,"");
    var english = /\W/;

    //아이디 입력 데이터 검증
    //공백 제거
    if(idValue === '') {
        alert("아이디를 입력해주세요")
        userID.value = '';
        userID.focus();
        return false;
    }else {
        userID.value = idValue;
    }

    if(idValue.search(english)>=0) {
        alert("아이디는 영어와 숫자만 입력가능합니다.")
        userID.value = '';
        userID.focus();
        return false;
    }

    var emailValue = userEmail.value.replace(/(\s*)/g,"");

    //이메일 입력 데이터 검증
    //공백 제거
    if(emailValue === '') {
        userEmail.value = "";
        userEmail.focus();
        alert("이메일을 입력해주세요")
        return false;
    }else {
        userEmail.value = emailValue;
    }

    var emailFormat = /[^a-zA-Z0-9]/g;

    if(userEmail.value.search(emailFormat)>=0) {
        alert("이메일은 숫자와 영어만 입력가능합니다.")
        userEmail.value = "";
        userEmail.focus();
        return false;
    }

    //도메인 선택여부 확인
    if(domain.value == 0) {
        alert("이메일의 도메인을 선택해주세요")
        domain.focus();
        return false;
    }

    if(!check14.checked) {
        alert("만 14세 이상인지 여부를 체크해주세요")
        check14.focus();
        return false;
    }



}

