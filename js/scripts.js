$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var noString = $("input#input1").val();
    var noArray = noString.split(',');
    var sum = 0;
    var add = function(noArray){
        for (var number=0;number<=noArray.length-1;number++) {
            sum += parseInt(noArray[number]);
        }
        console.log(sum);


// USER INTERFACE LOGIC
//$(document).ready(function(){
  //$("form").submit(function(event){
    //event.preventDefault();
    //var noString = $("input#input1").val();
    //var noArray = noString.split(',');
    //var sum = 0;
    //var add = noArray.map( num =>{
        //return sum += num
  });
});
