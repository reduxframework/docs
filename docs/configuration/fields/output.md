---

title: "Output" 

---

# Using the `output` Argument

Using the output argument in fields that support it is a great way to generate dynamic CSS for those fields on the 
front-end of your WordPress site.  Redux will generate values for those fields, generate the appropriate CSS selectors, 
elements, values and place them at the bottom of the page's `<HEAD>` section. This ensures your CSS will take 
priority over any other CSS used in your theme.

::: warning Table of Contents
[[toc]]
:::

::: tip 
Before adding the output argument to one of the indicated fields, you'll need to know which 
[CSS selectors](http://www.w3schools.com/cssref/css_selectors.asp) to apply to the field's value. These will 
be selectors from your theme's CSS you wish to change dynamically via values from fields that offer output. All that 
now needs to be done is to assign them to the output argument in an array without the chosen field array, as shown below. 
Multiple selectors are permitted.
:::

::: tip Supported Field Types
[background](../../core-fields/background.md) | [border](../../core-fields/border.md) | [color](../../core-fields/color.md) | [color_gradient](../../core-fields/color-gradient.md) | [color_rgba](../../core-fields/color-rgba.md) | [dimensions](../../core-fields/dimensions.md) | [link_color](../../core-fields/link-color.md) | [spacing](../../core-fields/spacing.md) | [typography](../../core-fields/typography.md)
:::

::: danger
If you are looking to use CSS variables or to have Redux generate variables to run through a LESS/SCSS compiler, you 
will want to look at the <u>[output_variables](output-variables.md)</u> argument instead.
:::

## Example Config

For this example, we'll use the border field, found in the 
[sample-config.php](https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php).
```php
array(
    'id'        => 'opt-header-border',
    'type'      => 'border',
    'title'     => esc_html__('Header Border Option', 'your-textdomain-here'),
    'subtitle'  => esc_html__('Subtitle goes here', 'your-textdomain-here'),
    'output'    => array('.site-header'), // An array of CSS selectors
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

::: tip 
Redux will output the CSS in a single line. The example below is expanded for display purposes only.
:::

```css
.site-header {
    border-top: 3px solid #1e73be;
    border-right: 3px solid #1e73be;
    border-bottom: 3px solid #1e73be;
    border-left: 3px solid #1e73be;
}
```

### Additional Example: Setting Color Properties
The color and color_rgba fields can be used exactly as shown above for the default CSS element of color.  If you wish to choose a different element (or mode), it can be specified in the output array value as a key/pair.  For example, let suppose you want to output a color field as background-color, instead of color.  The following output array in key/pair format would accomplish this:

```php
array(
    'id'        => 'opt-color-demo',
    'type'      => 'color',
    'title'     => esc_html__('Background Color', 'your-textdomain-here'),
    'subtitle'  => esc_html__('Pick a background color.', 'your-textdomain-here'),
    'default'   => '#dd9933',
    'output'    => array('background-color' => '.site-header')
),
```

Alternatively, multiple elements could be specified for different selectors.

```php
array(
    'id'        => 'opt-color-demo',
    'type'      => 'color',
    'title'     => esc_html__('Background Color', 'your-textdomain-here'),
    'subtitle'  => esc_html__('Pick a background color.', 'your-textdomain-here'),
    'default'   => '#dd9933',
    'output'    => array(
        'background-color' => '.site-header', 
        'color'            => '.site-footer'
    )
),
```

Multiple selectors are also supported.  Separate them with commas.

```php
array(
    'id'        => 'opt-color-demo',
    'type'      => 'color',
    'title'     => esc_html__('Background Color', 'your-textdomain-here'),
    'subtitle'  => esc_html__('Pick a background color.', 'your-textdomain-here'),
    'default'   => '#dd9933',
    'output'    => array('background-color' => '.site-header, .site-footer')
),
```

## Using `output` with the [required](./required) Argument

If a field is not "visible" due to an unmet [required](./required) statement, the generated CSS for fields in this state
will not be appended to the page. Doing so, overrides based on other fields do not affect the site. Be mindful when using these two arguments together.