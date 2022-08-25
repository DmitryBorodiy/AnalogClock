export const nav_selector_default = [
    {  }
];
 
export const defaultTiming = {
  duration: 2000
};

export function AnimateSelector(value, timing){
    try{
        var nav_selector = document.getElementById("nav-selector");

        if(nav_selector != null && value != null && timing != null){
            nav_selector.animate(value);
        }
        else{
            console.log("The value or timing is null.");
        }
    }
    catch(e){
        console.log(e.toString());
    }
}