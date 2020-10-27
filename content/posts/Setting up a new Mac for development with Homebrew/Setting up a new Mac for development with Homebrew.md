---
title: "Setting up a new Mac for Development"
description: "This is the Homebrew Cask setup of my personal development laptop. Feel free to use this as a starting point for a fresh install of any new OSX machine."
slug: setting-up-a-new-mac-for-development
date: 2020-10-26
author: bryan-dugan
cover: ./mac-homebrew.png
tags: ['getting started', 'homebrew','mac osx']
---

## Installing Homebrew

Homebrew is a command-line interface(CLI) package manager for OSX.

To get started, you'll first need to install Apple's Xcode command-line tools. To do this, you first need to install Xcode from the Apple App Store. Once Xcode is installed, open it and select `Xcode > Preferences > Locations > Command Line` Tools to install the required command-line tools to use Homebrew.

Now that the xcode CLI is installed, we can now install Homebrew. To install Homebrew, copy, and paste the below command into your terminal to get started. If the below command doesn't work, take a look at the [Homebrew documentation](https://brew.sh/).

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Add Homebrew to your $PATH

For Homebrew to work properly, your `bin` directory must first be added to your `$PATH`.

```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
```

## Installing Casks

Casks are graphical user interface(GUI) applications that will be installed in your Mac's Applications folder. For a master list of all available Cask formulae, there is one available on the [official Brew website](https://formulae.brew.sh/cask/). 

Use the lists I created as a starting point for installing your applications and feel free to modify them to your liking. Also, be sure to hold onto your list in a Github Gist or some form of cloud storage for safekeeping in case you need to set up another new computer in the future.

### Design Applications

Here is a list of all the design applications that I use.

```bash
brew cask install adobe-creative-cloud
brew cask install figma
brew cask install sketch
brew cask install sketch-toolbox
brew cask install zeplin
```

### Development Applications

These are all the development related applications that I use.

```bash
brew cask install google-chrome
brew cask install firefox
brew cask install iterm2
brew cask install jetbrains-toolbox
brew cask install visual-studio-code
brew cask install postman
brew cask install sequel-ace
brew cask install filezilla
brew cask install sourcetree
```

### Regular Applications

Here are some other applications that I use regularly.

```bash
brew cask install google-backup-and-sync
brew cask install spotify
brew cask install discord
brew cask install slack
brew cask install notion
brew cask install 1password
brew cask install handbrake
```

## Installing Homebrew Applications

These are the most common development CLI applications that you'll be using with whatever development server you'll choose to use.

```bash
brew install php
brew install composer
brew install mysql
brew install yarn
```

### Install NVM

Node Version Manager (nvm) is a manager that allows you to install and use multiple versions of node. This is great when you need to quickly switch back and forth between new and old versions of node.

If you're like me, and mainly use node to install packages and run Webpack scripts, I'd recommend installing the Long Term Support(LTS) version. That way, your setup will be stable and supported for much longer before you need to upgrade. 

Install nvm via Homebrew

```bash
brew install nvm
```

Create nvm directory

```bash
mkdir ~/.nvm
```

Now we will install different node versions depending on your needs. If you need a specific version of node, such as `12.18.3` you may specify the version number. Otherwise using the major version number will grab the newest release of that particular version. Most projects I use either require v6, 8, or 12.

```bash
nvm install 6
nvm install 8
nvm install 12
```

I would also recommend setting a default node version. A majority of the projects I work on are modern web apps, so I set the default to the latest LTS version which at the time of this writing is 12.

```bash
nvm alias default 12
```

If you need to use a specific version number for a project, open up a terminal window and type the command below to use that version. Once you close that terminal window, it will default back to the default node you have just setup. 

```bash
nvm use 8
```

Use this command to allow write access to the global `node_modules` folder. Otherwise, you will have to run `sudo` every time you need to install or modify anything inside it.

```bash
sudo chown -R $USER /usr/local/lib/node_modules 
```

## Configure your Terminal

The Terminal I use is iTerm2. Starting with Mac OSX Catalina, Apple switched from Bash to ZSH for its default shell. During that time, I decided to make the switch as well.

