@echo off

:: Display current Git status
git status

:: Add all changes to the staging area
git add .

:: Commit changes with a default message or customize it
git commit -m "Update changes"

:: Push changes to the remote repository (assuming the branch is 'main', change it if needed)
git push origin main
