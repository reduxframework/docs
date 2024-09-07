# Palette Color

The Palette Color field allows you to display a set of color palettes that a theme or plugin might use throughout, 
giving your users a choice of UI colors.

<span style="display:block;text-align:center">![](./img/palette_color.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|<div style="width:80px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`palette`|Value identifying the field type.|
|palettes|array||An array of individual arrays defining the color palettes.  See "Setting Palettes" below.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Setting Palettes
Each palette in the palette argument is a key/pair array that defines each palette.  The key of the array 
is the palette name.  Assigned to the key is an array of hex colors to be displayed in the palette entry. 
 See the example below for a complete breakdown.

## Build Config
<script>
import builder from './palette-color.json';
export default {
    data () {
        return {
            builder: builder,
            defaults: {}
        };
    }
}
</script>
<builder :builder_json="builder" :builder_defaults="defaults" />

## Example Config
```php
Redux::set_section( 'OPT_NAME', array(
    'title'      => esc_html__( 'Palette Colors', 'your-textdomain-here' ),
    'id'         => 'color-palette',
    'subsection' => true,
    'fields'     => array(
        array(
            'id'       => 'opt-palette-color',
            'type'     => 'palette',
            'title'    => esc_html__( 'Palette Color Option', 'your-textdomain-here' ),
            'subtitle' => esc_html__( 'Only color validation can be done on this field type', 'your-textdomain-here' ),
            'desc'     => esc_html__( 'This is the description field, again good for additional info.', 'your-textdomain-here' ),
            'default'  => 'red',
            'palettes' => array(
                'red'  => array(
                    '#ef9a9a',
                    '#f44336',
                    '#ff1744',
                ),
                'pink' => array(
                    '#fce4ec',
                    '#f06292',
                    '#e91e63',
                    '#ad1457',
                    '#f50057',
                ),
                'cyan' => array(
                    '#e0f7fa',
                    '#80deea',
                    '#26c6da',
                    '#0097a7',
                    '#00e5ff',
                ),
            )
        ),
    )
) );
```

## Example Usage
This example is based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified 
in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

This field does NOT return the palette array.  It returns the name of the selected palette.  Ideally, the developer 
will have set the palette colors in their CSS, using the palette key name as the CSS selector.

```php
global $redux_demo;

echo esc_html__( 'Selected palette: ', 'your-textdomain-here' ) . $redux_demo['opt-palette-color'];
```
