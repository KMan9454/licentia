---
sidebar_position: 1
title: "Nemesis Guide"
hide_title: true
slug: /nemesis-guide
description: "Licentia NEXT - Nemesis Guide"
image: ./img/nemesis-guide.png
---

# ![Nemesis Guide](./img/nemesis-guide.png)

---

## <p align="center">👯‍♀️ How to re-run Nemesis for Licentia NEXT</p>

:::note
**WHY YOU MIGHT NEED THIS?**

You added/updated NSFW, regular or combat animations that don't work with `DAR` or `OAR`; if you don't rerun Nemesis - your characters will _T-Pose_.

You want to rerun Nemesis for any other reason.
:::

These are the general steps to **re-running Nemesis** for **Licentia NEXT**:
1. (optional) Make sure `Nemesis Unlimited Behavior Engine.exe` is LAA patched
2. Launch `Nemesis Unlimited Behavior Engine` from MO2
3. Setup behavior patches and click `Update Engine`
4. Click `Launch Nemesis Engine`
5. Close the tool, remove `FNIS.esp`, done!

:::tip
:clock1: This process takes around 10 minutes. Let's dive into the details!
:::

---

### <p align="center">Step :one: &mdash; _(optional)_ Make sure `Nemesis Unlimited Behavior Engine.exe` is LAA patched</p>

:::note
Unfortunately, Nemesis is old and 32-bit.
You will need to patch it with **Large Address Aware (LAA)** to prevent crashes.

It can be run without it, but it's **highly recommended** to patch it.
:::

