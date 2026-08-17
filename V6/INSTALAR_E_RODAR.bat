@echo off
title BIFORCE V6 - INSTALAR E RODAR
cd /d D:\BIFORCE\V6
where node >nul 2>nul
if errorlevel 1 (
  echo ERRO: Node.js nao encontrado.
  pause
  exit /b 1
)
call npm install
if errorlevel 1 (
  echo ERRO no npm install.
  pause
  exit /b 1
)
start http://localhost:3000
call npm run dev
