define("mvc/visualization/chart/utilities/jobs",["exports","underscore","utils/utils"],function(e,t,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t}(t),i=function(e){return e&&e.__esModule?e:{default:e}}(s),o=function e(t,s,a){i.default.request({type:"GET",url:Galaxy.root+"api/datasets/"+t.get("dataset_id_job"),data:{},success:function(i){var o=!1;switch(i.state){case"ok":t.state("wait","Job completed successfully..."),s&&s(i),o=!0;break;case"error":t.state("failed","Job has failed. Please check the history for details."),a&&a(i),o=!0;break;case"running":t.state("wait","Your job is running in the background and you may close the browser tab. Results will be available in your saved visualizations list.")}o||window.setTimeout(function(){e(t,s,a)},1e3)}})},u=function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.refreshContents()};e.default={request:function(e,t,s,a){e.state("wait","Requesting job results..."),e.get("modified")&&e.get("dataset_id_job")&&(i.default.request({type:"PUT",url:Galaxy.root+"api/histories/none/contents/"+e.get("dataset_id_job"),data:{deleted:!0},success:function(){u()}}),e.set("dataset_id_job",null),e.set("modified",!1)),e.get("dataset_id_job")?o(e,s,a):(e.state("wait","Sending job request..."),i.default.request({type:"POST",url:Galaxy.root+"api/tools",data:t,success:function(t){if(t.outputs&&0!==t.outputs.length){u();var i=t.outputs[0];e.state("wait","Your job has been queued. You may close the browser window. The job will run in the background."),e.set("dataset_id_job",i.id),e.save(),o(e,s,a)}else e.state("failed","Job submission failed. No response."),a&&a()},error:function(s){var i="";s&&s.message&&s.message.data&&s.message.data.input&&(i=s.message.data.input+"."),e.state("failed","This visualization requires the '"+t.tool_id+"' tool. Please make sure it is installed. "+i),a&&a()}}))},requestCharts:function(e,t){var s="",i="",o=0;for(var u in e.settings.attributes){var n=e.settings.get(u);a.each([[" ","&#32;"],[",","&#44;"],[":","&#58;"]],function(e){n=n.replace(new RegExp(e[0],"g"),e[1])}),s+=u+":"+n+", "}return s=s.substring(0,s.length-2),e.groups.each(function(e){o++,a.each(e.get("__data_columns"),function(t,s){i+=s+"_"+o+":"+(parseInt(e.get(s))+1)+", "})}),i=i.substring(0,i.length-2),{tool_id:"toolshed.g2.bx.psu.edu/repos/iuc/charts/charts/1.0.1",inputs:{input:{id:e.get("dataset_id"),src:"hda"},module:t,columns:i,settings:s}}}}});
//# sourceMappingURL=../../../../../maps/mvc/visualization/chart/utilities/jobs.js.map
