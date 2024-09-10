# Theme Check Warnings and Errors

We take compliance very seriously here at Redux. Those who run Theme Check may get some warnings or errors. This document 
will help you prepare your theme for submission to the WordPress.org directory or a marketplace such as Envato 
(ThemeForest/CodeCanyon). This article is primarily for users who are downloading from the GitHub Repo.

::: tip
Redux 4.x has been updated to solve a majority of the Warnings and Non-Errors. This doc has yet to be updated.
:::

## Deleting Unneeded Files
These files & directories are primarily for testing and development. If left in your submission, it will be rejected.

- .github/
- codestyles/
- .gitignore
- .git/
- .jshintignore
- .jshintrc
- .travis.yml
- composer.json
- gulpfile.js
- package-lock.json

## Warnings and Non-Errors
With those items removed, you will get a few more errors yet. We’ll go over each of these.

### INFO: The theme appears to use include or require
This is harmless and will not affect you. Disregard all of these messages.

### REQUIRED: Themes should use `add_theme_page()` for adding admin pages
FALSE! This is in regard to `add_submenu_page()`. That's how we add submenus to the panel menu. It will pass inspection. 
There's also a `add_dashboard_page()` reference. This also is harmless and will be incorporated at a later date.

### WARNING: Found PHP short tags in file`~/redux-core/inc/fields/raw/parsedown.php`
False again. This is a regular expression. Disregard.

### WARNING: `file_put_contents / file_get_contents / curl_init / curl_exec` was found...
These items are primarily fallback for when the `WP_Filesystem` 
fails. And yes, it does fail on odd hosts.  These warning will not get you rejected. If they do, send the 
reviewer this page, and you will make it through.