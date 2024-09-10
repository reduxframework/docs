---
title: "Overriding Redux CSS"
---

# Overriding Redux CSS
We understand customization is important to any developer. That’s why we've provided a few useful hooks to enqueue or 
dequeue our default CSS files. Interested? Read on!

::: danger
Be sure to prefix all the function names below to avoid conflicts with another developer's code. 
:::

::: warning Table of Contents
[[toc]]
:::

## Appending CSS
Let's say you want to append some custom CSS to your panel. Here is how this is achieved.

```php
$opt_name = 'OPT_NAME'; # TODO - Replace with your opt_name
function add_panel_css() {
    wp_register_style(
        'redux-custom-css',
        'https://urltomyfile',
        array( 'redux-admin-css' ), // Be sure to include redux-admin-css so it's appended after the core CSS is applied
        time(),
        'all'
    );  
    wp_enqueue_style('redux-custom-css');
}
// This example assumes your opt_name is set to OPT_NAME, replace it with your opt_name value
add_action( 'redux/page/' . $opt_name . '/enqueue', 'add_panel_css' );
```

## Replacing CSS
If you believe you have a better overall design, it's easy to remove the Redux CSS file completely:

```php
$opt_name = 'OPT_NAME'; # TODO - Replace with your opt_name
function remove_panel_css() {
  wp_dequeue_style( 'redux-admin-css' );
}
add_action( 'redux/page/' . $opt_name . '/enqueue', 'remove_panel_css' );
```

## The Complete Solution
The above functions may also be rolled together into a single function by doing the following:

```php
$opt_name = 'OPT_NAME'; # TODO - Replace with your opt_name
function add_and_override_panel_css() {
  wp_dequeue_style( 'redux-admin-css' );
  wp_register_style(
    'redux-custom-css',
    'http://urltomyfile',
    array( 'farbtastic' ), // Notice redux-admin-css is removed and the WordPress standard farbtastic is included instead
    time(),
    'all'
  );    
  wp_enqueue_style('redux-custom-css');
}
add_action( 'redux/page/' . $opt_name . '/enqueue', 'add_and_override_panel_css' );
```

The power of full CSS override is now in your hands!
