let score =0;
let otvet3 =0;
let test1close = false;
let test2close = false;
let test3close = false;

function checktest(a){
    if(a==1){
        if(document.getElementById("test1").value=='27.01' && !test1close){
            score++;
            test1close = true;
        }
    };
    if(a==2){
        if(document.getElementById("test2").value=="20.06"){
            score++;
            test2close = true;
        };            
    };
    if(a==3){
        if(otvet3==3 && !test3close){
            score++;
            test3close=true;
        }
    };
    checkScore();
};

function checktestRadio(a){
    otvet3 = a;
};

function checkScore(){
    if(score==1){
        document.getElementById("image").src ='Main2.png'
    }else
    if(score==2){
        document.getElementById("image").src ='Main3.png'
    }else
    if(score==3){
        document.getElementById("image").src ='Main4.png'
        document.getElementById("poskazka").innerHTML="Наверху и под чем-то";
    }
}
 