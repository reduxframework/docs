# Raw

The Raw field provides the ability to output raw HTML directly into the options panel both full width and sectioned.

<span style="display:block;text-align:center">![](./img/raw_full_width.png)</span>

::: warning Table of Contents
[[toc]]
:::



## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`raw`|Value identifying the field type.|
|full_width|bool|`true`|Flag to set denote if the field is full width or sectioned.|
|markdown|bool|`false`|Flag to set the markdown of standard line-break and tab characters to HTML.|
|content|string||String/HTML content to display. String values or file output may be used.|
|content_path|string||Full path to a file that will have the content parsed for output.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
:::

## Build Config
<script>
import builder from './raw.json';
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


## Example Config with Relative File
```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'           => 'opt-raw',
    'type'         => 'raw',
    'title'        => esc_html__('Raw output', 'your-textdomain-here'),
    'subtitle'     => esc_html__('Subtitle text goes here.', 'your-textdomain-here'),
    'desc'         => esc_html__('This is the description field for additional info.', 'your-textdomain-here'),
    'content_path' => file_get_contents( dirname( __FILE__ ) . '/myfile.txt' )
) );
```

## Example Config with PHP Output

Sometimes you want to do more than just a flat file with raw, and acutally output the results of some PHP code. You
can easily do that with this approach.

```php
ob_start( ); // This tells PHP to start putting all output in a buffer.
echo "HERE I AM";
?>
Now we're in HTML mode! Everything here will be saved as text,
including line breaks!
<?php // And back to PHP mode
// Don't forget to use a full php here, the shortcode `<?` will get you in trouble!!!

echo "Now i'm here"; 
$output = ob_get_clean(); // Now everything is in our variable.

Redux::set_field( 'OPT_NAME', 'SECTION_ID', array( 
    'id'       => 'opt-raw',
    'type'     => 'raw',
    'title'    => esc_html__('Raw output', 'your-textdomain-here'),
    'subtitle' => esc_html__('Subtitle text goes here.', 'your-textdomain-here'),
    'desc'     => esc_html__('This is the description field for additional info.', 'your-textdomain-here'),
    'content'  => $output // Now let's set that in the raw field.
) );
```


## Display Options

These are two modes for the raw field. Full width and "sectioned." Below you will see an example of each.

### Full Width => True
```php 
'full_width' => true`
```
<span style="display:block;text-align:center">![](./img/raw_full_width.png)</span>

### Full Width => False 
```php 
'full_width' => false`
```
<span style="display:block;text-align:center">![](./img/raw_sectioned.png)</span>

