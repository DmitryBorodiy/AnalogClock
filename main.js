import { 
    ThemeHelper,
    KnownDeviceTheme
} from "./helpers/ThemeHelper.js";


//UI elements
var clock_menu_item = document.getElementById("clock-menu-item");
var weather_menu_item = document.getElementById("weather-menu-item");
var ssettings_menu_item = document.getElementById("settings-menu-item");
var navigation_selector = document.getElementById("nav-selector");
var world_clock_menu_item = document.getElementById("world-clock-menu-item");
var whatsnew_menu_item = document.getElementById("whatsnew-menu-item");
var container = document.getElementById("container");
var frameUI = document.getElementById("frame");

//Icons
var clock_icon = document.getElementById("clock-icon");
var weather_icon = document.getElementById("weather-icon");
var settings_icon = document.getElementById("settings-icon");
var world_clock_icon = document.getElementById("world-clock-icon");
var whatsnew_icon = document.getElementById("whatsnew-icon");

//Labels
var clock_label = document.getElementById("clock-label");
var weather_label = document.getElementById("weather-label");
var settings_label = document.getElementById("settings-label");
var world_clock_label = document.getElementById("world-clock-label");
var whatsnew_label = document.getElementById("whatsnew-label");

let theme = new ThemeHelper();
let settings = new Settings();

window.onload = function(){
  App();
}

function ControlAnimation(element) {
    try {
        const menu = document.querySelector(element);
        menu.classList.remove("tapped");
        setTimeout(() => {
            menu.classList.add("tapped");
        }, 0);
    }
    catch(e){
        console.log(e.toString());
    }
}

function App(){
  try{
    theme.SetTheme();
    
    var appTheme = settings.Theme();

    if(appTheme != null){
        if(appTheme == "Light"){
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'styleLight.css';

            head.appendChild(link);
        }
        else if(appTheme == "Dark"){
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'styleDark.css';

            head.appendChild(link);
        }
        else{
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'style.css';

            head.appendChild(link);
        }
    }
    else{
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");

        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style.css';

        head.appendChild(link);
    }

    clock_menu_item.onclick = function() 
    { 
        ControlAnimation("#clock-menu-item");

        NavigationBar_Select(0); 

        document.getElementById("frame").src = "pages/clock.html";
    };

    world_clock_menu_item.onclick = function() 
    { ControlAnimation("#world-clock-menu-item"); NavigationBar_Select(1); };

    weather_menu_item.onclick = function() 
    { ControlAnimation("#weather-menu-item"); NavigationBar_Select(2); };

    ssettings_menu_item.onclick = function() 
    { ControlAnimation("#settings-menu-item"); NavigationBar_Select(7); document.getElementById("frame").src = "settings/settings.html"; };

    whatsnew_menu_item.onclick = function() 
    { ControlAnimation("#whatsnew-menu-item"); NavigationBar_Select(8); };
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
                world_clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                world_clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");

                clock_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");
                weather_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                world_clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                settings_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                settings_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                settings_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                whatsnew_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                whatsnew_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                whatsnew_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
                world_clock_icon.innerHTML = "";
                whatsnew_icon.innerHTML = "";
            break;
            case 1:
                navigation_selector.style.top = "118px";
                navigation_selector.style.removeProperty("bottom");

                world_clock_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");
                world_clock_icon.classList.replace("fluent-icon", "fluent-icon-filled");
                world_clock_icon.classList.replace("navigation-bar-item-icon", "fluent-icon-filled-accent");

                clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                weather_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                weather_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                settings_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                settings_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");

                settings_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                weather_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                whatsnew_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                whatsnew_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                whatsnew_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
                world_clock_icon.innerHTML = "";
                whatsnew_icon.innerHTML = "";
            break;
            case 2:
                navigation_selector.style.top = "208px";
                navigation_selector.style.removeProperty("bottom");

                clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                weather_icon.classList.replace("fluent-icon", "fluent-icon-filled");
                weather_icon.classList.replace("navigation-bar-item-icon", "fluent-icon-filled-accent");
                world_clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                world_clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");

                clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                weather_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");
                world_clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                settings_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                settings_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                settings_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                whatsnew_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                whatsnew_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                whatsnew_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
                world_clock_icon.innerHTML = "";
                whatsnew_icon.innerHTML = "";
            break;
            case 7:
                navigation_selector.style.removeProperty("top");
                navigation_selector.style.bottom = "36px";

                clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                weather_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                weather_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                world_clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                world_clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");

                clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                weather_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                world_clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                settings_icon.classList.replace("fluent-icon", "fluent-icon-filled");
                settings_icon.classList.replace("navigation-bar-item-icon", "fluent-icon-filled-accent");
                settings_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");

                whatsnew_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                whatsnew_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                whatsnew_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
                world_clock_icon.innerHTML = "";
                whatsnew_icon.innerHTML = "";
            break;
            case 8:
                navigation_selector.style.removeProperty("top");
                navigation_selector.style.bottom = "118px";

                whatsnew_icon.classList.replace("fluent-icon", "fluent-icon-filled");
                whatsnew_icon.classList.replace("navigation-bar-item-icon", "fluent-icon-filled-accent");
                whatsnew_label.classList.replace("navigation-bar-label", "navigation-bar-label-accent");

                clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                weather_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                weather_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                world_clock_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                world_clock_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                settings_icon.classList.replace("fluent-icon-filled", "fluent-icon");
                settings_icon.classList.replace("fluent-icon-filled-accent", "navigation-bar-item-icon");
                settings_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                weather_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");
                world_clock_label.classList.replace("navigation-bar-label-accent", "navigation-bar-label");

                world_clock_icon.innerHTML = "";
                weather_icon.innerHTML = "";
                settings_icon.innerHTML = "";
                whatsnew_icon.innerHTML = "";
            break;
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function NavigateFrame(path){
    try{
        frameUI.src = path.toString();
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
