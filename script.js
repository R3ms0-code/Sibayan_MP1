const arr = ["../Images/P1.webp","../Images/P2.webp","../Images/P3.webp","../Images/P4.webp","../Images/P5.webp","../Images/P6.webp","../Images/P7.webp","../Images/P8.webp"];
var curr = 0;

$(".uimenu").click(function(){
          $('body').toggleClass('open close');
     
});

$("#prev").click(function(){
    curr=curr-1;
    ChangeImage(curr);
})

$("#next").click(function(){
    curr= curr+1;
    ChangeImage(curr);
})

function ChangeImage(i){
    var index = Math.abs(i%arr.length)
    $("#imgprev, #imgcurr, #imgnext").addClass("fade")

    setTimeout(function(){
        if(index==0){
        $("#imgprev").attr("src", arr[7]);
        $("#imgcurr").attr("src", arr[index]);
        $("#imgnext").attr("src", arr[index+1]);
    }
    else if (index==7){
        $("#imgprev").attr("src", arr[index-1]);
        $("#imgcurr").attr("src", arr[index]);
        $("#imgnext").attr("src", arr[0]);
    }
    else{
        $("#imgprev").attr("src", arr[index-1]);
        $("#imgcurr").attr("src", arr[index]);
        $("#imgnext").attr("src", arr[index+1]);
    }
        $("#imgprev, #imgcurr, #imgnext").removeClass("fade");
    }, 350);
}
