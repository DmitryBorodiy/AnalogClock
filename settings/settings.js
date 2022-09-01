import {
  ThemeHelper,
  KnownDeviceTheme
} from "../helpers/ThemeHelper.js";

import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  fluentTab,
  fluentTabs,
  fluentTabPanel,
  provideFluentDesignSystem
} from "https://unpkg.com/@fluentui/web-components";

window.onload = function(){
  Page_OnLoaded();
};

function Page_OnLoaded(){
  try{
    SettingsInitialize();
    ThemeInitialize();
  }
  catch(e){
    console.log(e.toString());
  }
}

function ThemeInitialize(){
  try{
    let themeHelper = new ThemeHelper(true);
    
    if (themeHelper.GetCurrentTheme() == KnownDeviceTheme.Light) {
      const layer = document.querySelector("#root");
      baseLayerLuminance.setValueFor(layer, StandardLuminance.LightMode);
    }
    else if (themeHelper.GetCurrentTheme() == KnownDeviceTheme.Dark) {
      const layer = document.querySelector("#root");
      baseLayerLuminance.setValueFor(layer, StandardLuminance.DarkMode);
    }
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
