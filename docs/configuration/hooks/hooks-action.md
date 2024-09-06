---
title: "Action Hooks" 
---

# Action Hooks

The following table is a list of available filter hooks within Redux developers may use in their own code. Please 
note, a solid understanding of [PHP](https://secure.php.net/docs.php) and [WordPress action hooks](https://codex.wordpress.org/Function_Reference/add_action) are required.

As always, please be sure to replace `{opt_name}` with the opt_name string of your Redux instance.

Thanks to [@paulthecoder](https://github.com/paulthecoder) for compiling this list.

<style>
td:first-child { word-break: break-word; }
</style>

|Tag|Args|Description|
|--- |----- |----- |
|redux/init||On Redux init.|
|redux/plugin/hooks|**$plugin_object**<br />(object) ReduxFrameworkPlugin|After the plugin is activated and loaded.|
|redux/ajax/heartbeat|**$redux_object**<br />(object) ReduxFramework|Disregard WP AJAX ‘heartbeat’ call. Why waste resources?|
|redux/construct|**$redux_object**<br />(object) ReduxFramework|Construct hook.|
|redux/loaded|**$redux_object**<br />(object) ReduxFramework|Redux has loaded|
|ReduxFrameworkPlugin_admin_notice||Before displaying the admin notice.|
|redux/{opt_name}/panel/before||Before the panel template is echoed.|
|redux/{opt_name}/panel/after||After the panel template is echoed.|
|redux/page/{opt_name}/enqueue||After Redux has enqueued its stylesheets and scripts.|
|redux/page/{opt_name}/load|**$wp_screen**<br />(object) WP_Screen|Redux options page has loaded.|
|redux/page/{opt_name}/header|**$redux_object**<br />(object) ReduxFramework|Redux admin_head() hook for options page.|
|redux/page/{opt_name}/sections/after|**$redux_object**<br />(object) ReduxFramework|Right after all the sections in the options panel, just before the footer.|
|redux/page/{opt_name}/menu/after|**$redux_object**<br />(object) ReduxFramework|After the sections menu in the options panel.|
|redux/page/{opt_name}/form/before|**$redux_object**<br />(object) ReduxFramework|Before the panel’s form is echoed.|
|redux/page/{opt_name}/form/after|**$redux_object**<br />(object) ReduxFramework|After the panel’s form is echoed.|
|redux/options/{opt_name}/import|**$redux_object**<br />(object) ReduxFramework|When the last save mode is an import.|
|redux/options/{opt_name}/reset|**$redux_object**<br />(object) ReduxFramework|When the last save mode is a global reset.|
|redux/options/{opt_name}/section/reset|**$redux_object**<br />(object) ReduxFramework|When the last save mode is a section reset.|
|redux/options/{opt_name}/saved|**$value(mixed)** Set/saved option value|When the last save mode is the normal save options.|
|redux/options/{opt_name}/settings/change|**$value(mixed)** Set/saved option value|When the user has changed an option.|
|redux/options/{opt_name}/errors|**$errors(array)** Error information|Error notification.|
|redux/options/{opt_name}/warnings|**$warnings(array)** Warning information|Warning notification.|
|redux/options/{opt_name}/field/{field.type}/register|**$field(array)** The field settings.|Before the field is registered with add_settings_field().|
|redux/options/{opt_name}/register|**$sections(array)** Option sections|When registering the options.|
|redux/options/{opt_name}/compiler|**$options(array)** $this->options <br/><br/>**$css(string)** CSS that gets sent to the compiler hook. <br/><br/> **$changed_values**<br/>(array) Array of changed values.|Compiler hook.|
|redux/options/{opt_name}/compiler/advanced|**$redux_object**<br />(object) ReduxFramework|Advanced compiler hook.|
|redux/options/{opt_name}/validate|**$data(&array)** <br />[&$plugin_options, redux_options, changed_values]|Hook on option validation.|
|redux/field/{opt_name}/{field.type}/callback/before|**$data(&array)** <br />[&$field, &$value] Field data + field id.|Before the callback of a specific field type.|
|redux/field/{opt_name}/callback/before|**$data(&array)** <br />[&$field, &$value] Field data + field id.|Before the callback of each field.|
|redux/field/{opt_name}/{field.type}/callback/after|**$data(&array)** <br />[&$field, &$value] Field data + field id.|After the callback of a specific field type.|
|redux/field/{opt_name}/callback/after|**$data(&array)** <br />[&$field, &$value] Field data + field id.|After the callback of each field.|
|redux/field/{opt_name}/{field.type}/render/before|**$data(&array)** <br />[&$field, &$value] Field data + field id.|Before the output of a specific field type.|
|redux/field/{opt_name}/render/before|**$data(&array)** <br />[&$field, &$value] Field data + field id.|Before the output of each field.|
|redux/field/{opt_name}/{field.type}/fieldset/before/{opt_name}|**$data(&array)** <br />[&$field, &$value] Field data + field id.|Before the fieldset of a specific field type.|
|redux/field/{opt_name}/fieldset/before/{opt_name}|**$data&array** <br />[&$field, &$value] Field data + field id.|Before the fieldset of each field.|
|redux/field/{opt_name}/{field.type}/fieldset/after/{opt_name}|**$data(&array)** <br />[&$field, &$value] Field data + field id.|After the fieldset of a specific field type.|
|redux/field/{opt_name}/fieldset/after/{opt_name}|**$data(&array)** <br />[&$field, &$value] Field data + field id.|After the fieldset of each field.|
|redux/extensions/before|**$redux_object**<br />(object) ReduxFramework|Before Redux extensions are registered (not specific to your opt_name).|
|redux/extensions/{opt_name}/before|**$redux_object**<br />(object) ReduxFramework|Before Redux extensions are registered (specific to your opt_name).|
|redux/extensions/{opt_name}|**$redux_object**<br />(object) ReduxFramework|Register Redux extensions.|
|redux/customizer/live_preview||Runs on wp_head() when the Customizer live preview initializes.|
