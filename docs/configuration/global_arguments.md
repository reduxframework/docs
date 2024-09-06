---
title: Global Arguments 
---

# Global Arguments Reference

Redux offers arguments at a variety of levels. Those at the instance level are referred to as global arguments and are as follows.

::: tip
See the [Redux::set_args()](api.md#redux-set-args) documentation on how to set them.
:::

::: warning Global arguments in alphabetical order
[[toc]]
:::

## admin_bar
**Default**: `true`

If set to true, the option panel will appear in the admin bar, making it easy for your users to quickly access the panel.

## admin_bar_icon
**Default**: `dashicons-admin-generic`

String value indicated which icon to use for the admin bar icon. Please refer to the 
[Dashicons Cheat Sheet](http://calebserna.com/dashicons-cheatsheet/) for a list of available icons.

## admin_theme
**Default**: `wp`

Set the option panel's theme.  Accepts `wp|classic`.  `wp` will load the currently seleected admin theme, while `classic` loads the Redux v3 styling.

## allow_sub_menu
**Default**: `true`

Determines whether section labels are displayed below the admin menu.

## async_typography
::: warning DEPRECATED
This argument has been deprecated in Redux 4.x.  Please use the `font_display` argument instead.
:::

## cdn_check_time
::: warning DEPRECATED
This argument has been deprecated.
:::

## class
Set to append any number of classes to the main Redux class attribute.

## customizer
**Default**: `true`

Set the flag to enable or disabled basic 
[WordPress customizer](http://en.support.wordpress.com/customizer/) support.

## customizer_only
**Default**: `false`

Determines whether to hide the options panel (leaving options accessible only through the 
customizer). For developing themes specifically for wordpress.org, this argument will need to be set to 

## database
**Default**: `''`

For normal operation, leave this argument blank, otherwise, choose from one of the following modes. Modes marked as 
experimental have not been fully tested and may not function properly:

- `transient`: (experimental) - Sets options as transients, and will expire in the time set via 
[transient_time](#transient-time).
- `theme_mods`, `theme_mods_expanded` (both experimental) - Saves modifications for the current theme.

## default_mark
**Default**: `''`

Specify the symbol to print beside the field's title when the field is set to the default value. [Default_show](#default-mark) must be set to true. The `*` symbol is recommended.

## default_show
**Default**: `false`

Enables or disables whether the field's default value is displayed beside the field's 
title.

## dev_mode
**Default**: `true`

Enables or disables Redux's developer mode. When developer mode is set to true, the load time 
is displayed at the bottom of the options panel. Also, Redux loads all fields and core JavaScript in non-minimized form.

## disable_google_fonts_link
**Default**: `false`

If set to true, the Google fonts link output for typography will be enabled.

## disable_save_warn
**Default**: `false`

Determines if the 'save changes' notice appears at the top of the option panel when any changes are made.

## display_name
**Default**: `$theme->get('Name')`

Set the title that appears at the top of the options panel.

## display_version
**Default**: `$theme->get('Version')`

Set the version number that appears after the title at the top of the options panel.

## elusive_frontend
**Default**: `false`

Set this argument to `true` if you require the elusive fonts loaded on the front end.

## flyout_submenus
**Default** `true`

Enables or disables the flyout submenus for submenus on the option panel.

## font_display
**Default**: `swap`

Determines how a font face is displayed based on whether and when it is downloaded and ready to use.  Accepts `auto|block|swap|fallback|optional`.  See [https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) for more information.

## footer_text
**Default**: `<p>This text is displayed below the options panel. It isn't required, but more info is 
always better! The footer_text field accepts all HTML.</p>'`

Set the text to be displayed at the bottom of the options panel, in the footer section. Use of HTML is 
permitted.

## global_variable
**Default**: `''`

This argument serves two purposes:

* 1. Rename the global variable from the `opt_name` value.
* 2. Disable the global variable from being completely defined if the value is set to `false`.


## google_api_key
::: warning DEPRECATED
This argument has been deprecated in Redux 4.x
:::

## google_update_weekly
::: warning DEPRECATED
This argument has been deprecated in Redux 4.x
:::

## help_sidebar

<span style="display:block;text-align:center">![](img/help_tab.png)</span>

**Default**: `<p>This is the sidebar content, HTML is allowed.</p>`

Set the text that appears on the left-hand side of the help dropdown at the top of the option panel page. HTML is permitted. Any text passed should be surrounded by the `<p>` paragraph tags.

**Example:**
```php
$content = '<p>' . esc_html__( 'This is the sidebar content, HTML is allowed.' . '</p>', 'your-textdomain-here' );
Redux::set_help_sidebar( $opt_name, $content );
```

Alternatively, set the global arg `help_sidebar` in this manner to produce the same result.

```php
$content = '<p>' . esc_html__( 'This is the sidebar content, HTML is allowed.' . '</p>', 'your-textdomain-here' );
Redux::set_args( $opt_name, array( 'help_sidebar' => $content ) );
```

::: warning Redux 3.x Users
For function name changes, please refer to the [Redux 4.x Migration](../guides/other/migration-guide.md) guide.
:::

## help_tabs
<span style="display:block;text-align:center">![](img/help_tab.png)</span>

Set the individual tabs in the help dropdown. HTML is permitted. Any text passed should be surrounded by the `<p></p>` paragraph tags.


|Name|Type|Description|
|--- |--- |--- |
|id|string|A unique ID representing the individual help tab.|
|title|string|Text representing the title of the help tab.|
|content|string|Text to display in the help tab content area. This string should be surrounded by `<p></p>` paragraph tags. HTML is permitted.|


**Example:**
```php
Redux::set_help_tab( 
    $opt_name, 
    array(
        array(
            'id'      => 'redux-help-tab-1',
            'title'   => esc_html__( 'Theme Information 1', 'your-project-name' ),
            'content' => '<p>'.  esc_html__( 'This is the tab content, HTML is allowed.' . '</p>', 'your-project-name' )
        ),
        array(
            'id'      => 'redux-help-tab-2',
            'title'   => esc_html__( 'Theme Information 2', 'your-textdomain-here' ),
            'content' => '<p>' . esc_html__( '<p>This is the tab content, HTML is allowed.' . '</p>', 'your-project-name' )
        )
    ) 
);
```

Alternatively, set the global arg `help_tabs` in this manner to produce the same result.

```php
Redux::set_args( 
    $opt_name, 
    array( 'help_tabs' => array(
        array(
            'id'      => 'redux-help-tab-1',
            'title'   => esc_html__( 'Theme Information 1', 'your-textdomain-here' ),
            'content' => '<p>' . esc_html__( 'This is the tab content, HTML is allowed.' . '</p>', 'your-textdomain-here' )
        ),
        array(
            'id'      => 'redux-help-tab-2',
            'title'   => esc_html__( 'Theme Information 2', 'your-textdomain-here' ),
            'content' => '<p>' . esc_html__( 'This is the tab content, HTML is allowed.' . '</p>', 'your-textdomain-here' )
        )
    ) 
);
```

::: warning Redux 3.x Users
For function name changes, please refer to the [Redux 4.x Migration](../guides/other/migration-guide.md) guide.
:::

## hide_expand
**Default**: `false`

Determines if the 'Expand Options' button is visible on the options panel.

## hide_reset
**Default**: `false`

Determine if the 'Reset All and 'Reset Section' buttons are visible on the options panel.

## hints
The [hints argument](fields/hints.md) requires settings involving multiple arrays. Thus, an entire article has been devoted to its usage. Read more on [using Hints in fields](fields/hints.md).

## intro_text
**Default**: `<p>This text is displayed above the options panel. It isn\'t required, but more info is always better! The intro_text field accepts all HTML.</p>`

Set the text that appears at the top of the options panel, but below the title. HTML is permitted.

## last_tab
**Default**: `''`

Sets forces the option panel to open at the specified tab number.

## load_on_cron
**Default**: `false`

Redux, by design, will not run when cron jobs are triggered.  If you require the global varaiable to be set with your theme options during a cron job, set this argument to `true`.

## menu_icon
**Default**: `''`

Accepts a URL to a custom icon to be displayed in the primary menu icon.

## menu_type
**Default**: `menu`

Set whether the admin menu is displayed. Accepts either `menu`, `submenu`, or `hidden`.

## menu_title
**Default**: `Sample Options`

Set the text to display as the admin menu's label, and only when the admin menu is available.

## open_expanded
**Default**: `false`

Determines if the option panel sidebar is to be displayed. This may be useful for an option panel with only one section.

## opt_name
**Default**: `redux_demo`

Sets where all option data is stored in the database. It also acts as the global variable in which data options are retrieved via code.

## output
**Default**: `true`

Acts as a global shut-off for the framwork's dynamic CSS output. When set to false, Google fonts are also disabled.

## output_tag
**Default**: `true`

Set whether dynamic CSS will be generated for the customizer and Google fonts. However, when set to false, dynamic CSS will no longer print to the page head.

## page_icon
**Default**: `icon-themes`

Set the icon appearing in the admin panel, next to the menu title.

## page_parent
**Default**: `themes.php`

Sets where the option menu will be placed on the WordPress admin sidebar. For a full list of options, visit: <a href="http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters">http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters</a>

## page_priority
**Default**: `''`

Accepts a number specifying where the menu will appear in the admin area.

## page_permissions
**Default**: `manage_options`

Set the permission level required to access the options panel. For a complete list of roles and capabilities, please visit this page: [https://codex.wordpress.org/Roles_and_Capabilities](https://codex.wordpress.org/Roles_and_Capabilities)

## page_slug
**Default**: `_options`

Set the page slug to denote the options panel. It's recommended to place a unique string (i.e. - theme name) before the value's underscore.

## page_title
**Default**: `Sample Options`

Set the title to be displayed on the panel page.

## save_defaults
**Default**: `true`

Set whether the default values are saved to the database on load before saving changes.

## settings_api
**Default**: `true`

Turns off the use of the settings API. Primarily useful for Customizer-Only instances.

## share_icons

Set an array of social website icons at the bottom-left of the options panel, before the footer. Any icon or link may be used to indicate any social networking site. Each icon requires its own array block, as shown above.

|Name|Type|Description|
|--- |--- |--- |
|url|string|Full URL to your specific page of the chosen social networking site.|
|title|string|Title to display as the alt tag of the icon.|
|icon|string|Specific [Elusive Icon](http://shoestrap.org/downloads/elusive-icons-webfont/) to display.|
|img|string|Optional. Full URL to the icon to use in place of a font icon.|


```php
$args['share_icons'][] = array(
    'url'   => 'https://twitter.com/reduxframework',
    'title' => 'Follow us on Twitter',
    'icon'  => 'el el-twitter'
);

$args['share_icons'][] = array(
    'url'   => 'https://www.linkedin.com/company/redux-framework',
    'title' => 'Find us on LinkedIn',
    'icon'  => 'el el-linkedin'
);
``` 

## show_import_export
**Default**: `true`

Set whether Redux will display the Import/Export tab at the bottom of the options panel. Please note, if the Import / Export feature is used as a field, this tab will not display regardless of the value set to it.

## transient_time
**Default**: `60 * MINUTE_IN_SECONDS`

Set the amount of time to assign to transient values used within Redux. This is an advanced option. If you do not understand what it does, please do not change it.

## update_notice
::: warning DEPRECATED
This argument has been deprecated in Redux 4.x
:::

Set whether Redux will display an admin notice when a new build is ready for download via [GitHub](https://github.com/ReduxFramework/redux-framework). This feature is only available when `dev_mode` is set to `true`.

## use_cdn
::: warning DEPRECATED
This argument has been deprecated.
:::