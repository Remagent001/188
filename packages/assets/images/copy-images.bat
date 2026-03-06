@echo off
set ROOT=%~dp0..\..\..
echo Copying shared images to PHV...
cd /d "%ROOT%\apps\phv"
node "%ROOT%\scripts\copy-shared-images.js"
echo.
echo Copying shared images to WV...
cd /d "%ROOT%\apps\wv"
node "%ROOT%\scripts\copy-shared-images.js"
echo.
echo Done!
pause
