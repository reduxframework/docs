---
sidebarDepth: 2
---

# The Redux API

The Redux API serves as a singular interface into Redux. You can do virtually anything within Redux via the API with
simplicity in mind.

::: danger API Method Names Have Changed
A number of API methods have changed name in Redux 4.x to match PHP naming conventions. There are still shims for the old 
names, but they will give you a deprecation notice. For a full list of method changes for the API look below at 
[Deprecated Methods](#deprecated-methods) or the [Redux 4.x Migration & Compatibility](../guides/other/migration-guide.md).
:::

::: warning Table of Contents
[[toc]]
:::



## History

Working with Redux in the past was much more cumbersome. Filters, extension loaders, separate arrays, fallback checks.
None of these were had in the past. In Redux 3.5+ the API was created to remedy this. It has further been enhanced in 
Redux 4.x+. It is advised to use the new API methods when possible.

## Usage and Examples

Redux can have an unlimited number of sessions running at once. Hence, the [opt_name](global_arguments.md#opt-name) 
is so crucial. It must be unique, and it is the first variable for the methods within the Redux API.

For safety reasons, and to ensure Redux has loaded properly, it's advised to put an if statement before you use the API
in case Redux has not been loaded yet.
Code. 

```php
if ( ! class_exists( 'Redux' ) ) {
    return;
}
```

### Redux::set_args()
This sets [global args](global_arguments.md) for the Redux instance. Its use is required for
virtually any Redux instance. An example of its use is below.

```php
$opt_name = 'YOUR_OPT_NAME';
$args = Array(
    'opt_name'    => $opt_name,
    'customizer'  => true
);

Redux::set_args( $opt_name, $args );
``` 


### Redux::get_args()

This method takes one or two parameters depending on the desired output.

#### Fetch All Arguments

The return value is an array of all global arguments for the [opt_name](global_arguments.md#opt-name) instance.
```php
$args = Redux::get_args( $opt_name );
```

#### Fetch a Single Argument

If a key is provided, and the value is set, the single value will be returned; otherwise null is returned.

```php
echo Redux::get_arg( $opt_name, 'opt_name' );
```
The above value returns a text value of the [opt_name](global_arguments.md#opt-name) string value.

### Redux::set_help_tab()

This method requires two parameters, the [opt_name](global_arguments.md#opt-name) string value, followed by an array value of tab data.

```php
$opt_name = 'YOUR_OPT_NAME';
$tabs = array(
    array(
        'id'      => 'redux-help-tab-1',
        'title'   => 'Theme Information 1',
        'content' => '<br />This is the tab content, HTML is allowed.<br />')
    ),
    array(
        'id'      => 'redux-help-tab-2',
        'title'   => 'Theme Information 2',
        'content' => '<br />This is the tab content, HTML is allowed.<br />')
    )
);
Redux::set_help_tab( $opt_name, $tabs );
```

### Redux::set_help_sidebar()

This method requires two parameters. First, the [$opt_name](global_arguments.md#opt-name) string value, the second, the 
`$content` string value.

```php
$opt_name = 'YOUR_OPT_NAME';
$content = '<br />This is the sidebar content, HTML is allowed.<br />');
Redux::set_help_sidebar( $opt_name, $content );
```

### Setting & Altering Sections

For full examples of how to use the Redux API with sections, see the [sections documentation](objects/section.md).

### Setting & Altering Fields

For full examples of how to use the Redux API with fields, see the [fields documentation](objects/field.md).

### Setting and Fetching Extensions

For full examples of how to use the Redux API with extensions, see the [using extensions documentation](../guides/basics/using-extensions.md).

### Redux::init()

This method forces Redux to load at that instant instead of waiting for the init hook as is default with Redux. This is
useful for instantly setting Redux values. Beware, doing so too early might cause issues, especially
with extensions like metaboxes.

```php
$opt_name = 'YOUR_OPT_NAME';
Redux::init( $opt_name );
```

### Disable Demo Mode Notice

When the Redux **plugin** is activated, an `Activate Demo Mode` admin notice will display, allowing users to try the Redux sample
config. Calling this method will disable that feature.

```php
Redux::disable_demo();
```

<style>
td:first-child { white-space: nowrap; }
</style>

## Available Methods
|Method|Description|
|--|--|
|Redux::all_instances()|Retrieve all ReduxFramework Instances.|
|Redux::check_opt_name( $opt_name )|Check opt_name integrity.|
|Redux::construct_args( $opt_name )|Construct global arguments.|
|Redux::construct_fields( $opt_name, $section_id )|Construct option panel fields.|
|Redux::construct_sections( $opt_name )|Construct option panel sections.|
|Redux::create_redux()|Create Redux instance.|
|Redux::disable_demo()|Method to disables Redux demo mode popup.|
|Redux::extension_path( $extension, $folder )|Sets a path to an extension.|
|Redux::get_arg( $opt_name, $key )|Retrieves a single global argument.|
|Redux::get_args( $opt_name )|Retrieves option panel global argument array.|
|Redux::get_extensions( $opt_name, $key )|Gets loaded extensions.|
|Redux::get_field( $opt_name, $id )|Retrieves an option panel field.|
|Redux::get_file_version( $file )|Retrieve metadata from a file. Based on WP Core's get_file_data function|
|Redux::get_instance_extension( $opt_name, $instance )|Gets all loaded extension for the passed ReduxFramework instance.|
|Redux::get_option( $opt_name, $key, $default )|Retrieves single option from the database.|
|Redux::get_post_meta( $opt_name, $the_post, $key, $default )|Retrieves meta for a given post page, IE WordPress meta values|
|Redux::get_priority( $opt_name, $type )|Get next availability priority for field/section.|
|Redux::get_section( $opt_name, $id )|Retrieve panel section.|
|Redux::get_sections( $opt_name )|Retrieve all sections from the option panel.|
|Redux::hide_field( $opt_name, $id, $hide )|Hides an option panel field.|
|Redux::hide_section( $opt_name, $id, $hide )|Hides an option panel section.|
|Redux::init( $opt_name )|Init Redux object|
|Redux::instance( $opt_name )|Retrieve ReduxFramework object.|
|Redux::load()|Code to run at creation in instance.|
|Redux::load_extensions( $redux_framework )|Load external extensions.|
|Redux::load_redux( $opt_name )|Load Redux Framework.|
|Redux::remove_demo()|Callback used by Redux::disable_demo() to remove the demo mode notice from Redux.|
|Redux::remove_field( $opt_name, $id )|Removes an option panel field.|
|Redux::remove_section( $opt_name, $id, $fields )|Remove option panel by ID.|
|Redux::set_args( $opt_name, $args )|Sets option panel global arguments.|
|Redux::set_extensions( $opt_name, $path, $force )|Sets all extensions in path.|
|Redux::set_field( $opt_name, $section_id, $field )|Creates an option panel field and adds to a section.|
|Redux::set_fields( $opt_name, $section_id, $fields )|Create multiple fields of the option panel and apply to a section.|
|Redux::set_help_sidebar( $opt_name, $content )|Sets the help sidebar content.|
|Redux::set_help_tab( $opt_name, $tab )|Sets help tabs on option panel admin page.|
|Redux::set_option( $opt_name, $key, $option )|Sets an option into the database.|
|Redux::set_section( $opt_name, $section, $replace )|Sets a single option panel section.|
|Redux::set_sections( $opt_name, $sections )|Create multiple sections of the option panel.|

### Deprecated Methods

A number of these methods were deprecated with Redux 4.x due to naming standards. Shims still exist for them all. 
However, a deprecation notice will be provided if used.

|Method|Description|
|--|--|
|Redux::createRedux()|Deprecated Create Redux instance.|
|Redux::extensionPath( $extension, $folder )|Deprecated function to set extension path.|
|Redux::getArg( $opt_name, $key )|Deprecated Retrieves a single global argument.|
|Redux::getArgs( $opt_name )|Deprecated Retrieves option panel global argument array.|
|Redux::getExtensions( $opt_name, $key )|Deprecated Gets loaded extensions.|
|Redux::getField( $opt_name, $id )|Deprecated Retrieves an option panel field.|
|Redux::getOption( $opt_name, $key, $default )|Deprecated Retrieves single option from the database.|
|Redux::getSection( $opt_name, $id )|Deprecated Retrieve panel section.|
|Redux::getSections( $opt_name )|Deprecated Retrieve all sections from the option panel.|
|Redux::hideField( $opt_name, $id, $hide )|Deprecated Hides an option panel field.|
|Redux::hideSection( $opt_name, $id, $hide )|Deprecated Hides an option panel section.|
|Redux::loadRedux( $opt_name )|Deprecated function of Load Redux Framework.|
|Redux::removeField( $opt_name, $id )|Deprecated Removes an option panel field.|
|Redux::removeSection( $opt_name, $id, $fields )|Deprecated Remove option panel by ID.|
|Redux::setArgs( $opt_name, $args )|Deprecated Sets option panel global arguments.|
|Redux::setExtensions( $opt_name, $path )|Deprecated Sets all extensions in path.|
|Redux::setField( $opt_name, $section_id, $field )|Deprecated Creates an option panel field.|
|Redux::setHelpSidebar( $opt_name, $content )|Deprecated Sets the help sidebar content.|
|Redux::setHelpTab( $opt_name, $tab )|Deprecated Sets help tabs on option panel admin page.|
|Redux::setOption( $opt_name, $key, $option )|Deprecated Sets an option into the database.|
|Redux::setSection( $opt_name, $section )|Deprecated Sets a single option panel section.|
|Redux::setSections( $opt_name, $sections )|Deprecated Create a section of the option panel.|