(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1237"],{4588:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Button",{ref:"button",staticStyle:{display:"none"},attrs:{id:"btn",type:"primary"},on:{click:e.test}},[e._v("销毁表格")]),e.showTable?i("vxe-grid",{ref:"xGrid",attrs:{border:"",resizable:"","highlight-hover-row":"","import-config":"","export-config":"","show-overflow":"tooltip","show-header-overflow":"tooltip","keep-source":"",height:e.Height-156+"px",align:"center","sort-config":{trigger:"cell"},"filter-config":{remote:!0},"form-config":e.tableForm,"pager-config":e.tablePage,toolbar:e.tableToolbar,"proxy-config":e.tableProxy,columns:e.tableColumn,"checkbox-config":{reserve:!0,highlight:!0,range:!0,showHeader:!1}},on:{"cell-dblclick":e.cellClickEvent,"page-change":e.thePageChange},scopedSlots:e._u([{key:"tools",fn:function(){return[i("i",{attrs:{title:"普通搜索"}},[i("Icon",{staticStyle:{"margin-top":"3px",cursor:"pointer"},attrs:{type:"ios-search",size:"25"},on:{click:e.showSearch}})],1)]},proxy:!0},{key:"handle",fn:function(t){var a=t.row;return[i("Button",{attrs:{type:"primary"},on:{click:function(t){return e.cellClickEvent(a)}}},[e._v("导出")])]}}],null,!1,2516248766)}):e._e(),i("vxe-modal",{attrs:{"esc-closable":"",title:"查看详情",width:"600",mask:!1,"lock-view":!1,resize:""},model:{value:e.showDetails,callback:function(t){e.showDetails=t},expression:"showDetails"}},[i("vxe-table",{attrs:{border:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",height:"auto","show-header":!1,"sync-resize":e.showDetails,data:e.detailData}},[i("vxe-table-column",{attrs:{field:"label",width:"40%"}}),i("vxe-table-column",{attrs:{field:"value"}})],1)],1)],1)},n=[],r=(i("4160"),i("a15b"),i("b64b"),i("d3b7"),i("4ae1"),i("25f0"),i("159b"),i("d4ec")),l=i("bee2"),o=i("262e"),c=i("99de"),s=i("7e84"),d=i("9ab4"),u=i("60a3"),h=i("e368"),f=i("525a"),p=i("0613"),m=i("beef"),g=(i("caad"),!0),b={},v={pageSize:15,pageSizes:[5,15,20,50,100,200,500,1e3]},y={data:{name:"",sex:""},title:"查询",titleWidth:100,titleAlign:"right",items:[{span:8,folding:g,field:"hospital_id",title:"医院id",itemRender:{name:"input",attrs:{placeholder:"请输入医院id"}}},{span:8,folding:g,field:"patientNo",title:"住院号",itemRender:{name:"input",attrs:{placeholder:"请输入住院号"}}},{span:8,folding:g,field:"name",title:"患者姓名",itemRender:{name:"input",attrs:{placeholder:"请输入患者姓名"}}},{span:8,folding:g,field:"gender",title:"性别",itemRender:{name:"input",attrs:{placeholder:"请输入性别"}}},{span:8,folding:g,field:"idnum",title:"身份证",itemRender:{name:"input",attrs:{placeholder:"请输入身份证"}}},{span:8,folding:g,field:"birthday",title:"出生日期",itemRender:{name:"formDate",props:{type:"date",format:"yyyy/MM/dd"}}},{span:8,folding:g,field:"age",title:"年龄",itemRender:{name:"input",attrs:{placeholder:"请输入年龄"}}},{span:8,folding:g,field:"patientTel",title:"电话",itemRender:{name:"input",attrs:{placeholder:"请输入电话"}}},{span:8,folding:g,field:"patientAddress",title:"现住址",itemRender:{name:"input",attrs:{placeholder:"请输入现住址"}}},{span:8,folding:g,field:"relationName",title:"联系人姓名",itemRender:{name:"input",attrs:{placeholder:"请输入联系人姓名"}}},{span:8,folding:g,field:"relationTel",title:"联系人电话",itemRender:{name:"input",attrs:{placeholder:"请输入联系人电话"}}},{span:8,folding:g,field:"contract_status",title:"建档状态",itemRender:{name:"input",attrs:{placeholder:"请输入建档状态"}}},{span:12,align:"right",itemRender:{name:"input",attrs:{type:"submit",value:"查询"}}},{span:12,align:"left",collapseNode:!0,itemRender:{name:"input",attrs:{type:"reset",value:"重置"}}}]},w=i("c8be");function k(e){var t=x();return function(){var i,a=Object(s["a"])(e);if(t){var n=Object(s["a"])(this).constructor;i=Reflect.construct(a,arguments,n)}else i=a.apply(this,arguments);return Object(c["a"])(this,i)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var R=function(e){Object(o["a"])(i,e);var t=k(i);function i(){var e;return Object(r["a"])(this,i),e=t.apply(this,arguments),e.showTable=!0,e.tablePage=v,e.tableToolbar={buttons:[{name:"批量上传",code:"mark_cancel",buttonRender:{name:"ToolbarButtonRefresh",events:{click:e.btnClickEvent}}}],id:"full_edit_1",refresh:!0,import:!0,export:!0,zoom:!0,resizable:{storage:!0},custom:{storage:!0}},e.tableForm={},e.tableProxy=Object(w["a"])(f["b"]),e.tableColumn=[{type:"checkbox",minWidth:60},{field:"patientNo",title:"住院号",minWidth:115,editRender:{name:"input"}},{field:"name",title:"患者姓名",minWidth:80,editRender:{name:"input"}},{field:"follow_order_text",title:"随访表序列",minWidth:80,editRender:{name:"input"}},{field:"status_text",title:"随访状态",minWidth:80,editRender:{name:"input"}},{field:"plantime_text",title:"计划填表时间",minWidth:80,editRender:{name:"input"}},{field:"func_btns",title:"操作",minWidth:155,slots:{default:"handle"}}],e.validRules=b,e.loading=!1,e.curpage=0,e.pagesizes=15,e.curpages=0,e.refreshIswitch=!0,e.showDetails=!1,e.detailData=[],e}return Object(l["a"])(i,[{key:"thePageChange",value:function(e){var t=e.currentPage,i=e.pageSize;this.curpages=0==t?15:(t-1)*i,this.pagesizes=i}},{key:"refreshTable",value:function(){var e=this;h["a"].loading("列表刷新中",9999),Object(f["b"])(this.curpages,this.pagesizes).then((function(t){e.refreshIswitch=!1,h["a"].destory(),e.$refs.xGrid.loadData(t["data"]["rows"]),e.refreshIswitch=!0,h["a"].suc("列表刷新成功",2)})).catch((function(t){e.refreshIswitch=!0,h["a"].error("列表刷新失败，请尝试手动刷新",2)}))}},{key:"test",value:function(){this.refreshTable()}},{key:"changeXinshuai",value:function(e){var t=e.id;h["a"].loading("正在修改,请稍后",9999),t.then((function(e){h["a"].destory(),1===e.data.code?h["a"].suc(e.data.msg+",请等待列表刷新",2,(function(){document.querySelector("#btn").click()})):h["a"].error(e.data.msg+",请等待列表刷新",2,(function(){document.querySelector("#btn").click()}))}))}},{key:"showSearch",value:function(){var e=Object.keys(this.tableForm);0===e.length?this.tableForm=y:this.tableForm={}}},{key:"cellClickEvent",value:function(e){var t=e.follow_hf_id,i=document.createElement("a"),a="pdf";i.href=m["a"]+"/centerstatic/getExportList?follow_hf_id="+t,i.setAttribute("download",a),document.body.appendChild(i),i.click()}},{key:"init",value:function(){}},{key:"btnClickEvent",value:function(){h["a"].throttle(this.batch_upload,200)()}},{key:"batch_upload",value:function(){h["a"].loading("正在导出请等待下载弹框.....",3),this.init();var e=[],t=this.$refs.xGrid.getCheckboxRecords();if(0!==t.length)if(t.length>4)h["a"].error("批量导出数量不能超过4个",2);else if(t.forEach((function(t){var i=t.id;t.upload;e.push(i)})),0!==e.length){var i=[];t.forEach((function(e){var t=e.follow_hf_id;i.push(t)})),location.href=m["a"]+"/centerstatic/getExportList?follow_hf_id="+i.join(",")}else h["a"].error("请选择要导出的表",2);else h["a"].error("请选择要导出的表",2)}},{key:"download",value:function(e,t){var i=document.createElement("a"),a=document.createEvent("MouseEvents");a.initEvent("click",!1,!1),i.href=t,i.download=e,i.dispatchEvent(a)}},{key:"Height",get:function(){return p["a"].getters.getHeight}}]),i}(u["c"]);R=d["a"]([Object(u["a"])({components:{}})],R);var _=R,E=_,z=i("2877"),j=Object(z["a"])(E,a,n,!1,null,null,null);t["default"]=j.exports}}]);