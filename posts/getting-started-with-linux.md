---
title: "Getting Started with Linux"
subtitle: "Personal computers have evolved in the past and is evolving every coming year. So is the operating system. An operating system is system software that makes communication between computer hardware and software. We have a bunch of operating system to choose from as per our convenience and need."
date: "2021-06-09"
---

Personal computers have evolved in the past and is evolving every coming year. So is the operating system. An operating system is system software that makes communication between computer hardware and software. We have a bunch of operating system to choose from as per our convenience and need. The popular ones are Windows 10, macOS and Linux distributions. Each operating system has its own advantages and disadvantages. So, there is no sense by asking which is the best operating system in the world.

We get Windows 10 preinstalled with most of the computers and laptops. macOS is installed in Mac lineup manufactured by Apple. These two operating systems are proprietary which means no one except the owning companies can access the code and contribute in the development of them. On the other hand, Linux is an open source operating system. It is owned by a community of developers. These people develop it and fix any errors or bugs in the OS. It is free of cost and can be used on any hardware. Linux has many distributions like Kali Linux, Ubuntu, Fedora, Arch Linux, Peppermint OS, Linux Mint, Elementary OS, etc. You can either buy a PC with Linux preinstalled or use Linux along with Windows 10 using Dual-Boot or installing it on a Virtual Machine like VMWare Workstation or VirtualBox. Here we are going to see how to install and setup Ubuntu using Dual-Boot because it is the most popular and easy for beginners.

Pros
----

1.  It is less susceptible to viruses and malware.
2.  It is easy to install.
3.  It does not take much disk space and can be run on any hardware system.
4.  It has powerful command prompts.
5.  It does not crash or requires reboot frequently like other OS.

Cons
----

1.  The user interface is not as good-looking as the other OS.
2.  It requires practice and skills.
3.  There is limited support for popular software and apps.
4.  Some hardware drivers are not available for Linux.
5.  Not useful for gamers as games are popularly made for Windows.

As we can clearly see Linux OS is not useful for everyone. If you are a gamer then Windows is best for you. If you are a productive user then Linux has a lot of support and features to help you.

Basic Installation
------------------

**Prerequisites:** A PC with Windows installed and minimum 30 GB disk space, USB pen drive (minimum 8 GB), Active internet connection.

*   **Step 1: Create a backup of your PC \[Optional\]**
    
    It is a good practice to frequently make backups of your computer in a separate external disk. I would recommend you to take backup before installing Ubuntu in case you get stuck into a major boot issue.
    
