// jd_uuid.js

const body = $request.body; // 获取请求体
if (body) {
  const params = new URLSearchParams(body); // 使用 URLSearchParams 解析请求体
  const uuid = params.get('uuid'); // 获取 uuid 参数
  if (uuid) {
    console.log(`UUID: ${uuid}`); // 输出 UUID，方便在调试中查看
    // 这里可以进行其他处理，比如储存UUID或修改请求体
  } else {
    console.log('UUID not found!');
  }
}

$done({}); // 完成脚本，继续请求处理