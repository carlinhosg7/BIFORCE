@echo off
chcp 65001 >nul
setlocal
cd /d D:\BIFORCE

echo ========================================
echo BIFORCE - INSTALAR E RODAR
ECHO ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERRO: Node.js nao foi encontrado no PATH.
  echo Instale o Node.js LTS pelo site oficial e abra o Prompt novamente.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo ERRO: npm nao foi encontrado no PATH.
  pause
  exit /b 1
)

echo Node:
node -v
echo NPM:
npm -v
echo.

echo Instalando dependencias...
call npm install
if errorlevel 1 (
  echo.
  echo ERRO durante npm install.
  pause
  exit /b 1
)

echo.
echo Iniciando BIForce em http://localhost:3000
echo Para encerrar, pressione Ctrl+C.
echo.
call npm run dev
