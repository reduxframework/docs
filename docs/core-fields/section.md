# Section

The Section field provides the ability to set any field below it with an indent.

::: warning Table of Contents
[[toc]]
:::

<span style="display:block;text-align:center">![](./img/section.png)</span>

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|'section'|Value identifying the field type.|
|indent|bool|`true`|Flag to set the indentation for all fields that follow. ALWAYS use this. `true` for a starting section field, `false` for a closing section field.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

::: warning
When using the [required argument](../configuration/fields/required.md) with the section field, the required statement 
<strong>must</strong> be included in both the beginning and end section arrays. Also, the section field cannot be 
hidden by default. It’s best only to use the [required argument](../configuration/fields/required.md) with this field 
when the fold is shown by default.
:::

## Build Config
<script>
import builder from './section.json';
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
// Begin the section
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
   'id' => 'section-start',
   'type' => 'section',
   'title' => esc_html__('Indented Options', 'your-textdomain-here'),
   'subtitle' => esc_html__('With the "section" field you can create indent option sections.', 'your-textdomain-here'),
   'indent' => true 
);

// Other field arrays go between the start and end fields.
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'     => 'text-field-in-section-id',
    'type'   => 'text',
    'title'  => esc_html__( 'Indented text field', 'your-textdomain-here' )
) );

// End the section
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'     => 'section-end',
    'type'   => 'section',
    'indent' => false,
) );
```

