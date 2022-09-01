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
  ThemeInitialize();
};

function ThemeInitialize() {
  try {
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
  catch (e) {
    console.log(e.toString());
  }
}
