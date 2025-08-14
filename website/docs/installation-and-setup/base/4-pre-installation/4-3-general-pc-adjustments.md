---
sidebar_position: 3
title: "General PC adjustments"
hide_title: true
slug: /installation-and-setup/pre-installation/general-pc-adjustments
description: "Requirement #3 - General PC adjustments"
# image:
---

| Requirement | Mandatory? | Comment |
| :--- | :---: | :--- |
| [Visual Studio 2015, 2017, 2019 and 2022](https://aka.ms/vs/17/release/vc_redist.x64.exe) | :white_check_mark: | **Required** for Mod Organizer 2 and a few mods. |
| `600 GB` of free space on SSD | :white_check_mark: | After the installation our list + downloads would take up around `450 GB` (downloads folder can be deleted or relocated after installation, it would free you around `150 GB`), but the whole installation process would require up to `600 GB` to store its temp files and caches. |
| Disabled/removed **OneDrive** | :white_check_mark: | Ensure that _OneDrive_ is **uninstalled** or **completely disabled.** This program locks some of _Skyrim_'s configuration files when in use and would cause the modlist to experience errors. |
| **Pagefile** set to `40 GB` | :white_check_mark: | You must set your Advanced Memory Pagefile to at least 40GB or the modlist would constantly crash. On _Windows 11_ you can find this setting in the `About` page for your PC. [Here](https://www.windowscentral.com/software-apps/windows-11/how-to-manage-virtual-memory-on-windows-11) is an instruction manual to find this specific option; other versions of Windows are mostly similar. Setting the minimum and maximum pagefile size to `40,960` on one Solid State Drive is recommended. |