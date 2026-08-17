@echo off
title BIFORCE V6 - GERAR PUBLICACAO
cd /d D:\BIFORCE\V6
call npm run build
if errorlevel 1 (
  echo ERRO durante o build.
  pause
  exit /b 1
)
echo.
echo PUBLICACAO GERADA EM:
echo D:\BIFORCE\V6\out
explorer D:\BIFORCE\V6\out
pause
