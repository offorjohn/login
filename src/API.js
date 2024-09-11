import axios from "axios";

// eslint-disable-next-line no-unused-vars
var token="";
var rooturl="https://otpninja.com/api/v1/";
function login(username,password){
    var data={"username":username,"password":password}
    var url=rooturl+"auth"
    return axios.post(url,data).then(res=>{
        token = res.data.token;
        return res.data;
    })
}

async function listpayments(type,token){
    var url=rooturl+"listpayments?type="+type
    var headers={"X-OTPNINJA-TOKEN":token};
    console.log(headers)
    const res = await axios.get(url, { headers: headers });
    console.log(res);
    return res.data;
}

export {login,listpayments}