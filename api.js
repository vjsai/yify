var http = require("http"),
    querystring = require("querystring");
module.exports.apiCall=function(urlpart,options,id,callback,errorCallback,method)
{
    var onError = errorCallback || function() {},
        baseUrl = "yify-torrents.com",
        apiEndPoint = "/api/"+urlpart+"?",
        params = null,
        url = null,
        result = "",
        options = options || {},
        rest = {};
    if(id!=null)
    {
        options = id;
    }
    if(options!=null)
    {
        params = querystring.stringify(options);
    }
    var path = apiEndPoint+params;
    rest = {
        hostname: baseUrl,
        port: 80,
        path: path,
        method : method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    url = baseUrl+apiEndPoint+params;
    console.log(url);
    http.request(rest,function(res){
        res.setEncoding('utf8');
        console.log(res.statusCode);
        res.on('data',function(chunk){
            result += chunk;
        });
        res.on('end',function(){
            var resultData = JSON.parse(result) ;
            //console.log(resultData);
            callback(resultData) ;
        });
    })
        .on('error',function(){
            console.log("There is an error in the request");
        })
        .end();
}
