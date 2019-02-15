
var data = [{
"name":"create_dir_wrangling_0_local" , "jobS":4 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":4 , "cD":5.0 , "gS":'' , "gD":'' , "eS":9 , "eD":0.0 , "kS":9 , "kD":0.0 , "postS":9 , "postD":5.0 , "state":3 , "transformation": "pegasus::dirmanager"  , "color": "#8dd3c7"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"svn_ID0000000" , "jobS":20 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":20 , "cD":5.0 , "gS":'' , "gD":'' , "eS":25 , "eD":0.0 , "kS":20 , "kD":1.958 , "postS":25 , "postD":5.0 , "state":3 , "transformation": "svn"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"deselect_ID0000001" , "jobS":35 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":35 , "cD":5.0 , "gS":'' , "gD":'' , "eS":40 , "eD":0.0 , "kS":35 , "kD":1.197 , "postS":40 , "postD":5.0 , "state":3 , "transformation": "deselect"  , "color": "#bebada"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_out_local_local_0_0" , "jobS":35 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":35 , "cD":5.0 , "gS":'' , "gD":'' , "eS":40 , "eD":0.0 , "kS":35 , "kD":2.107 , "postS":40 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#80b1d3"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"filterin_ID0000002" , "jobS":50 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":50 , "cD":5.0 , "gS":'' , "gD":'' , "eS":55 , "eD":0.0 , "kS":51 , "kD":0.492 , "postS":55 , "postD":5.0 , "state":3 , "transformation": "filterin"  , "color": "#b3de69"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"register_local_0_0" , "jobS":50 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":50 , "cD":5.0 , "gS":'' , "gD":'' , "eS":55 , "eD":0.0 , "kS":50 , "kD":0.532 , "postS":55 , "postD":5.0 , "state":3 , "transformation": "pegasus::rc-client"  , "color": "#fccde5"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"separate2_ID0000003" , "jobS":65 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":65 , "cD":5.0 , "gS":'' , "gD":'' , "eS":70 , "eD":0.0 , "kS":66 , "kD":0.509 , "postS":70 , "postD":5.0 , "state":3 , "transformation": "separate2"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"separate3_ID0000004" , "jobS":80 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":80 , "cD":5.0 , "gS":'' , "gD":'' , "eS":85 , "eD":0.0 , "kS":80 , "kD":0.454 , "postS":85 , "postD":5.0 , "state":3 , "transformation": "separate3"  , "color": "#bc80bd"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"defilter_ID0000005" , "jobS":95 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":95 , "cD":5.0 , "gS":'' , "gD":'' , "eS":100 , "eD":0.0 , "kS":96 , "kD":0.479 , "postS":100 , "postD":5.0 , "state":3 , "transformation": "defilter"  , "color": "#ccebc5"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"summarise_ID0000006" , "jobS":110 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":110 , "cD":5.0 , "gS":'' , "gD":'' , "eS":115 , "eD":0.0 , "kS":111 , "kD":0.439 , "postS":115 , "postD":5.0 , "state":3 , "transformation": "summarise"  , "color": "#fb8072"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"filteris_ID0000007" , "jobS":125 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":125 , "cD":5.0 , "gS":'' , "gD":'' , "eS":130 , "eD":0.0 , "kS":125 , "kD":0.402 , "postS":130 , "postD":5.0 , "state":3 , "transformation": "filteris"  , "color": "#8dd3c7"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"summarise2_ID0000008" , "jobS":140 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":140 , "cD":5.0 , "gS":'' , "gD":'' , "eS":145 , "eD":0.0 , "kS":140 , "kD":0.453 , "postS":145 , "postD":5.0 , "state":3 , "transformation": "summarise2"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"line_ID0000009" , "jobS":155 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":155 , "cD":5.0 , "gS":'' , "gD":'' , "eS":160 , "eD":0.0 , "kS":156 , "kD":1.208 , "postS":160 , "postD":5.0 , "state":3 , "transformation": "line"  , "color": "#bebada"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_out_local_local_9_0" , "jobS":170 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":170 , "cD":5.0 , "gS":'' , "gD":'' , "eS":175 , "eD":0.0 , "kS":170 , "kD":2.094 , "postS":175 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#80b1d3"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"cleanup_wrangling_0_local" , "jobS":186 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":186 , "cD":5.0 , "gS":'' , "gD":'' , "eS":191 , "eD":0.0 , "kS":191 , "kD":0.0 , "postS":'' , "postD":'' , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#80b1d3"  , "sub_wf":0 , "sub_wf_name":''},
];