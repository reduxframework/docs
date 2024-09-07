# Image Select

Select from an array of images as radio buttons.

<span style="display:block;text-align:center">![](./img/image_select.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|<div style="width:150px;">Default</div>|Description|
|--- |--- |--- |--- |
|type|string|`image_select`|Value identifying the field type.|
|output|array||Array of CSS selectors to dynamically generate CSS.|
|mode|string|`background-image`|CSS attribute for dynamically generated CSS to output the value.|
|options|array||Set of key pair array values representing the layout options.  See 'Layout Options' below.|
|width|string||Set the width of the images used in `options`.|
|height|string||Set the height of the images used in `options`.|
|tiles|bool|`false`|Flag to set tiling for the array of `options` images.|
|presets|bool|`false`|Flag to permit the use of a JSON string or array to override multiple preferences.|

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `output` Argument](../configuration/fields/output.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

### Layout Options
|Name|Type|Description|
|--- |--- |--- |
|alt|string|Alt test for the layout image.|
|title|string|Title for the layout image.|
|img|string|URL of the image.|
|presets|string/array|For use with preset.  Optional array or JSON string of values for specified fields|
|class|string|Extra class name for the layout image.|


## Build Config
<script>
import builder from './image-select.json';
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
#### Image Select Layout

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-layout',
    'type'     => 'image_select',
    'title'    => esc_html__('Main Layout', 'your-textdomain-here'), 
    'subtitle' => esc_html__('Select main content and sidebar alignment. Choose between 1, 2 or 3 column layout.', 'your-textdomain-here'),
    'options'  => array(
        '1'      => array(
            'alt'   => '1 Column', 
            'img'   => ReduxFramework::$_url.'assets/img/1col.png'
        ),
        '2'      => array(
            'alt'   => '2 Column Left', 
            'img'   => ReduxFramework::$_url.'assets/img/2cl.png'
        ),
        '3'      => array(
            'alt'   => '2 Column Right', 
            'img'  => ReduxFramework::$_url.'assets/img/2cr.png'
        ),
        '4'      => array(
            'alt'   => '3 Column Middle', 
            'img'   => ReduxFramework::$_url.'assets/img/3cm.png'
        ),
        '5'      => array(
            'alt'   => '3 Column Left', 
            'img'   => ReduxFramework::$_url.'assets/img/3cl.png'
        ),
        '6'      => array(
            'alt'  => '3 Column Right', 
            'img'  => ReduxFramework::$_url.'assets/img/3cr.png'
        )
    ),
    'default' => '2'
) );
```

#### Image Select Preset

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'opt-presets',
    'type'     => 'image_select', 
    'presets'  => true,
    'title'    => esc_html__('Preset', 'your-textdomain-here'),
    'subtitle' => esc_html__('This allows you to set a json string or array to override multiple preferences in your theme.', 'your-textdomain-here'),
    'default'  => 0,
'desc'     => esc_html__('This allows you to set a json string or array to override multiple preferences in your theme.', 'your-textdomain-here'),
    'options'  => array(
        // Array of preset options
        '1'      => array(
            'alt'   => 'Preset 1', 
            'img'   => ReduxFramework::$_url.'../sample/presets/preset1.png', 
            'presets'   => array(
                'switch-on'     => 1,
                'switch-off'    => 1, 
                'switch-custom' => 1
            )
        ),
        // JSON string of preset options
        '2'       => array(
            'alt'     => 'Preset 2', 
            'img'     => ReduxFramework::$_url.'../sample/presets/preset2.png', 
            'presets' => '{"slider1":"1", "slider2":"0", "switch-on":"0"}'
        ),
    ),
) );
```

## Example Usage
This example is based on the example usage provided above. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'Layout value: ' . $redux_demo['opt-layout'];
echo 'Preset value: ' . $redux_demo['opt-presets'];
```
