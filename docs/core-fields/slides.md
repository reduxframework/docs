# Slides
With the Slider field, unlimited slides may be created with titles, descriptions, and links.

<span style="display:block;text-align:center">![](./img/slides.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`slides`|Value identifying the field type.|
|placeholder|array||Array of placeholder values.  See 'Placeholder Values' below.|
|show|array||Array of elements to show or hide. Options possible: `title`, `description`, `url`. [See details below](#using-the-show-argument). |

::: tip Also See
- [Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Placeholder Values
|Name|Type|Description|
|--- |--- |--- |
|title|string|Placeholder for the title field.|
|description|string|Placeholder for the description field.|
|sort|string|Sort number for the slide order.|
|url|string|Placeholder for the URL field.|
|image|string|Placeholder for the image text field.|
|thumb|string|Placeholder for the image select field.|
|attachment_id|string|Placeholder image in URL format.|
|height|string|Placeholder height for the preview image.|
|width|string|Placeholder width for the preview image.|



## Build Config
<script>
import builder from './slides.json';
export default {
    data () {
        return {
            builder: builder,
            defaults: {
            }
        };
    }
}
</script>
<builder :builder_json="builder" :builder_defaults="defaults" />

## Example Config

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'          => 'opt-slides',
    'type'        => 'slides',
    'title'       => esc_html__('Slides Options', 'your-textdomain-here'),
    'subtitle'    => esc_html__('Unlimited slides with drag and drop sortings.', 'your-textdomain-here'),
    'desc'        => esc_html__('This field will store all slides values into a multidimensional array to use into a foreach loop.', 'your-textdomain-here')
    'placeholder' => array(
        'title'       => esc_html__('This is a title', 'your-textdomain-here'),
        'description' => esc_html__('Description Here', 'your-textdomain-here'),
        'url'         => esc_html__('Give us a link!', 'your-textdomain-here'),
    ),
) );
```

## Example Usage
This example assumes at least one slide has been filled out and saved, based on the example usage provided above. Individual slide information is stored in a zero-based array. Be sure to change `$redux_demo` to the value you specified in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

::: warning IMPORTANT NOTE
Redux does NOT save blank slides to the database.  This means on the initial load of your options panel, the empty slide will not be available.  It will be necessary to use `isset` and `!empty` checks on the slide variable before attempting to use it in your code, as shown below.
:::

```php
global $redux_demo;

if ( isset( $redux_demo['opt-slides'] ) && !empty( $redux_demo['opt-slides'] ) ) {
    echo 'Slide 1 Title: '         . $redux_demo['opt-slides'][0]['title'];
    echo 'Slide 1 Description: '   . $redux_demo['opt-slides'][0]['description'];
    echo 'Slide 1 URL: '           . $redux_demo['opt-slides'][0]['url'];
    echo 'Slide 1 Attachment ID: ' . $redux_demo['opt-slides'][0]['attachment_id'];
    echo 'Slide 1 Thumb: '         . $redux_demo['opt-slides'][0]['thumb'];
    echo 'Slide 1 Image: '         . $redux_demo['opt-slides'][0]['image'];
    echo 'Slide 1 Width: '         . $redux_demo['opt-slides'][0]['width'];
    echo 'Slide 1 Height: '        . $redux_demo['opt-slides'][0]['height'];
}
```

## Using the `show` Argument
There are three main elements to the slide field, namely the title, description, and URL (media URL). You can easily hide
any of these elements using the `show` argument and providing a key=>False value for the element you wish to hide.

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'          => 'opt-slides',
    'type'        => 'slides',
    'title'       => esc_html__('Slides Options', 'your-textdomain-here'),
    'subtitle'    => esc_html__('Unlimited slides with drag and drop sortings.', 'your-textdomain-here'),
    'desc'        => esc_html__('This field will store all slides values into a multidimensional array to use into a foreach loop.', 'your-textdomain-here')
    'placeholder' => array(
        'title'       => esc_html__('This is a title', 'your-textdomain-here'),
        'url'         => esc_html__('Give us a link!', 'your-textdomain-here'),
    ),
    'show'        => array( 'description' => false ),
) );
```