class SearchHelper{
  constructor(searchSystem){
    this.SearchSystem = searchSystem;
  }
  
  SearchSystem = "https://www.bing.com/search?q=";
  
  MakeSearch(query, searchSystem){
    var httpRequest = SearchSystem + query;
    
    window.open(httpRequest.toString());
  }
  
  GetSearchSuggestions(query){
    try{
      let suggestions = [];
      
      var xmlDoc = new XMLHttpRequest();
      xmlDoc.open("GET", "http://www.google.com/complete/search?output=toolbar&q=" + query, true);
      
      xmlDoc.onreadystatechange = function() {
        if (xmlDoc.readyState == 4 && xmlDoc.status == 200)
        {
          var doc = xmlDoc.responseXML;
          
          console.log("debug");
          
          var output = $.parseXML(doc.toString());
          
          $('toplevel>CompleteSuggestion>suggestion', output).each(function(i, e) {
            suggestions.push($(e).attr('data'));
          });
          
          return suggestions;
        }
      };
      
      xmlDoc.send(null);
      
      return suggestions;
    }
    catch(e){
      console.log(e.toString());
      
      return null;
    }
  }
}

const KnownSearchSystems = {
  Google: "https://www.google.com/search?q=",
  Bing: "https://www.bing.com/search?q=",
  DuckDuckGo: "https://duckduckgo.com/?q=",
  Yahoo: "https://search.yahoo.com/search?p=",
  Wolfram: "https://www.wolframalpha.com/input?i=",
  Wikipedia: "https://ru.m.wikipedia.org/w/index.php?go=Go&search="
};
