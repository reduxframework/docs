# Border

The Border field is a great way to set the border properties of any HTML object that supports the border property.

<span style="display:block;text-align:center">![](./img/border.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|<div style="width:70px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`border`|Value identifying the field type.|
|default|array| |Array of default values. See 'Default Options' below.|
|select2|array| |Array of select2 arguments. [Select2 Documentation](https://select2.org/configuration/options-api).|
|validate|string|`color`|String value `color` to validate the color selection.  It is the only accepted value for this field.|
|all|bool|`true`|Flag to enable all borders using one value.|
|left|bool|`true`|Flag to enable the left field border input.|
|right|bool|`true`|Flag to enable the right field border input.|
|top|bool|`true`|Flag to enable the top field border input.|
|bottom|bool|`true`|Flag to enable the bottom field border input.|
|style|bool|`true`|Flag to enable the style selector.|
|color|bool|`true`|Flag to enable the color picker.|
|color_alpha|bool|`false`|Flag to set the color picker to accept an alpha value.


::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `output` Argument](../configuration/fields/output.html)
- [Using the `output_variables` Argument](../configuration/fields/output-variables.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Default Options
|Name|Type|Description|
|--- |--- |--- |
|border-color|string|Hex string representing the default color.|
|border-style|string|Sets the default CSS border. Accepts: `solid` `dotted` `dashed` or `none`.|
|border-top|string|Sets the default value of the top border.|
|border-right|string|Sets the default value of the right border.|
|border-bottom|string|Sets the default value of the bottom border.|
|border-left|string|Sets the default value of the left border.|
|border-width|string|Sets the default value of the border's width.|

::: tip 
It is only necessary to set the `border-width` default when the `all` argument is set to true.
::: 

## Build Config
<script>
import builder from './border.json';
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
    'id'       => 'header-border',
    'type'     => 'border',
    'title'    => esc_html__('Header Border Option', 'your-project-name'),
    'subtitle' => esc_html__('Only color validation can be done on this field type', 'your-project-name'),
    'output'   => array('.site-header'),
    'desc'     => esc_html__('This is the description field, again good for additional info.', 'your-project-name'),
    'default'  => array(
        'border-color'  => '#1e73be', 
        'border-style'  => 'solid', 
        'border-top'    => '3px', 
        'border-right'  => '3px', 
        'border-bottom' => '3px', 
        'border-left'   => '3px'
    )
) );
```

## Example Usage
This example is based on the code above. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'Border top: '    . $redux_demo['header-border']['border-top'];
echo 'Border bottom: ' . $redux_demo['header-border']['border-bottom'];
echo 'Border left: '   . $redux_demo['header-border']['border-left'];
echo 'Border right: '  . $redux_demo['header-border']['border-right'];
echo 'Border style: '  . $redux_demo['header-border']['border-style'];
echo 'Border color: '  . $redux_demo['header-border']['border-color'];
```

