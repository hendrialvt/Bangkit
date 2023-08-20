function greeting() {
    console.log("Selamat sore!");
 }
  
 greeting(); 

 function greeting(greet) {
    console.log("Selamat " + greet + "!");
  }
   
  greeting('malam'); // Selamat malam!
  greeting('pagi'); // Selamat pagi!

  function greeting(greet, name) {
    console.log("Selamat " + greet + ", " + name + "!");
  }
   
  greeting("sore", "Dimas"); // Selamat sore, Dimas!
  greeting("pagi", "Yasmin"); // Selamat pagi, Yasmin!

  function greeting(greet, name = "Bapak/Ibu") {
    console.log("Selamat " + greet + ", " + name + "!");
  }
   
  greeting("sore", "Dimas"); // Selamat sore, Dimas!
  greeting("pagi"); // Selamat pagi, Bapak/Ibu!