# Radio

The Radio field is an excellent way to present a set of choices for users to select from.

<span style="display:block;text-align:center">![](./img/radio.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|<div style="width:100px;">Type</div>|Default|Description|
|--- |--- |--- |--- |
|type|string|`radio`|Value identifying the field type.|
|options|array||<span style="color: orange;">Deprecated in Redux 4.0.3</span>, though still fully functional. Accepts an array of key pair values representing the radio buttons. The key value should be numbers in sequential order, beginning with `1`.  The value parameter accepts the text to display beside the radio button.|
|data|string \| array||Pass in a string to auto-fetch [WordPress Data](../configuration/fields/data.md) as expected from the [data argument](../configuration/fields/data.md). Will also accept an array of key pair values representing the radio buttons. The key value should be numbers in sequential order, beginning with `1`.  The value parameter accepts the text to display beside the radio button.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `data` Argument](../configuration/fields/data.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::


## Build Config
<script>
import builder from './radio.json';
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



## Example Config using Array
```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-radio',
    'type'     => 'radio',
    'title'    => esc_html__('Radio Option', 'your-textdomain-here'), 
    //Must provide key => value pairs for radio options
    'data'  => array(
        '1' => 'Opt 1', 
        '2' => 'Opt 2', 
        '3' => 'Opt 3'
    ),
    'default' => '2'
) );
```

## Example Config using WordPress Data
```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'      => 'opt-radio',
    'type'    => 'radio',
    'title'   => esc_html__('Radio Option', 'your-textdomain-here'), 
    'data'    => 'pages',
    'default' => '2'
) );
```

## Example Usage
This example is based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified 
in your [opt_name](../configuration/global_arguments.md#opt_name) argument. Only the key of the select `options` or
`data` array item will be returned.

```php
global $redux_demo;

echo 'Selected Radio value: ' . $redux_demo['opt-radio'];
```
