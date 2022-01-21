#!/usr/bin/env sh

# 本脚本为自动部署的入口脚本(提交项目到 main 仓库的脚本)，只需执行该脚本，即可实现 GitHub 的自动部署，


GITHUB_REPO=git@github.com:guokongming/guokongming.github.io.git

comment=$1

if [ ! $comment ]; then
comment="更新内容"
fi

git init  

git add -A

git commit -m "${comment}"    # $1 是启动该脚本传来的参数，如 sh push.sh hello，其中 hello 就会插入到 $1 处，如果想两个参数，则加 $2

git remote set-url origin $GITHUB_REPO  

git pull origin master

git push -u origin master




