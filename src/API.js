import axios from "axios";

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

function listpayments(type,token){
    var url=rooturl+"listpayments?type="+type
    var headers={"X-OTPNINJA-TOKEN":token};
    console.log(headers)
    return axios.get(url,{headers:headers}).then(res=>{
        console.log(res)
        return res.data;
    })
}

export {login,listpayments}