# Textarea

The Textarea field accepts any form of multi-line string input, including custom HTML.

<span style="display:block;text-align:center">![](./img/textarea.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|<div style="width:85px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`textarea`|Value identifying the field type.|
|rows|integer|`6`|Numbers of text rows to display.|
|autocomplete|boolean|`false`|If set to `true`, the autocomplete attribute will be set to the value provided.|
|readonly|string|`false`|If set to `true`, the readonly attribute will be set to `readonly`.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
- [Using the `validate` Argument](../configuration/fields/validate.md)
:::

## Build Config
<script>
import builder from './textarea.json';
export default {
  data () {
      return {
          builder: builder
      };
  }
}
</script>
<builder :builder_json="builder" />

## Example Usage
This example is based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in 
your [opt_name](../configuration/global_arguments.md#opt-name) argument.

```php
// Using the Redux API
echo Redux::get_option( 'OPT_NAME', 'FIELD_ID', 'DEFAULT_VALUE' );

// Using the global argment
global $redux_demo; // Same as your opt_name
echo $redux_demo['FIELD_ID'];
```

