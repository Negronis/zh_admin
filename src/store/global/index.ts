interface StateValue {
   ispc?: boolean;
   userInfo?: object;
   token?: string;
   access?: string; //admin -- 集团 user -- 个人
   height?: number;
   width?:number;
   crumb?: [];
   isSession?: boolean;
   allClose?: boolean;
   isCollapsible?: boolean;
   frameStyle?:any;
}
export default {
   state: {
      ispc: true,
      userInfo: {},
      token: '',
      access: '',
      height: 0,
      width:window.innerWidth,
      crumb: [],
      isSession: false,
      allClose:false,
      isCollapsible:false,
      /**
       * 
       * {
       * background:"",
       * color:""
       * }
       * 
       */
      frameStyle:
      localStorage.getItem('style') != undefined ? 
      JSON.parse(localStorage.getItem('style') as string) :
      {
         background:'#15A185',
         color:"#fff",
         theme:"dark",
         blockBg:"rgba(0,0,0,.1)"
      }
   },
   getters: {
      getPc(state: StateValue) {
         return state.ispc;
      },
      getUserInfo(state: StateValue) {
         return state.userInfo;
      },
      getToken(state: StateValue) {
         return state.token;
      },
      getAccess(state: StateValue) {
         return state.access;
      },
      getHeight(state: StateValue) {
         return state.height;
      },
      getWidth(state: StateValue) {
         return state.width;
      },
      getCrumb(state: StateValue) {
         return state.crumb;
      },
      getIsSession(state: StateValue) {
         return state.isSession;
      },
      getAllClose(state:StateValue){
         return state.allClose;
      },
      getIsCollapsible(state:StateValue){
         return state.isCollapsible;
      },
      getFrameStyle(state:StateValue){
         return state.frameStyle;
      }
   },
   mutations: {
      setPc(state: StateValue, n: boolean): void {
         state.ispc = n;
      },
      setUserInfo(state: StateValue, n: object): void {
         state.userInfo = n;
      },
      setToken(state: StateValue, n: string): void {
         state.token = n;
      },
      setAccess(state: StateValue, n: string): void {
         state.access = n;
      },
      setHeight(state: StateValue, n: number): void {
         state.height = n;
      },
      setWidth(state: StateValue, n: number): void { 
         state.width = n;
      },
      setCrumb(state: StateValue, n: any): void {
         state.crumb = n;
      },
      setIsSession(state: StateValue, n: boolean): void {
         state.isSession = n;
      },
      setAllClose(state:StateValue,n:boolean):void{
         state.allClose = n;
      },
      setIsCollapsible(state:StateValue , n:boolean): void{
         state.isCollapsible = n;
      },
      setFrameStyle(state:StateValue,n:any):void{
         state.frameStyle = n;
      }
   },
   actions: {

   }
}