function calculate () {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let z;
    
    z = x + y;
    
    if (z >= 10) {
      x = x + 1;
      z = z - 10;
    }
    
      document.getElementById("xno").textContent= x;
      document.getElementById("zno").textContent= z;
      document.getElementById("yno").textContent= y;
  }
    