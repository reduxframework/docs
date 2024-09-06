---

title: "Output Variables" 

---

# Using the `output_variables` Argument

::: danger 
Requires Redux v4.0.3+
:::

The argument is related to the [output](./output.md) argument, but has a slightly different focus. The purpose is to
provide dynamic variables in a way that can be used by standard CSS as well as LESS/SCSS compilers.

All generated variables will use the following naming strategy:
- If field produces an array: `{prefix}{field_id}-{key}`
- If field produces a string: `{prefix}{field_id}`

The `{prefix}` will vary depending on the method you are using `output_variables` as. Namely, as [CSS variables](#using-with-css-variables) or [using 
the compiler hook](#using-with-the-compiler-hook) with a SCSS/LESS compiler.

To enable, add this code `'output_variables' => true` to the [section](../objects/section.md) or 
[field](../objects/field.md) object you want. If set to the [section](../objects/section.md) level, all fields that 
can be used will have the value applied.

::: warning Table of Contents
[[toc]]
:::

::: tip Supported Field Types
[background](../../core-fields/background.md) | [border](../../core-fields/border.md) | [color](../../core-fields/color.md) | [color_gradient](../../core-fields/color-gradient.md) | [color_rgba](../../core-fields/color-rgba.md) | [dimensions](../../core-fields/dimensions.md) | [link_color](../../core-fields/link-color.md) | [slider](../../core-fields/slider.md) | [spacing](../../core-fields/spacing.md) | [spinner](../../core-fields/spinner.md) | [text](../../core-fields/text.md) | [typography](../../core-fields/typography.md)
:::

## Supported Arguments
| <div style="width:280px;">Name</div> |Type|Default|Description|
|--------------------------------------|--- |--- |--- |
| `output_variables`                   |boolean|`false`|Can be set at the section or field object levels. When set to true, values will be appended to generated CSS.|
| `output_variables_prefix`            |string|`--`|Can be set at the global args, section, or field object levels.|
| `compiler_output_variables_prefix`   |string|`$`|For use with the compiler hook. An array of output variables is passed to the compiler hook.|

## Using with CSS Variables

[CSS Variables](https://www.w3schools.com/css/css3_variables.asp) are a powerful way to use modern design practices and
CSS. By using them, your CSS line count can be greatly reduced. Redux can auto-generate these variables and append them
to the `:root{}` selector of your page dynamically.

See the below [Example Generated CSS Variables](#example-generated-css-variables) for example use.

## Using with the Compiler Hook
::: danger
This is a dangerous approach since PHP-based SCSS/LESS compilers are very memory intensive. Users on shared hosting
environments will have issues. It is STRONGLY advised to use CSS variables for greater stability.
:::

If you prefer to use a LESS/SCSS compiler, you may want to use generated variables to prepend to your SCSS files. To
enable this option, the Redux compiler hook will return an array of prepared variables. You may need to alter the prefix
to match your compiler of choice.

### Changing the Compiler Variables Prefix
By default, the global argument `compiler_output_variables_prefix` is set to `$` which works for SCSS. If you are using 
LESS, you will need to run the following to properly generate your variables in a way that can be used by your compiler.
By so doing, your variables will be properly prefixed with the `@` symbol which is what LESS requires.

```php
Redux::set_args( 'YOUR_OPT_NAME', array( 'compiler_output_variables_prefix' => '@' ) );
```


## Example Config

For this example, we'll use the border field, found in the [sample-config.php](https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php). 
To pass only a CSS selector and have Redux generate the CSS, use the [output](output.md) argument instead.
```php
array(
    'id'        => 'opt-header-border',
    'type'      => 'border',
    'title'     => esc_html__('Header Border Option', 'your-textdomain-here'),
    'subtitle'  => esc_html__('Subtitle goes here', 'your-textdomain-here'),
    'output_variables' => true,
    'desc'      => esc_html__('This is the description field.', 'your-textdomain-here'),
    'default'   => array(
        'border-color'  => '#1e73be', 
        'border-style'  => 'solid', 
        'border-top'    => '3px', 
        'border-right'  => '3px', 
        'border-bottom' => '3px', 
        'border-left'   => '3px'
    )
),
```

### Example Generated CSS Variables

::: warning 
Redux will generate these variables on a single line. The example below is expanded for display purposes only.
:::

```css
:root {
    --site-header-border-top: 3px solid #1e73be;
    --site-header-border-right: 3px solid #1e73be;
    --site-header-border-bottom: 3px solid #1e73be;
    --site-header-border-left: 3px solid #1e73be;
}
```

To use a generated variable for a field with ID `header_color` of field type `color`, you would use the following in your
CSS files:

```css
.header_selector {
    color: var( --header_color, "#fff" );
}
```

::: tip
The second value is CSS `val()` function is the fallback value and is not required.
:::


### Example Generated Compiler Variables

::: danger
This is a dangerous approach since PHP-based SCSS/LESS compilers are quite memory intensive. Users on shared hosting
environments will have issues. It is STRONGLY advised to use CSS variables for greater stability.
:::

Below is a full example of a compiler hook to generate your SCSS/LESS on save. The content of `$output_variables` will be
populated with the following provided the above Example Config is used.

```php
array(
    '$opt-typography-body-color' => '#dd9933',
    '$opt-typography-body-font-size' => '30px'
    '$opt-typography-body-font-family' => 'Arial, Helvetica, sans-serif'
    '$opt-typography-body-font-weight' => 'Normal'
)
```

::: tip
By default the global argument `compiler_output_variables_prefix` is set to work with SCSS. See 
[Changing the Compiler Variables Prefix](#changing-the-compiler-variables-prefix) to change the prefix to your 
compiler's requirements.
:::

```php
function your_css_compiler( $options, $css, $changed_values, $output_variables ) {
    $variables = join( ";\n", $output_variables );
    // TODO: Append $variables to your SCSS/LESS and compile then write out.
}
add_action( 'redux/options/YOUR_OPT_NAME/compiler', 'your_css_compiler', 10, 4 ); // The integer 4 is important to get the extra variables.
```

## Using `output_variables` with the [required](./required) Argument

If a field is not "visible" due to an unmet [required](./required) statement, the generated CSS variables for fields in 
this state will not be appended to the page. By doing so, the output is easier to manage. Be mindful of this when using 
these two arguments together.