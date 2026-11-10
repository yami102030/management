// tbc-config.js：全站唯一放「資料庫網址與金鑰」的地方
// 要換資料庫或換金鑰，只改這個檔案，其他網頁都會跟著用新的。
// 注意：這裡只能放 sb_publishable_ 開頭的公開金鑰，絕對不要放 service_role 或 secret 金鑰。
window.TBC_CONFIG = Object.freeze({
  SUPABASE_URL: "https://jcepavwocdujoeoqxvsd.supabase.co",
  SUPABASE_KEY: "sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",
  // 網址自動依目前網域產生，測試站、正式站都不用改
  MANAGEMENT_URL: window.location.origin + "/management/",
  CENTER_URL: window.location.origin + "/center/"
});
