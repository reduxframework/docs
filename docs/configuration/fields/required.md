---
title: "Required" 
---

# Using the `required` Argument

Fields may be linked/required/folded according to a/multiple parent value(s). This is achieved by appending a 
`required` argument to the [field](../objects/field.md). Required can be very powerful, but due to the complexity requires 
some careful considerations.

::: warning Table of Contents
[[toc]]
:::
    
## Example Config

To link a field's visibility to the value of another:
    
```php
array(
    'required' => array( 'LINKED_FIELD_ID', 'OPERATION', 'VALUE' )
)
```
|Key|Description|
|--- |--- |
|`LINKED_FIELD_ID`|Field ID that will affect the visibility of this field|
|`OPERATION`|Comparison operation to perform|
|`VALUE`|Value is the value to compare against for visibility|

You can also link a field with multiple "parent" required values. If all of these conditions are not met, this 
[field](../objects/field.md) will not be visible and the [field](../objects/field.md#output) CSS will not be used. 
An example is as follows:

    
```php
array(
    'required' => array( 
        array( 'LINKED_FIELD_ID_1', 'OPERATION_1', 'VALUE_1' ), 
        array( 'LINKED_FIELD_ID_2', 'OPERATION_2', 'VALUE_2' ) 
    )
)
```
If you are checking the same key againt a different value then you have to do it as follows:


```php
array(
    'required' => array( 
        array( 'LINKED_FIELD_ID_1', 'OPERATION_1', array( 'VALUE_1', 'VALUE_2' ) )
    )
)
```

## Operations Available

To attempt to support the various possibilities, a number of options have been coded. These operations have been found to
support the majority of needs.

|Operation|Test Equivalent|
|--- |--- |
|=|`$a = $b`|
|equals|`$a = $b`|
|!=|`$a != $b`|
|not|`$a != $b`|
|>|`$a > $b`|
|greater|`$a > $b`|
|is_larger|`$a > $b`|
|>=|$`a >= $b`|
|greater_equal|`$a >= $b`|
|is_larger_equal|`$a >= $b`|
|<|`$a < $b`|
|less|`$a < $b`|
|is_smaller|`$a < $b`|
|<=|`$a <= $b`|
|less_equal|`$a <= $b`|
|is_smaller_equal|`$a <= $b`|
|contains|`( strpos( $a, $b ) !== false )`|
|doesnt_contain|`( strpos($a, $b) === false )`|
|not_contain|`( strpos($a, $b) === false )`|
|is_empty_or|`if ( empty( $value1 )`|
|not_empty_and|`if ( !empty( $value1 ) && $value1 != $value2 )`|

    

## Nesting
If any parent is hidden or doesn't match the value, all children are 
hidden and all CSS output from those children is hidden as well.

## CSS Output
CSS output to both the head and compiler is removed from each field if the required value(s) is/are not met. You can, 
however, override this on a per-field basis by setting `'force_output' => true` for each field you want CSS to still be 
output with. This way you can nest a field under another, and still have it output to the dynamic CSS.

::: tip
The CSS output will always be visible if items are within a `section` field unless that specific field has the required value set to the required parent as well.
:::
