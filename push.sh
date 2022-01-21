#!/usr/bin/env sh

# 本脚本为自动部署的入口脚本(提交项目到 main 仓库的脚本)，只需执行该脚本，即可实现 GitHub 的自动部署，


comment=$1

if [ ! $comment ]; then
comment="更新内容 + Action 自动部署"
fi

git add -A

git commit -m "${comment}"    # $1 是启动该脚本传来的参数，如 sh push.sh hello，其中 hello 就会插入到 $1 处，如果想两个参数，则加 $2

git push -u origin main #建立远程分支 main 和 关联本地main和远程main两步

 git push --set-upstream git@github.com:guokongming/guokongming.github.io.git main