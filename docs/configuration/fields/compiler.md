---
title: "Compiler" 
sidebarDepth: 2
---

# Using the `compiler` Argument

This article deals specifically with integrating a basic compiler hook for any field. For an in depth article on how to 
use the compiler hook to dynamically generate a CSS file, please view the 
[Updating a CSS File Dynamically](../advanced/advanced-updating-a-css-file-dynamically.md) article.

::: warning Table of Contents
[[toc]]
:::

## Using in a Field
Every Redux field offers the `compiler` argument. By setting this argument to `true`, a specified hook will fire 
whenever the value of a field marked with `'compiler' => true` is changed. 

Creating this magic is really quite easy. Let’s begin with this basic field:

```php
array(
    'id'       =>'text',
    'type'     => 'text',
    'title'    => esc_html__('Test Compiler', 'your-textdomain-here'),
    'subtitle' => esc_html__('This is to test the compiler hook.', 'your-textdomain-here'),
    'desc'     => esc_html__('Each time this field is set, a flag is set. On save, that flag initiates a compiler hook!', 'your-textdomain-here'),
    'compiler' => true,
    'default'  => 'Test Compiler'
),
```

Note the `'compiler' => true` argument. This sets the compiler flag. Now we need to hook into the fired hook. Add this snippet to your code:

## Setting up the Compiler Function
Next, the compiler function itself needs to be set up. It requires two parts. The add_filter statement, and the actual 
function. Ideally, these codes would be placed within your config PHP file; however, it can be used anywhere in your 
code provided the `opt_name` portion of the add_filter line is replaced with the value specified in your 
[opt_name](../global_arguments.md#opt_name)  argument. For this example, we'll be using the example found in the 
[sample-config.php](https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php).

Make sure the following line is included and/or uncommented:

```php
add_filter('redux/options/' . $this->args['opt_name'] . '/compiler', array( $this, 'compiler_action' ), 10, 3);
```

Now, add (or uncomment) the following function to the [sample-config.php](https://github.com/reduxframework/redux-framework/blob/master/sample/sample-config.php) file. This is our test function 
that allows you to see when the compiler hook occurs. It will only fire if a field set with `'compiler' => true` is changed.

Please note that for this example, `$css` will return empty as this is only a basic compiler hook.

```php
function compiler_action($options, $css, $changed_values) {
    echo '<h1>The compiler hook has run!</h1>';
    
    print_r ($options);
    print_r ($css);
    print_r ($changed_values);
}
```

If all has been set up correctly, you will see the compiler hook message and the passed values on your options panel after the field with the active compiler hook's value has changed and settings saved.


::: tip
If the [`output_tag`](../global_arguments.md#output_tag) argument is set to false, Redux will not auto-echo a tag into the page header.
:::
 