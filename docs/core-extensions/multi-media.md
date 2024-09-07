# Multi Media <Badge text="field" type="warn"/>

The Redux Multi Media extension is an improved way to allow your users to upload and/or select multiple files from the WordPress media library 
for use in the Redux Framework options panel.

::: warning Table of Contents
[[toc]]
:::

## Arguments

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`multi_media`|Value identifying the field type.|
|id|string||Unique ID identifying the field. Must be different from all other field IDs.|
|title|string||Displays title of the field.|
|subtitle|string||Subtitle display of the field, situated beneath the title.|
|desc|string||Description of the field, appearing beneath the field control.|
|class|string||Appends any number of classes to the field's class attribute.|
|labels|array||Array of key/pair values defining the text in labels used throughout the field. See 'Setting Labels' below.|
|library_filter|array||Array of comma separated string extensions (minus the dot prefix) which the media uploader/selector will allow/display. Omit this argument to use no filter and allow all file types.|
|max_file_upload|int||Integer value limiting the number of files to be uploaded or selected.  Set to `0` for unlimited.|
|hint|array||Array containing the `content` and optional `title` arguments for the hint tooltip.|

::: tip Also See
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `hints` Argument](../configuration/fields/hints.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Setting Labels

The `labels` argument gives the opportunity to set the caption for the following interfaces.  This is useful not only 
for localization purposes, but for flexibility reasons as well.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|upload_file|string|Select File(s)|Text that appears on the field's upload button.|
|remove_image|string|Remove Image|Alt text appearing over an image thumbnail's delete icon.|
|remove_file|string|Remove|Text appearing after a non-image file's listing|
|file|string|File:|Text appearing before a non-image file's listing.|
|download|string|Download|Text appearing after a non-image file's listing|
|title|string|Field `title` argument|Text appearing in WordPress's media uploader/selector window.|
|button|string|Add or Upload File(s)|Text appearing in WordPress's media uploader/selector button.|
|duplicate|string|%s already exists in your file queue.|Message that appears when a duplicate file has been selected.  %s represents the duplicate file to be displayed and should not be modified.|
|max_limit|string|Maximum upload limit of %s reached/exceeded.|Message that appears when max_file_limit has been reached.  %s represents the max_file_upload number and should not be modified.|


## Example Config

```php
Redux::set_section(
	$opt_name,
	array(
		'title'      => esc_html__( 'Multi Media', 'your-textdomain-here' ),
		'desc'       => esc_html__( 'For full documentation on this field, visit: ', 'your-textdomain-here' ) . '<a href="https://devs.redux.io/core-extensions/multi-media.html" target="_blank">https://devs.redux.io/core-extensions/multi-media.html</a>',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'              => 'opt-multi-media',
				'type'            => 'multi_media',
				'title'           => esc_html__( 'Multi Media Selector', 'your-textdomain-here' ),
				'subtitle'        => esc_html__( 'Alternative media field which allows for multi selections', 'your-textdomain-here' ),
				'desc'            => esc_html__( 'max_file_limit has been set to 5.', 'your-textdomain-here' ),
				'max_file_upload' => 5,
			),
		),
	)
);
```

## Example Usage
The extension's return value is an array of key/pair values. The key contains the file's post-ID, while the value contains the URL of the file itself. 
It will be necessary to use a for/each loop to extract the values (Please remember to replace `redux_demo` with your own [`opt_name`](../configuration/global_arguments.html#opt-name) argument).

### Using the API
```php
$data = Redux::get_option( 'OPT_NAME', 'opt-multi-media' );

foreach ( $data as $id => $url ) {
    echo 'Post ID: ' . $id;
    echo 'URL: '     . $url;
}
```

### Using the Global variable
```php
global $redux_demo;

foreach ( $redux_demo['opt-multi-media'] as $id => $url ) {
    echo 'Post ID: ' . $id;
    echo 'URL: '     . $url;
}
```

## The `get_extended_data` Helper Function
The Multi Media extension includes a helper function to extract a wide variety of data for any post ID passed to it. To 
take advantage of this function, use the following code (to get a post ID, use the code above in conjunction with the 
code below):

```php
// the $id variable assumes a valid post ID.
$ext_data = ReduxFramework_extension_multi_media::get_extended_data( $id )
```

The return value will contain an array of the follow data in key/pair format:

||
|--|
|id|
|title|
|filename|
|url|
|link|
|alt|
|author|
|description|
|caption|
|name|
|status|
|uploadedTo|
|date|
|modified|
|menuOrder|
|mime|
|type|
|subtype|
|icon|
|dateFormatted|
|nonces|
|editLink|
|sizes|
|width|
|height|
|fileLength|
|compat|
