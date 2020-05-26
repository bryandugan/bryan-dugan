---
title: "Vim Cheatsheet"
description: "A list of common Vim Shortcuts that you will be using while getting started with Vim."
slug: vim-cheatsheet
date: 2016-11-19
author: bryan-dugan
tags: ['development', 'vim']
---

A list of common Vim Shortcuts that you will be using while getting started with Vim.

> **Note:** Vim is case sensitive. For Example, if the command is `V` you would type `shift` + `v`.

## The two main modes
In Vim there are two main modes. Command mode, and insert mode. Command mode lets you modify and select text, where insert mode allows you to type new text.

| Action | Command |
| :--- | :--- |
| Text mode | `i` | 
| Command mode | `esc` |

## Basic shortcuts

| Action | Command |
| :--- | :--- |
| Select character | `v` |
| Select line | `V` |
| Cut | `d` |
| Copy | `y` |
| Paste before | `P` |
| Paste after | `p` |
| Move around editor (alternatively, you can use the arrow keys) | `h`,`j`,`k`,`l` |


### Word Movement

| Action | Command |
| :--- | :--- |
| Beginning of next word | `w` |
| Last letter of word | `e` |
| Beginning of previous word | `b` |
| Move to matching parentheses or brackets | `%` |
| Move to the beginning of a line | `0` |
| Move to the end of the line | `$` |
| Find next instance of a word | `/ul`| 
| Go to the beginning of a file | `gg` |
| Go to the end of a file | `G` |
| Go to line number | `#gg` |
| Search | `/` |
| Search next | `n` |
| Search previous | `n` |
| Insert new line after | `o` |
| Insert new line before |`O` |
| Remove character | `x` |
| Replace character | `r` |
| Delete character | `d` |
| Delete word / etc | `d` + word |
| Repeat previous command | `.` |
| Save | `:w` |
| Quit | `:q` |
| Quit without saving | `:q!` |
| Undo  | `u` |
| Redo | `ctrl r` |
| Help docs | `:help` |
