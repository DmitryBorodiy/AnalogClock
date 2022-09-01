class Settings {
  constructor(debugMode) {
    if (debugMode == true) {
      console.log("Settings initialized.");
    }
  }

  Theme(value) {
    if (value == null) {
      return localStorage.getItem("appTheme");
    }
    else {
      localStorage.setItem("appTheme", value);
    }
  }
  
  SearchSystem(value){
    if(value == null){
      var searchSystem = localStorage.getItem("searchSystem");
      
      if(searchSystem != null){
        return searchSystem.toString();
      }
      else{
        return KnownSearchSystems.Bing;
      }
    }
    else{
      localStorage.setItem("searchSystem", value);
    }
  }
}

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
    let settings = new Settings(true);
    
    if(settings != null){
      if(window.localStorage.getItem("searchSystem") != null){
        console.log(settings.SearchSystem().toString());
        
        switch(settings.SearchSystem().toString()){
          case KnownSearchSystems.Bing:
            document.getElementById("search-system-select").value = "Bing";
          break;
          case KnownSearchSystems.Google:
            document.getElementById("search-system-select").value = "Google";
            
            console.log("Google");
          break;
          case KnownSearchSystems.DuckDuckGo:
            document.getElementById("search-system-select").value = "DuckDuckGo";
          break;
          case KnownSearchSystems.Yahoo:
            document.getElementById("search-system-select").value = "Yahoo";
          break;
          case KnownSearchSystems.Wolfram:
            document.getElementById("search-system-select").value = "Wolfram";
          break;
          case KnownSearchSystems.Wikipedia:
            document.getElementById("search-system-select").value = "Wikipedia";
          break;
        }
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SearchSystemComboBox_SelectedItem(value) {
  try {
    let settings = new Settings(true);

    if (settings != null) {
      window.localStorage.setItem("searchSystem", value.toString());
      
      console.log(window.localStorage.getItem("searchSystem"));
    }
    else {
      console.log("Can't initialize settings instance.");
    }
  }
  catch (e) {
    console.log(e.toString());
  }
}

SettingsInitialize();
