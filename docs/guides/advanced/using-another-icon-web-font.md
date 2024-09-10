---
title: "Using Another Icon Font"
---

# Using Another Icon Web Font
Redux uses Elusive Icons in our panel. We understand our choice in icon pack may not match or suit everyone's needs. 
This is why we've made it easy to add a new icon pack. Here's how:

```php
$opt_name = 'YOUR_OPT_NAME'; # TODO - Replace with your opt_name
function new_icon_font() {
    // Uncomment this to remove elusive icon from the panel completely
    //wp_deregister_style( 'redux-elusive-icon' );
    //wp_deregister_style( 'redux-elusive-icon-ie7' );

    wp_register_style(
        'redux-font-awesome',
        '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
        array(),
        time(),
        'all'
    );  
    wp_enqueue_style( 'redux-font-awesome' );
}
add_action( 'redux/page/' . $opt_name . '/enqueue', 'new_icon_font' );
```

To use the added icons, add the following [section](../../configuration/objects/section.md) declaration:

```php
Redux::add_section( 'OPT_NAME', array( 
    'id'     => 'icon_section',
    'title'  => esc_html__('Home Settings', 'your-textdomain-here'),
    'header' => esc_html__('Welcome to the Redux Framework Demo', 'your-textdomain-here'),
    'desc'   => esc_html__('Description goes here.', 'your-textdomain-here'),
    'icon'   => 'fa fa-bell-o',
    'fields' => array()
) );
```

That's it! You're good to go!