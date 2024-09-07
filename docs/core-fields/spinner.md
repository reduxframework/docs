# Spinner

The Spinner field returns the value entered in its input box or via clicks on its arrow buttons.

<span style="display:block;text-align:center">![](./img/spinner.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`spinner`|Value identifying the field type.|
|min|string/int|`0`|Value to set the minimum spinner value.|
|max|string/int|`1`|Value to set the maximum spinner value.|
|step|string/int|`1`|Value to set the spinner step value.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `output_variables` Argument](../configuration/fields/output-variables.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::


## Build Config
<script>
import builder from './spinner.json';
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
    'id'       => 'opt-spinner',
    'type'     => 'spinner', 
    'title'    => esc_html__('JQuery UI Spinner Example 1', 'your-textdomain-here'),
    'subtitle' => esc_html__('No validation can be done on this field type','your-textdomain-here'),
    'desc'     => esc_html__('JQuery UI spinner description. Min:20, max: 100, step:20, default value: 40', 'your-textdomain-here'),
    'default'  => '40',
    'min'      => '20',
    'step'     => '20',
    'max'      => '100',
) );
```

## Example Usage
This example is based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'Spinner value: ' . $redux_demo['opt-spinner'];
```

