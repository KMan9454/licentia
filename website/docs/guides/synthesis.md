---
sidebar_position: 1
title: "Synthesis Guide"
hide_title: true
slug: /synthesis-guide
description: "Licentia NEXT - Synthesis Guide"
image: ./img/synthesis-guide.png
---

# ![Synthesis Guide](./img/synthesis-guide.png)

---

## <p align="center">:recycle: How to re-run Synthesis for Licentia NEXT</p>

:::note
**WHY YOU MIGHT NEED THIS?**

You added/updated various mods that are affected by Synthesis (new locations, armors, food, etc).

You want to rerun Synthesis for any other reason.
:::

These are the general steps to **re-running Synthesis** for **Licentia NEXT**:
1. Disable old `Synthesis` outputs
2. Launch `Synthesis` from MO2
3. Check the patches list
4. Run `Synthesis` 3 times
5. Move your new generated Synthesis outputs to a separate mod
6. Enable plugins disabled in Step :one:

:::tip
:clock1: This process takes around 5 minutes. Let's dive into the details!
:::

---

### <p align="center">Step :one: &mdash; Disable old `Synthesis` outputs</p>

1. Open your `MO2`, in left pane find mod called `Licentia NEXT - Synthesis Output` and disable it:
    <img 
        src={require('./img/synthesis_guide/1_1_disabling_synthesis_output_mo2.png').default}
        alt="Disabling LN synthesis output in MO2"
        style={{ width:'auto', height:100 }}
        className="zoomable"
    />

2. In right section with plugins, scroll to the bottom and disable these plugins (we will enable them again later):
    <img 
        src={require('./img/synthesis_guide/1_2_disabling_plugins_mo2.png').default}
        alt="Disabling plugins in MO2"
        style={{ width:'auto', height:100 }}
        className="zoomable"
    />

---

### <p align="center">Step :two: &mdash; Launch `Synthesis` from MO2</p>

:::tip
Ensure that **all antivirus and antimalware applications are temporarily disabled**. They can prevent _Synthesis_ from running correctly.
:::

In `MO2`, in top right corner of the window, click on the dropdown menu and select `Synthesis`, then click `Run`:
    <img 
        src={require('./img/synthesis_guide/2_running_synthesis_in_mo2.png').default}
        alt="Opening Synthesis in MO2"
        style={{ width:'auto', height:100 }}
        className="zoomable"
    />

---

### <p align="center">Step :three: &mdash; Check the patches list</p>

When `Synthesis` is launched, check out the left pane with patches. They should match this:

    <img 
        src={require('./img/synthesis_guide/3_1_synthesis0.png').default}
        alt="Synthesis 0 patch list"
        style={{ width:'auto', height:150 }}
        className="zoomable"
    /> <img 
        src={require('./img/synthesis_guide/3_2_synthesis1.png').default}
        alt="Synthesis 1 patch list"
        style={{ width:'auto', height:150 }}
        className="zoomable"
    /> <img 
        src={require('./img/synthesis_guide/3_3_synthesis2.png').default}
        alt="Synthesis 2 patch list"
        style={{ width:'auto', height:150 }}
        className="zoomable"
    />

---

### <p align="center">Step :four: &mdash; Run `Synthesis` 3 times</p>

Now, you have to do this:

1. Click `Run` arrow under `Synthesis0` in the left pane;
2. When if finishes, **CLOSE SYNTHESIS**!
3. You will see that `Synthesis0.esp` appeared in the right pane of MO2, enable it;
4. Run `Synthesis` again in MO2;
5. Repeat **steps 1-4** for `Synthesis1`;
6. Repeat **steps 1-3** for `Synthesis2`.

:::warning
**DON'T RUN ALL 3 SYNTHESIS PATCHES IN A ROW (OR ALL AT ONCE)! ALWAYS CLOSE SYNTHESIS AFTER EACH RUN!**

Failing to do that will break consistency of the patches!
:::

---

### <p align="center">Step :five: &mdash; Move your new generated Synthesis outputs to a separate mod</p>

1. In `MO2`, scroll to the bottom in the left pane, and right click on the `ADDED MODS - Make your additions below this line` separator. In the submenu, click `All Mods`, then select `Create Empty Mod Inside`.
    <img 
        src={require('./img/synthesis_guide/5_1_creating_empty_mod_in_mo2.png').default}
        alt="Create Empty Mod"
        style={{ width:'auto', height:100 }}
        className="zoomable"
    />

    You will now be prompted to name your custom mod, this can be named however you want.

    :::tip
    Adding `[NoDelete]` before the name will make the mod not be removed upon updating the list.

    Upon updating the mod will be deactivated and moved to the bottom of the last separator, and you can simply move it into place and enable it.
    :::

    Now, right click on the newly created mod and select `Open in Explorer`. This will open the mod folder in your file explorer, **keep it open**.

2. In the bottom of `MO2` left pane right-click on `Overwrite` and select `Open in Explorer`. This will open the `Overwrite` folder in your file explorer. **Keep it open**.
    <img 
        src={require('./img/synthesis_guide/5_2_overwrite.png').default}
        alt="Overwrite folder"
        style={{ width:'auto', height:120 }}
        className="zoomable"
    />

3. Move all 3 `Synthesis` .esp's from Overwrite to your newly created mod in file explorer.

4. Close both file explorers and go back to `MO2`. Hit `F5` to refresh it.

5. Make sure all 3 `Sythesis` outputs are enabled in the plugins list on the right.

---

### <p align="center">Step :six: &mdash; Enable plugins disabled in Step :one:</p>

In right part of `MO2` just enable the plugins you disabled in Step :one:'s [second part](#step-one--disable-old-synthesis-outputs), and you're done!

The final picture should look like this *(only the names of plugins matter here, not numbers)*:
    <img 
        src={require('./img/synthesis_guide/6_final.png').default}
        alt="Final MO2 setup"
        style={{ width:'auto', height:150 }}
        className="zoomable"
    />
