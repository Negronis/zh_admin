(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14666352"],{"171b":function(e,t,i){"use strict";var n=i("c69d"),a=i.n(n);a.a},2503:function(e,t,i){"use strict";i("4160"),i("a15b"),i("d3b7"),i("159b"),i("ddb0");var n=function(e){return{seq:!0,filter:!0,form:!0,sort:!0,props:{result:"data.rows",total:"data.total"},ajax:{query:function(t){var i=t.page,n=t.sort,a=t.filters,r=t.form,l=Object.assign({},r);a.forEach((function(e){e.column;var t=e.property,i=e.values;l[t]=i.join(",")})),console.log(a);var o=0;1!==i.currentPage&&(o=(i.currentPage-1)*i.pageSize);var s=n.property||"",d=n.order||"",c={};for(var u in l)l[u]&&(c[u]=l[u]);var f={};for(var p in l)l[p]&&(f[p]="=");return new Promise((function(t,n){e(o,i.pageSize,c,f,s,d).then((function(e){200===e.status?t(e):n(e)}))}))}}}};t["a"]=n},bf40:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("Button",{ref:"button",staticStyle:{display:"none"},attrs:{id:"btn",type:"primary"},on:{click:e.test}},[e._v("销毁表格")]),e.showTable?i("vxe-grid",{ref:"xGrid",attrs:{border:"",resizable:"","highlight-hover-row":"","import-config":"","export-config":"","show-overflow":"tooltip","show-header-overflow":"tooltip","keep-source":"",height:e.Height-156+"px",align:"center","sort-config":{trigger:"cell"},"filter-config":{remote:!0},"form-config":e.tableForm,"pager-config":e.tablePage,toolbar:e.tableToolbar,"proxy-config":e.tableProxy,columns:e.tableColumn,"checkbox-config":{reserve:!0,highlight:!0,range:!0}},on:{"cell-dblclick":e.cellClickEvent,"page-change":e.thePageChange},scopedSlots:e._u([{key:"tools",fn:function(){return[i("i",{attrs:{title:"普通搜索"}},[i("Icon",{staticStyle:{"margin-top":"3px",cursor:"pointer"},attrs:{type:"ios-search",size:"25"},on:{click:e.showSearch}})],1)]},proxy:!0}],null,!1,2321833426)}):e._e(),i("vxe-modal",{attrs:{"esc-closable":"",width:"99%",title:"基本信息",mask:!1,"lock-view":!1,fullscreen:""},model:{value:e.showDetails,callback:function(t){e.showDetails=t},expression:"showDetails"}},[e.showDetails?i("modal",{attrs:{ParentClass:e.xssf,data:e.detailData}}):e._e()],1)],1)},a=[],r=(i("b64b"),i("d3b7"),i("4ae1"),i("25f0"),i("d4ec")),l=i("bee2"),o=i("262e"),s=i("99de"),d=i("7e84"),c=i("9ab4"),u=i("60a3"),f=i("e368"),p=i("0c23"),h=i("0613"),m=(i("caad"),!0),g=function(e){var t=e.column;return!["nickname","role"].includes(t.property)},b={name:[{required:!0,message:"名称必须填写"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],role:[{required:!0,message:"角色必须填写"}]},v={pageSize:15,pageSizes:[5,15,20,50,100,200,500,1e3]},y={data:{name:"",sex:""},title:"查询",titleWidth:100,titleAlign:"right",items:[{span:8,folding:m,field:"hospital_id",title:"医院id",itemRender:{name:"input",attrs:{placeholder:"请输入医院id"}}},{span:8,folding:m,field:"patientNo",title:"住院号",itemRender:{name:"input",attrs:{placeholder:"请输入住院号"}}},{span:8,folding:m,field:"name",title:"患者姓名",itemRender:{name:"input",attrs:{placeholder:"请输入患者姓名"}}},{span:8,folding:m,field:"gender",title:"性别",itemRender:{name:"input",attrs:{placeholder:"请输入性别"}}},{span:8,folding:m,field:"idnum",title:"身份证",itemRender:{name:"input",attrs:{placeholder:"请输入身份证"}}},{span:8,folding:m,field:"birthday",title:"出生日期",itemRender:{name:"formDate",props:{type:"date",format:"yyyy/MM/dd"}}},{span:8,folding:m,field:"age",title:"年龄",itemRender:{name:"input",attrs:{placeholder:"请输入年龄"}}},{span:8,folding:m,field:"patientTel",title:"电话",itemRender:{name:"input",attrs:{placeholder:"请输入电话"}}},{span:8,folding:m,field:"patientAddress",title:"现住址",itemRender:{name:"input",attrs:{placeholder:"请输入现住址"}}},{span:8,folding:m,field:"relationName",title:"联系人姓名",itemRender:{name:"input",attrs:{placeholder:"请输入联系人姓名"}}},{span:8,folding:m,field:"relationTel",title:"联系人电话",itemRender:{name:"input",attrs:{placeholder:"请输入联系人电话"}}},{span:8,folding:m,field:"contract_status",title:"建档状态",itemRender:{name:"input",attrs:{placeholder:"请输入建档状态"}}},{span:12,align:"right",itemRender:{name:"input",attrs:{type:"submit",value:"查询"}}},{span:12,align:"left",collapseNode:!0,itemRender:{name:"input",attrs:{type:"reset",value:"重置"}}}]},R={id:"full_edit_1",refresh:!0,import:!0,export:!0,zoom:{escRestore:!0},resizable:{storage:!0},custom:{storage:!0,checkMethod:g}},w=[{field:"hospital_id",title:"医院id",minWidth:130,editRender:{name:"input"}},{field:"patientNo",title:"住院号",minWidth:115,editRender:{name:"input"}},{field:"name",title:"患者姓名",minWidth:80,editRender:{name:"input"}},{field:"gender",title:"性别",minWidth:60,editRender:{name:"input"}},{field:"idnum",title:"身份证",minWidth:165,editRender:{name:"input"}},{field:"birthday",title:"出生日期",minWidth:95,editRender:{name:"input"}},{field:"age",title:"年龄",minWidth:60,editRender:{name:"input"}},{field:"patientTel",title:"电话",minWidth:110,editRender:{name:"input"}},{field:"patientAddress",title:"现住址",minWidth:250,editRender:{name:"input"}},{field:"relationName",title:"联系人姓名",minWidth:80,editRender:{name:"input"}},{field:"relationTel",title:"联系人电话",minWidth:110,editRender:{name:"input"}},{field:"contract_status",title:"建档状态",minWidth:80,editRender:{name:"input"}}],k=i("2503"),x=i("e2d6");function j(e){var t=D();return function(){var i,n=Object(d["a"])(e);if(t){var a=Object(d["a"])(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Object(s["a"])(this,i)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var S=function(e){Object(o["a"])(i,e);var t=j(i);function i(){var e;return Object(r["a"])(this,i),e=t.apply(this,arguments),e.modal_title="基本信息",e.showTable=!0,e.tablePage=v,e.tableToolbar=R,e.tableForm={},e.tableProxy=Object(k["a"])(p["e"]),e.tableColumn=w,e.validRules=b,e.xssf="xssf",e.loading=!1,e.curpage=0,e.pagesizes=15,e.curpages=0,e.refreshIswitch=!0,e.showDetails=!1,e.detailData=[],e}return Object(l["a"])(i,[{key:"thePageChange",value:function(e){var t=e.currentPage,i=e.pageSize;this.curpages=0==t?15:(t-1)*i,this.pagesizes=i}},{key:"refreshTable",value:function(){var e=this;f["a"].loading("列表刷新中",9999),Object(p["e"])(this.curpages,this.pagesizes).then((function(t){e.refreshIswitch=!1,f["a"].destory(),e.$refs.xGrid.loadData(t["data"]["rows"]),e.refreshIswitch=!0,f["a"].suc("列表刷新成功",2)})).catch((function(t){e.refreshIswitch=!0,f["a"].error("列表刷新失败，请尝试手动刷新",2)}))}},{key:"test",value:function(){this.refreshTable()}},{key:"changeXinshuai",value:function(e){var t=e.id;f["a"].loading("正在修改,请稍后",9999),t.then((function(e){f["a"].destory(),1===e.data.code?f["a"].suc(e.data.msg+",请等待列表刷新",2,(function(){document.querySelector("#btn").click()})):f["a"].error(e.data.msg+",请等待列表刷新",2,(function(){document.querySelector("#btn").click()}))}))}},{key:"showSearch",value:function(){var e=Object.keys(this.tableForm);0===e.length?this.tableForm=y:this.tableForm={}}},{key:"cellClickEvent",value:function(e){var t=e.row;this.detailData=t,this.showDetails=!0}},{key:"created",value:function(){this.$nextTick((function(){}))}},{key:"Height",get:function(){return h["a"].getters.getHeight}}]),i}(u["c"]);S=c["a"]([Object(u["a"])({components:{modal:x["a"]}})],S);var W=S,_=W,z=(i("171b"),i("2877")),O=Object(z["a"])(_,n,a,!1,null,null,null);t["default"]=O.exports},c69d:function(e,t,i){}}]);