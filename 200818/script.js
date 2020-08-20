function q10_6() {
    window.onload = function () {
        var header = document.getElementsByClassName('header');

        header[0].style.backgroundColor = "red";
        header[0].style.color = "royalblue";
        header[0].innerHTML = "10-6번 문제......";
    }
}

function q10_7() {
    window.onload = function () {
        var header = document.getElementsByName('header');

        for(var i in header) {
            header[i].style.backgroundColor = "red";
            header[i].style.color = "blue";
            header[i].innerHTML = i+"번째 h1";
        }
    }
}

function q10_8() {
    window.onload = function () {
        var header1 = document.getElementsByTagName('h1');

        for(var i=0; i<header1.length; i++) {
            header1[i].style.backgroundColor = "red";
            header1[i].style.color = "blue";
            header1[i].innerHTML = i+"번째 h1";
        }

        var header2 = document.getElementsByTagName('h2');


        for(var i=0; i<header1.length; i++) {
            header2[i].style.backgroundColor = "blue";
            header2[i].style.color = "red";
            header2[i].innerHTML = i+"번째 h2";
        }
    }
}

function q10_10() {
    window.onload = function () {
        var output = '';
        for(var i =0; i<256; i++) {
            output += '<div>'+i+'</div>';
        }
        document.body.innerHTML = output;
    }

}

function add() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var num3 = document.getElementById('num3');
    var result = 0;

    result = num1 + num2;
    num3.value = result;
}

function sub() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var num3 = document.getElementById('num3');
    var result = 0;

    result = num1 - num2;
    num3.value = result;
}

function mul() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var num3 = document.getElementById('num3');
    var result = 0;

    result = num1 * num2;
    num3.value = result;
}

function div() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var num3 = document.getElementById('num3');
    var result = 0;

    result = num1 / num2;
    num3.value = result;
}

function erase() {
    document.getElementById('num1').value = null;
    document.getElementById('num2').value = null;
    document.getElementById('num3').value = null;
}