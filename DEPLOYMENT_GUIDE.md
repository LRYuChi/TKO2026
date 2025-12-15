# 🚀 TKO 2026 部署指南

**最後更新**: 2025年12月14日

---

## 📋 部署前檢查清單

在部署到生產環境前，請確認以下項目都已完成:

- [x] 所有 TypeScript 編譯錯誤已修復
- [x] 生產構建成功 (`npm run build`)
- [x] 本地預覽測試通過 (`npm run preview`)
- [x] 所有外部資源鏈接有效
- [x] 響應式設計在各種設備上測試通過

---

## 🌐 部署選項

### 選項 1: **Vercel (推薦) ⭐**

最簡單的部署方式，自動 CI/CD。

#### 步驟:

1. **將代碼推送到 GitHub**
   ```bash
   git add .
   git commit -m "Deploy TKO 2026"
   git push origin main
   ```

2. **連接到 Vercel**
   - 訪問 https://vercel.com
   - 使用 GitHub 帳號登錄
   - 點擊「Import Project」
   - 選擇該 GitHub 仓库
   - 點擊「Deploy」

3. **自動部署**
   - Vercel 會自動檢測 Vite 項目
   - 自動配置構建和部署
   - 幾秒內即可部署完成

**優點**:
- ✅ 無需配置
- ✅ 自動 HTTPS
- ✅ 全球 CDN
- ✅ 自動回滾
- ✅ 免費方案足夠

---

### 選項 2: **Netlify**

另一個優秀的靜態站點託管平台。

#### 步驟:

1. **連接到 Netlify**
   - 訪問 https://app.netlify.com
   - 點擊「Add new site」
   - 選擇「Connect to Git」
   - 授權 GitHub

2. **配置部署設置**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - 點擊「Deploy site」

**優點**:
- ✅ 無需配置
- ✅ 自動 HTTPS
- ✅ 全球 CDN
- ✅ 免費方案足夠

---

### 選項 3: **GitHub Pages**

如果要部署到 `yourusername.github.io`

#### 步驟:

1. **修改 vite.config.ts**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/SouthkendamaTko2026/', // 使用倉庫名稱
   })
   ```

2. **將代碼推送到 GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **在倉庫設置中啟用 GitHub Pages**
   - 進入 Settings → Pages
   - 選擇 Source: `GitHub Actions`
   - 創建 `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         
         - run: npm install
         - run: npm run build
         
         - uses: actions/upload-artifact@v3
           with:
             name: dist
             path: dist

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

**優點**:
- ✅ 免費
- ✅ 與 GitHub 整合無縫
- ✅ 自動 CI/CD

---

### 選項 4: **自託管服務器**

適合對服務器有完全控制需求的情況。

#### 步驟 (以 Ubuntu 為例):

1. **安裝 Node.js 和 npm**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. **克隆倉庫**
   ```bash
   git clone https://github.com/yourusername/SouthkendamaTko2026.git
   cd SouthkendamaTko2026
   ```

3. **安裝依賴並構建**
   ```bash
   npm install
   npm run build
   ```

4. **使用 Nginx 作為反向代理**
   ```bash
   sudo apt install nginx
   ```

   編輯 `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       root /path/to/SouthkendamaTko2026/dist;
       index index.html;

       location / {
           try_files $uri /index.html;
       }
   }
   ```

5. **重啟 Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

