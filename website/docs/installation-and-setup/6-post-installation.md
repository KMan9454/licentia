---
sidebar_position: 6
title: "Post-Installation"
hide_title: true
slug: /post-installation
description: "Licentia NEXT - Post-installation"
image: ./img/6-post-installation.png
---

# ![Post-Installation](./img/6-post-installation.png)

---

:::note
Assuming you've **completed** the [Installation](/installation) part, let's continue with post-installation!
:::

---

## ![Start MO2 and launch the list](./img/6-post-installation/6-1-start-mo2-and-launch-the-list.png)

1. Navigate to your Licentia NEXT directory and **execute** `ModOrganizer.exe`:
    <img 
        src={require('./img/6-post-installation/6_1_1_mo2_start.png').default}
        alt="MO2 start"
        style={{ width:'auto', height:150 }}
        className="zoomable"
    />

    :::tip
    **IF YOU CAN'T FIND** the `ModOrganizer.exe` despite *Wabbajack* telling you the install finished successfully &mdash; for example your folder looks like this:
        <img 
            src={require('./img/6-post-installation/6_1_1_no_mod_organizer.png').default}
            alt="No MO2"
            style={{ width:'auto', height:300 }}
            className="zoomable"
        />
    Go back to [Installation](installation#download-and-install-the-list) and keep re-installing _Licentia NEXT_ until you see that `ModOrganizer.exe` file appeared in your Licentia NEXT's folder.

    **THIS IS NOT A LICENTIA NEXT ISSUE, IT'S A WABBAJACK ISSUE** since version `4.0`+. We can't do anything about it, sorry.
    :::

2. If prompted, choose `Yes` to associate Mod Organizer with `.nxm` links. If there’s no prompt, **skip this step**.

3. In the top-right corner, make sure that `SKSE` is selected from the dropdown **(1)**, and click the Run button **(2)**:
    <img 
        src={require('./img/6-post-installation/6_1_3_mo2_run_the_game.png').default}
        alt="MO2 run"
        style={{ width:'auto', height:100 }}
        className="zoomable"
    />

    :::tip
    Wabbajack auto-detects and sets your **game resolution**, but if you wish to change it **manually** &mdash; select the `INI Editor` from the `Tools` menu along the icon bar of MO2:
        <img 
            src={require('./img/6-post-installation/6_1_3_mo2_change_resolution.png').default}
            alt="MO2 ini editor"
            style={{ width:'auto', height:150 }}
            className="zoomable"
        />

    Select `SkyrimPrefs.ini` file. Scroll down until you see the `[Display]` header and look for the `iSize` values. Note that the TYPICAL ORDER IS REVERSED, the HEIGHT is listed BEFORE the WIDTH:
        <img 
            src={require('./img/6-post-installation/6_1_3_mo2_change_resolution_skyrimprefs.png').default}
            alt="MO2 skyrimperfs"
            style={{ width:'auto', height:300 }}
            className="zoomable"
        />

    Hit `Save` at the bottom, and you're done!
    :::

4. Wait untill the game loads, **it might take a while!** 
    :::note
    There's a game of `Flappy Dragon` that opens up while your Skyrim is loading:
    <img 
        src={require('./img/6-post-installation/6_1_4_flappy_dragon.png').default}
        alt="Flappy Dragon"
        style={{ width:'auto', height:250 }}
        className="zoomable"
    />
    Don't worry, _you didn't just download half a terabyte of Flappy Dragon_!

    It's there just to brighten up the waiting time :dragon_face:
    :::

5. When you're in the **main Skyrim menu** &mdash; proceed to the next step.

---

## ![Start the new game](./img/6-post-installation/6-2-start-the-new-game.png)

1. **Start the new game** &mdash; in main menu as normal by pressing `New Game`

2. **Create & name your character** &mdash; choose your character’s appearance and name.

3. **Wait for mod initialization and list auto-configuration**
    :::note
    Since `13.4.1` Licentia NEXT has a **fully automated** list configuration process thanks to our own amazing [@ninjawaffle](https://next.nexusmods.com/profile/ninjawaffle1?gameId=1704)! 

    It would take some time to complete, but you won't have to do anything manually.
    :::

    :::caution
    When you spawn in after character creation, **YOU WON'T BE ABLE TO CONTROL YOUR CHARACTER UNTILL THE LIST HAS FINISHED ITS AUTO-CONFIGURATION!**

    - You will be greeted with this pop-up message:
        <img 
            src={require('./img/6-post-installation/6_2_3_greetings_message.png').default}
            alt="Greetings message from automation script"
            style={{ width:'auto', height:300 }}
            className="zoomable"
        />

    - Read it, click `OK` and wait. The list will now **auto-configure itself**!
    :::

    :::tip
    **This may take a while**, depending on your PC _(from 5 minutes on fast PCs to 20 on slow ones)_. Don't worry, it's normal, just wait.
    :::

    - You'll see various mods being auto-configured in the **top-left corner** of the screen:
        <img 
            src={require('./img/6-post-installation/6_2_3_mods_config_messages.png').default}
            alt="Mod configuration in progress"
            style={{ width:'auto', height:250 }}
            className="zoomable"
        />

    - And our automatic script will send these notifications **every 15-20 seconds** to let you know that we're still in progress:
        <img 
            src={require('./img/6-post-installation/6_2_3_our_config_messages.png').default}
            alt="Auto-configuration progress"
            style={{ width:'auto', height:250 }}
            className="zoomable"
        />

    - When the auto-configuration is done, you'll see this pop-up message:
        <img 
            src={require('./img/6-post-installation/6_2_3_auto_config_finished.png').default}
            alt="Finished message from automation script"
            style={{ width:'auto', height:300 }}
            className="zoomable"
        />

    - Read it for basic start tips, then just click `OK` and you're good to go &mdash; **THE LIST IS COMPLETELY CONFIGURED NOW!** 🎉

    - The last thing before you embark on your Skyrim adventure &mdash; you'll be offered a **divine blessing** with **LVL 5** and/or **1000 gold**. Choose according to your preference:
        <img 
            src={require('./img/6-post-installation/6_2_3_final_gift.png').default}
            alt="Divine blessing"
            style={{ width:'auto', height:300 }}
            className="zoomable"
        />

4. Save your game by pressing `F5` (or from the main menu), exit the game **COMPLETELY TO THE DESKTOP**, start it again via MO2 as described above in step 3, and load that save.

5. **That's it!** Go play the game already :birthday: *(and read the [Final Notes](/final-notes) for more beginner tips and tricks)*.