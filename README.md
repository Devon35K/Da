
  # DA

  This is a code bundle for DA. The original project is available at https://www.figma.com/design/Mt6QjWTzpFd1zb5k3lQmXt/DA.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  # Build web app
pnpm run build

# Sync to Android (if you made changes to web code)
npx cap sync android

# Build APK (set ANDROID_HOME environment variable first)
$env:ANDROID_HOME="C:/Users/arthu/AppData/Local/Android/Sdk"
cd android
.\gradlew.bat assembleDebug