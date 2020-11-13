---
title: "Getting started with Transcoder for Craft CMS"
description: "The Transcoder plugin made by nystudio107 is a handy plugin that allows you to transcode videos, audio, and create image thumbnails from videos in Craft CMS onto your production environment utilizing the video transcoder library FFmpeg."
slug: getting-started-with-transcoder-for-craft-cms
date: 2020-11-13
author: bryan-dugan
cover: ./getting-started-with-transcoder-for-craft-cms.png
tags: ['web', 'misc']
---

# Getting started with Transcoder for Craft CMS

The [Transcoder](https://plugins.craftcms.com/transcoder) plugin made by [nystudio107](https://nystudio107.com/) is a handy plugin that allows you to transcode videos, audio, and create image thumbnails from videos in Craft CMS onto your production environment utilizing the video transcoder library FFmpeg. The plugin is perfect for quickly creating hero video backgrounds on a home page or landing pages on a website. It's also great for spotlight sections such as services or portfolio pages.

This tutorial will focus on transcoding a video to the two main video formats on the web (mp4 and webm) and creating a video thumbnail to use while the video is loading or in case the browser doesn't support video.

Throughout this tutorial, I will be working with a Craft field called `featuredVideo`, an asset field, with the asset type of video to pull the video.

## Installing ffmpeg

Transcoder utilizes the popular open-source FFmpeg library to directly do all of its transcodings on your development or server. If the server is a budget server or runs multiple web apps, I'd recommend placing a max upload size cap on the Craft field not to bog down the server. On my servers, I allow a max file size of 100MB, and if the video is larger, I link the client to my article "[Using HandBrake to optimize videos for the web.](https://bryandugan.com/using-handbrake-to-optimize-videos-for-the-web/)"

**Install FFmpeg locally**

```bash
brew install ffmpeg
```

**Install brew on Ubuntu server**

```bash
sudo apt-get update
sudo apt-get install ffmpeg
```

## Configuring Transcoder

For Transcoder to work, you will need to copy the `config.php` file that is located in `vendor > nystudio107 > craft-transcoder > src` and paste it to the `craft/config` folder as `transcoder.php`

**Now we need to get the path for FFmpeg on the device that will be running Transcoder. You can get that by using:**

```bash
which ffmpeg
```

**You'll also need the path for FFprobe.**

```bash
which ffprobe
```

**Now replace the following lines in your transcoder.php file with the following paths.**

```php
// The path to the ffmpeg binary
'ffmpegPath' => '/usr/bin/ffmpeg',

// The path to the ffprobe binary
'ffprobePath' => '/usr/bin/ffprobe',
```

## Transcoder video options

In this section, we are going to call the Transcoder plugin and set options to take the original video file and compress it to create the following:

- mp4 video
- webm video
- fallback image thumbnail

To get the video to appear on your page, enter the following HTML, which uses the HTML 5 video element.For a complete list of all the parameters, you can view them in the [Transcoder documentation](https://nystudio107.com/docs/transcoder/Using.html#generating-a-transcoded-video).

```html
{# Create a shorthand version of calling the featuredVideo field from the entry #}
{% set featuredVideo = entry.featuredVideo.one() %}

{# Set options for creating an mp4 version of the video #}
{% set videoOptionsMp4 = {
    "videoFrameRate": 24,
    "videoBitRate": "1000k",
    "width": 1280,
    "height": 720,
    "aspectRatio": ""
} %}

{# Set options for creating a webm version of the video #}
{% set videoOptionsWebm = {
    "videoFrameRate": 24,
    "videoBitRate": "1000k",
    "width": 1280,
    "height": 720,
    "aspectRatio": "none",
    "videoEncoder": "webm",
} %}

{# Create thumbnail of the video to show while it's loading or a fallback if the browser doesn't support video #}
{% set transThumbnailUrl = craft.transcoder.getVideoThumbnailUrl(featuredVideo, {
    "width": 1280,
    "height": 720,
    "timeInSecs": 1,
}) %}
{% set transVideoUrlMp4 = craft.transcoder.getVideoUrl(featuredVideo, videoOptionsMp4) %}
{% set transVideoUrlWebm = craft.transcoder.getVideoUrl(featuredVideo, videoOptionsWebm) %}
```

## Adding the video to the page

To get the video to appear on your page, enter the following HTML, which uses the HTML 5 [video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

```html
<div class="video-container">
    <video loop muted autoplay poster="{{ transThumbnailUrl }}">
        <source src="{{ transVideoUrlWebm }}"
                type="video/webm">
        <source src="{{ transVideoUrlMp4 }}"
                type="video/mp4">
        Your browser doesn't support embedded videos.
    </video>
</div>
```

## Styling the video to look like a hero component

This SCSS is geared toward creating a hero video. The code snippet fills the relatively positioned parent container, in this case, the `hero-content` class. Feel free to modify the SCSS to your liking.

```scss
.hero-content {
		position: relative;
	  height: 60vh;
	  display: flex;
	  align-items: center;
	  overflow: hidden;
}

.video-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    video {
      min-width: 100%;
      min-height: 100%;
      
      // Stop the browser from squishing the video
      width: auto;
      height: auto;

      // Keep video centered
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
```

## Debugging the video

Here is a little snippet that will help you better understand what's happening with the video file and troubleshoot if something goes wrong.

```html
{# Video Debugging Info #}
{% set progressUrl = craft.transcoder.getVideoProgressUrl(featuredVideo, videoOptionsMp4) %}
{% set fileInfo = craft.transcoder.getFileInfo(transVideoUrlMp4, true) %}

<div>Original Video Url: {{ featuredVideo.getUrl() }}</div>
<div>Transformed Video Url: {{ transVideoUrlMp4 }}</div>
<div>Progress Url: {{ progressUrl }}</div>
<div>File Info: {{ dump(fileInfo) }}</div>
<div>Thumbnail Url: {{ transThumbnailUrl }}</div>
```

The Twig snippet will give you the following information:

1. **Original Video URL** — Outputs the URL of the original uploaded video file.
2. **Transformed Video URL** — Outputs the URL of the transformed video.
3. **Progress URL** — Outputs an array of the filename, duration, time, and progress of rendering out the video.
4. **File Info** — Outputs the available audio/video file information in an array.
5. **Thumbnail URL** — Outputs the URL for the generated thumbnail image.
