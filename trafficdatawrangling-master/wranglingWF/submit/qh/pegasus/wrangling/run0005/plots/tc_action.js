
	
function tc_fadeRight(){
	if(tc_curX == 0){
		return "images/right-fade.png"
	}
	return "images/right.png"
}

function tc_fadeDown(){
	if(tc_curRuntimeY == 0){
		return "images/down-fade.png"
	}
	return "images/down.png"
}

function tc_panLeft(){
	var tc_panBy = (tc_curEndX -tc_curX)/tc_panXFactor;
	tc_curX +=tc_panBy;
	tc_curEndX +=tc_panBy;
	tc_xScale.domain(tc_curX ,tc_curEndX );
	tc_rootPanel.render();
	tc_headerPanel.render();
}

function tc_panRight(){
	var tc_panBy = (tc_curEndX -tc_curX)/tc_panXFactor;
	if(tc_curX > 0){
		tc_curX -=tc_panBy;
		tc_curEndX -=tc_panBy;
		if(tc_curX <= 0){
		tc_curEndX += (tc_curX + tc_panBy)
		tc_curX = 0;
	}
	tc_xScale.domain(tc_curX ,tc_curEndX );
	tc_rootPanel.render();
	tc_headerPanel.render();
	}
}

function tc_panUp(){
	var tc_panRuntimeBy = (tc_curRuntimeEndY -tc_curRuntimeY)/tc_panYFactor;
	var tc_panCountBy = (tc_curCountEndY -tc_curCountY)/tc_panYFactor;
	tc_curRuntimeY +=tc_panRuntimeBy;
	tc_curRuntimeEndY += tc_panRuntimeBy;
	tc_curCountY+=tc_panCountBy;
	tc_curCountEndY += tc_panCountBy;
	tc_yRuntimeScale.domain(tc_curRuntimeY ,tc_curRuntimeEndY);
	tc_yCountScale.domain(tc_curCountY, tc_curCountEndY);
	tc_rootPanel.render();
	tc_headerPanel.render();
}

function tc_panDown(){
	var tc_panRuntimeBy = (tc_curRuntimeEndY -tc_curRuntimeY)/tc_panYFactor;
	var tc_panCountBy = (tc_curCountEndY -tc_curCountY)/tc_panYFactor;
	if(tc_curRuntimeY > 0){
		
		tc_curRuntimeY -= tc_panRuntimeBy;
		tc_curRuntimeEndY -= tc_panRuntimeBy;
		if(tc_curRuntimeY< 0){
			tc_curRuntimeEndY += (tc_curRuntimeY + panRuntimeBy);
			tc_curRuntimeY = 0;
		}
		tc_yRuntimeScale.domain(tc_curRuntimeY ,tc_curRuntimeEndY );
		
		tc_curCountY -= tc_panCountBy;
		tc_curCountEndY -= tc_panCountBy;
		if(tc_curCountY <0){
			tc_curCountEndY += (tc_curCountY+tc_panCountBy);
			tc_curCountY = 0;
		}
		tc_yCountScale.domain(tc_curCountY, tc_curCountEndY);
		tc_rootPanel.render();
		tc_headerPanel.render();
	}
}

function tc_zoomOut(){
	var tc_newX = 0;
	var tc_newRuntimeY = 0;
	var tc_newCountY = 0;
	
	tc_newX = tc_curEndX  + tc_curEndX*0.1;
	tc_newRuntimeY = tc_curRuntimeEndY  + tc_curRuntimeEndY*0.1;
	tc_newCountY = tc_curCountEndY+tc_curCountEndY*0.1; 
	if(tc_curX < tc_newX && isFinite(tc_newX)){
		tc_curEndX = tc_newX;
		tc_xScale.domain(tc_curX, tc_curEndX);
	}
	if(tc_curRuntimeY < tc_newRuntimeY && isFinite(tc_newRuntimeY)){
		tc_curRuntimeEndY = tc_newRuntimeY;
		tc_yRuntimeScale.domain(tc_curRuntimeY, tc_curRuntimeEndY);
	}
	if(tc_curCountY < tc_newCountY && isFinite(tc_newCountY)){
		tc_curCountEndY = tc_newCountY;
		tc_yCountScale.domain(tc_curCountY, tc_curCountEndY);
	}
	tc_rootPanel.render();
}

