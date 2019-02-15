
function hc_barvisibility(d , index){
if(!d){
 return false;
}
var yPos = index * hc_bar_spacing;
if(yPos < hc_curY || yPos > hc_curEndY ){
return false;
}else{
return true;
}
}

function hc_openWF(url){
if(hc_isNewWindow){
window.open(url);
}else{
self.location = url;
}
}

function hc_printJobDetails(d){
var job_details = "Job name :"+d.name;
if(d.gD !==''){
job_details +="\nResource delay :"+d.gD +" sec.";
}
if(d.eD !==''){
job_details +="\nRuntime as seen by dagman :"+d.eD +" sec.";
}
if(d.kD!==''){
job_details +="\nKickstart duration :"+d.kD +" sec.";
}
job_details +="\nMain task :"+d.transformation ;
alert(job_details);
}

function hc_getJobBorder(d){
if(!d.state){
return 'red';
}
else if(d.sub_wf){
return 'orange';
}
if(d.transformation){
return d.color;
}else{
return 'gray';
}
}

function hc_getJobTime(d) {
var jobWidth = 0;
if(d.jobD){
jobWidth = hc_xScale(d.jobS + d.jobD) -hc_xScale(d.jobS);
}
if(jobWidth > 0 && jobWidth < 1 ){
	jobWidth = 1;
}
return jobWidth;
}

function hc_getCondorTime(d) {
var cDWidth = 0;
if(d.cD){
cDWidth = hc_xScale(d.cS + d.cD) - hc_xScale(d.cS)
}
if(cDWidth > 0 && cDWidth < 1 ){
cDWidth = 1;
}
return cDWidth;
}

function hc_getResourceDelay(d) {
var gWidth = 0;
if(d.gS){
gWidth = hc_xScale(d.gS + d.gD) - hc_xScale(d.gS);
}
if(gWidth > 0 && gWidth < 1 ){
	gWidth = 1;
}
return gWidth;
}

function hc_getRunTime(d) {
var rtWidth = 0;
if(d.eD){
rtWidth = hc_xScale(d.eS + d.eD) -hc_xScale(d.eS);
}
if(rtWidth > 0 && rtWidth < 1 ){
	rtWidth = 1;
}
return rtWidth;
}

function hc_getKickStartTime(d) {
var kickWidth = 0;
if(d.kD){
kickWidth = hc_xScale(d.kS + d.kD) -hc_xScale(d.kS);
}
if(kickWidth > 0 && kickWidth < 1 ){
	kickWidth = 1;
}
return kickWidth;
}

function hc_showState(){
if(hc_condorTime || hc_kickstart || hc_condorRunTime || hc_resourceDelay){
return true;
}else{
return false;
}
}

function hc_setCondorTime(){
if(hc_condorTime){
hc_condorTime = false;
}else{
hc_condorTime = true;
}
hc_rootPanel.render();
}

function hc_setKickstart(){
if(hc_kickstart){
hc_kickstart = false;
}else{
hc_kickstart = true;
}
hc_rootPanel.render();
}

function hc_setCondorRuntime(){
if(hc_condorRunTime){
hc_condorRunTime = false;
}else{
hc_condorRunTime = true;
}
hc_rootPanel.render();
}

function hc_setResourceDelay(){
if(hc_resourceDelay){
hc_resourceDelay = false;
}else{
hc_resourceDelay = true;
}
hc_rootPanel.render();
}

function hc_setShowLabel(){
if(hc_showName){
	return 'Hide host name';
}else{
	return 'Show host name';
}
}

function hc_setShowName(){
if(hc_showName){
	hc_showName = false;
}else{
	hc_showName = true;
}
hc_rootPanel.render();
return;
}

function hc_fadeRight(){
if(hc_curX == 0){
	return "images/right-fade.png"
}
return "images/right.png"
}

function hc_fadeDown(){
if(hc_curY == 0){
	return "images/down-fade.png"
}
return "images/down.png"
}

function hc_panLeft(){
var panBy = (hc_curEndX -hc_curX)/hc_panXFactor;
hc_curX +=panBy;
hc_curEndX +=panBy;
hc_xScale.domain(hc_curX ,hc_curEndX );
hc_rootPanel.render();
hc_headerPanel.render();
}

function hc_panRight(){
var panBy = (hc_curEndX -hc_curX)/hc_panXFactor;
if(hc_curX > 0){
hc_curX -=panBy;
hc_curEndX -=panBy;
if(hc_curX <= 0){
hc_curEndX += (hc_curX + panBy)
hc_curX = 0;
}
hc_xScale.domain(hc_curX ,hc_curEndX );
hc_rootPanel.render();
hc_headerPanel.render();
}
}

function hc_panUp(){
var panBy = (hc_curEndY -hc_curY)/hc_panYFactor;
hc_curY +=panBy;
hc_curEndY += panBy;
hc_yScale.domain(hc_curY ,hc_curEndY);
hc_rootPanel.render();
hc_headerPanel.render();
}

function hc_panDown(){
var panBy = (hc_curEndY -hc_curY)/hc_panYFactor;
if(hc_curY > 0){
hc_curY -= panBy;
hc_curEndY -= panBy;
if(hc_curY< 0){
hc_curEndY += (hc_curY + panBy);
hc_curY = 0;
}
hc_yScale.domain(hc_curY ,hc_curEndY );
hc_rootPanel.render();
hc_headerPanel.render();
}
}

function hc_zoomOut(){
var newX = 0;
var newY = 0;

newX = hc_curEndX  + hc_curEndX*0.1;
newY = hc_curEndY  + hc_curEndY*0.1;

if(hc_curX < newX && isFinite(newX)){
hc_curEndX = newX;
hc_xScale.domain(hc_curX, hc_curEndX);
}
if(hc_curY < newY && isFinite(newY)){
hc_curEndY = newY;
hc_yScale.domain(hc_curY, hc_curEndY);
}
hc_rootPanel.render();
}

function hc_zoomIn(){
var newX = 0;
var newY = 0;
newX = hc_curEndX  - hc_curEndX*0.1;
newY = hc_curEndY  - hc_curEndY*0.1;
if(hc_curX < newX && isFinite(newX)){
hc_curEndX = newX;
hc_xScale.domain(hc_curX, hc_curEndX);
}
if(hc_curY < newY && isFinite(newY)){
hc_curEndY = newY;
hc_yScale.domain(hc_curY, hc_curEndY);
}
hc_rootPanel.render();
}

function hc_resetZomming(){
hc_curX  = 0;
hc_curY = 0;
hc_curEndX  = hc_initMaxX;
hc_curEndY =  hc_initMaxY;
hc_xScale.domain(hc_curX, hc_curEndX);
hc_yScale.domain(hc_curY, hc_curEndY);
hc_rootPanel.render();
hc_headerPanel.render();
}

