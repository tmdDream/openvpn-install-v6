// oneline.js

// 获取请求体
let body = $request.body;

if (body) {
    try {
        // 输出请求体内容到通知，方便查看
        $notify("Request Body Captured", "Body Content", body);
        
        // 如果请求体是 URL 编码的，可以进一步解析
        let params = new URLSearchParams(body);
        
        // 获取特定参数，例如 'token_online'，如果存在
        let tokenOnline = params.get('token_online');
        
        // 如果你需要处理 token_online，可以通知或者存储
        if (tokenOnline) {
            $notify("Token Found", "token_online", tokenOnline);
            $persistentStore.write(tokenOnline, "token_online_key");
        }
        
    } catch (error) {
        // 处理解析错误，通知用户
        $notify("Script Error", "Error processing the request body", error.message);
    }
}

$done({});
