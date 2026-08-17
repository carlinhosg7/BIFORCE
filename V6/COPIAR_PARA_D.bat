@echo off
title BIFORCE V6 - COPIAR PARA D
set DEST=D:\BIFORCE\V6
echo Criando %DEST%...
if not exist "D:\BIFORCE" mkdir "D:\BIFORCE"
if exist "%DEST%" (
  echo A pasta V6 ja existe. Criando backup...
  if exist "D:\BIFORCE\V6_BACKUP" rmdir /s /q "D:\BIFORCE\V6_BACKUP"
  ren "%DEST%" V6_BACKUP
)
mkdir "%DEST%"
xcopy "%~dp0*" "%DEST%\" /E /I /H /Y /EXCLUDE:"%~dp0bat_exclude.txt"
echo.
echo Projeto copiado para %DEST%
pause