If you're not familiar with command-line tools or are a visual learner, a lot of my config is based upon Wes Bos' [Command Line Power User](https://commandlinepoweruser.com/) course.

If you're looking for a color scheme, here is the one that I use. [https://gist.github.com/bryandugan/4c125c61b2ce6885dfa7b28e006f8737](https://gist.github.com/bryandugan/4c125c61b2ce6885dfa7b28e006f8737)

Alternatively, you can create/import your own or grab one from [iterm2-color-schemes](https://iterm2colorschemes.com/)

### Oh My Zsh

Oh My ZSH is an addition to the ZSH terminal that adds thousands of helpful functions, helpers, plugins, and themes to supercharge your command line experience.

To install Oh My Zsh, go to their website and run the Install oh-my-zsh via curl command.

[https://ohmyz.sh/#install](https://ohmyz.sh/#install)

Once installed, it's time to configure your $PATH and defaults, including the theme. To do this, you're going to have to modify a file in your `Home` or `~` Directory. That file is `.zshrc`. For an example file of all the changes I made to get it working with PHP, bin files, composer as well as setting themes and configuring Z you can see my config here. [https://gist.github.com/bryandugan/4a02c9fab3c75eb9112e3c436fed4235](https://gist.github.com/bryandugan/4a02c9fab3c75eb9112e3c436fed4235)

### Quickly find recent files with Z

Z is a handy terminal utility that allows you to quickly go to any recent folder. 

```bash
brew install z
```

Add to .zshrc

```bash
.$(brew --prefix)/bin
```

## Laravel Valet as a Local Development Server

Laravel Valet is what I use as my local development server. I use it because it's easy to set up and doesn't require running a Vagrant box or anything else that is too complicated. It turns your Mac into a development server by running Nginx in the background as you start your computer. My favorite feature is that you can run `valet park` in your local development directory, and any folder in that directory becomes a `.test` domain. So if you have a folder called `my-website`, open your favorite browser and type in `my-website.test` and you'll be directed to your index file in the `my-website` folder.

To set up Valet, I recommend [Jalen Davenport's awesome guide](https://medium.com/@jalendport/running-craft-cms-3-on-laravel-valet-6df61e5193fd) on how to set up Valet. It's geared towards Craft CMS development, but the basic install is all the same for whatever type of web development you'll be doing.

## PHP Extensions

PHP out of the box has just about everything you need to get up and running. However, most PHP applications require a few third-party extensions. This section will go over the most commonly needed extensions.

**Getting Started**

Many extensions need to know your PHP install location and/or the php.ini file. There are a few commands that will help you quickly obtain the required information.

The current active path to where PHP is installed.

```bash
which php
```

Which php.ini file/s your install is using.

```bash
php --ini
```

Sometimes the `php --ini` command results can be a little bit unclear.

If you're still having issues, you can run `phpinfo();` by creating a new PHP file (such as index.php) and opening it up in your browser. Scroll down and look for `Loaded Configuration File`. From there, you'll see the full path for your php.ini file.

```php
<?php
phpinfo();
?>
```

### Composer

A package manager for PHP. If you're familiar with NPM for JavaScript packages, Composer is the NPM for the PHP world. Use the command below to install composer. If that doesn't work, refer to the [Composer docs.](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)

```bash
php composer-setup.php --install-dir=bin --filename=composer
```

### Imagick

Imagick otherwise known as [ImageMagick](https://imagemagick.org/) is an extension for transforming images. It's much better than the default library GD. It has more support for multiple formats and also allows image adjustments.

```bash
pecl install imagick
```

**Troubleshooting:**

If you get this error:

```bash
ERROR: failed to mkdir /usr/local/Cellar/php/7.4.7/pecl/20190902
```

Navigate to `/usr/local/Cellar/php/7.x.x/`, remove the symlink, and try installing something via pecl again. This should create the directory.

**php.ini setup to work with Imagick:**

```bash
sudo vim /usr/local/etc/php/7.4.7/php.ini
```

(feel free to replace vim with whatever code editor of choice you use)

Find this line

```
extension = "imagick.so"
```

Change it to this:

```
extension = "/usr/local/Cellar/php/7.4.7/pecl/20190902/imagick.so"
```

## MySQL

MySQL is what I use for my local databases along with [Sequel Ace](https://sequel-ace.com/) to manage them. Sequel Ace allows you to visually see/edit database tables. It's a maintained fork of the old Sequel Pro software that stopped being maintained back in 2017.

Install mysql

```bash
brew install mysql
```

**Troubleshooting:** 

In case you keep running into connection failed issues, look at the solution by Maciej Kwas to reset your password: [https://stackoverflow.com/questions/51179516/sequel-pro-and-mysql-connection-failed?rq=1](https://stackoverflow.com/questions/51179516/sequel-pro-and-mysql-connection-failed?rq=1)

## Google Chrome

Chrome is what I use for all my development testing. Disabling cache while DevTools is open is a setting I regularly forget to switch on while setting up a new computer. It makes it so that when a page is refreshed, the cache is cleared while the DevTools window is open.

Go to `Settings > Network > Disable cache (when DevTools is open)`

There we have it! Have any questions or comments? Send me a DM on [Twitter](https://twitter.com/bryandugan) and I'll do my best to answer them.
