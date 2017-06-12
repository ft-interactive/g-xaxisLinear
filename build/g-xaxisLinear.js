(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.gAxis = global.gAxis || {})));
}(this, function (exports) { 'use strict';

	function xaxisLinear() {
	  


	  let labelWidth = 0;
		  function axis(parent) {

		  }
	  
		  axis.labelWidth = (d)=>{
		        if(d===undefined) return labelWidth
		        labelWidth=d;
		        return axis;
		  }

	  return axis
	};

	exports.xaxisLinear = xaxisLinear;

	Object.defineProperty(exports, '__esModule', { value: true });

}));