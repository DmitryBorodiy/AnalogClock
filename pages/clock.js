function Page_OnLoaded(){
  try {
    ThemeHelper.SetTheme();
  } 
  catch (e){
    console.log(e.toString());
  }
}