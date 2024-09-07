# Color

The Color field redefines simplicity. Point and click to choose any color in the spectrum.

<span style="display:block;text-align:center">![](./img/color.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`color`|Value identifying the field type.|
|transparent|bool|`true`|Flag to set the display of the transparency checkbox.|
|validate|string| |The only accepted validation type is `color`.|
|color_alpha|bool|`false`|Flag to set the color picker to accept an alpha value.

::: warning Transparency
To set the transparency checkbox by default, use the string `transparent` in place of a string hex value in the `default` argument.
:::

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `output` Argument](../configuration/fields/output.md)
- [Using the `output_variables` Argument](../configuration/fields/output-variables.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::


## Build Config
<script>
import builder from './color.json';
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
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-color',
    'type'     => 'color',
    'title'    => esc_html__('Body Background Color', 'your-textdomain-here'), 
    'subtitle' => esc_html__('Pick a background color for the theme (default: #fff).', 'your-textdomain-here'),
    'default'  => '#FFFFFF',
    'validate' => 'color',
) );
```

## Example Usage
This example in based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'Color value: ' . $redux_demo['opt-color'];
```
