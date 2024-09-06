---
title: "Global Field Arguments" 
sidebarDepth: 2
---

# Global Field Arguments
The following are universal arguments used by every field. The default field arguments can be used by any field. The
extra functionality arguments may perform in different ways depending on the field type.  

## Universal Arguments
These arguments are available for every field.

|Name|Type|Description|
|--- |--- |--- |
|id|string|Unique ID identifying the field.  Must be different from all other field IDs or unexpected replacement will occur.|
|type|string|Type of field to display. Each field must have a unique type.|
|title|string|Display title of the field.|
|subtitle|string|Subtitle display of the field, situated beneath the title.|
|desc|string|Description of the option, appearing beneath the field control.|
|default|string|Default value for the field.|
|[permissions](../fields/permissions.md)|string|String specifying the capability required to view the section.|
|[hint(s)](../fields/hints.md)|array|Array containing the `content` and optional `title` arguments for the hint tooltip.|

::: tip Also See
- [Using the `hint(s)` Argument](../fields/hints.md)
- [Using the `permissions` Argument](../fields/permissions.md)
:::

## Extra Arguments
These arguments may not be supported by all fields, and will be denoted on each field page of documentation. 

|Name|Type|Description|
|--- |--- |--- |
|[compiler](../fields/compiler.md)|bool/array|Flag to run the compiler hook or array of CSS selectors to pass dynamic CSS to the compiler hook.|
|[data](../fields/data.md)|string/array||
|[output](../fields/output.md)|array|Array of CSS selectors to dynamically generate CSS. Only works on supported fields types.|
|[required](../fields/required.md)|array|Provide the parent, comparison operator, and value which will affects the field's visibility.|
|[validate](../fields/validate.md)|string/array||

::: tip Also See
- [Using the `compiler` Argument](../fields/compiler.md)
- [Using the `data` Argument](../fields/data.md)
- [Using the `output` Argument](../fields/output.md)
- [Using the `required` Argument](../fields/required.md)
- [Using the `validate` Argument](../fields/validate.md)
:::