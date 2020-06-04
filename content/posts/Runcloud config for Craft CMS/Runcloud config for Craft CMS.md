---
title: "Runcloud configuration for Craft CMS"
description: "If you're setting up a Craft CMS website on a RunCloud server for your first time, here is everything you need to get setup."
slug: runcloud-config-craft-cms
date: 2020-05-03
author: bryan-dugan
cover: ./runcloud-config-craft-cms.png
tags: ['runcloud','craft cms', 'hosting','servers']
---

If you're setting up a Craft CMS website on a [RunCloud](https://runcloud.io/r/ZMrWgZNDeyRw) server for your first time, here is everything you need to get setup.


## Install Imagick on the server

This is the preferred image rendering library for Craft CMS. It handles transforming images much better than the pre-installed module, GD, and is highly recommended for not only Craft but also WordPress and other popular CMS's. RunCloud offers some documentation on other common PHP modules you can obtain here:[https://runcloud.io/docs/guide/cheat-sheet/php#installing-modules](https://runcloud.io/docs/guide/cheat-sheet/php#installing-modules)

Start by opening up a terminal window and SSH into your server as your root user.

```bash
ssh root@SERVER_IP_ADDRESS
```

Install Imagick for all available versions of PHP that you wish to use on the server. At the time of this writing 7.4 is the latest. Replace the numbers in the formula below with whatever version you want to use.

**Example:** I am installing Imagick for PHP 7.1 and 7.4 since those are the only two versions I'll be using on my server here is the command I will run to install both versions.

```bash
apt-get install php71rc-pecl-imagick php74rc-pecl-imagick
```

To get the changes to take place, restart PHP by running the following:  Also, be sure to replace the PHP versions with whatever versions you'll be using.

```bash
systemctl reload php71rc-fpm
systemctl reload php74rc-fpm
```

## Configure PHP Settings within the RunCloud Dashboard

For each web application you create that uses Craft; Here are the settings I have applied to each application, based upon Craft's PHP system requirements. To get to the PHP application settings in RunCloud, go to *Web Application → [App Name] → Settings*, then scroll down to PHP Settings.

### open_basedir

Remove everything in this field:

```
Default: /home/undefined/webapps/undefined:/var/lib/php/session:/tmp
```

**Note:** Keeping the default field info will fail Craft CMS updates on the production site.

### disable_functions

Remove the following functions from the list as they are needed for the Craft Plugin Store and sending Emails.

- `proc_open`
- `proc_close`
- `proc_terminate`

### max_execution_time

Change default max_execution_time to 300.

**Note:** Craft requires a minimum PHP max execution of 120s.

### Rebuild the Application to apply changes

After adjusting the settings RunCloud recommends you to rebuild the application. To do this, click on the "More" button on the top right portion of the screen and select "Rebuild web application".

Repeat the Configure PHP Settings process for each application that you want to set up on the server.

Your Runcloud server is now properly set up for use with Craft CMS! If you have any issues or additional input, feel free to leave a comment or get a hold of me on [Twitter](https://twitter.com/bryandugan)
