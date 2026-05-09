@echo off
chcp 65001 >nul
title Mizuki 开发服务器

echo 正在启动开发服务器...
echo.

cd /d D:\lemo\Mizuki9.0

:: 在后台启动 pnpm dev
start "Mizuki Dev" cmd /k "pnpm dev"

echo 等待服务器启动 (端口 4321)...
echo.

:: 等待端口 4321 开始监听
:wait_loop
timeout /t 1 /nobreak >nul
netstat -an | findstr ":4321.*LISTENING" >nul
if %errorlevel% neq 0 (
    goto wait_loop
)

echo 服务器已启动，正在打开浏览器...
echo.

:: 打开默认浏览器
start http://localhost:4321

echo.
echo ✅ 已打开浏览器访问 http://localhost:4321
echo 按任意键退出...
pause >nul