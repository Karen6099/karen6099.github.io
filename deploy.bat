@echo off
REM GitHub Deploy Script for Portfolio (Batch version)
REM This script commits changes to GitHub and deploys to GitHub Pages

setlocal enabledelayedexpansion

set MESSAGE=%1
if "!MESSAGE!"=="" set MESSAGE=Update portfolio

echo.
echo Launching PowerShell deployment script...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy.ps1" -message "%MESSAGE%"

pause
