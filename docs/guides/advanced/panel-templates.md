---
title: "Panel Templates"
---

# Panel Templates
As of Redux **3.4.3+**, the Redux templates have been decoupled from the core. That means that ANY 
developer can take the template files and override them for their own customized Redux panel.

::: warning Table of Contents
[[toc]]
:::

## How's it done?
To do this is simple. First, copy the templates from `~/redux-core/templates/panel` to a different location.

::: danger
Never, ever, **EVER** modify `redux-core`. Always move things out of the core to make modifications.
:::

Tell Redux where these new files are, via the [`templates_path`](../../configuration/global_arguments.md#templates_path) argument. That's it!

#### What if you change something?
Our templates use the same version methods of other products. If your panel is in `dev_mode` a notice will display in the panel
when a template file has been updated in the core.

## Won't this Change All Panels?
We built Redux so each panel may have its own set of templates. It's all powered by the `opt_name` key.  Your customizations 
are yours and yours alone as long as keys are not shared with another panel.

## Template Files

|Template File|Description|
|--|--|
|[container.tpl.php](https://github.com/reduxframework/redux-framework/tree/master/redux-core/templates/panel/container.tpl.php)|The template for the main panel container.|
|[content.tpl.php](https://github.com/reduxframework/redux-framework/tree/master/redux-core/templates/panel/content.tpl.php)|The template for the main content of the panel.|
|[footer.tpl.php](https://github.com/reduxframework/redux-framework/tree/master/redux-core/templates/panel/footer.tpl.php)|The template for the panel footer area.|
|[header.tpl.php](https://github.com/reduxframework/redux-framework/tree/master/redux-core/templates/panel/header.tpl.php)|The template for the panel header area.|
|[header_stickybar.tpl.php](https://github.com/reduxframework/redux-framework/tree/master/redux-core/templates/panel/header_stickybar.tpl.php)|The template for the header sticky bar.|
|[menu_container.tpl.php](https://github.com/reduxframework/redux-framework/tree/master/redux-core/templates/panel/menu_container.tpl.php)|The template for the menu container of the panel.|
