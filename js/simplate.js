
(function(opts) {
  	// useful functions		
		var resizeTimeoutId;	
		function hasClass(el,name){
			return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
		}
		function addClass(el,name){
			if (!hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }	
		}
		function removeClass(el,name){
			el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
		}			
		function windowResize(e) {
			window.clearTimeout(resizeTimeoutId);
			resizeTimeoutId = window.setTimeout(function(){ console.log('Simplate: Layout changed.'); },200);
		}
		function equalsHeights(first,second) {
		  var firstEl = document.getElementById(first);
		  var secondEl = document.getElementById(second);
  		var firstHeight = firstEl.offsetHeight;
  		var secondHeight = secondEl.offsetHeight;
  		firstHeight > secondHeight ? secondEl.style.height = firstHeight + 'px' : firstEl.style.height = secondHeight + 'px';
		}
		function setHeight(parents,el) {
		  var parentEls = document.querySelectorAll('.'+ parents);
		  var parentsLength = parentEls.length;
		  var i = 0;
		  for(i;i<parentsLength;++i) {
  		  var parentHeight = parentEls[i].offsetHeight;
  		  var boxes = parentEls[i].querySelectorAll('.box');
  		  var boxesLength = boxes.length;
  		  var j = 0;
  		  for(j;j<boxesLength;++j) {
    		  boxes[i].style.height = parentHeight + 'px';
  		  }
		  }
		}
		
		var boxes = document.querySelectorAll('.box');
		equalsHeights('content','sidebar');
		
})();