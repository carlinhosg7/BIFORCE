@echo off
chcp 65001 >nul
setlocal
set "DEST=D:\BIFORCE"

echo ========================================
echo BIFORCE - COPIAR PROJETO PARA D:
echo ========================================
echo.

if exist "%DEST%" (
  echo A pasta %DEST% ja existe.
  echo Renomeando para BIFORCE_BACKUP...
  if exist "D:\BIFORCE_BACKUP" rmdir /S /Q "D:\BIFORCE_BACKUP"
  ren "D:\BIFORCE" "BIFORCE_BACKUP"
)

mkdir "%DEST%"
xcopy "%~dp0*" "%DEST%\" /E /I /H /Y /EXCLUDE:"%~dp0bat_exclude.txt" >nul

echo.
echo Projeto copiado para %DEST%
echo.
pause
