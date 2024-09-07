# Background

The Background field offers unmatched features not found in any other option framework.  Users will be able to present the background designs found 
in professionally authored pages with a few simple clicks.

<span style="display:block;text-align:center">![](./img/background.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|<div style="width:177px;">Name</div>|Type|<div style="width:98px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`background`|Controls the field type|
|default|string||See [Default Argument](#default-argument) below.|
|select2|array||Array of select2 arguments. [Select2 Documentation](https://select2.org/configuration/options-api).|
|background-color|bool|`true`|Flag to display the background color picker.|
|background-repeat|bool|`true`|Flag to display the background repeat select field.|
|background-attachment|bool|`true`|Flag to display the background attachment select field.|
|background-position|bool|`true`|Flag to display the background position select field.|
|background-image|bool|`true`|Flag to display the background image media uploader.|
|background-clip|bool|`false`|Flag to display the background clip select field.|
|background-origin|bool|`false`|Flag to display the background origin select field.|
|background-size|bool|`true`|Flag to display the background size select field.|
|preview_media|bool|`false`|Flag to display background media preview.|
|preview|bool|`true`|Flag to display the background preview box.|
|preview_height|string|`200px`|String to set background preview height.|
|transparent|bool|`true`|Flag to display background color transparency checkbox.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `output` Argument](../configuration/fields/output.md)
- [Using the `output_variables` Argument](../configuration/fields/output-variables.md)
- [Using the `required` Argument](../configuration/fields/required.md)
- [Using the `validate` Argument](../configuration/fields/validate.md)
:::


## `Default` Argument
|<div style="width:177px;">Name</div>|Type|Description|
|--- |--- |--- |
|background-color|string|Hex string representing the default background color.|
|background-repeat|string|String representing the default background repeat value. Accepts: `no-repeat` `repeat` `repeat-x` `repeat-y` `inherit`|
|background-attachment|string|String representing the default background attachment value. Accepts: `fixed` `scroll` `inherit`|
|background-position|string|String representing the default background position value. Accepts: `left top` `left center` `left bottom` `center top` `center center` `center bottom` `right top` `right center` `right bottom`.|
|background-image|string|URL string representing the default background image value.|
|background-clip|string|String representing the default background clip value. Accepts: `inherit` `border-box` `content-box` `padding-box`.|
|background-origin|string|String representing the default background origin value. Accepts: `inherit` `border-box` `content-box` `padding-box`.|
|background size|string|String representing the default background size value. Accepts: `inherit` `cover` `contain`.|
|media|array|Array of default background media information.  See table below.|


## Default Media Array Options
|Name|Type|Description|
|--- |--- |--- |
|id|string|A unique identifier.|
|width|string|String value setting the width of the image.|
|height|string|String value setting the height of the image.|
|thumbnail|string|URL string value to the image thumbnail.|

## Build Config
<script>
import builder from './background.json';
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
    'id'       => 'opt-background',
    'type'     => 'background',
    'title'    => esc_html__('Body Background', 'your-project-name'),
    'subtitle' => esc_html__('Body background with image, color, etc.', 'your-project-name'),
    'desc'     => esc_html__('This is the description field, again good for additional info.', 'your-project-name'),
    'default'  => array(
        'background-color' => '#1e73be',
    )
) );
```

### Example Usage
This example is based on the code above.  Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

// Background color
echo 'background color: '      . $redux_demo['opt-background']['background-color'];

// Background image.
echo 'background image: '      . $redux_demo['opt-background']['background-image'];

// Background image options
echo 'background repeat: '     . $redux_demo['opt-background']['background-repeat'];
echo 'background position: '   . $redux_demo['opt-background']['background-position'];
echo 'background size: '       . $redux_demo['opt-background']['background-size'];
echo 'background attachment: ' . $redux_demo['opt-background']['background-attachment'];

// Media values
echo 'image height: '          . $redux_demo['opt-background']['media']['height'];
echo 'image width: '           . $redux_demo['opt-background']['media']['width'];
echo 'image thumbnail: '       . $redux_demo['opt-background']['media']['thumbnail'];
```

