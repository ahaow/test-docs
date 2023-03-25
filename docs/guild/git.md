# git使用相关

## 拉取远程分支到本地

```js
git fetch origin 远程分支:本地分支
```

## 回退到某个指定的版本

```js
git reset --hard hash
```

## 创建远程分支并提交到远程分支

```js
git branch -r

git checkout -b dev

git push --set-upstream origin dev
```

## 删除远程分支 和 本地分支

```js
git push origin --delete dev

git branch -D dev
```

## 根据 tag 创建分支

1. 通过:git branch `<new-branch-name>` `<tag-name>` 会根据tag创建新的分支
2. 通过git checkout newbranch 切换到新的分支
3. 通过 git push origin newbranch 把本地创建的分支提交到远程仓库