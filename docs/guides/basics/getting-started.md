---
title: "Getting Started" 
---

# Getting Started

There are several methods to quickly begin using Redux, each targeted toward different skill levels and use cases. Read 
through to see what suits your particular needs.

::: warning Table of Contents
[[toc]]
:::

## Installing
Redux must be installed to begin using it. The quickest approach is to install the WordPress.org plugin, although other 
approaches are available. [Read more in our install docs](install.md).

## Core Concepts
Another great guide to review is our core concepts.  The Redux may be confusing without understanding how it's structured. 
[Read more in our core concepts docs](core-concepts.md)

## Basic Config
Once Redux is installed, we can begin digging in. Let's begin with a basic config. The [barebones example](https://github.com/reduxframework/redux-framework/blob/master/sample/barebones-config.php) 
or the more extensive [sample config](https://github.com/reduxframework/redux-framework/blob/master/sample/sample-config.php) may be modified as needed. 
We hope you'll customize our examples and adapt them to suit your needs.

```php
<?php
    if ( ! class_exists( 'Redux' ) ) {
        return;
    }

    $opt_name = 'redux_demo';

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $args = array(
        'display_name'         => $theme->get( 'Name' ),
        'display_version'      => $theme->get( 'Version' ),
        'menu_title'           => esc_html__( 'Sample Options', 'your-textdomain-here' ),
        'customizer'           => true,
    );

    Redux::set_args( $opt_name, $args );

    Redux::set_section( 
        $opt_name, 
        array(
            'title'  => esc_html__( 'Basic Field', 'your-textdomain-here' ),
            'id'     => 'basic',
            'desc'   => esc_html__( 'Basic field with no subsections.', 'your-textdomain-here' ),
            'icon'   => 'el el-home',
            'fields' => array(
                array(
                    'id'       => 'opt-text',
                    'type'     => 'text',
                    'title'    => esc_html__( 'Example Text', 'your-textdomain-here' ),
                    'desc'     => esc_html__( 'Example description.', 'your-textdomain-here' ),
                    'subtitle' => esc_html__( 'Example subtitle.', 'your-textdomain-here' ),
                    'hint'     => array(
                        'content' => 'This is a <b>hint</b> tool-tip for the text field.<br/><br/>Add any HTML based text you like here.',
                    )
                )
            )
        ) 
    );
```

## Community
We have an incredibly active community with thousands of developers worldwide. Stay up to date on the development of 
Redux and reach out to our community with these helpful resources.

- Chat with fellow Redux users on our [slack channel](http://slack.redux.io/).
- For help using Redux, ask on StackOverflow using the tag [redux-framework](https://stackoverflow.com/search?q=%23redux-framework).
- Find inspiring examples of people building with Redux at the [Redux Showcase](https://redux.io/showcase/envato-market/).
- Submit bug issues and pull-requests on our [issue tracker](https://github.com/reduxframework/redux-framework/issues). Be sure to read our [contributing guidelines](https://github.com/reduxframework/redux-framework/blob/master/CONTRIBUTING.md) before posting, or we'll point you to that document to get the information we need. :)
