
var hc_data = [ 
{ "name":"Unknown" , "jobs": [
	{
	"name":"create_dir_wrangling_0_local" , "jobS":4 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":4 , "cD":5.0 , "gS":'' , "gD":'' , "eS":9 , "eD":0.0 , "kS":9 , "kD":0.0 , "postS":9 , "postD":5.0 , "state":3 , "transformation": "pegasus::dirmanager"  , "color": "#8dd3c7"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"cleanup_wrangling_0_local" , "jobS":156 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":156 , "cD":5.0 , "gS":'' , "gD":'' , "eS":161 , "eD":0.0 , "kS":161 , "kD":0.0 , "postS":'' , "postD":'' , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''
	},
]}, 
{ "name":"qh-Lenovo-R720-15IKBN" , "jobs": [
	{
	"name":"svn0_ID0000000" , "jobS":19 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":19 , "cD":5.0 , "gS":'' , "gD":'' , "eS":24 , "eD":0.0 , "kS":20 , "kD":2.448 , "postS":24 , "postD":5.0 , "state":3 , "transformation": "svn0"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"filter1_ID0000002" , "jobS":34 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":34 , "cD":5.0 , "gS":'' , "gD":'' , "eS":39 , "eD":0.0 , "kS":34 , "kD":1.766 , "postS":39 , "postD":5.0 , "state":3 , "transformation": "filter1"  , "color": "#bebada"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"stage_out_local_local_0_0" , "jobS":34 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":34 , "cD":5.0 , "gS":'' , "gD":'' , "eS":39 , "eD":0.0 , "kS":34 , "kD":4.076 , "postS":39 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#80b1d3"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"filter1_ID0000001" , "jobS":34 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":34 , "cD":5.0 , "gS":'' , "gD":'' , "eS":39 , "eD":0.0 , "kS":37 , "kD":0.437 , "postS":39 , "postD":5.0 , "state":3 , "transformation": "filter1"  , "color": "#bebada"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"separate2_ID0000004" , "jobS":49 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":49 , "cD":5.0 , "gS":'' , "gD":'' , "eS":54 , "eD":0.0 , "kS":49 , "kD":0.537 , "postS":54 , "postD":5.0 , "state":3 , "transformation": "separate2"  , "color": "#b3de69"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"register_local_0_0" , "jobS":49 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":49 , "cD":5.0 , "gS":'' , "gD":'' , "eS":49 , "eD":5.0 , "kS":49 , "kD":0.451 , "postS":54 , "postD":5.0 , "state":3 , "transformation": "pegasus::rc-client"  , "color": "#fccde5"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"separate2_ID0000003" , "jobS":49 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":49 , "cD":5.0 , "gS":'' , "gD":'' , "eS":54 , "eD":0.0 , "kS":51 , "kD":0.429 , "postS":54 , "postD":5.0 , "state":3 , "transformation": "separate2"  , "color": "#b3de69"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"separate3_ID0000006" , "jobS":64 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":64 , "cD":5.0 , "gS":'' , "gD":'' , "eS":69 , "eD":0.0 , "kS":65 , "kD":0.516 , "postS":69 , "postD":5.0 , "state":3 , "transformation": "separate3"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"separate3_ID0000005" , "jobS":64 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":64 , "cD":5.0 , "gS":'' , "gD":'' , "eS":69 , "eD":0.0 , "kS":67 , "kD":0.468 , "postS":69 , "postD":5.0 , "state":3 , "transformation": "separate3"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"filter4_ID0000008" , "jobS":80 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":80 , "cD":5.0 , "gS":'' , "gD":'' , "eS":85 , "eD":0.0 , "kS":80 , "kD":0.431 , "postS":85 , "postD":5.0 , "state":3 , "transformation": "filter4"  , "color": "#bc80bd"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"filter4_ID0000007" , "jobS":80 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":80 , "cD":5.0 , "gS":'' , "gD":'' , "eS":85 , "eD":0.0 , "kS":82 , "kD":0.469 , "postS":85 , "postD":5.0 , "state":3 , "transformation": "filter4"  , "color": "#bc80bd"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"filter5_ID0000010" , "jobS":95 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":95 , "cD":5.0 , "gS":'' , "gD":'' , "eS":100 , "eD":0.0 , "kS":95 , "kD":0.429 , "postS":100 , "postD":5.0 , "state":3 , "transformation": "filter5"  , "color": "#ccebc5"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"filter5_ID0000009" , "jobS":95 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":95 , "cD":5.0 , "gS":'' , "gD":'' , "eS":100 , "eD":0.0 , "kS":97 , "kD":0.404 , "postS":100 , "postD":5.0 , "state":3 , "transformation": "filter5"  , "color": "#ccebc5"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"union6_ID0000011" , "jobS":110 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":110 , "cD":5.0 , "gS":'' , "gD":'' , "eS":115 , "eD":0.0 , "kS":111 , "kD":0.371 , "postS":115 , "postD":5.0 , "state":3 , "transformation": "union6"  , "color": "#fb8072"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"stage_out_local_local_6_0" , "jobS":126 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":126 , "cD":5.0 , "gS":'' , "gD":'' , "eS":126 , "eD":5.0 , "kS":126 , "kD":2.081 , "postS":131 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#80b1d3"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"mutate_ID0000012" , "jobS":126 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":126 , "cD":5.0 , "gS":'' , "gD":'' , "eS":131 , "eD":0.0 , "kS":126 , "kD":0.461 , "postS":131 , "postD":5.0 , "state":3 , "transformation": "mutate"  , "color": "#8dd3c7"  , "sub_wf":0 , "sub_wf_name":''
	},

	{
	"name":"stage_out_local_local_7_0" , "jobS":141 , "jobD":5.0 , "preS":'' , "preD":'' , "cS":141 , "cD":5.0 , "gS":'' , "gD":'' , "eS":146 , "eD":0.0 , "kS":141 , "kD":2.096 , "postS":146 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#80b1d3"  , "sub_wf":0 , "sub_wf_name":''
	},
]},];