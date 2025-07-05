---
sidebar_position: 2
---

# 环境

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
 
  <TabItem value="MacOS" label="MacOS" default>

系统版本至少为 MacOS12

> 非最新的系统不保证其成功性

```bash title="校验git版本，未安装会提示下载常用工具包"
git --version
```

> 使用[nvm](https://github.com/nvm-sh/nvm)对Node.js进行安装和版本管理，方便切换版本进行开发

```bash title="安装nvm"
git clone git@github.com:nvm-sh/nvm.git ./.nvm
```

```bash title="为bash添加环境"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bash_profile
```

```bash title="为zshrc添加环境"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.zshrc
```

```bash title="刷新环境"
source ~/.bash_profile && source ~/.zshrc
```

```bash title="安装NodeJS@22"
nvm install 22
nvm use 22
node -v
npm -v
```

  </TabItem>

<TabItem value="Debian" label="Ubuntu/Debian">

> 示例系统 Ubuntu 24.04 LTS / Debian 12.0 X86 2H2G

```sh titile="更新系统包"
sudo apt-get update
sudo apt-get install wget -y
sudo apt-get install curl -y
```

```sh title="安装git"
apt-get install git -y
```

```sh title="安装chromium"
apt-get install chromium -y
```

```sh title="安装字体"
apt-get install fonts-noto-cjk fonts-noto-color-emoji -y
```

```sh title="安装nvm"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

```sh title="添加NVM到环境变量"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc
nvm -v
```

```sh title="镜像地址（可选）"
export NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node"
```

```bash title="安装NodeJS@22"
nvm install 22
nvm use 22
node -v
npm -v
```

  </TabItem>

  <TabItem value="Centos" label="Centos">

> 推荐 Centos Steam 9

```sh title="确保dnf包是最新的"
dnf update -y
dnf install wget -y
dnf install curl -y
```

```sh title="安装git"
dnf install git
```

```sh title="安装 Chromium"
dnf  install chromium -y
```

```sh title="安装字体"
dnf install google-noto-serif-cjk-fonts
```

```sh title="安装NVM"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

```sh title="添加NVM到环境变量"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc # 刷新环境
nvm -v # 版本
```

```bash title="安装NodeJS@22"
nvm install 22
nvm use 22
node -v
npm -v
```

  </TabItem>

   <TabItem value="Windows" label="Windows" >
  
推荐系统 `Windows10` | `Windows11`

1. 安装浏览器： 非推荐系统请自行安装 [Google Chrome](https://www.google.cn/intl/zh-CN/chrome/) / [Edge](https://www.microsoft.com/zh-cn/edge)

2. 安装 Node.js： [Node.js@22](https://nodejs.org/zh-cn)

> 推荐使用[nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)对Node.js进行版本管理，方便切换版本进行开发

> Node.js 版本必须大于18且双数版本

3. 安装 Git： [Git Download for Windows](https://git-scm.com/)

> git必须全部点击默认next，其他地址可能会造成git损坏

  </TabItem>

</Tabs>

出现意外？阅读[常见问题](./x-other/3-common-problem.md)
