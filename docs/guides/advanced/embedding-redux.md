---
title: "Embedding Redux"
---

# Embedding Redux into Your Theme or Plugin

::: danger Due to security concerns, we strongly discourage this method of using Redux without your projects.  We update our software monthly, which may 
include pathes to plug security holes.  Unless you plan on updating Redux within your project regularly, the Redux plugin installed via [TGM](http://tgmpluginactivation.com/) is the 
preferred method.
:::

::: danger Never, ever, EVER modify any files in `redux-core`. There are hooks, filters, etc. to bypass nearly anything.
Modifying files within `redux-core` (including dropping in extensions) will only serve to make your life harder should you
ever choose to update.
:::

So you have this really cool Theme or Plugin. And of course you love Redux because, let’s face it, who doesn't? You 
understand how the Redux plugin works, but the concept of a theme or plugin installing another plugin escapes you. Or perhaps
 you might not care for [TGM](http://tgmpluginactivation.com/) or any of its variations. What's one to do?

You've come to the right place. Embedding Redux into your theme or plugin is as easy as 1, 2, 3. You may wonder...what if your client also installs the 
Redux plugin? Will it conflict? The answer is no. Even better, the Redux plug-in will **always** supersede your theme’s require of Redux. 
This means your clients could - hypothetically - receive updates to Redux without any theme update from you. Pretty cool, eh?

Let's begin, shall we?

## Step 1: Get the Source
There are a variety of methods in which to acquire the Redux Framework source code. Please refer to the 
[Basics: Installing](../basics/install.md) guide. Once you've acquired the source, only the `redux-core` folder matters 
(Note: in 3.x, this folder was called `ReduxCore`, but has been re-named to conform with WordPress naming standards.)
You can rename it to anything you prefer. It’s important to choose a name for the folder in which Redux will be contained 
now, as it will be challenging to change the name later. Redux may be placed into any directory or in any path 
(such as ~/admin or ~/framework).


```php
if ( !class_exists( 'ReduxFramework' ) && file_exists( dirname( __FILE__ ) . '/ReduxFramework/redux-core/framework.php' ) ) {
    require_once( dirname( __FILE__ ) . '/ReduxFramework/redux-core/framework.php' );
}
if ( !isset( $redux_demo ) && file_exists( dirname( __FILE__ ) . '/ReduxFramework/sample/sample-config.php' ) ) {
    require_once( dirname( __FILE__ ) . '/ReduxFramework/sample/sample-config.php' );
}
```

Be sure to update the relative path in relation to the file in which the code is executed. It's suggested to place this 
code at the top of your `functions.php` file.

Here is where the true magic of Redux comes into play. Suppose a user has Redux installed by itself via a plugin. Your 
theme is now using the plugin class and **not** the embedded version you included with your theme or 
plug-in! Put another way, your project will just work out of the box, no questions asked! Redux, when installed as a 
plug-in takes priority. Any references that include Redux in your own `framework.php` will be ignored. Redux - installed 
as a plug-in - can be forever updated by the user, and your theme receives the benefit without you ever needing to push 
any code update! What other option framework can claim the same?

The answer: None!
