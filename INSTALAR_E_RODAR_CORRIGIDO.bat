@echo off
setlocal
title BIFORCE - Instalar e Rodar
color 0B

cd /d "%~dp0"

echo =============================================
echo        BIFORCE - INSTALAR E RODAR
echo =============================================
echo.

where node >nul 2>nul
if errorlevel 1 goto SEM_NODE

where npm >nul 2>nul
if errorlevel 1 goto SEM_NODE

echo Node encontrado:
node -v
echo NPM encontrado:
npm -v
echo.

echo Instalando dependencias...
call npm install
if errorlevel 1 goto ERRO_NPM

echo.
echo =============================================
echo BIFORCE iniciando em http://localhost:3000
echo =============================================
echo.
start "" http://localhost:3000
call npm run dev
goto FIM

:SEM_NODE
echo ERRO: Node.js nao encontrado neste computador.
echo.
echo Instale o Node.js LTS e execute este arquivo novamente.
echo Site oficial: https://nodejs.org/
echo.
where winget >nul 2>nul
if not errorlevel 1 (
  echo Seu Windows possui winget. Voce pode instalar com:
  echo winget install OpenJS.NodeJS.LTS
)
echo.
pause
goto FIM

:ERRO_NPM
echo.
echo ERRO durante npm install.
echo Copie a mensagem acima e envie para mim.
echo.
pause

:FIM
endlocal
