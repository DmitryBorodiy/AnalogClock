import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  provideFluentDesignSystem
} from "https://unpkg.com/@fluentui/web-components";

export class ThemeHelper {
  constructor(isDebugMode) 
  { 
    if(isDebugMode == true){
      console.log("ThemeHelper extension is loaded.");
    }
  }

  GetDefaultCurrentTheme(){
    try{
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

      if (darkThemeMq.matches) {
        return KnownDeviceTheme.Dark;
      } else {
        return KnownDeviceTheme.Light;
      }
    }
    catch(e){
      console.log(e.toString());

      return null;
    }
  }
  
  GetCurrentTheme(){
    try{
      var theme = localStorage.getItem("appTheme");
      
      if(theme != null){
        if(theme.toString() == "Light"){
          return "Light";
        }
        else if(theme.toString() == "Dark"){
          return "Dark";
        }
        else{
          return this.GetDefaultCurrentTheme();
        }
      }
      else{
        return this.GetDefaultCurrentTheme();
      }
    }
    catch(e){
      console.log(e.toString());
      
      return this.GetDefaultCurrentTheme();
    }
  }

  SetTheme(){
    try{
      if(this.GetCurrentTheme() == KnownDeviceTheme.Dark){
        provideFluentDesignSystem().register(allComponents);

        const domContainer = document.querySelector('#root');
        baseLayerLuminance.setValueFor(domContainer, StandardLuminance.DarkMode);
      }
      else if(this.GetCurrentTheme() == KnownDeviceTheme.Light){
        provideFluentDesignSystem().register(allComponents);

        const domContainer = document.querySelector('#root');
        baseLayerLuminance.setValueFor(domContainer, StandardLuminance.LightMode);
      }
    }
    catch(e){
      console.log(e.toString());

      return false;
    }
  }
}

export const KnownDeviceTheme = {
  Light: "Light",
  Dark: "Dark"
};
