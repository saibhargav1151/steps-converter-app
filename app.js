
document.querySelector(".calculate").addEventListener("click",function(){
    document.getElementById("km").style.display="none";
    document.getElementById("calories").style.display="none";
    document.querySelector(".loader").style.display="block";
    setTimeout(steps_conv,2000)
    })
document.querySelector(".clear").addEventListener("click",clear)

function steps_conv(){/**
 * @ param steps
function which events to listen and buid;
 */
    const steps=document.getElementById('steps').value;
    let index=(steps/2000).toFixed(2);
    let index1=(index*100).toFixed(2);
    // console.log("Your steps in Miles: "+ index);
    // console.log("Your Calories Burned: "+ index1);
    if(steps!=0){
        const km=document.getElementById("km");
        const calories=document.getElementById("calories");
        km.innerHTML="Miles walked = "+index+ " Miles";
        calories.innerHTML="Calories burned = "+index1+" Cal";
        document.getElementById("km").style.display="block";
        document.getElementById("calories").style.display="block";
        document.querySelector(".loader").style.display="none";



    }else{
        error()
        function error(){
            document.getElementById("km").style.display="block";
            document.getElementById("calories").style.display="block";
            document.querySelector(".loader").style.display="none";
            document.getElementById("km").innerHTML="<span style='color:black; background-color:pink; border-radius:10px; padding:3px;'> Error; Enter Number of steps first!"
        }
    }
}

function clear(){
    document.getElementById('steps').value="";
    document.getElementById('km').innerHTML="";
    document.getElementById('calories').innerHTML="";


}