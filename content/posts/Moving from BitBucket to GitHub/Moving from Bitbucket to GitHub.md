---
title: "Moving from Bitbucket to GitHub"
description: "Moving from Bitbucket to GitHub is a bit of a time consuming task. But once you get the first repository transferred, the process should become quicker each time you do it."
slug: runcloud-config-craft-cms
date: 2020-05-23
author: bryan-dugan
tags: ['development']
---

Now that GitHub has free private repositories, I have decided to transfer about 30 code repositories from Bitbucket over to GitHub. Moving from Bitbucket to GitHub is a bit of a time-consuming task. But once you get the first repository transferred, the process should become quicker each time you do it. It took me about a day to get all my repositories transferred, so if you're looking for a great rainy day project, this would be it.

## Getting started

Start by creating a new repository on GitHub. Make sure to **NOT** check "Initialize this repository with a README". If you have accidentally created a repository with a README file, you'll have to delete the repository and create it again.

Now that we have our Github repository set up, make sure your local version of your Bitbucket repository is completely up to date.

In your local bitbucket repository add the new GitHub URL by creating a new remote. In this example, let's name it upstream.

```bash
cd project-directory
git remote add upstream https://github.com/USER/PROJECT.git
```

Now, push all your branches and tags to the newly created GitHub Repository.

```bash
git push upstream master
git push upstream BRANCH-NAME
git push --tags upstream
```

### Quick troubleshooting

Here are a few small issues that I came across while doing my first migration and how to solve them.

**Accidentally entered the wrong URL**

If you set the URL wrong while adding the repo, you can run the following command to reset it:

```bash
git remote set-url upstream https://github.com/USER/PROJECT.git
```

**"Invalid username or password" error**

You'll need to generate a personal access token on the GitHub website at `settings > developer settings > personal access tokens` from there you can generate a new token. That token is only displayed once so make sure to copy it and save it somewhere like your password manager. When asked for your password in the terminal, use your GitHub password.

## Clean up the old repository

Now that your repository is successfully migrated over to Github, don't forget to remove the old repository from Bitbucket.

In Bitbucket, open your repository, and go to `Settings > Delete repository` and delete the repository.

While deleting the Bitbucket repository, Bitbucket will ask you if you would like to set up a redirect. If you work with other developers on the project, it's highly recommended that you set up the redirect over to the new GitHub repository.

## Remove old Bitbucket origin and set it to GitHub

Once the repository is successfully transferred over to Github, you'll need to change your remote origin URL to be able to make new commits in your repository.

I use [Sourcetree](https://www.sourcetreeapp.com/) to manage all my repositories. To remove the old Bitbucket origin and replace it with the GitHub origin, follow these steps within Sourcetree.

- Go to `settings > Remotes`.
- Delete the Bitbucket Origin.
- Rename Upstream to Origin.

You should now be able to commit and push changes over to the new GitHub repository.

---

Repeat this process for each repository you want moved over.
