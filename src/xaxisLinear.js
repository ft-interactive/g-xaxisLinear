export default function() {
  


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
