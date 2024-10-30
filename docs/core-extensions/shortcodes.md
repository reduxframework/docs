# Shortcodes <Badge text="enhancement" type="warn"/>

Redux comes complete with a set of useful shortcodes for use in your theme or plugin.

::: warning Table of Contents
[[toc]]
:::

::: warning
Shortcode results will not appear in your option panel or on the backend due to Redux config loading on or before the `init` hook (if doing it properly.

However, using these shortcodes within input boxes where the result is displayed on the front end will work.
:::

## Shortcodes
| Shortcode  | Function| Output |
|------------|---------|--------|
|[bloginfo data="name"]|get_bloginfo("name")|Displays the "Site Title" set in Settings > General. This data is retrieved from the "blogname" record in the wp_options table.|
|[bloginfo data="description"]|get_bloginfo("description")|Displays the "Tagline" set in Settings > General. This data is retrieved from the "blogdescription" record in the wp_options table.|
|[bloginfo data="wpurl"]|get_bloginfo("wpurl")|Displays the "WordPress address (URL)" set in Settings > General. This data is retrieved from the "siteurl" record in the wp_options table. Consider using *root_url* instead, especially for multi-site configurations using paths instead of subdomains (it will return the root site not the current sub-site).|
|[bloginfo data="root_url"]|site_url()|Return the root site, not the current sub-site.|
|[bloginfo data="url"]|home_url()|Displays the "Site address (URL)" set in Settings > General. This data is retrieved from the "home" record in the wp_options table.|
|[bloginfo data="admin_email"]|get_bloginfo("admin_email")|Displays the "E-mail address" set in Settings > General. This data is retrieved from the "admin_email" record in the wp_options table.|
|[bloginfo data="charset"]|get_bloginfo("charset")|Displays the "Encoding for pages and feeds" set in Settings > Reading. This data is retrieved from the "blog_charset" record in the wp_options.|
|[bloginfo data="version"]|get_bloginfo("version")|Displays the WordPress Version you use. This data is retrieved from the $wp_version variable set in wp-includes/version.php.|
|[bloginfo data="html_type"]|get_bloginfo("html_type")|Displays the Content-Type of WordPress HTML pages (default: "text/html"). This data is retrieved from the "html_type" record in the wp_options table. Themes and plugins can override the default value using the pre_option_html_type filter.|
|[bloginfo data="is_multisite"]|is_multisite()|Displays true/false check if WordPress is running in multisite mode.|
|[bloginfo data="text_direction"]|is_rtl()|Displays true/false check if the Text Direction of WordPress HTML pages is left instead of right.|
|[bloginfo data="language"]|get_bloginfo("language")|Displays the language of WordPress.|
|[bloginfo data="stylesheet_url"]|get_stylesheet_uri()|Displays the primary CSS (usually style.css) file URL of the active theme.|
|[bloginfo data="stylesheet_directory"]|get_stylesheet_directory()|Displays the stylesheet directory of the active theme.|
|[bloginfo data="template_url"]|get_template_directory_uri()|Displays the "Site Title" set in Settings > General. This data is retrieved from the "blogname" record in the wp_options table.|
|[bloginfo data="child_template_url"]|get_stylesheet_directory_uri()|Child template URI.|
|[bloginfo data="template_directory"]|get_template_directory()|Template directory.|
|[bloginfo data="child_template_directory"]|get_stylesheet_directory()|Child template Directory.|
|[bloginfo data="pingback_url"]|get_bloginfo("pingback_url")|Displays the Pingback XML-RPC file URL (xmlrpc.php).|
|[bloginfo data="atom_url"]|get_bloginfo("atom_url")|Displays the Atom feed URL (/feed/atom).|
|[bloginfo data="rdf_url"]|get_bloginfo("rdf_url")|Displays the RDF/RSS 1.0 feed URL (/feed/rfd).|
|[bloginfo data="rss_url"]|get_bloginfo("rss_url")|Displays the RSS 0.92 feed URL (/feed/rss).|
|[bloginfo data="rss2_url"]|get_bloginfo("rss2_url")|Displays the RSS 2.0 feed URL (/feed).|
|[bloginfo data="comments_atom_url"]|get_bloginfo("comments_atom_url")|Displays the comments Atom feed URL (/comments/feed).|
|[bloginfo data="comments_rss2_url"]|get_bloginfo("comments_rss2_url")|Displays the comments RSS 2.0 feed URL (/comments/feed).|
|[bloginfo data="login_url"]|wp_login_url()|Returns the WordPress login URL.|
|[bloginfo data="logout_url"]|wp_logout_url()|Returns the WordPress logout URL.|
|[bloginfo data="register_url"]|wp_registration_url()|Returns the WordPress register URL.|
|[bloginfo data="lost_password_url"]|wp_lostpassword_url()|Returns the WordPress lost password URL.|
|[date data="Y"]|date("Y")|Returns the current year. Any date format characters as specified by the PHP Date Format Table may be used.|
|[themeinfo data="name"]|$theme_info->get("Name")|Theme name as given in theme's style.css.|
|[themeinfo data="theme_uri"]|$theme_info->get("ThemeURI")|The URL to the theme's directory.|
|[themeinfo data="description"]|$theme_info->get("Description")|The description of the theme.|
|[themeinfo data="author"]|$theme_info->get("Author")|The theme's author.|
|[themeinfo data="author_uri"]|$theme_info->get("AuthorURI")|The website of the theme author.|
|[themeinfo data="version"]|$theme_info->get("Version")|The version of the theme.|
|[themeinfo data="template"]|$theme_info->get("Template")|The folder name of the current theme.|
|[themeinfo data="status"]|$theme_info->get("Status")|If the theme is published.|
|[themeinfo data="tags"]|$theme_info->get("Tags")|Tags used to describe the theme.|
|[themeinfo data="text_domain"]|$theme_info->get("TextDomain")|The text domain used in the theme for translation purposes.|
|[themeinfo data="domain_path"]|$theme_info->get("DomainPath")|Path to the theme translation files.|
|[themeinfo data="is_child"]|is_child_theme()|True/False return for child theme active check (Blank indicates False).|

## Usage
For shortcode output to display properly, any usage of these, or any, shortcodes must be run through WordPress's `do_shortcode` function.

```php
echo do_shortcode( '©' .  [date data="Y"] . 'Company name | All Rights Reserved.' );
```