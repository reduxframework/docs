---
sidebarDepth: 0
title: "Migrating to 4.x"
---

# 4.x Migration & Compatibility

For all intents and purposes, Redux 4.x performs the same as 3.x. To improve support of WordPress standards, a number of functions
have been renamed.  A shim has been included for each of these functions with a deprecation notice that only appears
when `WP_DEBUG` is enabled, `dev_mode` is enabled, or when the site is running locally. It is strongly recommended migrating the new function names. 
Most of these functions are internal and will not impact performance.

Below are the affected classes and methods.

::: warning Table of Contents
[[toc]]
:::

### Redux::

|3.x|4.x|
|--- |--- |
|`Redux::getExtensions`|`Redux::get_extensions`|
|`Redux::setExtensions`|`Redux::set_extensions`|
|`Redux::setOption`|`Redux::set_option`|
|`Redux::getOption`|`Redux::get_option`|
|`Redux::getArg`|`Redux::get_arg`|
|`Redux::getArgs`|`Redux::get_args`|
|`Redux::setArgs`|`Redux::set_args`|
|`Redux::setHelpSidebar`|`Redux::set_help_sidebar`|
|`Redux::setHelpTab`|`Redux::set_help_tab`|
|`Redux::removeField`|`Redux::remove_field`|
|`Redux::getField`|`Redux::get_field`|
|`Redux::hideSection`|`Redux::hide_section`|
|`Redux::removeSection`|`Redux::remove_section`|
|`Redux::getSections`|`Redux::get_sections`|
|`Redux::setSections`|`Redux::set_sections`|
|`Redux::getSection`|`Redux::get_section`|
|`Redux::createRedux`|`Redux::create_redux`|
|`Redux::getSection`|`Redux::get_section`|
|`Redux::loadRedux`|`Redux::load_redux`|
|`Redux::extensionPath`|`Redux::extension_path`|
|`Redux::loadExtensions`|`Redux::load_extensions`|

### Redux_Functions::

|3.x|4.x|
|--- |--- |
|`Redux_Functions::initWpFilesystem`|`Redux_Functions::init_wp_filesystem`|
|`Redux_Functions::isMin`|`Redux_Functions::is_min`|

### Redux_Helpers::

|3.x|4.x|
|--- |--- |
|`Redux_Helpers::getReduxInstances`|`Redux_Helpers::get_all_instances`|
|`Redux_Helpers::getReduxTemplates`|`Redux_Helpers::get_redux_templates`|
|`Redux_Helpers::compileSystemStatus`|`Redux_Helpers::compile_system_status`|
|`Redux_Helpers::makeBoolStr`|`Redux_Helpers::make_bool_str`|
|`Redux_Helpers::cleanFilePath`|`Redux_Functions_Ex::wp_normalize_path`|
|`Redux_Helpers::isTheme`|`Redux_Helpers::is_theme`|
|`Redux_Helpers::reduxAsPlugin`|`Redux_Core::$_as_plugin`|
|`Redux_Helpers::isChildTheme`|`Redux_Helpers::is_child_theme`|
|`Redux_Helpers::wp_normalize_path`|`Redux_Functions_Ex::wp_normalize_path`|
|`Redux_Helpers::isParentTheme`|`Redux_Helpers::is_parent_theme`|
|`Redux_Helpers::trackingObject`|`Redux_Helpers::get_statistics_object`|
|`Redux_Helpers::getTrackingObject`|`Redux_Helpers::get_statistics_object`|
|`Redux_Helpers::isWpDebug`|`Redux_Helpers::is_wp_debug`|
|`Redux_Helpers::isLocalHost`|`Redux_Helpers::is_local_host`|
|`Redux_Helpers::isFieldInUse`|`Redux_Helpers::is_field_in_use`|
|`Redux_Helpers::isFieldInUseByType`|`Redux_Helpers::is_field_in_use_by_type`|
|`Redux_Helpers::tabFromField`|`Redux_Helpers::tab_from_field`|

### Redux_Metaboxes::

|3.x|4.x|
|--- |--- |
|`Redux_Metaboxes::getPriority`|`Redux_Metaboxes::get_priority`|
|`Redux_Metaboxes::getBox`|`Redux_Metaboxes::get_box`|
|`Redux_Metaboxes::getBoxes`|`Redux_Metaboxes::get_boxes`|
|`Redux_Metaboxes::setBoxes`|`Redux_Metaboxes::set_boxes`|
|`Redux_Metaboxes::setBox`|`Redux_Metaboxes::set_box`|
|`Redux_Metaboxes::setField`|`Redux_Metaboxes::set_field`|
|`Redux_Metaboxes::getField`|`Redux_Metaboxes::get_field`|
|`Redux_Metaboxes::processFieldsArray`|`Redux_Metaboxes::process_fields_array`|
|`Redux_Metaboxes::processSectionsArray`|`Redux_Metaboxes::process_sections_array`|
|`Redux_Metaboxes::setSection`|`Redux_Metaboxes::set_section`|
|`Redux_Metaboxes::getSection`|`Redux_Metaboxes::get_section`|
|`Redux_Metaboxes::constructFields`|`Redux_Metaboxes::construct_fields`|
|`Redux_Metaboxes::constructSections`|`Redux_Metaboxes::construct_sections`|
|`Redux_Metaboxes::constructBoxes`|`Redux_Metaboxes::construct_boxes`|
|`Redux_Metaboxes::constructArgs`|`Redux_Metaboxes::construct_args`|
|`Redux_Metaboxes::filterMetaboxes`|`Redux_Metaboxes::filter_metaboxes`|