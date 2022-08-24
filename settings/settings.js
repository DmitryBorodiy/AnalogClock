window.onload = function(){
  Page_OnLoaded();
};

function Page_OnLoaded(){
  try{
    SettingsInitialize();
  }
  catch(e){
    console.log(e.toString());
  }
}

function SettingsInitialize(){
  try{
    
  }
  catch(e){
    console.log(e.toString());
  }
}

export class Settings{
    constructor(debugMode){
        if(debugMode == true){
            console.log("Settings initialized.");
        }
    }

    Theme(value){
        if(value == null){
            return localStorage.getItem("appTheme");
        }
        else{
            localStorage.setItem("appTheme", value);
        }
    }
}