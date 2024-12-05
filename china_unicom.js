// get_token.js

let body = $request.body;

if (body) {
    try {
        // 解析 URL 编码的请求体
        let params = new URLSearchParams(body);

        // 使用 `get` 方法提取 `token_online` 参数
        let tokenOnline = params.get('token_online');
        
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
