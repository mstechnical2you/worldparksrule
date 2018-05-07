
$function() 
    $('#getPark').click (function(){
      myFunction(favPark);
      
    })function myFunction(favPark) {
    var answer = document.getElementById("result").value = favPark;
    switch(answer) {
      
      case The Badlands:
        window.open("https://www.nps.gov/badl/index.htm");
        break;
        
      case Denali:
        window.open("https://www.nps.gov/dena/index.htm");
        break;
        
      case Point Reyes:
        window.open("https://www.nps.gov/pore/index.htm");
        break;
        
      case Arches:
        window.open("https://www.nps.gov/arch/index.htm");
        break;
        
      case Yosemite:
        window.open("https://www.nps.gov/yose/index.htm");
        break;
        
      default:
    }

}