*   **Step 2: Download Ubuntu ISO file**
    
    You can download Ubuntu ISO file from [the official Ubuntu website](https://ubuntu.com/download/desktop) . Make sure you download latest version available. The latest version is Ubuntu 20.04 (Focal Fossa).
    
*   **Step 3: Create live USB stick**
    
    To create a live USB stick, download and install [Universal USB Installer](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/) . After installing, connect your Pen Drive and open File Explorer and format it. Open Universal USB Installer and browse the location of Ubuntu ISO file. Leave everything default and click start. It will automatically create a live USB of Ubuntu.
    
*   **Step 4: Boot into Ubuntu**
    
    This is the most important step. Connect the pen drive to the computer you wish to install Ubuntu. Click start button and type Change advanced startup options and press Enter. Under the Advanced startup, click Restart Now. Windows Safe Mode page will show up. Choose Use a device option and click the USB disk. It may also be displayed as EFI USB Device. Clicking it will automatically boot into Ubuntu OS.
    
*   **Step 5: Installing Ubuntu** ![Ubuntu](/images/Screenshot1.png)
    
    When the Ubuntu boots up, you will see two options. You can either try Ubuntu or install it. We are going to install it on the PC so select the second option.
    
    ![Ubuntu](/images/Screenshot2.png)
    
    After that choose your language and keyboard layout.
    
    ![Ubuntu](/images/Screenshot3.png)
    
    On the next screen choose Normal installation and tick Install Third-Party Software and click continue.
    
    ![Ubuntu](/images/Screenshot5.png)
    
    On the next page choose install Ubuntu alongside Windows.
    
    ![Ubuntu](/images/disk-partition-dual-boot-ubuntu-windows.png)
    
    After that allocate the disk space you want to give to Ubuntu and click Install Now. It will take 8-10 minute to install. Once the installation is complete restart your PC. Remove the USB and press Enter.
    

Everything is done. Now just set up your home screen as per your need. Now it is important to check for updates so that everything runs smooth.

Installing Updates
------------------

To install updates, go to app drawer and open Software Updater. It will automatically start updating. Make sure you sign up to Canonical Livepatch. It will frequently install security patches.

Fixing Issues
-------------

Even if you do everything right, there are some issues which will appear. Let's see some common issues and fixes.

1.  **Wi-Fi issue:** This is the most common issue which everyone talks about on the internet. It's pretty easy to fix this. This happens because of missing Wi-Fi driver. To fix this, update the software from Software Updater and then open Additional Drivers. There you will see the Wi-Fi driver available for Ubuntu. Tick use option and click Apply changes. ![Ubuntu](/images/Screenshot4.png)
2.  **Bluetooth issue:** I don't know how many people face this issue but I got this on my PC. I search for fixing this but haven't found the solution. I will update if I find anything.
3.  **Display flickering issue:** Even this issue is prominent on the internet and I still haven't found any fix for this. It may have happened due to incompatible Graphics Driver. I will update once I find anything.

Accessing Windows Files
-----------------------

Switching OS doesn't mean you can't access another OS files. You can actually access your photos, videos, documents, audio files present on Windows. To do this, go to Files and click Other locations. You will see all your drives (C, D, E,…). Just click on the desired drive and you can read the files on it.

Command Lines
-------------

Terminal of Linux is far more powerful than Windows Command Prompt. You can do a lot of things with just typing commands. We will see some of the common commands.

`cd [folder name or path]`: This lets you to change the directory.

`ls`: This simply displays all folders and files in the directory.

`mv`: Move a file

`cp`: Copy a file

`sudo`: It gives root access to any command. You must enter your password to use this command. It requires you to type before every command. Use `sudo -s` to avoid typing `sudo` for every command.

Downloading apps
----------------

Downloading apps is easier on Linux than any other OS. You can either head to Ubuntu Software Store and install your favorite apps or just type command in the terminal. We will see the second method.

Installing apps using apt

`sudo apt install \[app-name\]`

Installing apps using Snap Store

`sudo apt update` 
`sudo apt install snapd`  
`sudo snap install core`
`sudo snap install \[app-name\]`

Commands for popular apps

1.  **Spotify**
    
    `sudo snap install spotify`
    
2.  **VLC media player**
    
    `sudo apt install vlc`
    
3.  **Audacity**
    
    `sudo snap install audacity`
    
4.  **Android Studio**
    
    `sudo snap install android-studio --classic`
    
5.  **Sublime Text**
    
    `sudo snap install sublime-text`
    

Using GNOME Shell Extensions
----------------------------

Extensions are pretty useful and enhances the overall experience. With GNOME, we can have a bunch of useful extensions from keeping all copied text to changing desktop wallpapers daily. There are some things to install before using extensions.

First check your GNOME shell version. It should be 3.36 or above

`gnome-shell --version`

Add Extension Integration on browser

[For Chrome](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep) | [For Firefox](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

Install Native connector

`sudo apt install chrome-gnome-shell`

Install GNOME tweaks

`sudo apt install gnome-tweaks`

That's it. Now you can go to [extensions.gnome.org](https://extensions.gnome.org/) . There you can browse and enable extensions. To enable click on it and toggle the on or off switch. Then enter your password.

Here are my favorite GNOME extensions:

*   Arc menu
*   Clipboard Indicator
*   GSConnect
*   NetSpeed
*   Transparent Top Panel
*   Caffeine
*   Google Earth Wallpaper

Well that's it for this guide. I hope it helped you to successfully install Ubuntu and get started. There is a lot to learn here. You can search more about this on Google and YouTube. If you have any questions or doubts, you can email me. Thanks a lot.