# Custom Fonts <Badge text="field" type="warn"/>

The Custom Fonts extension is for users to upload a .ttf, .woff, .otf, or .zip containing any of the aforementioned 
fonts. It will then generate whatever fonts it may need, and make the font accessible via the typography field within 
Redux. A custom font CSS file will be enqueued to the panel as well as the frontend.

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type| Default        |Description|
|--- |--- |----------------|--- |
|type|string| `custom_fonts` |Value identifying the field type.|
|id|string|                |Unique ID identifying the field. Must be different from all other field IDs.|
|title|string|                |Displays title of the field.|
|subtitle|string|                |Subtitle display of the field, situated beneath the title.|
|desc|string|                |Description of the field, appearing beneath the field control.|
|class|string|                |Appends any number of classes to the field's class attribute.|

## Example Config
```php
Redux::set_section(
	$opt_name,
	array(
		'title'      => esc_html__( 'Custom Fonts', 'your-textdomain-here' ),
		'desc'       => esc_html__( 'For full documentation on this field, visit: ', 'your-textdomain-here' ) . '<a href="https://devs.redux.io/core-extensions/custom-fonts.html" target="_blank">https://devs.redux.io/core-extensions/custom-fonts.html</a>',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'   => 'custom_fonts',
				'type' => 'custom_fonts',
			),
			array(
				'id'          => 'custom_fonts_typography',
				'type'        => 'typography',
				'title'       => esc_html__( 'Custom Fonts Typography', 'your-textdomain-here' ),
				'font-size'   => false,
				'line-height' => false,
				'text-align'  => false,
			),
		),
	)
);
```

## Example Usage
This extension has no return value.