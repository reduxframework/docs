---
title: "Core Concepts" 
---

# Core Concepts
Redux is a single API that makes it simple to perform various features within WordPress. We'll go over our basic concepts 
to properly grasp how Redux works.

::: warning Table of Contents
[[toc]]
:::

## Never modify core files!
Redux is extremely extensible, which means you can override nearly anything using filters. You will never find a need to modify a core file unless 
you're helping us to solve a bug. __***NEVER***__ **modify anything inside redux-core**. If you want to change how a field works, 
build an extension instead.  Need to modify a value when it's saved? Use a filter.

::: danger Why is modifying `redux-core` files a bad practice when embedded in my own product?
Redux is built to run with only one version of the framework code. If you modify core files in your version, which you 
embed in a product, there's no guarantee your version will be the version loaded should another product be using Redux. 
This will most likely cause conflicts and headaches for you and your clients. By using filters and extensions, you ensure that your code always loads 
despite the "core" that is instantiated first.
:::

## Object Structure
We need to understand the object structure of Redux to understand how it all fits together.

### Field
The lowest building block is a [field](../../configuration/objects/field.md). A [field](../../configuration/objects/field.md) is what is displayed for a user to input data. It has its own set of characteristics 
depending on the [field type](../../core-fields). At this level, whatever args are set to the [field](../../configuration/objects/field.md) act as an override for all levels above.

### Section
A [section](../../configuration/objects/section.md) is a grouping of [fields](../../configuration/objects/field.md). It groups everything together into its own array. It containes a number of arguments that passed down 
to the [fields](../../configuration/objects/field.md) below, provided the [fields](../../configuration/objects/field.md) below do not specify those same arguments on their own declaration. Again, the [fields](../../configuration/objects/field.md) 
level args override all.

### Box
In some cases, such as is with [metaboxes](../../core-extensions/metaboxes-lite.md), an extra grouping is required. Hence, a box. A box is simply a container with a bunch of [sections](../../configuration/objects/section.md) 
within it. The primary purpose of a box is placement on the screen.

### Instance
Instance level arguments are known as [global arguments](../../configuration/global_arguments.md). They impact all areas of 
the instance. Typically, these are arguments that affect how Redux performs, but they can set an entire instance to display
a control panel in the [customizer only](../../configuration/global_arguments.md#customizer-only). If you're not sure what's going on, the problem may be in the [global args](../../configuration/global_arguments.md).

Remember, there can be multiple instances of Redux running in a single WordPress installation. This means that all products based on Redux, be it 
plugins or the theme can be running at once without impacting one another.

## Arguments
Every object has arguments, and every level of nested objects can inherit or override those arguments. When looking at an 
argument, make sure you're thinking of how it will impact all the nested items below it (children).

### Global Arguments
[Global arguments](../../configuration/global_arguments.md) are those arguments which affect every field or how your 
instance of Redux performs. These arguments can [enable/disable the customizer](../../configuration/global_arguments.md#customizer-only) 
by default, change the [menu title](../../configuration/global_arguments.md#menu-title), and set 
fields to [automatically output CSS](../../configuration/global_arguments.md#output) or not. For a more detailed breakdown, 
visit the [Global Arguments](../../configuration/global_arguments.md) page as well as the docs related to each field and setting.

### `opt_name`, your unique instance key
One of the most important global variables is your [opt_name](../../configuration/global_arguments.md#opt-name). This is a 
unique key to distinguish your Redux instance from all others. It's also where your data is stored in the database and 
if you're using the global variable, how you access data within your code.

::: tip Choose an uncommon `opt_name` to avoid issues
If two instances of Redux use the same `opt_name`, they will only override one another's settings in order of occurrence. 
It is crucial that to pick a unique string for your product.
:::
