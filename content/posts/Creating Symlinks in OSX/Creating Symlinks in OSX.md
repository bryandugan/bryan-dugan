---
title: "Creating Symlinks in OSX"
description: "It is possible in OSX to create a Symlink (symbolic link) or shortcut in Terminal to get to that specific folder extremely quickly."
slug: creating-symlinks-in-osx
date: 2015-11-12
author: bryan-dugan
tags: ['terminal', 'mac osx']
---

If you are just getting started with using the Terminal in OSX, you may have trouble getting to common things like your hosts file. It is possible to create a Symlink (symbolic link) or shortcut in Terminal to get to that specific folder extremely quickly.

Use the following formula to create a symlink

```bash
ln -s /any/file/on/the/disk shortcut-name
```

**Example:** Creating a symlink to your hosts file.

```bash
ln -s /etc/hosts hosts-shortcut
```

Now to quickly open your hosts file all you have to do is use the symlink you created. In this example, we are opening our hosts file with the vim text editor.

```bash
sudo vim hosts-shortcut
```

**Note:** You must run sudo to modify your hosts file.
