---
title: "Setting up a new Mac for Development"
description: "This is the Homebrew Cask setup of my personal development laptop. Feel free to use this as a starting point for a fresh install of any new OSX machine."
slug: setting-up-a-new-mac-for-development-with-homebrew
date: 2016-09-14
author: bryan-dugan
cover: ./mac-homebrew.png
tags: ['mac osx']
---

This is the Homebrew Cask setup of my personal development laptop. Feel free to use this as a starting point for a fresh install of any new OSX machine.

## Installing Homebrew

Homebrew is a command-line interface(CLI) package manager for OSX. In order to install Homebrew. Copy and paste the below command into your terminal to get started. If the below command doesn't work, take a look at the [Homebrew documentation](https://brew.sh).

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Add Homebrew to your $PATH

In order for Homebrew to work properly, your `bin` directory must first be added to your `$PATH`.

```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
```

## Installing Casks

Casks are graphical user interface(GUI) applications that will be installed to your Mac's Applications folder. For a master list of all available Cask formulae, there is one available on the [official Brew website](https://formulae.brew.sh/cask/). Use the lists I created as a starting point for installing your own applications and feel free to modify them to your liking. Also, be sure to hold onto your list in a Github Gist or cloud storage for safekeeping in case you need to set up a new computer.

### Design Applications

Here is a list of all the design applications that I use.

```bash
brew cask install sketch
brew cask install sketch-toolbox
brew cask install adobe-creative-cloud
brew cask install zeplin
```

### Development Applications

These are all the development related applications that I use.

```bash
brew cask install google-chrome
brew cask install firefox
brew cask install iterm2
brew cask install visual-studio-code
brew cask install postman
brew cask install sequel-pro
brew cask install filezilla
brew cask install sourcetree
```

### Regular Applications

Here are some other handy applications that I use on a regular basis.

```bash
brew cask install vlc
brew cask install google-backup-and-sync
brew cask install spotify
brew cask install slack
brew cask install notion
brew cask install 1password
```

## Installing Homebrew Applications

These are the most common development CLI applications that you'll be using with whatever development server you'll choose to use. **Note:** These are brew formulae, NOT casks, so be sure to not use cask when installing the applications.

```bash
brew install php
brew install composer
brew install mysql
brew install yarn
```

## Laravel Valet as a Local Development Server

Laravel Valet is what I use as my local development server. I use it because it's easy to set up and doesn't require running a Vagrant box or anything else too complicated. It turns your Mac into a development server by running Nginx in the background as you start your computer. My personal favorite feature is that you can run `valet park` in your local development directory, and any folder in that directory becomes a `.test` domain. So if you have a folder called `my-website`, open your favorite browser and type in `my-website.test` and you'll be directed to your index file in the `my-website` folder.

To set up Valet, I highly recommend [Jalen Davenport's absolutely wonderful guide](https://medium.com/@jalendport/running-craft-cms-3-on-laravel-valet-6df61e5193fd) on how to set up Valet. It's geared towards Craft CMS development, but the basic install is all the same for whatever type of web development you'll be doing.
