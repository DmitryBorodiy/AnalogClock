import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  provideFluentDesignSystem
} from "https://unpkg.com/@fluentui/web-components";

class ThemeHelper {
  constructor() { }

  GetCurrentTheme(){

  }
}

const KnownDeviceTheme = {
  Light: 0,
  Dark: 1
};

provideFluentDesignSystem().register(allComponents);

const domContainer = document.querySelector('#root');

baseLayerLuminance.setValueFor(domContainer, StandardLuminance.DarkMode);