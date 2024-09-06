---
title: "Filter Hooks" 
---

# Filter Hooks

The following table is a list of available filter hooks within Redux developers may use in their own code. Please 
note, a solid understanding of [PHP](https://secure.php.net/docs.php) and [WordPress filter hooks](https://codex.wordpress.org/Function_Reference/add_filter) 
are required.

As always, please be sure to replace `{opt_name}` with the opt_name string of your Redux instance.

Thanks to [@paulthecoder](https://github.com/paulthecoder) for compiling this list.

<style>
td:first-child { word-break: break-word; }
</style>

|Tag|Value|Extra Args|Description|
|--- |--- |--- |--- |
|redux/textdomain/{opt_name}|**$locale**<br />(string) The locale of the blog or from the ‘locale’ hook.|**$text_domain**<br />(string) ‘redux-framework’ text domain.|Locale for text domain.|
|redux/font-icons|**$font_icons**<br />(array) Array of elusive icon classes.|
|redux/page/{opt_name}/enqueue/jquery-ui-css|**$url**<br />(string) The url to enqueue jQuery UI CSS.|
|redux/{opt_name}/field/class/{field.type}|**$class**<br />(string) Field class file path.|**$field**<br />(array) Field config data.|Change the path of a specific field.|
|redux/{opt_name}/localize/save_pending|**$text**<br />(string) Save pending text.|
|redux/{opt_name}/localize/reset|**$text**<br />(string) Reset all string.|
|redux/{opt_name}/localize/reset_section|**$text**<br />(string) Reset section string.|
|redux/{opt_name}/localize/preset|**$text**<br />(string) Preset confirm string.|
|redux/{opt_name}/panel/templates_path|**$path**<br />(string) The panel templates path.|
|redux/{opt_name}/panel/template/{file_name}|**$path**<br />(string) Path to the template file.|
|redux/{opt_name}/field/font/icons|**$font_icons**<br />(array) Array of elusive icon classes|
|edux/{opt_name}/field/class/{field.type}|**$file_path**<br />(string) Field class file.|**$field**<br />(array) Field config data.|Field class file.|
|redux-imported-text-{opt_name}|**$text**<br />(string) Translated “settings imported” text.|
|redux-defaults-text-{opt_name}|**$text**<br />(string) Translated all “defaults restored” text.|
|redux-defaults-section-text-{opt_name}|**$text**<br />(string) Translated section “defaults restored” text.|
|redux-saved-text-{opt_name}|**$text**<br />(string) Translated “settings saved” text.|
|redux-changed-text-{opt_name}|**$text**<br />(string) Translated “settings have changed” text.|
|redux/args/{opt_name}|**$args**<br />(array) ReduxFramework configuration.|
|redux/options/{opt_name}/args|**$args**<br />(array) ReduxFramework configuration.|
|redux/options/{opt_name}/sections|**$sections**<br />(array) Field option sections.|
|redux/options/{opt_name}/global_variable|**$value**<br />(array) Option value to set global_variable with.|
|redux/options/{opt_name}/data/{type}|**$data**<br />(string) WordPress specific data.|
|redux/options/{opt_name}/defaults|**$defaults**<br />(array) Option default values.|
|redux/options/{opt_name}/section/{section.id}|**$section**<br />(array) Section configuration.|
|redux/options/{opt_name}/field/{field.id}/register|**$field**<br />(array) Field config data.|
|redux/options/{opt_name}/field/{field.id}|**$field**<br />(array) Field config data.|
|redux/field/{opt_name}/output_css|**$field**<br />(array) Field config data.|
|redux/field/{opt_name}/{field.type}/render/after|**$text**<br />(string) Rendered field markup.|**$field**<br />(array) Field data.|
|redux/field/{opt_name}/render/after|**$text**<br />(string) Rendered field markup.|**$field**<br />(array) Field data.|
|redux/field/{opt_name}/_can_output_css|**$field**<br />(array) Field data.||Check if a field meets its requirements before outputting to CSS.|
|redux/extension/{opt_name}/{folder}|**$file_path**<br />(string) Extension class file path.|**$extension_class**<br />(string) Extension class name.|
|redux/validate/{opt_name}/defaults|**$defaults**<br />(array) Option default values.||When all options have been reset to defaults.|
|redux/validate/{opt_name}/defaults_section|**$plugin_options**<br />(array) Option default values.|When a section’s options have been reset to defaults.|
|redux/validate/{opt_name}/before_validation|**$plugin_options**<br />(array) The options array before validation.|**$redux_options**<br />(array) Redux Framework options array.|
|redux/validate/{opt_name}/class/{field.validate}|**$file_path**<br />(string) Validation class file path.|**$class_file**<br />(string) Validation class file path.|