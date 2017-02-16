$(function(){
  $('.appear_func').click(function() {
    if ( $('#show').is(':visible') ){
      $('#clock').hide();
      $('#show').hide();
      $('#hide').show();
    }else{
      $('#show').show();
      $('#clock').show();
      $('#hide').hide();
    }
  });
  
  var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

  for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
      prop = props[i];
      break;
    }
  }
  
  setInterval(function() { startClock(); }, 1000);

  function startClock() {
    var angle = 360/60,
        date = new Date(),
        hour = date.getHours() % 12,
        minute = date.getMinutes(),
        second = date.getSeconds(),
        hourAngle = (360/12) * hour + (360/(12*60)) * minute;

    if(prop) {
      $('#minute')[0].style[prop] = 'rotate('+angle * minute+'deg)';
      $('#second')[0].style[prop] = 'rotate('+angle * second+'deg)';
      $('#hour')[0].style[prop] = 'rotate('+hourAngle+'deg)';
    }
  }
});
