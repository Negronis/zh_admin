  
import PublicPageFuncArray from './PublicPageFunc'; 
import SettingArray from './Setting';
import DataStatistics from './DataStatistics'; 

const RouterHandler = (...args: any[]) => {
   return args.reduce((prev, curr) => prev ? prev.concat(curr) : prev, [])
}
export default RouterHandler(     
   PublicPageFuncArray, 
   SettingArray,
   DataStatistics, 
)
