
function printTransformationDetails(d){
	var transformation_details = "name : "+d.name ;
	transformation_details +=  "\nTotal count : "+ d.count ;
	transformation_details +=  "\nSucceeded count : "+ d.success ;
	transformation_details +=  "\nFailed count : "+d.failure ;
	transformation_details +=  "\nMin Runtime : "+d.min ;
	transformation_details +=  "\nMax Runtime : "+d.max ;
	transformation_details +=  "\nAvg Runtime : "+d.avg ;
	transformation_details +=  "\nTotal Runtime : "+d.total ;
	alert(transformation_details);
}

function setBreakdownBy(isBreakdown){
	
	breakdownByCount= isBreakdown;
	loadBCGraph();
}


function setBCChartTitle(){
	if(breakdownByCount){
		return "Invocation breakdown by count grouped by transformation name";
	}else{
		return "Invocation breakdown by runtime grouped by transformation name";
	}
	
}

function loadBCGraph(){
	
	bc_headerPanel.render();
	bc_chartPanel.render();
	bc_chartPanel.def("o", -1); 
}


function getOuterAngle(d){
	if(breakdownByCount){
		return d.count/ bc_total_count * 2 * Math.PI;
	}
	else{
		return d.total/ bc_total_runtime * 2 * Math.PI;
	}
}

function getInnerRadius(d){
	if(d.failure < 0){
			return 0;
	}
	
	if(breakdownByCount){
		return bc_radius*(d.failure/d.count);
	}
	else{
 		// Changed to fix JIRA issue PM-566
		return bc_radius*(d.failure/d.count);
		// return bc_radius*d.total*(d.failure/d.count);
	}
}



