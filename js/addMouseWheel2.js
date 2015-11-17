function addMouseWheel(obj,fn){
    if(window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1){
        obj.addEventListener("DOMMouseScroll",fnWheel,false);
    }else{
        obj.onmousewheel=fnWheel;
    }

    function fnWheel(ev){
        var oEv=ev||event;
        var down=true;
        if(oEv.wheelDelta){
            down=oEv.wheelDelta<0?true:false;
        }else{
            down=oEv.detail>0?true:false;
        }

        (typeof fn=="function")&&fn(down);
        oEv.preventDefault&&oEv.preventDefault();
        return false;
    }
}