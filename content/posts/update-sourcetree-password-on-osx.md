---
title: "Update Sourcetree Password on OSX"
description: "If you've reset your password in Bitbucket or another Git client, you'll get an error or a prompt for your password every single time you try to connect to a project."
slug: update-sourcetree-password-osx
date: 2018-05-18
author: bryan-dugan
tags: ['development']
---

Normally, I use Bitbucket and Sourcetree for versioning my code. If you've reset your password in Bitbucket or another Git client, you'll get an error or a prompt for your password every single time you try to connect to a project.

In order to get Sourcetree to remember your password, you will have to delete your user profile, then re-connect to a repository. Below is a quick reference on how to get you back up and running.

## Navigate to the Sourcetree Settings Folder

Start by Navigating to the following directory by right clicking Finder and clicking "Go to Folder..."

```bash
~/Library/Application Support/SourceTree
```

## **Delete the User's Profile**

Find the account name in the list of files that you would like to reset the git password to. Once found, go ahead and delete that file.

**Example:** `bdugan@STAuth-bitbucket.org` would be the Bitbucket user's password I would like to reset, so I would delete that file.

## **Restart Sourcetree**

The next time you connect to a repository that uses that user ID, you will be prompted for a password. Enter your password to re-connect to the repository.

Congrats! You have just updated your Sourcetree credentials, now get back to work!
