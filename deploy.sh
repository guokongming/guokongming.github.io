#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'www.guokongming.com' > CNAME



if [ -z "$GITHUB_TOKEN" ]; then
  msg='更新内容 + Action 自动部署'
  githubUrl=git@github.com:guokongming/guokongming.github.io.git
else
  msg='更新内容 + Action 自动部署'
  githubUrl=https://guokongming:${GITHUB_TOKEN}@github.com/guokongming/guokongming.github.io
.git
  git config --global user.name "guokongming"
  git config --global user.email "guokongming@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支



# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
#git push -f git@github.com:guokongming/guokongming.github.io.git master:gh-pages



cd -
rm -rf docs/.vuepress/dist