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
var ThemeRadioGroup;

const KnownDeviceTheme = {
  Light: "Light",
  Dark: "Dark"
};

const appThemeSettingKey = "appTheme";
const searchSystemSettingKey = "searchSystem";

function Page_OnLoaded(){
  try{
    SearchSystemBox = document.getElementById("search-system-box");
    ThemeRadioGroup = document.getElementById("theme-radio-group");
    
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
            document.getElementById("search-system-box").value = "Bing";
          break;
          case KnownSearchSystems.Google:
            document.getElementById("search-system-box").value = "Google";
          break;
          case KnownSearchSystems.DuckDuckGo:
            document.getElementById("search-system-box").value = "DuckDuckGo";
          break;
          case KnownSearchSystems.Yahoo:
            document.getElementById("search-system-box").value = "Yahoo";
          break;
          case KnownSearchSystems.Wolfram:
            document.getElementById("search-system-box").value = "Wolfram";
          break;
          case KnownSearchSystems.Wikipedia:
            document.getElementById("search-system-box").value = "Wikipedia";
          break;
        }
      }
      
      if(window.localStorage.getItem(appThemeSettingKey) != null){
        var appTheme = window.localStorage.getItem(appThemeSettingKey).toString();
        
        if(appTheme == "Light"){
          document.getElementById("theme-radio-group").value = "light";
        }
        else if(appTheme == "Dark"){
          document.getElementById("theme-radio-group").value = "dark";
        }
        else{
          document.getElementById("theme-radio-group").value = "default";
        }
      }
      else{
          if(GetDefaultCurrentTheme() == KnownDeviceTheme.Light){
            document.getElementById("theme-radio-group").value = "light";
          }
          else if(GetDefaultCurrentTheme() == KnownDeviceTheme.Dark){
            document.getElementById("theme-radio-group").value = "dark";
          }
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function GetDefaultCurrentTheme() {
  try {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkThemeMq.matches) {
      return KnownDeviceTheme.Dark;
    } else {
      return KnownDeviceTheme.Light;
    }
  }
  catch (e) {
    console.log(e.toString());

    return null;
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
      case 4:
        console.log("Setup search to Wolfram.");
        
        window.localStorage.setItem("searchSystem", KnownSearchSystems.Wolfram);
      break;
      case 5:
        console.log("Setup search to Wikipedia.");
        
        window.localStorage.setItem("searchSystem", KnownSearchSystems.Wikipedia);
      break;
    }
  }
  catch (e) {
    console.log(e.toString());
  }
}

function ThemeRadioGroup_SelectionChanged(){
  try{
    var selectedValue = document.getElementById("theme-radio-group").value.toString();
    
    switch(selectedValue){
      case "light":
        window.localStorage.setItem(appThemeSettingKey, KnownDeviceTheme.Light);
      break;
      case "dark":
        window.localStorage.setItem(appThemeSettingKey, KnownDeviceTheme.Dark);
      break;
      case "default":
        window.localStorage.setItem(appThemeSettingKey, "Default");
      break;
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

SettingsInitialize();
