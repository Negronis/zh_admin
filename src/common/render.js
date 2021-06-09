import VXETable from 'vxe-table';
/** 
 * @params如果想在高级表格各种地方添加自己的自定义组件则需要
 * @params自定义渲染器
 * @param调用add方法设置名字和JSX
 * @param然后去高级函数的对象中修改渲染的xxxRander的name值即可渲染
 * @param iview组件绑定方法要使用onON-xxx={}这种语法
*/


VXETable.renderer.add('ToolbarButtonRefresh', {
   renderButton (h, renderOpts, params, context ) {
     const { events } = renderOpts
     const { button } = params
     return [
       <vxe-button onClick={ e => { events.click(button) } }>批量上传</vxe-button>
     ]
   }
 })

// 创建一个表单-输入框渲染器  --JSX语法

/** 
 * @param renderOpts是传过来的props 在标签中直接 {...{props}}即可遍历打开所有属性 自定义配置
 * @param 
*/
VXETable.renderer.add('formDate', {
  // 项显示模板 
  renderItem (h, renderOpts, params) { 
    let data  = params['data'];
    let property = params['property'];
    function changeDate(time){ 
      data[property] = time;
    }
    return [ 
      <DatePicker  format="yyyy-MM-dd"  onOn-change={changeDate}   type="date" placeholder="请选择时间" style="width: 100%"></DatePicker>
    ]
  }
})
