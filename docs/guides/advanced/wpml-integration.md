---
title: "WPML Integration"
---

# WPML Integration
So you've embedded Redux into your theme or plugin, and you want to translate it with WPML.

What happens with the option fields used with Redux?

Can they also be translated with WPML?

The answer is yes, and we'll explain everything in simple steps.

::: warning Table of Contents
[[toc]]
:::


## Step 1: Find your opt_name variable
The `opt_name` variable is found in your Redux configuration file. An example can be found in 
Redux's [`sample-config.php`](https://github.com/reduxframework/redux-framework/blob/master/sample/sample-config.php), included in the Redux plugin.

This is the variable name saved in the *wp_options* table. In this example opt_name is: `my-theme-options`.

You'll need to define your own unique variable name for your theme or plugin.
```php
$opt_name = "OPT_NAME"; // TODO - Replace with your opt_name
$theme = wp_get_theme();
Redux::set_args( $opt_name, array(
    'display_name'         => $theme->get( 'Name' ),
    'display_version'      => $theme->get( 'Version' )
) );
```
        
## Step 2: Select the options you want to translate
Let's say we want to translate three fields. To make it more interesting we'll demonstrate three different types of options.

**A text field**
```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array( 
    'id'       => 'my-sample-textfield',
    'type'     => 'text',
    'title'    => esc_html__( 'Sample Text Field', 'your-text-domain' ),
    'subtitle' => esc_html__( 'This is the subtitle.', 'your-text-domain' ),
    'desc'     => esc_html__( 'This is the description.', 'your-text-domain' ),
    'default'  => 'Sample Text'
) );
```    

**A textarea with editor**
```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array( 
    'id'       => 'my-sample-textarea',
    'type'     => 'editor',
    'title'    => esc_html__( 'Sample Text Area', 'your-text-domain' ),
    'subtitle' => esc_html__( 'Write here your copyright text!', 'your-text-domain' ),
    'default'  => 'Powered by Redux Framework.',
) );    
```

**A sortable text field array**
```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array( 
    'id'       => 'my-sample-sortable-textfield',
    'type'     => 'sortable',
    'title'    => esc_html__( 'Sample Sortable Text Option', 'your-text-domain' ),
    'subtitle' => esc_html__( 'This is a subtitle.', 'your-text-domain' ),
    'desc'     => esc_html__( 'This is the description.', 'your-text-domain' ),
    'options'  => array(
        'si1' => 'Item 1',
        'si2' => 'Item 2',
        'si3' => 'Item 3',
    )
) );
```

To summarize, in our scenario we have:

- A text field with id: `my-sample-textfield`
- A textarea with id: `my-sample-textarea`
- A sortable text array with id: `my-sample-sortable-textfield` and options `si1` `si2` `si3`

The id's of the fields will be our WPML translation keys. In case of an array also the options are keys. Write them down.

## Step 3: Add your keys in `wpml-config.xml`

WPML can read a configuration file that tells it what needs translation in themes and plugins. The file is named 
`wpml-config.xml` and it’s placed in the root folder of the plugin or theme.

To translate a single option, we need a key entry under admin-texts. To translate a serialized array, we must add 
several keys under a key.

If the admin-texts block does not exist, you have to write it yourself.
This is how our admin-texts block should look like.
```xml
<admin-texts>
    <key name="my-theme-options">
        <key name="my-sample-textfield" />
        <key name="my-sample-textarea" />
        <key name="my-sample-sortable-textfield">
            <key name="si1" />
            <key name="si2" />
            <key name="si3" />
        </key>
    </key> 
</admin-texts>
```

The first key is always our opt_name e.g.: `my-theme-options`. The single options as a self-closed key tag and the 
serialized array as a nested key block.

For the WPML config file, refer to the official website: [WPML Language Configuration Files](http://wpml.org/documentation/support/language-configuration-files/)

## Step 4: Translate your admin texts via WPML

If not already, you have to save the *Admin Language* in WPML menu ( Set Default admin language ). Now you can translate 
your admin texts via WPML interface under WPML - String Translation. The context for themes is a concatenation of 
`admin_texts_theme_` + your theme name

And you are finally set! 
