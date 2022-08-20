import { ThemeHelper } from "./helpers/ThemeHelper.js";

//UI elements
var clock_menu_item = document.getElementById("clock-menu-item");
var weather_menu_item = document.getElementById("weather-menu-item");
var ssettings_menu_item = document.getElementById("settings-menu-item");
var navigation_selector = document.getElementById("nav-selector");

//Icons
var clock_icon = document.getElementById("clock-icon");
var weather_icon = document.getElementById("weather-icon");
var settings_icon = document.getElementById("settings-icon");

//Labels
var clock_label = document.getElementById("clock-label");
var weather_label = document.getElementById("weather-label");
var settings_label = document.getElementById("settings-label");

let theme = new ThemeHelper();

window.onload = function(){
  App();
}

function App(){
  try{
    theme.SetTheme();

    clock_menu_item.onclick = function() { NavigationBar_Select(0) };
    weather_menu_item.onclick = function() { NavigationBar_Select(2) };
    ssettings_menu_item.onclick = function() { NavigationBar_Select(7) };
  }
  catch(e){
    console.log(e.toString());
  }
}

function NavigationBar_Select(index){
    try{
        switch(index){
            case 0:
                navigation_selector.style.top = "32px";
                navigation_selector.style.removeProperty("bottom");

                clock_icon.classList.replace("fluent-icon", "fluent-icon-filled");
                clock_icon.classList.replace("navigation-bar-item-icon", "fluent-icon-filled-accent");
                weather_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                weather_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");

                clock_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");
                weather_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                settings_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                settings_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                settings_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
            break;
            case 2:
                navigation_selector.style.top = "208px";
                navigation_selector.style.removeProperty("bottom");

                clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                weather_icon.classList.replace("fluent-icon", "fluent-icon-filled");
                weather_icon.classList.replace("navigation-bar-item-icon", "fluent-icon-filled-accent");

                clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                weather_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");

                settings_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                settings_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                settings_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
            break;
            case 7:
                navigation_selector.style.removeProperty("top");
                navigation_selector.style.bottom = "36px";

                clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                weather_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                weather_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");

                clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                weather_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                settings_icon.classList.replace("fluent-icon", "fluent-icon-filled");
                settings_icon.classList.replace("navigation-bar-item-icon", "fluent-icon-filled-accent");
                settings_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");

                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
            break;
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

$(".material-ripple").click(function(event) {
	var surface = $(this);

	if (surface.find(".material-ink").length == 0) {
		surface.prepend("<div class='material-ink'></div>");
	}

	var ink = surface.find(".material-ink");

	ink.removeClass("animate");

	if (!ink.height() && !ink.width()) {
		var diameter = Math.max(38, 38);
		ink.css({height: diameter, width: diameter});
	}

	var xPos = event.pageX - surface.offset().left - (ink.width() / 2);
	var yPos = event.pageY - surface.offset().top - (ink.height() / 2);

	var rippleColor = surface.data("ripple-color");

	ink.css({
		top: yPos + 'px',
		left: xPos + 'px',
		background: rippleColor
	}).addClass("animate");
});
