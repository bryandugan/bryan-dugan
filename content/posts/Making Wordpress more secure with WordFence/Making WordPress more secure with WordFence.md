---
title: "Making WordPress more secure with WordFence"
description: "WordFence is a security manager that I use for all WordPress websites that I host. Here's the configuration to WordFence that I use for all the sites I work on."
slug: making-wordpress-more-secure-with-wordfence
date: 2020-08-22
author: bryan-dugan
cover: ./making-wordpress-more-secure-with-wordfence.png
tags: ['wordpress', 'security']
---


WordFence is a security manager that I use for all WordPress websites that I host. I mainly use it to protect websites against spambots trying to brute force into it. Here's the configuration to WordFence that I use for all the sites I work on.

The fastest way to configure WordFence is to go to All Options and then go through each configuration setting section. Once you get things set up to your liking, you can export the settings to quickly apply them to your other WordPress websites. Feel free to use this configuration as a starting point to make your website more secure.

For most of my needs, the free version of WordFence handles everything I need. So these options are geared towards the free plugin settings.

## View Customization

|  |  |
| :--- | :--- |
| Display "All Options" menu item | ✅ |
| Display "Blocking" menu item | ✅ |
| Display "Live Traffic" menu item | ✅ |

## General WordFence Options
|  |  |
| :--- | :--- |
| Update Wordfence automatically when a new version is released? | ✅ |
| Where to email alerts? | Enter Tech Admin Email Address |
| How does Wordfence get IPs | Let Wordfence use the most secure method to get visitor IP addresses. Prevents spoofing and works with most sites. (Recommended)|
| Hide WordPress Version | ❌ |
| Disable Code Execution for Uploads directory | ❌ |
| Pause live updates when window loses focus | ✅ |
| Update interval in seconds | 2 |
| Bypass the LiteSpeed "noabort" check | ❌ |
| Delete Wordfence tables and data on deactivation | ❌ |

## Dashboard Notification Options
|  |  |
| :--- | :--- |
| Updates Needed (Plugin, Theme, or Core) | ✅ |
| Scan Status | ✅ |

If you manage multiple WordPress installations, you may want to switch up your Email Alert preferences to avoid getting a bunch WordFence related Emails in your inbox. I only want to be alerted of critical issues with the site just in case the plugin is disabled.

## Email Alert Preferences
|  |  |
| :--- | :--- |
| Email me when Wordfence is automatically updated | No |
| Email me if Wordfence is deactivated | ✅ |
| Email me if the Wordfence Web Application Firewall is turned off| ✅ |
| Alert me with scan results of this severity level or greater | ✅ (Critical) |
| Alert when an IP address is blocked | ❌ |
| Alert when someone is locked out from login | ❌ |
| Alert when someone is blocked from logging in for using a password found in a breach | ❌ |
| Alert when the "lost password" form is used for a valid user | ❌ |
| Alert me when someone with administrator access signs in | ❌ |
| Only alert me when that administrator signs in from a new device or location | ❌ |
| Alert me when a non-admin user signs in | ❌ |
| Only alert me when that user signs in from a new device or location | ❌ |
| Alert me when there's a large increase in attacks detected on my site | ❌ |
| Maximum email alerts to send per hour | 1 |


## Brute Force Protection
|  |  |
| :--- | :--- |
| Enable brute force protection | ✅ |
| Lock out after how many login failures | 5 |
| Lock out after how many forgot password attempts | 5 |
| Count failures over what time period | 4 hours |
| Amount of time a user is locked out | 2 months |
| Immediately lock out invalid usernames | ✅ |
| Immediately block the IP of users who try to sign in as these usernames | admin, [login], WEBSITE_NAME (replace WEBSITE_NAME) with your domain name) |
| Prevent the use of passwords leaked in data breaches | For all users with "publish posts" capability |

## Additional Options
|  |  |
| :--- | :--- |
| Enforce strong passwords | Yes , Force admins and publishers to use strong passwords (recommended) |
| Don't let WordPress reveal valid users in login errors | ✅ |
| Prevent users from registering 'admin' username if it doesn't exist | ✅ |
| Prevent discovery of usernames through '/?author=N' scans, the oEmbed API, and the WordPress REST API | ✅ |
| Block IPs who send POST requests with blank User-Agent and Referer | ❌ |
| Custom text shown on block pages| |
| Check password strength on profile update | ✅ |
| Participate in the Real-Time Wordfence Security Network | ✅ |

## Rate Limiting
|  |  |
| :--- | :--- | :--- |
| Enable Rate Limiting and Advanced Blocking | ON | |
| How should we treat Google's crawlers | Verified Google Crawlers will not be rate-limited | |
| If anyone's requests exceed | Unlimited | throttle it |
| If a crawler's page views exceed | Unlimited | throttle it |
| If a crawler's pages not found (404s) exceed | Unlimited | throttle it |
| If a human's page views exceed | Unlimited | throttle it |
| If a human's pages not found (404s) exceed | Unlimited | throttle it |
| How long is an IP address blocked when it breaks a rule | 5 minutes | |
| Whitelisted 404 URLs | /favicon.ico<br /> /apple-touch-icon\*.png<br /> /*@2x.png<br /> /browserconfig.xml| |

