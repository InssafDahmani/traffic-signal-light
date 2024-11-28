function red() {
    clearLight();
    document.getElementById("redLight").style.backgroundColor = "red";
  }
  
  function yellow() {
    clearLight();
    document.getElementById("yellowLight").style.backgroundColor = "yellow";
  }
  
  function green() {
    clearLight();
    document.getElementById("greenLight").style.backgroundColor = "green";
  }
  
  function clearLight() {
    document.getElementById("redLight").style.backgroundColor = "gray";
    document.getElementById("yellowLight").style.backgroundColor = "gray";
    document.getElementById("greenLight").style.backgroundColor = "gray";
  }