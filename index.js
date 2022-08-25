window.onload = function(){
    Page_OnLoaded();
};

function Container_OnResized(){         
    try{
        debugger;

        var container = document.getElementById("container");
        var frame = document.getElementById("frame");

        frame.height = container.clientHeight;
        frame.width = container.clientWidth;
    }
    catch(e){
        console.log(e.toString());
    }
}

function Page_OnLoaded(){
    try{
        setInterval(Container_OnResized(), 500);
    }
    catch(e){
        console.log(e.toString());
    }
}