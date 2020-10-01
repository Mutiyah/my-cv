document.querySelector('.grid').addEventListener('mouseover', function overEvent(e){
    // console.log(e.target);
    if(e.target.tagName === 'IMG'){
    var newElement = document.createElement('div');
    newElement.className = 'preview';
    e.target.parentNode.appendChild(newElement);

    var newImg = document.createElement('img');
    var imgAlt = e.target.src; 
    newImg.src = imgAlt.substr(0, imgAlt.length - 7) + '.jpg';
    newElement.style.left = e.offsetX + -45 +'px';
    newElement.style.top = e.offsetY + -10 +'px';
    newElement.appendChild(newImg);

    e.target.addEventListener('mouseout', function handler(d){
       var myNode = d.target.parentNode.querySelector('div.preview');
       myNode.parentNode.removeChild(myNode);
    e.target.removeEventListener('mouseout', handler, false);
    }, false)
    }

    e.target.addEventListener('mousemove', function(f){
        newElement.style.left = f.offsetX + -45 +'px';
    newElement.style.top = f.offsetY + -10 +'px';
    })
    
}, false)


// progress bar


function move() {
    var i = 0;
  if (i == 0) {
    i = 1;
    var width = 10;
    var elem = document.getElementById("html1");
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 99) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

function move1(){
    var j = 0;
    if(j == 0){
        j = 1;
        var width2 = 10;
      var ele2 = document.getElementById("css");
var id1 = setInterval(frame1, 20);
function frame1(){
    if(width2 >= 90){
        clearInterval(id1);
        j = 0;
    }else{
        width2++;
        ele2.style.width = width2 + "%";
        ele2.innerHTML = width2 + "%";
    }
}
    }
}

function move2(){
    var a = 0;
    if(a == 0){
        a = 1;
        var width3 = 10;
      var ele3 = document.getElementById("mini-importation");
var id2 = setInterval(frame1, 20);
function frame1(){
    if(width3 >= 90){
        clearInterval(id2);
        a = 0;
    }else{
        width3++;
        ele3.style.width = width3 + "%";
        ele3.innerHTML = width3+ "%";
    }
}
    }
}

function move3(){
    var a = 0;
    if(a == 0){
        a = 1;
        var width3 = 10;
      var ele3 = document.getElementById("bootstrap");
var id2 = setInterval(frame1, 25);
function frame1(){
    if(width3 >= 70){
        clearInterval(id2);
        a = 0;
    }else{
        width3++;
        ele3.style.width = width3 + "%";
        ele3.innerHTML = width3+ "%";
    }
}
    }
}

function move4(){
    var a = 0;
    if(a == 0){
        a = 1;
        var width3 = 10;
      var ele3 = document.getElementById("digital-mart");
var id2 = setInterval(frame1, 25);
function frame1(){
    if(width3 >= 70){
        clearInterval(id2);
        a = 0;
    }else{
        width3++;
        ele3.style.width = width3 + "%";
        ele3.innerHTML = width3+ "%";
    }
}
    }
}

function move5(){
    var a = 0;
    if(a == 0){
        a = 1;
        var width3 = 10;
      var ele3 = document.getElementById("sql");
var id2 = setInterval(frame1, 30);
function frame1(){
    if(width3 >= 60){
        clearInterval(id2);
        a = 0;
    }else{
        width3++;
        ele3.style.width = width3 + "%";
        ele3.innerHTML = width3+ "%";
    }
}
    }
}

function move6(){
    var a = 0;
    if(a == 0){
        a = 1;
        var width3 = 10;
      var ele3 = document.getElementById("ms-suite");
var id2 = setInterval(frame1, 35);
function frame1(){
    if(width3 >= 60){
        clearInterval(id2);
        a = 0;
    }else{
        width3++;
        ele3.style.width = width3 + "%";
        ele3.innerHTML = width3+ "%";
    }
}
    }
}

function move7(){
    var a = 0;
    if(a == 0){
        a = 1;
        var width3 = 10;
      var ele3 = document.getElementById("javascript");
var id2 = setInterval(frame1, 40);
function frame1(){
    if(width3 >= 60){
        clearInterval(id2);
        a = 0;
    }else{
        width3++;
        ele3.style.width = width3 + "%";
        ele3.innerHTML = width3+ "%";
    }
}
    }
}

function move8(){
    var a = 0;
    if(a == 0){
        a = 1;
        var width3 = 10;
      var ele3 = document.getElementById("csharp");
var id2 = setInterval(frame1, 45);
function frame1(){
    if(width3 >= 60){
        clearInterval(id2);
        a = 0;
    }else{
        width3++;
        ele3.style.width = width3 + "%";
        ele3.innerHTML = width3+ "%";
    }
}
    }
}


move();
move1();
move2();
move3();
move4();
move5();
move6();
move7();
move8();