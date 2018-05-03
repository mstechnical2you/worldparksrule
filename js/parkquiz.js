
function myFunction(){
    var chicken = document.getElementById('chicken');
    var beef = document.getElementById('beef');
    var veggie = document.getElementById('vegeterian');
    
    
    if(chicken.checked == true){
        document.getElementById('yourChoice').innerHTML = 'Chicken';
        document.getElementById('imgChange').src = "https://c1.staticflickr.com/5/4025/4677022870_0ecc23feb0_b.jpg";
    }else if(beef.checked == true){
        document.getElementById('yourChoice').innerHTML = 'Beef';
        document.getElementById('imgChange').src = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Skirt_Steak.jpg";
    }else {
        document.getElementById('yourChoice').innerHTML = 'Vegeterian';
        document.getElementById('imgChange').src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Fresh_cut_fruits_and_vegetables.jpg";

    }
}
// <p>Let's Play Park Picker! Answer the following quiz questions.</p>

// <input id="myPark" type="text">

// <button onclick="myParkPicker()">My Park Picker</button>

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  
//   <h1 id="yourChoice">Your choice goes here.</h1>
   
//     <form action="#">
//       <!-- Problem one: using #memu multiple times-->
//         <input type="radio" name="menuChoice"  value="chicken">Chicken<br>
//         <input type="radio" name="menuChoice" value="beef">Beef<br>
//         <input type="radio" name="menuChoice" value="vegeterian">Vegeterian<br>
        
//         <button onclick="menuFunction(value)">Choose Menu</button>
//     </form>



function ParkPickerFunction() {
     var myVar = document.getElementsByName("ParkPicker");
    if(myVar[0].checked){
      document.getElementById("Park Picker").write("Wow. You are Bad to the bone. The Badlands National Park is Your Favorite Park");
    }else if (myVar[1].checked) {
       document.getElementById("Park Picker").write("Wow. You enjoy Grazing with the sheep. Denali National Park is Your Favorite Park");
    } else if (myVar[2].checked){
      document.getElementById("Park Picker").write("Wow. You enjoy Swimming with the whales. Point Reyes National Seashore Park is Your Favorite Park");
    }else if {myVar[4].checked){
      document.getElementById("Park Picker").write("Wow. You love McDonalds. Arches National Park Red Arch Wonderland is Your Favorite Park");
    else if {myVar[5].checked){
      document.getElementById("Park Picker").write("Wow. You enjoy eating Skittles. Yosemite National Park Rainbow Vernal Falls is Your Favorite Park");
    }
    
    