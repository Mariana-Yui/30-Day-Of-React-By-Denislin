Q: `fatal: The upstream branch of your current branch does not match the name of your current branch`
A: 问题的原因是在分支创建时，使用了与远程不一致的分支名, `git branch -m feature/develop`

Q: 将 Git 默认分支从 master 修改为 main
A: `git config --global init.defaultBranch main`

Q: `error: refname refs/heads/master not found`
A: `git add -A && git commit -m "feat: commit"` 之后再 `git branch -M main`
