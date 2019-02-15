
function barvisibility(d , index){
if(!d){
 return false;
}
var yPos = index * bar_spacing;
if(yPos < curY || yPos > curEndY ){
return false;
}else{
return true;
}
}

function openWF(url){
if(isNewWindow){
window.open(url);
}else{
self.location = url;
}
}

function printJobDetails(d){
var job_details = "Job name :"+d.name;
if(d.preD !==''){
job_details +="\nPre script duration :"+d.preD +" sec.";
}
if(d.gD !==''){
job_details +="\nResource delay :"+d.gD +" sec.";
}
if(d.eD !==''){
job_details +="\nRuntime as seen by dagman :"+d.eD +" sec.";
}
if(d.kD!==''){
job_details +="\nKickstart duration :"+d.kD +" sec.";
}
if(d.postD!==''){
job_details +="\nPost script duration :"+d.postD +" sec.";
}
job_details +="\nMain task :"+d.transformation ;
alert(job_details);
}

function getJobBorder(d){
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

function getJobTime(d) {
var jobWidth = 0;
if(d.jobD){
jobWidth = xScale(d.jobS + d.jobD) -xScale(d.jobS);
}
if(jobWidth > 0 && jobWidth < 1 ){
	jobWidth = 1;
}
return jobWidth;
}

function getPreTime(d) {
var preWidth = 0; 
if(d.preD){
preWidth = xScale(d.preS + d.preD) -xScale(d.preS);
}
if(preWidth > 0 && preWidth < 1 ){
	preWidth = 1;
}
return preWidth;
}

function getCondorTime(d) {
var cDWidth = 0;
if(d.cD){
cDWidth = xScale(d.cS + d.cD) - xScale(d.cS)
}
if(cDWidth > 0 && cDWidth < 1 ){
cDWidth = 1;
}
return cDWidth;
}

function getResourceDelay(d) {
var gWidth = 0;
if(d.gS){
gWidth = xScale(d.gS + d.gD) - xScale(d.gS);
}
if(gWidth > 0 && gWidth < 1 ){
	gWidth = 1;
}
return gWidth;
}

function getRunTime(d) {
var rtWidth = 0;
if(d.eD){
rtWidth = xScale(d.eS + d.eD) -xScale(d.eS);
}
if(rtWidth > 0 && rtWidth < 1 ){
	rtWidth = 1;
}
return rtWidth;
}

function getKickStartTime(d) {
var kickWidth = 0;
if(d.kD){
kickWidth = xScale(d.kS + d.kD) -xScale(d.kS);
}
if(kickWidth > 0 && kickWidth < 1 ){
	kickWidth = 1;
}
return kickWidth;
}

function getPostTime(d) {
var postWidth = 0;
if(d.postD){
postWidth = xScale(d.postS + d.postD) -xScale(d.postS);
}
if(postWidth > 0 && postWidth < 1 ){
	postWidth = 1;
}
return postWidth;
}

function showState(){
if(condorTime || kickstart || condorRuntime || resourceDelay || preScript || postScript){
return true;
}else{
return false;
}
}

function setCondorTime(){
if(condorTime){
condorTime = false;
}else{
condorTime = true;
}
rootPanel.render();
}

function setKickstart(){
if(kickstart){
kickstart = false;
}else{
kickstart = true;
}
rootPanel.render();
}

function setCondorRuntime(){
if(condorRuntime){
condorRuntime = false;
}else{
condorRuntime = true;
}
rootPanel.render();
}

function setResourceDelay(){
if(resourceDelay){
resourceDelay = false;
}else{
resourceDelay = true;
}
rootPanel.render();
}

function setPreScript(){
if(preScript){
preScript = false;
}else{
preScript = true;
}
rootPanel.render();
}

function setPostScript(){
if(postScript){
postScript = false;
}else{
postScript = true;
}
rootPanel.render();
}

function setShowLabel(){
if(showName){
	return 'Hide job name';
}else{
	return 'Show job name';
}
}

function setShowName(){
if(showName){
	showName = false;
}else{
	showName = true;
}
rootPanel.render();
return;
}

function fadeRight(){
if(curX == 0){
	return "images/right-fade.png"
}
return "images/right.png"
}

function fadeDown(){
if(curY == 0){
	return "images/down-fade.png"
}
return "images/down.png"
}

function panLeft(){
var panBy = (curEndX -curX)/panXFactor;
curX +=panBy;
curEndX +=panBy;
xScale.domain(curX ,curEndX );
rootPanel.render();
headerPanel.render();
}

function panRight(){
var panBy = (curEndX -curX)/panXFactor;
if(curX > 0){
curX -=panBy;
curEndX -=panBy;
if(curX <= 0){
curEndX += (curX + panBy)
curX = 0;
}
xScale.domain(curX ,curEndX );
rootPanel.render();
headerPanel.render();
}
}

function panUp(){
var panBy = (curEndY -curY)/panYFactor;
curY +=panBy;
curEndY += panBy;
yScale.domain(curY ,curEndY);
rootPanel.render();
headerPanel.render();
}

function panDown(){
var panBy = (curEndY -curY)/panYFactor;
if(curY > 0){
curY -= panBy;
curEndY -= panBy;
if(curY< 0){
curEndY += (curY + panBy);
curY = 0;
}
yScale.domain(curY ,curEndY );
rootPanel.render();
headerPanel.render();
}
}

function zoomOut(){
var newX = 0;
var newY = 0;

newX = curEndX  + curEndX*0.1;
newY = curEndY  + curEndY*0.1;

if(curX < newX && isFinite(newX)){
curEndX = newX;
xScale.domain(curX, curEndX);
}
if(curY < newY && isFinite(newY)){
curEndY = newY;
yScale.domain(curY, curEndY);
}
rootPanel.render();
}

function zoomIn(){
var newX = 0;
var newY = 0;
newX = curEndX  - curEndX*0.1;
newY = curEndY  - curEndY*0.1;
if(curX < newX && isFinite(newX)){
curEndX = newX;
xScale.domain(curX, curEndX);
}
if(curY < newY && isFinite(newY)){
curEndY = newY;
yScale.domain(curY, curEndY);
}
rootPanel.render();
}

function resetZooming(){
curX  = 0;
curY = 0;
curEndX  = initMaxX;
curEndY =  initMaxY;
xScale.domain(curX, curEndX);
yScale.domain(curY, curEndY);
rootPanel.render();
headerPanel.render();
}

