// get_token.js

// Quantumult X 提供的环境对象
let body = $request.body;  // 获取请求体

if (body) {
    try {
        // 假设请求体是一个 JSON 格式的字符串
        let jsonBody = JSON.parse(body);
        
        // 提取 `token_online` 参数
        let tokenOnline = jsonBody.token_online;
        
        if (tokenOnline) {
            // 在控制台输出（调试用），你也可以选择其他存储或输出方式
            console.log("token_online:", tokenOnline);
            
            // 可以选择存储 token_online 到环境变量等
            $notify("Token Found", "token_online", tokenOnline);

            // 如果希望后续处理这个 token，可以将它保存到环境
            $persistentStore.write(tokenOnline, "token_online_key");
        }
        
    } catch (error) {
        console.error("Error parsing the request body:", error);
    }
}

$done({});