6. **設置 SSL (使用 Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

**優點**:
- ✅ 完全控制
- ✅ 可自定義配置

---

## 📊 推薦部署環境

| 平台 | 費用 | 難度 | 推薦度 |
|------|------|------|--------|
| **Vercel** | 免費 | 超簡單 | ⭐⭐⭐⭐⭐ |
| **Netlify** | 免費 | 超簡單 | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | 免費 | 簡單 | ⭐⭐⭐⭐ |
| **自託管** | ¥¥¥ | 複雜 | ⭐⭐⭐ |

**我的建議**: 使用 **Vercel** 或 **Netlify** 進行初次部署。

---

## 🔧 部署後檢查

部署完成後，請驗證以下內容:

### 1. **功能測試**
- [ ] 首頁加載正常
- [ ] 導航菜單可用
- [ ] 滾動平穩
- [ ] 圖片加載成功
- [ ] 響應式設計工作正常

### 2. **性能檢查**
- [ ] 使用 Google PageSpeed Insights 檢查速度
- [ ] 檢查 Lighthouse 分數
- [ ] 驗證資源加載時間

### 3. **SEO 檢查**
- [ ] 使用 Google Search Console 提交站點
- [ ] 檢查 Open Graph 元標籤
- [ ] 驗證 robots.txt 和 sitemap.xml

### 4. **安全檢查**
- [ ] 確認 HTTPS 啟用
- [ ] 檢查安全報告頭
- [ ] 驗證 CORS 配置

---

## 🔐 環境變數 (如果需要)

當前項目不需要環境變數。若要添加:

1. **在項目根目錄創建 `.env.local`**
   ```bash
   VITE_API_URL=https://api.example.com
   VITE_ANALYTICS_ID=UA-xxxxx
   ```

2. **在代碼中使用**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **在部署平台設置環境變數**
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment

---

## 📈 監控和維護

### 部署後監控

1. **設置 Google Analytics**
   - 添加追蹤代碼到 HTML
   - 監控訪客流量

2. **設置錯誤追蹤**
   - 使用 Sentry (https://sentry.io)
   - 自動捕獲生產錯誤

3. **定期備份**
   - 備份源代碼到 GitHub
   - 定期備份部署配置

### 更新和修補

```bash
# 更新依賴項
npm update

# 檢查過時的依賴
npm outdated

# 安全檢查
npm audit

# 修復安全問題
npm audit fix
```

---

## 🆘 常見問題 (FAQ)

### Q1: 為什麼圖片沒有加載?
**A**: 圖片使用外部 Google Drive CDN。確保:
- 網絡連接正常
- 防火牆未阻止外部資源
- CDN 鏈接仍然有效

### Q2: 如何修改域名?
**A**: 取決於部署平台:
- **Vercel**: 在 Project Settings → Domains 中添加
- **Netlify**: 在 Site settings → Domain management 中添加
- **自託hosting**: 修改 DNS 記錄

### Q3: 如何添加自定義域名的 SSL?
**A**: 大多數現代部署平台都自動提供:
- **Vercel**: 自動簽發 Let's Encrypt 證書
- **Netlify**: 自動簽發 Let's Encrypt 證書
- **自託hosting**: 使用 Certbot 和 Let's Encrypt

### Q4: 部署後如何回滾到上一個版本?
**A**: 
- **Vercel**: 在部署歷史中選擇一個部署，點擊「Promote to Production」
- **Netlify**: 在 Deploys 中選擇一個部署，點擊「Set as published」

### Q5: 如何增加構建超時時間?
**A**: 通常不需要（該項目構建非常快），但如果需要:
- **Vercel**: Settings → Function Timeout
- **Netlify**: 不可配置，但免費方案有充足的資源

---

## 📞 獲取幫助

如果部署過程中遇到問題:

1. **查看構建日誌**
   - Vercel: Deployments → Details
   - Netlify: Deploys → Deploy log

2. **檢查常見錯誤**
   - `npm run build` 本地測試
   - `npm run preview` 測試構建輸出

3. **查看官方文檔**
   - Vite: https://vitejs.dev
   - React: https://react.dev
   - Tailwind: https://tailwindcss.com

---

## ✨ 最終檢查清單

部署前最後驗證:

```bash
# 1. 更新依賴 (可選)
npm update

# 2. 本地編譯檢查
npx tsc --noEmit

# 3. 構建生產版本
npm run build

# 4. 預覽構建結果
npm run preview

# 5. 提交代碼
git add .
git commit -m "Ready for production deployment"
git push origin main
```

**一切就緒? 👍 點擊部署按鈕!**

---

*部署指南完成日期: 2025-12-14*  
*項目狀態: ✅ **準備好部署**
