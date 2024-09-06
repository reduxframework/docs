---
title: "Section" 
---

# The Section Object

The primary grouping of fields within Redux is called a `section`. Each section is unique and creates a grouping of all
the fields within it. A section contains a [fields](field.md) array and any number of [fields](field.md). A number of
API methods are provided to set, manipulate, and remove sections before they are rendered to the user.

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type|Description.|
|--- |--- |--- |
|id|string|The unique identifier of a section. If not provided, the `title` field will be used to generate a unique identifier.|
|title|string|The title of the section that will appear on the option tab.|
|heading|string|Text to appear at the top of the section page. By default the `title` argument is used as the `heading`. This can be overriden by using this argument.|
|desc|string|Text to appear under the section title. HTML is permitted.|
|class|string|Appends any number of classes to the section’s class attribute.|
|icon|string|The icon to be displayed next to the section title. This could be a preset Elusive Icon or a URL to an icon of your own.|
|icon_type|string|Set to `image` when using a custom URL to an icon.|
|permissions|string|String specifying the capability required to view the section.  See [Using Permissions](../argument/permissions.md).|
|fields|array|An array of [field](field.md) arrays contained within this section.|
|customizer_only|bool|A flag to set all [fields](field.md) below this section to [customizer_only](field.md#customizer-only) display. This can be overriden at the [field](field.md) level.|
|subsection|bool|Flag to denote if this section should appear as a subsection to the previously defined section.|
|disabled|bool|Flag to set the disabled state of the section.|

::: tip SEE ALSO
- [Fields](field.md)
- [Getting Started with Redux](../../guides/basics/getting-started.md)
:::

## Setting Section(s)

There are two methods to set a section. The only difference between the two declarations is one is singular
while the other is plural.

### Redux::set_section()

Used to declare a single section containing [fields](field.md).

*Arguments to pass in order of declaration*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../global_arguments.md#opt-name)|
|section|array|A singular section array|
|replace|bool|If `true`, any section with this same ID will be replaced. If `false` (default), a varied section ID will be generated.|

```php
Redux::set_section( 'OPT_NAME', array(
   'title'   => 'New Section',
   'icon'    => 'el-icon-cogs',
   'heading' => 'Expanded New Section Title',
   'desc'    => '<br />This is the section description.  HTML is permitted.<br />',
   'fields'  => array(
       array(
           'id'    => 'opt-text',   
           'type'  => 'text',
           'title' => 'A sample text box',
       ),
   ),
) );
```

#### Adding a section with the same ID

To reduce errors, if a section already exists with that ID, a new one will be generated to ensure a unique section ID.

#### Updating an existing section

It's possible to change the default behavior and replace an existing section by passing a new section array with a
same section_id, and then passing true for the replacement variable. All data between the two sections will be merged. For example,
you can only update values this way. To remove values, using `remove_section`, outlined below, is required.

```php
Redux::set_section( 
    'OPT_NAME', 
    array(
       'title'   => 'New Section',
       'icon'    => 'el-icon-cogs',
       'heading' => 'Expanded New Section Title',
       'desc'    => '<br />This is the section description.  HTML is permitted.<br />',
       'fields'  => array(
           array(
               'id'    => 'opt-text',   
               'type'  => 'text',
               'title' => 'A sample text box',
           ),
       ),
    ), 
    true 
);
```

### Redux::set_sections()

Similar to [::set_section()](#set-section), but used to set an unlimited number of sections containing [fields](field.md) at once.

*Arguments to pass in order of declaration*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../global_arguments.md#opt-name)|
|sections|array|Array of section arrays|

This method allows for multiple sections to be added at once. Bear in mind, a single section may still be set, as shown below.
Always remember to wrap the section in an array.

```php
Redux::set_sections( 
    'OPT_NAME', 
    array(
        array(
           'title'   => 'New Section',
           'icon'    => 'el-icon-cogs',
           'heading' => 'Expanded New Section Title',
           'desc'    => '<br />This is the section description.  HTML is permitted.<br />',
           'fields'  => array(
               array(
                   'id'    => 'opt-text',
                   'type'  => 'text',
                   'title' => 'A sample text box',
               ),
           ),
        )
    ) 
);
```

## Section Helper Functions

A number of helper functions are included in the Redux API to support modifying a section before it's rendered.
These functions have specific use cases and are seldom employed by the typical developer. They're useful when needed.

::: tip
Execution order is important here. Fetching a section before it's been called within your code will fail. 
If you believe a section should exist, ensure you're not in an early loading hook when working with that section.
:::


### Redux::get_section()

*Arguments to pass in order of declaration*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../global_arguments.md#opt-name)|
|`section_id`|string|Unique id of the section you wish to retrieve|

Fetching a section object is easily achieved. This may be useful for checking the section 
array by ID. Returns `false` if the section cannot be identified.

```php
$section = Redux::get_section( 'OPT_NAME', 'SECTION_ID' );
```
### Redux::get_sections()
Let's say you want to grab all sections for a given opt_name, you can do that too.

*Arguments to pass in order of declaration:*
|Name|Type|Description|
|--- |--- |--- |
|`opt_name`|string|Your unique [opt_name](../global_arguments.md#opt-name)|

```php
$sections = Redux::get_sections( 'OPT_NAME' );
```

### Redux::remove_section()

*Arguments to pass in order of declaration*
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`opt_name`|string||Your unique [opt_name](../global_arguments.md#opt-name)|
|`section_id`|string||Unique id of the section you wish to retrieve|
|`delete_fields`|bool|`false`|If set to true, all fields below will be deleted as well|

This method allows removal of a section by ID.

```php
$section = Redux::get_section( 'OPT_NAME', 'SECTION_ID' );
$section['title'] = esc_html__( 'A New Section Title', 'your-textdomain-here' );
Redux::set_section( 'OPT_NAME', $section );
```