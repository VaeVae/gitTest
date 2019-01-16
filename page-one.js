function trag(){
    $('#myImg').mousedown(function(e){
        let isMove=true;
        let disX=e.clientX-this.offsetLeft;
        let disY=e.clientY-this.offsetTop;
        $(document).mousemove(function(e){
            let left=e.clientX-disX;
            let top=e.clientY-disY;
            let width=document.documentElement.offsetWidth-$('#myImg')[0].offsetWidth;
            let height=document.documentElement.offsetHeight-$('#myImg')[0].offsetHeight;
            if(isMove){
                if(left<0){
                    left=0;
                }else if(left>width){
                    left = width;
                }else{
                    left = (Math.round(left/25))*25;
                }
                if(top<0){
                    top=0;
                }else if(top>height){
                    top=height;
                }else{
                    top=(Math.round(top/25))*25;
                }
                $('#myImg').css({'left':left+'px','top':top+'px'});
            }
        }).mouseup(function(){
            isMove=false;
        });
    })
}
trag();