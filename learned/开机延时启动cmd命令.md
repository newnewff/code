···
ping 127.0.0.1 -n 10 >nul
start "" "C:Program Files (x86)ToDeskToDesk.exe"
ping 127.0.0.1 -n 10 >nul
start cmd /k "cd d:\redis && redis-server.exe redis.windows.conf"
ping 127.0.0.1 -n 10 >nul
start cmd /k "cd d:\jvavWeb && java -jar r.jar"
exit
···
