

var t=setTimeout(myClock,100);
var s=0;
var m=0;
function myClock() {
	var spanMin = document.getElementById('min');
	var spanSec = document.getElementById('sec');
  s=s+6;
  spanSec.style.transform='rotate('+s+'deg)';

    if ((s % 360) == 0) {
      m=m+6;
      spanMin.style.transform='rotate('+m+'deg)';
      setTimeout(myClock,30)
  }
    else { setTimeout(myClock,100) }

}
