// oneline.js

// 获取请求体
let body = $request.body;

if (body) {
    try {
        // 输出请求体，检查格式
        console.log("Request Body: " + body);

        // 初始化 URLSearchParams 来解析 URL 编码的请求体
        let params = new URLSearchParams(body);
        
        // 假设我们要获取 'token_online' 参数
        let tokenOnline = params.get('token_online');
        
        if (tokenOnline) {
            // 使用通知展示提取的参数
            $notify("Token Found", "token_online", tokenOnline);
            // 持久化存储 (如果需要)
            $persistentStore.write(tokenOnline, "token_online_key");
        }
        
    } catch (error) {
        // 捕获并通知解析错误
        $notify("Script Error", "Error processing the request body", error.message);
    }
}

$done({});
