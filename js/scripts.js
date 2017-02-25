$(document).ready(function() {
  var inputs = [""];
  var totalString;
  var transferTotal;
  var operators1 = ["+", "/", "*"];
  var operators2 = ["."];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input) {
    if (operators2.includes(inputs[inputs.length - 1]) === true && input === ".") {
      console.log("Duplicate '.' ");
    } else if (inputs.length === 1 && inputs == "" && operators1.includes(input) === true) {
      console.log("Cannot start with operator");
    }
    /*
    else if (transferTotal !==undefined && nums.includes(Number(input))) {
      inputs = "";
      transferTotal = inputs;
      inputs.push(input);
    }
    */
  else if (inputs.length === 1 && operators1.includes(input) === false) {
      inputs.push(input);
    } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
    } else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  function update() {
    totalString = inputs.join("");
    if (inputs != ""){
      $("#calculation").html(totalString);
    } else {
      $("#calculation").html(0);
    }
  }

  function getTotal() {
    totalString = eval(inputs.join(""));
    console.log(totalString);
    console.log(inputs);
    $("#calculation").html(totalString);
    transferTotal = totalString.toString();
    console.log(transferTotal);
    inputs = [];
    console.log(inputs);
    inputs.push(transferTotal);
    console.log(inputs);

  }

  $("a").on("click", function() {
    if (this.id === "buttonAc") {
      inputs = [""];
      update();
      $("#calculation").html(0);
    } else if (this.id === "buttonCe") {
      inputs.pop();
      update();
    } else if (this.id === "buttonEqual") {
      getTotal();
    } else {
      if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }
  });

});
