# Windows PowerShell Deployment Script for GitHub Pages

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  NotebookLM 學習網站 GitHub 部署小助手   " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 1. 取得使用者 GitHub 倉庫網址
$repoUrl = Read-Host "請貼上您的 GitHub 儲存庫網址 (例如 https://github.com/您的帳號/專案名稱.git)"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "網址不可為空！部署終止。" -ForegroundColor Red
    Exit
}

# 2. 設定分支並進行遠端連接
Write-Host "`n正在配置 Git 遠端倉庫..." -ForegroundColor Yellow
git branch -M main

# 檢查是否已設定過 origin，若有則先移除
$existingRemote = git remote
if ($existingRemote -contains "origin") {
    git remote remove origin
}

git remote add origin $repoUrl.Trim()

# 3. 嘗試推送到 GitHub
Write-Host "`n正在推送到 GitHub (若彈出登入視窗，請完成驗證)..." -ForegroundColor Yellow
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n==========================================" -ForegroundColor Green
    Write-Host "🎉 成功推送到 GitHub！" -ForegroundColor Green
    Write-Host "請至您的 GitHub 儲存庫網頁：" -ForegroundColor Green
    Write-Host "1. 點擊 Settings (設定)" -ForegroundColor Green
    Write-Host "2. 點擊左側 Pages" -ForegroundColor Green
    Write-Host "3. 在 Build and deployment > Branch 選擇 'main'，點擊 Save" -ForegroundColor Green
    Write-Host "4. 等待 1-2 分鐘，即可得到您的公開網站連結！" -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
} else {
    Write-Host "`n❌ 推送失敗，請確認您的儲存庫網址是否正確，且已在瀏覽器登入 GitHub。" -ForegroundColor Red
}

Write-Host "`n按任意鍵結束..."
[void]$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
