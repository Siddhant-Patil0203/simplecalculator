
//add values in display

function adddisp(a){
    if(document.getElementById('show').value == 0){
        document.getElementById('show').value = "";
        document.getElementById('show').value += a;
    }
    else document.getElementById('show').value += a;
}

function clean(){
    document.getElementById('show').value = "0";
}

function result(){
    var a =document.getElementById('show').value;
    document.getElementById('show').value = eval(a);
}


/*theme*/
function darktheme(){
    document.getElementById("body").style.background = '#161623';

    document.getElementById("night").style.color = '#fff';
    document.getElementById("day").style.color = 'rgb(120, 120, 120)';

    document.getElementById("theme").style.background = 'rgb(27, 27, 27)';

    document.getElementById("container").style.background = ' #060709';
    document.getElementById("show").style.background = ' #060709';

    document.getElementById("inputarea").style.background = '#121212';

    document.getElementById("show").style.color = ' #fff';

    document.getElementById("ib").style.color = ' #fff';
    document.getElementById("ib1").style.color = ' #fff';
    document.getElementById("ib2").style.color = ' #fff';
    document.getElementById("ib3").style.color = ' #fff';
    document.getElementById("ib4").style.color = ' #fff';
    document.getElementById("ib5").style.color = ' #fff';
    document.getElementById("ib6").style.color = ' #fff';
    document.getElementById("ib7").style.color = ' #fff';
    document.getElementById("ib8").style.color = ' #fff';
    document.getElementById("ib9").style.color = ' #fff';
    document.getElementById("ib10").style.color = ' #fff';
    document.getElementById("ib11").style.color = ' #fff';
    

    document.getElementById("ib").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib1").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib2").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib3").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib4").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib5").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib6").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib7").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib8").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib9").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib10").style.background = 'rgb(27, 27, 27)';
    document.getElementById("ib11").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et1").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et2").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et3").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et4").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et5").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et6").style.background = 'rgb(27, 27, 27)';
    document.getElementById("et7").style.background = 'rgb(27, 27, 27)';
}

function lighttheme(){
    document.getElementById("body").style.background = 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)';
    document.getElementById("day").style.color = '#000';
    document.getElementById("night").style.color = 'rgb(190, 190, 190)';

    document.getElementById("theme").style.background = 'whitesmoke';

    document.getElementById("container").style.background = '#fff';
    document.getElementById("show").style.background = ' #fff';

    document.getElementById("inputarea").style.background = 'whitesmoke';

    document.getElementById("show").style.color = ' #000';

    document.getElementById("ib").style.color = ' #000';
    document.getElementById("ib1").style.color = ' #000';
    document.getElementById("ib2").style.color = ' #000';
    document.getElementById("ib3").style.color = ' #000';
    document.getElementById("ib4").style.color = ' #000';
    document.getElementById("ib5").style.color = ' #000';
    document.getElementById("ib6").style.color = ' #000';
    document.getElementById("ib7").style.color = ' #000';
    document.getElementById("ib8").style.color = ' #000';
    document.getElementById("ib9").style.color = ' #000';
    document.getElementById("ib10").style.color = ' #000';
    document.getElementById("ib11").style.color = ' #000';

    document.getElementById("ib").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib1").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib2").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib3").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib4").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib5").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib6").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib7").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib8").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib9").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib10").style.background = 'rgb(234, 234, 234)';
    document.getElementById("ib11").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et1").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et2").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et3").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et4").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et5").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et6").style.background = 'rgb(234, 234, 234)';
    document.getElementById("et7").style.background = 'rgb(234, 234, 234)';
}