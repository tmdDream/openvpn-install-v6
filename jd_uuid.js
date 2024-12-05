// jd_capture_uuid.js

// 获取请求体
let body = $request.body;

if (body) {
  try {
    let params = new URLSearchParams(body);  // 解析请求体为参数形式
    let uuid = params.get('uuid');           // 获取名为 'uuid' 的参数

    if (uuid) {
      console.log(`UUID found: ${uuid}`);    // 输出 UUID 到日志，方便调试查看
      
      // 调用 Quantumult X 的通知功能
      $notify("UUID Captured", "UUID Extraction Success", `UUID: ${uuid}`);
      
    } else {
      console.log("UUID not found in request body.");
      // 当未找到 UUID 时的通知
      $notify("UUID Captured", "UUID Not Found", "No UUID present in the request body.");
    }
  } catch (error) {
    console.log(`Error parsing request body: ${error}`);
    // 通知解析失败
    $notify("UUID Captured", "Error Parsing Request Body", `Error: ${error}`);
  }
}

$done({}); // 继续处理请求
