// jd_capture_uuid.js

// 获取请求体
let body = $request.body;

if (body) {
  try {
    let params = new URLSearchParams(body);  // 解析请求体为参数形式
    let uuid = params.get('uuid');           // 获取名为 'uuid' 的参数

    if (uuid) {
      console.log(`UUID found: ${uuid}`);    // 输出 UUID 到日志，方便调试查看
      // 这里可以进行更多的操作，比如存储或处理 UUID
    } else {
      console.log("UUID not found in request body.");
    }
  } catch (error) {
    console.log(`Error parsing request body: ${error}`);
  }
}

$done({}); // 继续处理请求
