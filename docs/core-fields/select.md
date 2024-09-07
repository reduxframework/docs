# Select

The Select field displays information in a drop-down field in both single and multi-select formats.

::: warning Table of Contents
[[toc]]
:::

## Arguments
|<div style="width:125px;">Name</div>|Type|<div style="width:70px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`select`|Value identifying the field type.|
|options|array||Array of options in key pair format.  The key represents the ID of the option.  The value represents the text to appear in the selector.|
|width|string|`40%`|Value to set the width of the selector.|
|multi|bool|`false`|Flag to set the multi-select variation of the field.|
|placeholder|string||Text to display in the selector when no value is present.|
|sortable|bool|`false`|Flag to enable data sorting.|
|select2|array||Array of arguments sent to the select2 javascript declaration. [Select2 Documentation](https://select2.org/configuration/options-api).|
|ajax|bool|`false`|Set to true to use ajax to fetch options when the [data](../configuration/fields/data.md) argument is used. **Requires Redux 4.x**|
|min-input-length|integer|`1`|For use when the `ajax` flag is set to true. This controls how many characters must be typed before an ajax request is performed. **Requires Redux 4.x**|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `data` Argument](../configuration/fields/data.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Standard Select
![](https://f.cloud.github.com/assets/3412363/1569797/d77655e8-50d4-11e3-8580-cf1eba05ea7e.png)

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-select',
    'type'     => 'select',
    'title'    => esc_html__('Select Option', 'your-textdomain-here'), 
    'subtitle' => esc_html__('No validation can be done on this field type', 'your-textdomain-here'),
    'desc'     => esc_html__('This is the description field, again good for additional info.', 'your-textdomain-here'),
    // Must provide key => value pairs for select options
    'options'  => array(
        '1' => 'Opt 1',
        '2' => 'Opt 2',
        '3' => 'Opt 3'
    ),
    'default'  => '2',
) );
```

## Multi Select
![](https://f.cloud.github.com/assets/3412363/1569753/520e4200-50d2-11e3-85e4-7807855811a0.png)

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-multi-select',
    'type'     => 'select',
    'multi'    => true,
    'title'    => esc_html__( 'Multi Select Option', 'your-textdomain-here' ), 
    'subtitle' => esc_html__( 'No validation can be done on this field type', 'your-textdomain-here' ),
    'desc'     => esc_html__( 'This is the description field, again good for additional info.', 'your-textdomain-here' ),
    //Must provide key => value pairs for radio options
    'options'  => array(
        '1' => 'Opt 1',
        '2' => 'Opt 2',
        '3' => 'Opt 3'),
    'default'  => array( '2', '3' )
) );
```

## Build Config
<script>
import builder from './select.json';
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


## Example Usage
This example is based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified 
in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'Single Select value: ' . $redux_demo['opt-select'];
echo 'Multi Select value: '  . $redux_demo['opt-multi-select'][0];
echo 'Multi Select value: '  . $redux_demo['opt-multi-select'][1];
```

## Disabling "Clear" Icon
Sometimes you don't want the user to have a null value. The "clear" icon is easily removed by passing a value to the 
`select2` argument. Be sure to define a default value, or the field will start in a null state.

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-multi-select',
    'type'     => 'select',
    'title'    => esc_html__('Disable Select2 Clear Button', 'your-textdomain-here'), 
    'options'  => array(
        '1' => 'Opt 1',
        '2' => 'Opt 2',
        '3' => 'Opt 3'),
    'default'  => array( '2' ),
    'select2'  => array('select2' => array( 'allowClear' => False ) )
    ) );
```
