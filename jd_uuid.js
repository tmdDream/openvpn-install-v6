// jd_streamuuid.js

// 获取响应体
let body = $response.body;

try {
  // 将响应体解析为JSON对象
  let obj = JSON.parse(body);

  // 提取streamuuid
  if (obj.streamuuid) {
    console.log(`streamuuid: ${obj.streamuuid}`); // 输出到日志
    // 如果需要在这里做进一步的数据处理
  } else {
    console.log("streamuuid not found!");
  }
} catch (e) {
  console.log('Error parsing response body:', e); // 错误处理
}

$done({ body }); // 返回原始响应体，不做额外修改
