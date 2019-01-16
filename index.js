drag();
function drag(){
    let x;//变化的x
    let y; // 变化的y
    let X;// 初始X
    let Y;// 初始Y
    let L; // marginleft
    let T; // marginTop
    let isMove;
    $('#myId').mousedown(function(e){
        isMove=true;
        X=e.clientX;
        Y=e.clientY;
        L=parseInt($('#myId').css('left'));
        T=parseInt($('#myId').css('top'));
        console.log(L,T,'this is left top')
        $(document).mousemove(function(e){
            x=e.clientX-X;
            y=e.clientY-Y;
            if(isMove){
                console.log(x,y,'this iss x y')
                console.log($('#myId').css,'====00-0-0-')
                $('#myId').css({
                    left:L+x+'px',
                    top:T+y+'px'
                })
            }
        });
        $(document).mouseup(function(){
            isMove=false
        })
    })



}