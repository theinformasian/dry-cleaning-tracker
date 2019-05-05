function increment(ele){
  var counterName = ele.parentNode.id +'-counter';
  document.getElementById(counterName).stepUp(1);
}

function decrement(ele){
  var counterName = ele.parentNode.id +'-counter';
  document.getElementById(counterName).stepDown(1);
}
