# :video_game: How to set up a controller for Licentia NEXT

These are the general steps to set up a **controller** for **Licentia NEXT**:
1. Enable all mods in the `Controller` section of MO2
2. Enable Controller in Skyrim
3. Change/Verfiy The Controls
4. Setup `CGO`
5. Setup `The Ultimate Dodge Mod`
6. Setup `Serio’s Cycle Hotkeys` and `True Directional Movement`

> [!TIP]
> Seems like _a lot_, but don't worry &mdash; it only takes a few minutes. Let's dive into the details!

---

## Step :one: &mdash; Enable all mods in the Controller section of MO2

<img src="/images/guides_images/controller_guide/1_enable_controller_mods.png" alt="List of controller mods" style="width:90%; height:auto;">

Here's a **brief description** of these mods:
- **Auto Input Switch** allows you to freely move between keyboard and the controller. Handy in many cases especially using `OStim` controls.

- **The Ultimate Control Scheme** (or `TUCS`) maps the controller to functions. Look at the mod's page for more info.

- **Licentia NEXT - The Ultimate Control Scheme patch** changes **keyboard** setup of `TUCS` to be compatible with the default Licentia NEXT's keyboard controls.

- **Essential Favorites** prevents favorite items from being sold, crafted, disarmed, disenchanted, or dropped. Not _really_ a controller mod but handy.

- **Favorite Misc Items** allows you to favorite books/soul gems/keys and other misc items. Also not really a controller mod, but again - handy!

- **Serio's Cycle Hotkeys** allows players to map hotkeys or use the vanilla hotkeys to equip weapons, shields, shouts, and spells in the right hand, left hand, and shout/power slots. It enables **8** Hotkeys on the controller. Explained at [TUCS modpage](https://www.nexusmods.com/skyrimspecialedition/mods/29381).

- **Wait Menu Redirected AE Support** makes the wait menu only able to open inside tween menu, in order to free the usage of wait button outside menu mode for gamepad.

## Step :two: &mdash; Enable Controller in Skyrim

In standard Skyrim's **settings menu**, enable controller like this:

<img src="/images/guides_images/controller_guide/2_enable_controller.png" alt="Controller enabled in settings" style="width:70%; height:auto;">

## Step :three: &mdash; Verify the controls

Verify that **Sneak** is set to `B` *(it should be, but just in case)*. This is necessary for `The Ultimate Dodge Mod`.

<img src="/images/guides_images/controller_guide/3_set_controls.png" alt="Sneak is set to B" style="width:70%; height:auto;">

## Step :four: &mdash; Setup CGO

Open `Mod Configuration` (MCM) menu, find `CGO`, it's settings should look like this:

<img src="/images/guides_images/controller_guide/4_setup_CGO.png" alt="CGO settings" style="width:70%; height:auto;">

Here set:
- **Switch Grip** - `DPad UP`
- **Dual Wield Blocking** - `DPad Down`

## Step :five: &mdash; Setup The Ultimate Dodge Mod (TUDM)

Again, in `Mod Configuration` (MCM) menu find `The Ultimate Dodge Mod`.

> [!WARNING]  
> This is a little counter intuitive, so read carefully!

Make these changes:
- Set the **Sneak Key** to `Left Arrow`. _We use Left arrow for Sneak because we use QuickLoot. Navigating that screen with the DPAD up and down causes sneaking hilarity._
- Your **Dodge Key** will now be `B` because that is what you've set in `Controls` ([Step 3](#step-3-changeverify-the-controls)). That's just the way things work.
- **DO NOT SET** `Gamepad/Controller Compatibility`, leave it _unticked_. Enabling it makes things incompatible, i.e. sprinting doesn't work. Why? Ask Todd :suspect:

Anyway, your settings **should look like this**:

<img src="/images/guides_images/controller_guide/5_setup_The_Ultimate_Dodge_Mod.png" alt="TUDM settings" style="width:70%; height:auto;">

## Step :six: &mdash; Setup Serio's Cycle Hotkeys and True Directional Movement

Let's setup `Serio's Cycle Hotkeys` mod:
- Open the mod's `MCM` and configure _setter_ hotkey as `Home` _(you can also tick `Use vanilla keys`, but we really don't see much of a difference one way or the other)_:

    <img src="/images/guides_images/controller_guide/6_setup_Serios_Cycle_Hotkeys.png" alt="SCH settings" style="width:70%; height:auto;">

- Press `Home` when you are in game and have weapons equipped - **the mod's dialog will pop up, where you can set your keys**. Refer to the [mod page](https://www.nexusmods.com/skyrimspecialedition/mods/27184) for detailed instructions!

As for `True Directional Movement` mod - just read the note below.
> [!NOTE]
> A note about **Target Lock** - that setting is located inside `True Directional Movement` MCM, and should be already configured - **just verify it looks like the screenshot:**
>
> <img src="/images/guides_images/controller_guide/7_setup_True_Directional_Movement.png" alt="TDM settings" style="width:70%; height:auto;">

## :pushpin: Final configuration 
Your control map now looks like this:
| Button | Action |
| :--- | :--- |
|**Start** | Journal |
|**Back** | Wait |
|**LT** | Left Attack |
|**RT** | Right attack |
|**LB+Back** | Quicksave |
|**RB+Start** | Tween menu (character menu) |
|**LB+RB** | Shout (in that order, you kinda have to roll your fingers across them) |
|**LB** | Looking for something to do |
|**RB** | Sprint |
|**LS** | Favorites |
|**RS** | Switch POV/Long Press Target Lock |
|**A** | Activate |
|**B** | Roll/Dodge |
|**X** | Ready weapon |
|**Y** | Jump |
|**DPad Left** | Sneak / Stop Sneaking |
|**DPad Up** | Switch grip between 1-handed and 2-handed (CGO) |
|**DPad Down** | Dual Wield Blocking |

---

**That's it!**
Go kill a dragon! :dragon:
