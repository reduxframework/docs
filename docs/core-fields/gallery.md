# Gallery

With the Gallery field, create a new gallery of images by selecting existing images or uploading new ones with the WordPress uploader.

<span style="display:block;text-align:center">![](./img/gallery.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`gallery`|Value identifying the field type.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::


## Build Config
<script>
import builder from './gallery.json';
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
    'id'       => 'opt-gallery',
    'type'     => 'gallery',
    'title'    => esc_html__('Add/Edit Gallery', 'your-textdomain-here'),
    'subtitle' => esc_html__('Create a new Gallery by selecting existing or uploading new images using the WordPress native uploader', 'your-textdomain-here'),
    'desc'     => esc_html__('This is the description field, again good for additional info.', 'your-textdomain-here'),
) );
```
## Example Usage
This example is based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

The gallery field returns a comma separated value of the attachment IDs of the selected images.
```php
global $redux_demo;

echo '' . $redux_demo['opt-gallery'];
```
