---
title: "Validate"
sidebarDepth: 2
---

# Using the `validate` Argument

There are many validation options included within Redux that can apply to [fields](../objects/field.md). You can 
also build your own validations. A validation is basically a way to validate the data is correct. If the validation
does not pass, a warning or error will be displayed and the changed value will not be saved.

::: warning Table of Contents
[[toc]]
:::

## How to Use
You declare the use of a validation by passing the `validate` argument to the [field array](../objects/field.md).
Below is an example:
 
```php
array(
    'validate' => 'not_empty'
)
```

### Multiple Validations

Multiple validations may occur on a given field by setting an array of validations. The validations will
occur in the order as they appear in the array. An example of this is below.
```php
array(
    'validate' => array( 'numeric', 'not_empty' )
)
```

Not all validations may chain together. Be careful to ensure you're passing any necessary additional arugments.


### Using a Custom Validation

You can declare your own custom validation by providing a callback function as shown below.

```php
array(
    'validate_callback' => 'test_custom_callback'
)
```

The function you add could do anything. Here is an example:
```php
if ( ! function_exists( 'test_custom_callback' ) ) {
	/**
	 * Custom function for the callback validation referenced above
	 *
	 * @param array $field          Field array.
	 * @param mixed $value          New value.
	 * @param mixed $existing_value Existing value.
	 *
	 * @return mixed
	 */
	function test_custom_callback( $field, $value, $existing_value ) {
		$error   = false;
		$warning = false;

		// Do your validation.
		if ( 1 === $value ) {
			$error = true;
			$value = $existing_value;
		} elseif ( 2 === $value ) {
			$warning = true;
			$value   = $existing_value;
		}

		$return['value'] = $value;

		if ( true === $error ) {
			$field['msg']    = 'your custom error message';
			$return['error'] = $field;
		}

		if ( true === $warning ) {
			$field['msg']      = 'your custom warning message';
			$return['warning'] = $field;
		}

		return $return;
	}
}
```

::: tip
Anything passed back in the return object `$return['value']` will be saved. Display a warning or an error
attached to the field by specifying `warning` or `error` in the return array.
:::

## Built-in Validations

|<div style="width:160px;">Key</div>| Description                                                                                                                                                                                                          |
|--|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`color`| Valid HTML hex color. Works with [color_rgba](../../core-fields/color-rgba.md) field (opacity)                                                                                                                       |
|`comma_numeric`| Value is numeric separated by commas                                                                                                                                                                                 |
|`css`| CSS                                                                                                                                                                                                                  |
|`date`| Date                                                                                                                                                                                                                 |
|`email`| Valid Email                                                                                                                                                                                                          |
|`html_custom`| HTML validation - See [html_custom example](validate.md#html-custom-example)                                                                                                                                         |
|`js`| JavaScript                                                                                                                                                                                                           |
|`no_html`| No HTML is permitted                                                                                                                                                                                                 |
|`no_special_chars`| Alpha Numeric, excluding special characters                                                                                                                                                                          |
|`not_empty`| If the value is empty                                                                                                                                                                                                |
|`numeric`| Value is numeric                                                                                                                                                                                                     |
|`preg_replace`| Perform a replacement on the contents based on a regex pattern. You can test your regex patterns on a website like [phprex](https://phphub.net/regex/). See [preg_replace Example](validate.md#preg-replace-example) |
|`str_replace`| Return a string after running through a `str_replace`. See [str_replace Example](validate.md#str-replace-example)                                                                                                    |
|`unique_slug`| To generate a unique slug - optional `'flush_permalinks' => true` argument can be added to force a flush permalinks on successful save                                                                               |
|`url`| Valid URL                                                                                                                                                                                                            |


### `preg_replace` Example

```php    'validate' => 'preg_replace',
'preg' => array(
    'pattern' => '/[^a-zA-Z_ -]/s', 
    'replacement' => 'no numbers'
)
```


### `str_replace` Example

```php    
'validate' => 'str_replace',
'str' => array(
    'search' => ' ', 
    'replacement' => 'thisisaspace'
)
```


### `html_custom` Example

You can easily set what HTML is allowed in one of your fields by using the code below. This utilizes 
[wp_kses](http://codex.wordpress.org/Function_Reference/wp_kses) from the WordPress core. You can find more information 
about function at [http://codex.wordpress.org/Function_Reference/wp_kses](http://codex.wordpress.org/Function_Reference/wp_kses)

```php    
'validate'     => 'html_custom',
'allowed_html' => array( 
    'a'        => array( 
        'href'    => array(), 
        'title'   => array() 
    ), 
    'br'       => array(), 
    'em'       => array(), 
    'strong'   => array() 
)
```



## A Warning
::: danger
The following fields do **NOT** accept validation unless using [validate_callback](validate.md#using-a-custom-validation).

- [Button Set](../../core-fields/button-set.md)
- [Checkbox](../../core-fields/checkbox.md)
- [Date](../../core-fields/date.md)
- [Image Select](../../core-fields/image-select.md)
- [Radio](../../core-fields/radio.md)
- [Select](../../core-fields/select.md)

**There may be others yet to be documented.**
:::
