#!/bin/bash
caminho="/home/operador/Documentos/projetos/houseControl/platforms/android/ant-build"
cordova build --release android &&
rm -fr $caminho/houseControl.apk &&
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $caminho/agenda.keystore $caminho/CordovaApp-release-unsigned.apk agenda &&
zipalign -v 4 $caminho/CordovaApp-release-unsigned.apk $caminho/houseControl.apk
echo "APK pronto para Produção =)"