function tc_zoomIn(){
	var tc_newX = 0;
	var tc_newRuntimeY = 0;
	var tc_newCountY =0;
	tc_newX = tc_curEndX  - tc_curEndX*0.1;
	tc_newRuntimeY = tc_curRuntimeEndY  - tc_curRuntimeEndY*0.1;
	tc_newCountY = tc_curCountEndY - tc_curCountEndY*0.1; 
	if(tc_curX < tc_newX && isFinite(tc_newX)){
		tc_curEndX = tc_newX;
		tc_xScale.domain(tc_curX, tc_curEndX);
	}
	if(tc_curRuntimeY < tc_newRuntimeY && isFinite(tc_newRuntimeY)){
		tc_curRuntimeEndY =tc_newRuntimeY;
		tc_yRuntimeScale.domain(tc_curRuntimeY, tc_curRuntimeEndY);
	}
	if(tc_curCountY < tc_newCountY && isFinite(tc_newCountY)){
		tc_curCountEndY = tc_newCountY;
		tc_yCountScale.domain(tc_curCountY, tc_curCountEndY);
	}
	tc_rootPanel.render();
}

function tc_resetZooming(){
	tc_curX  = 0;
	tc_curEndX  = tc_dateTimeCount*tc_bar_spacing;
	tc_curRuntimeY = 0;
	tc_curRuntimeEndY =  tc_maxRuntime;
	tc_curCountY = 0;
	tc_curCountEndY =  tc_maxCount;
	tc_xScale.domain(tc_curX, tc_curEndX);
	tc_yCountScale.domain(tc_curCountY,tc_curCountEndY);
	tc_yRuntimeScale.domain(tc_curRuntimeY, tc_curRuntimeEndY);
	tc_rootPanel.render();
	tc_headerPanel.render();
}

function tc_setType(isJobSet){
	tc_isJob= isJobSet;
	tc_loadGraph();
}

function tc_setTime(isHourSet){
	tc_isHour = isHourSet;
	tc_loadGraph();
}

function tc_setChartTitle(){
	if(tc_isJob){
		if(tc_isHour){
			return "Job count/runtime grouped by hour";
		}else{
			return "Job count/runtime grouped by day";
		}
	}else{
		if(tc_isHour){
			return "Invocation count/runtime grouped by hour";
		}else{
			return "Invocation count/runtime grouped by day";
		}
	}
}

function tc_getMetaData(){
	if(tc_isJob){
		if(tc_isHour){
			return job_metadata_per_hour;
		}else{
			return job_metadata_per_day;
		}
	}else{
		if(tc_isHour){
			return invoc_metadata_per_hour;
		}else{
			return invoc_metadata_per_day;
		}
	}
		
}

function tc_getContentData(){
	if(tc_isJob){
		if(tc_isHour){
			return data_job_per_hour;
		}else{
			return data_job_per_day;
		}
	}else{
		if(tc_isHour){
			return data_invoc_per_hour;
		}else{
			return data_invoc_per_day;
		}
	}
}

function tc_loadGraph(){
	
	tc_metadata = tc_getMetaData();
	tc_dateTimeCount =tc_metadata[0].num;
	tc_maxCount = tc_metadata[0].max_count;
	tc_maxRuntime =tc_metadata[0].max_runtime;
	tc_maxRuntime +=  tc_maxRuntime/10;
	tc_maxCount += tc_maxCount/10;
	tc_resetZooming();
}

function tc_getData(){
	return tc_getContentData();
}


