# Divide

The Divide field acts as a divider between other fields.

<span style="display:block;text-align:center">![](./img/divide.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`divide`|Value identifying the field type.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

::: warning Tip
When using the Divide field with `required`, the divider cannot be hidden by default. It's best only to use the `required` argument with this field when the fold is shown by default.
:::


## Build Config
<script>
import builder from './divide.json';
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
    'id'   =>'divider_1',
    'desc' => esc_html__('This is the description field.', 'your-textdomain-here'),
    'type' => 'divide'
) );
```

