# JSX 箭頭符號解析錯誤 - 完整診斷與修正記錄

**文件位置**: `components/RulesSection.tsx` 第 267 行  
**錯誤訊息**: `ERROR: The character ">" is not valid inside a JSX element`  
**根本原因**: esbuild JSX 解析器將 `->` 中的 `>` 誤判為 JSX 標籤結尾

---

## 🔴 問題現象

- **本地**: `npm run build` 成功編譯，文件內容正確
- **Vercel**: 構建失敗，仍顯示舊版本 `->`（即使已推送新版本）
- **症狀**: Git 推送顯示成功，但遠端 GitHub 內容未更新或被還原

---

## 📋 修正嘗試歷史

### 第1次嘗試：HTML 實體編碼
**方法**: `A抽招 &rarr; A做`  
**結果**: ❌ 失敗 - Vercel 將 `&rarr;` 還原為 `->`  
**原因**: 中途某環節自動解碼

### 第2次嘗試：JSX 字串表達
**方法**: `A抽招 {'→'} A做`  
**結果**: ❌ 失敗 - Vercel 將 `{'→'}` 還原為 `->`  
**原因**: Git 推送或 GitHub 儲存層出現編碼轉換

### 第3次嘗試：Unicode 直字元
**方法**: `A抽招 → A做`（直接 Unicode 箭頭）  
**結果**: ❌ 失敗 - 仍被還原為 `->`  
**原因**: 同上，傳輸層問題

### 第4次嘗試：移除箭頭，用標點符號
**方法**: `A抽招，A做(3次機會)，若A成功…`（改用逗號和文字表述）  
**結果**: ❌ **持續失敗** - 這是關鍵線索！

---

## 🔍 真正根本原因診斷

**症狀**: 無論修改本地檔案為何內容，Vercel 都顯示舊版本 `->`

**推論**:
1. ✅ 本地檔案確實被修改了
2. ✅ Git 推送顯示成功（commit hash 改變）
3. ❌ **但 Vercel 克隆的代碼仍是舊版本**

**可能原因**:
- **GitHub 緩存** - GitHub 伺服器快取舊內容
- **推送未真正成功** - 顯示成功但實際未推送到遠端
- **檔案被還原** - GitHub 的自動化流程還原了修改
- **LF/CRLF 衝突** - Git 自動轉換導致內容還原

---

## ✅ 最終根治方案

### 步驟1：檢查遠端實際內容
```bash
git show origin/main:components/RulesSection.tsx | grep "A抽招"
```
**預期**: 若遠端仍是 `->`，說明推送未成功或被還原

### 步驟2：強制推送（核選項）
```bash
git push --force origin main
```
**風險**: 覆蓋遠端，確保本地內容被上傳

### 步驟3：終極方案 - 拆分為 JSX 元素
若上述方案仍失敗，改為 JSX 分段渲染，避免任何 `>` 字符出現在文本中：

```tsx
<p>
  <strong>規則：</strong>
  轉劍玉決定先後。A抽招，A做(3次機會)，若A成功B失敗則A得1分。
  皆成功/皆失敗則換B抽招。先得3分勝。
</p>
```

**好處**:
- 完全避免特殊符號
- 純文字，無編碼風險
- 語意清晰

---

## 🛠️ 未來預防措施

### 1. 避免所有可能被誤解的符號
- ❌ `->`（看起來像 JSX 箭頭函數）
- ❌ `→`（可能在傳輸中變化）
- ❌ `<` 和 `>` 組合
- ✅ 用中文詞語（「轉到」「然後」「接著」）
- ✅ 用純英文單詞（「then」「next」）

### 2. 建立 `.gitattributes` 防止自動轉換
```
* text=auto eol=lf
*.tsx text eol=lf
*.jsx text eol=lf
```

### 3. 本地驗證步驟
```bash
# 1. 修改檔案
# 2. npm run build （本機驗證）
# 3. git show HEAD:components/RulesSection.tsx | grep "A抽招" （確認本地 commit）
# 4. git push origin main
# 5. sleep 5 && git show origin/main:components/RulesSection.tsx | grep "A抽招" （驗證遠端）
```

---

## 📌 關鍵洞察

**根本問題**: 不是代碼寫法問題，而是 **Git / GitHub 層的編碼或傳輸問題**。

**症狀判斷樹**:
```
Vercel 顯示舊版本代碼?
├─ 是 → 推送未成功或被還原
│  ├─ 確認: git show origin/main:components/RulesSection.tsx
│  └─ 解決: git push --force 或 git push --force-with-lease
└─ 否 → 代碼邏輯問題（按文件位置確認）
```

---

## 🎯 行動計畫（用於下次遇見此類問題）

1. **先檢查遠端** - 不要假設推送成功
2. **用 `git show origin/` 驗證** - 確認 GitHub 實際內容
3. **若遠端錯誤，用 `--force` 推送** - 強制覆蓋
4. **避免特殊符號** - 改用安全的中文或英文文字
5. **在 CI 環境前驗證** - Vercel 前確認本機 build 成功且遠端正確

---

**最後更新**: 2025年12月14日 16:14  
**狀態**: 待執行最終方案
