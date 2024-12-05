// get_token.js

let body = $request.body;

if (body) {
    try {
        // 假设请求体是一个 JSON 格式的字符串
        let jsonBody = JSON.parse(body);
        
        // 提取 `token_online` 参数
        let tokenOnline = jsonBody.token_online;
        
        if (tokenOnline) {
            // 使用 $notify 进行信息通知
            $notify("Token Found", "token_online", tokenOnline);

            // 如果希望后续处理这个 token，可以将它保存到环境
            $persistentStore.write(tokenOnline, "token_online_key");
        }
        
    } catch (error) {
        // 使用 $notify 来显示错误信息
        $notify("Script Error", "Error parsing the request body", error.message);
    }
}

$done({});
