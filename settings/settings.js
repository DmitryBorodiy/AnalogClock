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

var SearchSystemBox;

function Page_OnLoaded(){
  try{
    SettingsInitialize();

    SearchSystemBox = document.getElementById("search-system-box");
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
            document.getElementById("search-system-box").value = "Bing";
          break;
          case KnownSearchSystems.Google:
            document.getElementById("search-system-box").value = "Google";
            
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

function SearchSystemComboBox_SelectedItem() {
  try {
    var selectedItem = document.getElementById("search-system-box").selectedIndex;
    
    switch(selectedItem){
      case 0:
        console.log("Setup search to Bing.");
        
        window.localStorage.setItem("searchSystem", KnownSearchSystems.Bing);
      break;
      case 1:
        console.log("Setup search to Google.");
        
        window.localStorage.setItem("searchSystem", KnownSearchSystems.Google);
      break;
      case 2:
        console.log("Setup search to DuckDuckGo.");
        
        window.localStorage.setItem("searchSystem", KnownSearchSystems.DuckDuckGo);
      break;
      case 3:
        console.log("Setup search to Yahoo.");
        
        window.localStorage.setItem("searchSystem", KnownSearchSystems.Yahoo);
      break;
    }
  }
  catch (e) {
    console.log(e.toString());
  }
}

SettingsInitialize();
