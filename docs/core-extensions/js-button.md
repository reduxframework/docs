# JS Button <Badge text="field" type="warn"/>

The Redux JS Button extension is a new way to activate JavaScript functions manually from within the options panel.  Once 
you've set up the field code with the buttons you'd like to display, you simply assign a JavaScript function name to the 
button, include that function in a JavaScript file assigned to the field and watch the magic happen!

::: warning Table of Contents
[[toc]]
:::

::: tip Getting Started
 Knowledge of JavaScript and/or [jQuery](https://jquery.com/) is required to author your own functions.  This 
 extension does all the work behind the scenes to trigger your custom functions, but to achieve anything when the 
 buttons are clicked, you'll need to be able to author your own code.
:::


## Arguments
|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`js_button`|Value identifying the field type.|
|id|string|Unique ID identifying the field. Must be different from all other field IDs.|
|title|string|Displays title of the field.|
|subtitle|string|Subtitle display of the field, situated beneath the title.|
|desc|string|Description of the field, appearing beneath the field control.|
|class|string|Appends any number of classes to the field's class attribute.|
|script|array|Array of key/pair values defining the JavaScript file containing button functions.  See 'Setting up the Script Argument' below.|
|buttons|array|Set of arrays defining the buttons to display.  Please see 'Setting up Buttons' below.|
|hint|array|Array containing the `content` and optional `title` arguments for the hint tooltip. More info|

::: tip Also See
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `hints` Argument](../configuration/fields/hints.md)
- [Using the `permissions` Argument](../configuration/fields/permissions.md)
- [Using the `required` Argument](../configuration/fields/required.md)
:::

## Settings up the Script Argument
The script argument sets up the JavaScript file and associated options, so that when a JavaScript button is clicked, it 
knows where to search for the function associated with it.  These arguments mirror the WordPress [wp_enqueue_script()](http://codex.wordpress.org/Function_Reference/wp_enqueue_script) 
function parameters, as the extension uses this WordPress API to enqueue your script.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|url|string|Fully qualified URL to and including the JavaScript file name.  See Notes below.|
|dep|array|Array of the handles of all the registered scripts that this script depends on, that is the scripts that must be loaded before this script. This parameter is only required when the script with the given $handle has not been already registered using wp_register_script(). Default handles are all in lower case.|
|ver|string|time()|String specifying the script version number, if it has one, which is concatenated to the end of the path as a query string.|
|in_footer|bool|`true`|Normally, scripts are placed in  of the HTML document. If this parameter is true, the script is placed before the  end tag.|

::: tip NOTES
While it doesn't matter where you might choose to store your script, it is important to never hard code the path to the 
script's location. To get a proper URL to local scripts, use [plugins_url()](http://codex.wordpress.org/Function_Reference/plugins_url) 
for plugins and [get_template_directory_uri()](http://codex.wordpress.org/Function_Reference/get_template_directory_uri) 
for themes. 
:::

## Setting Up Buttons
The `buttons` argument accepts a single array populated by arrays that accept the following arguments:

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|text|string|Required. The text to appear as the button's caption|
|class|string|Optional.  Any additional class names to append to the buttons class parameter.|
|function|string|Required.  The name of the function to call inside the script passed via the `scripts` argument.|


## Example Config
For this example (included in the download), assume we've placed our JavaScript file in the theme's root directory. We 
can easily get its location using [get_template_directory_uri()](https://developer.wordpress.org/reference/functions/get_template_directory_uri/). 
Since our example JavaScript (shown below) uses [jQuery](https://jquery.com/), we must pass the [jQuery](https://jquery.com/) 
dependency via the `scripts` `dep` argument.

```php
array (
    'id'            => 'opt-js-button',
    'type'          => 'js_button',
    'title'         => 'JS Button',
    'subtitle'      => 'Run JavaScript manually from the options panel.',
    'script'        => array(
        'url'       => get_template_directory_uri() .  '/sample.js',
        'dep'       => array('jquery'),
        'ver'       => time(),
        'in_footer' => true
    ),
    'buttons'       => array(
        array(
            'text'      => 'Add Date',

            // This class causes the button to appear colored in the options panel
            'class'     => 'button-primary',

            // The name of the function to execute in the sample.js file
            'function'  => 'redux_add_date'
        ),
        array(
            'text'      => 'Alert',
            'class'     => 'button-secondary',

            // The name of the function to execute in the sample.js file
            'function'  => 'redux_show_alert'
        ),
    ),
),

// This empty text field will be used for the redux_add_date function to fill out 
// with the current date, when the button is clicked.
array(
    'id'        => 'opt-blank-text',
    'type'      => 'text',
    'title'     => 'Date',
),
```

### Example JavaScript File: sample.js

```javascript
// Function to execute when the Add Date button is clicked.
function redux_add_date() {
    (function($){
        'use strict';

        $(document).ready(function(){
            var date = new Date();
            var text = $('#opt-blank-text');
            
            text.val(date.toString());
        });    
    })(jQuery)    
};

// Function to execute when the Alert button is clicked.
function redux_show_alert() {
    alert ('You clicked the Alert button!');
};
```