**Here's how to do it:**
1. Download [Large Address Aware](https://www.techpowerup.com/forums/attachments/laa_2_0_4-zip.34392/)
2. Extract the archive anywhere you want.
3. Run `Large Address Aware.exe`:
    <img 
        src={require('./img/nemesis_guide/1_1_run_LAA.png').default}
        alt="Running LAA"
        style={{ width:'auto', height:100 }}
        className="zoomable"
    />

4. When the program is opened, click `Add` -> `Files`:
    <img 
        src={require('./img/nemesis_guide/1_2_LAA_add_file.png').default}
        alt="Adding file to LAA"
        style={{ width:'auto', height:250 }}
        className="zoomable"
    />
    
    Navigate to `Nemesis Unlimited Behavior Engine.exe` in your MO2 mods folder (it would be something like `%your_LN_install_path%\mods\Project New Reign - Nemesis Unlimited Behavior Engine - BLACK Profile\Nemesis_Engine\Nemesis Unlimited Behavior Engine.exe`), and click `Open`:

    <img 
        src={require('./img/nemesis_guide/1_3_LAA_select_nemesis_exe.png').default}
        alt="Selecting nemesis exe for LAA"
        style={{ width:'auto', height:300 }}
        className="zoomable"
    />

5. Now in `LAA` window, click on the tickbox next to `Nemesis Unlimited Behavior Engine.exe` _(1)_, then open `With Selected` menu _(2)_ and click `Force Large Address Aware` _(3)_:
    <img 
        src={require('./img/nemesis_guide/1_4_LAA_add_flag_to_nemesis.png').default}
        alt="Setting LAA flag"
        style={{ width:'auto', height:250 }}
        className="zoomable"
    />

6. Now on the right side of the window make sure that field `LAA` is set to `True`:
    <img 
        src={require('./img/nemesis_guide/1_5_LAA_flag_added.png').default}
        alt="Checking LAA flag"
        style={{ width:'auto', height:150 }}
        className="zoomable"
    />

7. Close the program, you're done! Proceed to next step.

---

### <p align="center">Step :two: &mdash; Launch `Nemesis Unlimited Behavior Engine` from MO2</p>

:::tip
Ensure that **all antivirus and antimalware applications are temporarily disabled**. They often prevent _Nemesis_ from completing correctly.
:::

Open your `MO2`, in top right corner of the window, click on the dropdown menu and select `Nemesis Unlimited Behavior Engine`, then click `Run`:

<img 
    src={require('./img/nemesis_guide/2_1_run_nemesis_from_mo2.png').default}
    alt="Opening Nemesis in MO2"
    style={{ width:'auto', height:150 }}
    className="zoomable"
/>

---

### <p align="center">Step :three: &mdash; Setup behavior patches and click `Update Engine`</p>

1. When `Nemesis` window opens, in it's top part tick the boxes for the following patches:
   - Archery Gameplay Overhaul SE
   - Precision
   - Precision Creatures
   - TUDM Attack Cancel
   - Extra Drawing Animations
   - Combat Gameplay Overhaul SE
   - Dual Wield Behavior Fixes
   - Skyrim's Paraglider
   - Sprint Swimming Redux
   - Retimed Hit Frame
   - The Ultimate Dodge Mod
   - USSEP Behaviour Patch

    That's where you should tick them:

    <img 
        src={require('./img/nemesis_guide/3_1_select_patches.png').default}
        alt="Selecting Nemesis patches"
        style={{ width:'auto', height:350 }}
        className="zoomable"
    />

    :::tip
    It's the default list for Licentia NEXT, if you have any additional mods that require Nemesis and provide a patch, make sure to tick them as well.
    :::

2. Click `Update Engine`:
    <img 
        src={require('./img/nemesis_guide/3_2_update_engine.png').default}
        alt="Updating Nemesis Engine"
        style={{ width:'auto', height:250 }}
        className="zoomable"
    />

    Wait for the process to finish _(wait for the bar on the bottom to reach 100%)_. **It will take a few minutes**, so be patient:

    <img 
        src={require('./img/nemesis_guide/3_2_update_engine_done.png').default}
        alt="Updating Nemesis Engine done"
        style={{ width:'auto', height:250 }}
        className="zoomable"
    />

    :::warning
    If the process errors out - you will need to keep trying until it completes.
    If you can't get it to go after multiple tries - **there's something wrong with your additional animation mod's behavior files**, and you will be forced to discard it.
    :::

---

### <p align="center">Step :four: &mdash; Click `Launch Nemesis Engine`</p>

1. Click `Launch Nemesis Behavior Engine`. 
    <img 
        src={require('./img/nemesis_guide/4_1_launch_engine.png').default}
        alt="Launching Nemesis Engine"
        style={{ width:'auto', height:250 }}
        className="zoomable"
    />

    The tool will now _slowly_ integrate your animation files into the behaviors:
    <img 
        src={require('./img/nemesis_guide/4_1_engine_running.png').default}
        alt="Nemesis Engine running"
        style={{ width:'auto', height:220 }}
        className="zoomable"
    />

    :::tip
    This process may look as if it is stuck or not responding, give it about 5 minutes before giving up.

    If it does not complete, or it does not reach 100%, your run has errored out and you must keep trying.
    :::

    :::note
    Please note (cause I've been asked about this a few times) - **the real progress bar** is AT THE BOTTOM!

    **The bar on top** (under patches) is just showing the amount of animations that you have.
    It's ok for it to turn **RED**, just make sure it doesn't exceed the limit (i.e. reach _fully_ to the right)
    :::

2. When you see that the engine is fully done (bar at the bottom reaches 100% and disappears, and the log says `Behavior generation complete`) - close `Nemesis` and return to `MO2`.
    <img 
        src={require('./img/nemesis_guide/4_1_engine_done.png').default}
        alt="Nemesis Engine done"
        style={{ width:'auto', height:220 }}
        className="zoomable"
    />

    :::warning
    Nemesis is prone to crashing during generating behaviours, especially if you didn't do the first (optional) step.

    But don't worry! You can just relaunch it and start from [step 3](#step-three--setup-behavior-patches-and-click-update-engine), it won't break anything.
    :::

<details>
   <summary>:information_source: Here's some additional troubleshooting steps just in case</summary>

Sometimes this step will never complete regardless of how many times you try and additional troubleshooting is needed.
There are still options to fix this however! 
1. Find the `Licentia NEXT - Nemesis Output` mod on the left pane in MO2, open it in explorer and delete **every file located inside,** then **refresh MO2** by striking the `F5` key.
2. Ensure that your `Licentia NEXT - Nemesis Output` folder is still empty and launch _Nemesis_ a final time. It will prompt for your language - make certain that it is English - and you will need to check all the proper boxes again as in [step 3](#step-three--setup-behavior-patches-and-click-update-engine). Then do next part of [step 3](#step-three--setup-behavior-patches-and-click-update-engine) and [step 4](#step-four--click-launch-nemesis-engine) once more.
3. If this **STILL** does not work, you must reset all default behavior files by reinstalling the mod `Project New Reign - Nemesis Unlimited Behavior Engine - BLACK Profile` under the **SFW Animations** section of MO2. You can do this by simply right-clicking on it and choosing `Reinstall`. There shouldn't be any options you need to configure. It should be almost guaranteed to work this time. If it doesn't, I am stumped, and you will need to resort to Google.
4. Once you do finish running _Nemesis_ successfully, **refresh MO2** with the `F5` key.

</details>

---

### <p align="center">Step :five: &mdash; Close the tool, remove `FNIS.esp`, done!</p>
1. As the tool is now closed, in right MO2 pane in `Plugins` section you'll see that a wild `FNIS.esp` appeared at the end!
    <img 
        src={require('./img/nemesis_guide/5_1_fnis_in_plugins.png').default}
        alt="Wild FNIS.esp"
        style={{ width:'auto', height:100 }}
        className="zoomable"
    />

2. We don't need it, so:
   
   - Right-click it, select `Open Origin in Explorer`:
        <img 
            src={require('./img/nemesis_guide/5_1_fnis_open_origin.png').default}
            alt="FNIS.esp open origin"
            style={{ width:'auto', height:100 }}
            className="zoomable"
        />

   - Delete the `FNIS.esp` in the opened explorer window:
        <img 
            src={require('./img/nemesis_guide/5_1_fnis_delete.png').default}
            alt="Deleting FNIS.esp"
            style={{ width:'auto', height:200 }}
            className="zoomable"
        />

3. Close the folder that was opened and return to `MO2`, hit `F5` to refresh the modlist, and **that's it, you're done!** :crown: