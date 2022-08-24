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

provideFluentDesignSystem().register(fluentTab(), fluentTabs(), fluentTabPanel());

window.onload = function(){
  Page_OnLoaded();
};

provideFluentDesignSystem().register(allComponents);

function Page_OnLoaded(){
  try {
    let themeHelper = new ThemeHelper(true);

    if(themeHelper.GetCurrentTheme() == KnownDeviceTheme.Light){
      const layer = document.querySelector("#root");
      baseLayerLuminance.setValueFor(layer, StandardLuminance.LightMode);
    }
    else if(themeHelper.GetCurrentTheme() == KnownDeviceTheme.Dark){
      const layer = document.querySelector("#root");
      baseLayerLuminance.setValueFor(layer, StandardLuminance.DarkMode);
    }
  } 
  catch (e){
    console.log(e.toString());
  }
}

function Page_OnResize(){
  try {

  }
  catch(e){
    console.log(e.toString());
  }
}