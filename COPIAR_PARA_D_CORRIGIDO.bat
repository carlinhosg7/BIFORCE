@echo off
setlocal
title BIFORCE - Copiar para D
color 0B

set "ORIGEM=%~dp0"
set "DESTINO=D:\BIFORCE"

echo =============================================
echo        BIFORCE - COPIAR PROJETO
echo =============================================
echo.

if not exist "%DESTINO%" mkdir "%DESTINO%"
robocopy "%ORIGEM%" "%DESTINO%" /E /XD node_modules .next /XF COPIAR_PARA_D.bat >nul

echo.
echo Projeto copiado para %DESTINO%
echo.
explorer "%DESTINO%"
pause
endlocal
