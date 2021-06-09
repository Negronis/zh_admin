let test = process.env.NODE_ENV === 'production' ? false : true;
let url = test ?  'http://192.168.2.16:803/api' : 'https://'+location.host+'/api';  
export default url;