MacOS修改分辨率
```
终端输入：
sudo /Library/Application\ Support/VMware\ Tools/vmware-resolutionSet 1920 1080
```

MacOS设置主机代理
···
网络-以太网-高级-代理，IP填写主机IP，端口填写代理工具端口
···

MacOS 打开、编辑.bash_profile 配置环境变量
```
touch .bash_profile
open -e .bash_profile
编辑文件内容：
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=~/flutter/bin:$PATH
保存文件
source .bash_profile
```
