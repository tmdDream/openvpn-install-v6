/*
Quantumult X Script: Extract token_online from request
*/

var requestBody = $request.body;
var tokenMatch = requestBody.match(/token_online=([^&]*)/);

if (tokenMatch) {
  var token = tokenMatch[1];
  console.log("Extracted token_online: " + token);

  // 检查并更新存储的 token
  let cookies = $persistentStore.read("chinaUnicomCookie") || "";
  if (!cookies.includes(token)) {
    cookies = cookies ? cookies + "&" + token : token;
    $persistentStore.write(cookies, "chinaUnicomCookie");
    console.log("Updated chinaUnicomCookie: " + cookies);
  }
} else {
  console.log("token_online not found in request body.");
}

$done({});