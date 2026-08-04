@echo off
cd /d "%~dp0"
if exist "%SystemRoot%\System32\cmd.exe" (
  where py >nul 2>nul
  if %ERRORLEVEL% EQU 0 (
    py -3 -m http.server 8000
  ) else (
    python -m http.server 8000
  )
)
