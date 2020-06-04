---
title: "Serverpilot Server Configuation"
description: "A list of all the configuration changes I made to my Digital Ocean/ServerPilot server."
slug: serverpilot-server-configuration
date: 2019-10-02
author: bryan-dugan
tags: ['serverpilot', 'hosting', 'servers']
---

This is a list of all the configuration changes I made to my Digital Ocean/ServerPilot server.

## Installed Applications
I have installed the Auto MySql Backup, Imagick, and Zip/Unzip applications to the server. Refer to the instructions below on how to install them yourself.

### Auto MySQL Backup

```bash
apt-get install automysqlbackup
```

### Imagick

**Note:** Replace the PHP version 7.3 with whatever version of PHP you are using.

```bash
sudo pecl7.3-sp install imagick
```

Select autodetect from settings

**Copy installation to PHP 7.3**

**Note:** Replace 7.3 with whatever version of PHP you are using.

```bash
sudo bash -c "echo extension=imagick.so > /etc/php7.3-sp/conf.d/imagick.ini"
```

**Restart PHP**

**Note:** Replace 7.3 with whatever version of PHP you are using.

```bash
sudo service php7.3-fpm-sp restart
```

### Zip / Unzip

```bash
apt-get install zip unzip
```

## Change PHP Settings per Application

To change PHP.ini settings in each app, create a file called `.user.ini` and place in your public folder

```bash
vim apps/APPNAME/public/.user.ini
```

```jsx
memory_limit = 512M
max_execution_time = 300
upload_max_filesize = 512M
```

## Change MySQL Default Settings

```bash
vim /etc/mysql/my.cnf
```

**Change max_allowed_packet setting from 16M to 32M**

**Note:** There was two places that need changing in the `my.cnf` file

```text
max_allowed_packed = 32M
```

**Restart MySQL for changes to take effect**

```bash
sudo service mysql restart
```
