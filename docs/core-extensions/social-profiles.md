# Social Profiles <Badge text="field" type="warn"/>

The Redux Social Profiles extension easily allows one to create and display links to their social media through code and/or an included widget.

::: warning Table of Contents
[[toc]]
:::

## Arguments
|Name|Type| Default                                                                          |Description|
|--- |--- |----------------------------------------------------------------------------------|--- |
|type|string| `social_profiles`                                                                |Value identifying the field type.|
|id|string|                                                                                  |Unique ID identifying the field. Must be different from all other field IDs.|
|title|string|                                                                                  |Displays title of the field.|
|subtitle|string|                                                                                  |Subtitle display of the field, situated beneath the title.|
|desc|string|                                                                                  |Description of the field, appearing beneath the field control.|
|class|string|                                                                                  |Appends any number of classes to the field's class attribute.|
|compiler|bool| `false`                                                                          |Flag to run the compiler hook.  More info|
|widget_msg|string| Go to the Widgets page to add the Redux Social Widget to any active widget area. |Message to display at the top of the field to inform the user of the extensions widget option.  Use the %s variable to include a link to the widgets area.|
|show_widget_msg|bool| `true`                                                                           |Flag to determine if the widget message is to displayed, or not.|
|include|array|                                                                                  |Optional.  Array of default icons to show, instead of the entire default array.  See "The Include Argument" below.|
|icons|array|                                                                                  |Optional.  Array of arrays specifying custom profiles not included in the default set, or to edit existing profiles.  See "Adding/Editing Additional Icons" below.|
|hint|array|                                                                                  |Array containing the `content` and optional `title` arguments for the hint tooltip.  More info|

## The 'Include' Argument
The Social Profile extension includes 82 default social profile icons from [FontAwesome 6x](https://fontawesome.com/search?m=free&s=solid%2Cregular%2Cbrands).  The icons and their IDs are as follows.

<link rel="stylesheet" href="https://devs.redux.io/css/all.css" crossorigin="anonymous">
<link rel="stylesheet" href="https://devs.redux.io/css/v4-shims.css" crossorigin="anonymous">

<i class="fa fa-2xs fa-ad"></i>

| Name                       | Icon                                                       | ID                 |
|----------------------------|------------------------------------------------------------|--------------------|
| ADN                        | <i name="adn" class="fa fa-2x fa-adn"></i>                 | adn                |
| Android                    | <i class="fa fa-2x fa-android"></i>                        | android            |
| Apple                      | <i class="fa fa-2x fa-apple"></i>                          | apple              |
| behance                    | <i class="fa fa-2x fa-behance"></i>                        | behance            |
| behance                    | <i class="fa fa-2x fa-behance-square"></i>  (square icon)  | behance-square     |
| Bitbucket                  | <i class="fa fa-2x fa-bitbucket"></i>                      | bitbucket          |
| Bitbucket (square icon)    | <i class="fa fa-2x fa-bitbucket-square"></i>               | bitbucket-square   |
| Bitcoin                    | <i class="fa fa-2x fa-btc"></i>                            | bitcoin            |
| Codepen                    | <i class="fa fa-2x fa-codepen"></i>                        | codepen            |
| CSS3                       | <i class="fa fa-2x fa-css3"></i>                           | css3               |
| Delicious                  | <i class="fa fa-2x fa-delicious"></i>                      | delicious          |
| Deviantart                 | <i class="fa fa-2x fa-deviantart"></i>                     | deviantart         |
| Digg                       | <i class="fa fa-2x fa-digg"></i>                           | digg               |
| Dribbble                   | <i class="fa fa-2x fa-dribbble"></i>                       | dribbble           |
| Dropbox                    | <i class="fa fa-2x fa-dropbox"></i>                        | dropbox            |
| Drupal                     | <i class="fa fa-2x fa-drupal"></i>                         | drupal             |
| Empire                     | <i class="fa fa-2x fa-empire"></i>                         | empire             |
| Facebook                   | <i class="fa fa-2x fa-facebook"></i>                       | facebook           |
| Facebook                   | <i class="fa fa-2x fa-facebook-square"></i>  (square icon) | facebook-square    |
| Flickr                     | <i class="fa fa-2x fa-flickr"></i>                         | flickr             |
| FourSquare                 | <i class="fa fa-2x fa-foursquare"></i>                     | foursquare         |
| git                        | <i class="fa fa-2x fa-git"></i>                            | git                |
| git (square icon)          | <i class="fa fa-2x fa-github-square"></i>                  | git-square         |
| github                     | <i class="fa fa-2x fa-github"></i>                         | github             |
| github alt                 | <i class="fa fa-2x fa-github-alt"></i>                     | github-alt         |
| github (square icon)       | <i class="fa fa-2x fa-github-square"></i>                  | github-square      |
| git tip                    | <i class="fa fa-2x fa-gittip"></i>                         | gittip             |
| Google                     | <i class="fa fa-2x fa-google"></i>                         | google             |
| Google Plus                | <i class="fa fa-2x fa-google-plus"></i>                    | google-plus        |
| Google Plus (square icon)  | <i class="fa fa-2x fa-google-plus-square"></i>             | google-plus-square |
| Hacker News                | <i class="fa fa-2x fa-hacker-news"></i>                    | hacker-news        |
| HTML5                      | <i class="fa fa-2x fa-html5"></i>                          | html5              |
| Instagram                  | <i class="fa fa-2x fa-instagram"></i>                      | instagram          |
| Joomla                     | <i class="fa fa-2x fa-joomla"></i>                         | joomla             |
| JS Fiddle                  | <i class="fa fa-2x fa-jsfiddle"></i>                       | jsfiddle           |
| LinkedIn                   | <i class="fa fa-2x fa-linkedin"></i>                       | linkedin           |
| LinkedIn                   | <i class="fa fa-2x fa-linkedin-square"></i>  (square icon) | linkedin-square    |
| Linux                      | <i class="fa fa-2x fa-linux"></i>                          | linux              |
| Max CDN                    | <i class="fa fa-2x fa-maxcdn"></i>                         | maxcdn             |
| OpenID                     | <i class="fa fa-2x fa-openid"></i>                         | openid             |
| Page Lines                 | <i class="fa fa-2x fa-pagelines"></i>                      | pagelines          |
| Pied Piper                 | <i class="fa fa-2x fa-pied-piper"></i>                     | pied-piper         |
| Pied Piper alt             | <i class="fa fa-2x fa-pied-piper-alt"></i>                 | pied-piper-alt     |
| Pinterest                  | <i class="fa fa-2x fa-pinterest"></i>                      | pinterest          |
| Pinterest (square icon)    | <i class="fa fa-2x fa-pinterest-square"></i>               | pinterest-square   |
| QQ                         | <i class="fa fa-2x fa-qq"></i>                             | qq                 |
| Rebel                      | <i class="fa fa-2x fa-rebel"></i>                          | rebel              |
| Reddit                     | <i class="fa fa-2x fa-reddit"></i>                         | reddit             |
| Reddit (square icon)       | <i class="fa fa-2x fa-reddit-square"></i>                  | reddit-square      |
| Ren Ren                    | <i class="fa fa-2x fa-renren"></i>                         | renren             |
| Share alt                  | <i class="fa fa-2x fa-share-alt"></i>                      | share-alt          |
| Share (square icon)        | <i class="fa fa-2x fa-share-alt-square"></i>               | share-alt-square   |
| Skype                      | <i class="fa fa-2x fa-skype"></i>                          | skype              |
| Slack                      | <i class="fa fa-2x fa-slack"></i>                          | slack              |
| Sound Cloud                | <i class="fa fa-2x fa-soundcloud"></i>                     | soundcloud         |
| Spotify                    | <i class="fa fa-2x fa-spotify"></i>                        | spotify            |
| Stack Exchange             | <i class="fa fa-2x fa-stack-exchange"></i>                 | stack-exchange     |
| Stack Overflow             | <i class="fa fa-2x fa-stack-overflow"></i>                 | stack-overflow     |
| Steam                      | <i class="fa fa-2x fa-steam"></i>                          | steam              |
| Steam (square icon)        | <i class="fa fa-2x fa-steam-square"></i>                   | steam-square       |
| Stumble Upon               | <i class="fa fa-2x fa-stumbleupon"></i>                    | stumbleupon        |
| Stumble Upon (circle icon) | <i class="fa fa-2x fa-stumbleupon-circle"></i>             | stumbleupon-circle |
| Tencent Weibo              | <i class="fa fa-2x fa-tencent-weibo"></i>                  | tencent-weibo      |
| Trello                     | <i class="fa fa-2x fa-trello"></i>                         | trello             |
| Tumblr                     | <i class="fa fa-2x fa-tumblr"></i>                         | tumblr             |
| Tumblr (square icon)       | <i class="fa fa-2x fa-tumblr-square"></i>                  | tumblr-square      |
| Twitter                    | <i class="fa-brands fa-2x fa-x-twitter"></i>               | twitter            |
| Twitter (square icon)      | <i class="fa fa-2x fa-square-x-twitter"></i>               | twitter-square     |
| Vimeo (square icon)        | <i class="fa fa-2x fa-vimeo-square"></i>                   | vimeo-square       |
| Vine                       | <i class="fa fa-2x fa-vine"></i>                           | vine               |
| VK                         | <i class="fa fa-2x fa-vk"></i>                             | vk                 |
| Weibo                      | <i class="fa fa-2x fa-weibo"></i>                          | weibo              |
| Weixin                     | <i class="fa fa-2x fa-weixin"></i>                         | weixin             |
| Windows                    | <i class="fa fa-2x fa-windows"></i>                        | windows            |
| WordPress                  | <i class="fa fa-2x fa-wordpress"></i>                      | wordpress          |
| Xing                       | <i class="fa fa-2x fa-xing"></i>                           | xing               |
| Xing (square icon)         | <i class="fa fa-2x fa-xing-square"></i>                    | xing-square        |
| Yahoo                      | <i class="fa fa-2x fa-yahoo"></i>                          | yahoo              |
| Yelp                       | <i class="fa fa-2x fa-yelp"></i>                           | yelp               |
| YouTube                    | <i class="fa fa-2x fa-youtube"></i>                        | youtube            |
| YouTube (play icon)        | <i class="fa fa-2x fa-youtube-play"></i>                   | youtube-play       |
| YouTube (square icon)      | <i class="fa fa-2x fa-youtube-square"></i>                 | youtube-square     |

By default, the extension offers all 82 to the user.  This doesn't mean you must offer each one.  Using the `include` argument, you may specify which profile icons you'd prefer to offer by assigning an array of existing icons IDs.  For example, let's say you'd like to offer only Facebook, Twitter, LinkedIn, and Google Plus.  The `include` argument would look as follows:

```php
array(
    'include' => array( 'facebook', 'twitter', 'linkedin', 'google-plus' )
)
```

## Adding/Editing Additional Icons

It's easy to add additional (or edit existing) social profile icons.  Each profile contains the following arguments:

| Name       |Type|Default| Description                                                                                                                                                            |
|------------|--- |--- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id         |string|| Unique id of the profile.                                                                                                                                              |
| icon       |string|| Font Awesome icon class (cheatsheet) of the icon to display.  Icon classes from other sets may be used, provided the icon set is properly installed and enqueued.      |
| class      |string|| Font Awesome icon set classs of the icon to display.|
| enabled    |bool|`false`| Flag to set the default state of the social profile.                                                                                                                   |
| name       |string|| Display name of the social profile                                                                                                                                     |
| color      |string|| Hex or RGBA string of the icons color.                                                                                                                                 |
| background |string|| Hex or RGBA string of the icons backcolor.                                                                                                                             |
| label      |string|| Link URL                                                                                                                                                               |Optional.  Text to appear over the URL input box.  This is useful should you want to specify a user name instead of a full URL.|
| url        |string|| Optional. URL of the social profile.                                                                                                                                   |


The following example would add a PayPal profile to the social profile icon set:

```php
'icons' => array(
    array (
        'id'         => 'paypal',
        'icon'       => 'fa-paypal',
        'class'      => 'fa-brands',
        'enabled'    => false,
        'name'       => __ ( 'PayPal', 'your-textdomain-here' ),
        'background' => '',
        'color'      => '#1769ff',
        'url'        => '',
    )
)
```

The `icons` argument may also be used to edit profiles from the default set.  In this instance, you'd need only specify the argument you'd like to alter.  The following example would alter the Apple profile by changing the name (with apologies in advance to Mac fanboys), label, and default state.

```php
'icons' => array(
    array (
        'id'      => 'apple',
        'class'   => 'fa-brands',
        'enabled' => true,
        'name'    => esc_html__( 'CrApple', 'your-textdomain-here' ),
        'label'   => 'Enter username:',
    )
)
```

## Example Config

The following sets up the basic social profile field without the additions or alterations specified above.

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'        => 'opt-social-profiles',
    'type'      => 'social_profiles',
    'title'     => esc_html__( 'Social Profiles', 'your-textdomain-here' ),
    'subtitle'  => esc_html__( 'Click an icon to activate it, drag and drop to change the icon order.', 'your-textdomain-here' ),
) );
```

## Example Usage
### Code
The extension's return value is an array of key/pair values. The key contains the profile's index key, while the value contains the array of the
profiles arguments. It will be necessary to use a for/each loop to extract the values (Please remember to replace `redux_demo` with your own `opt_name` 
argument).  The following code returns only the saved values.  For this example to have any real value, you'll need to write the appropriate HTML, 
or use one of the helper functions below.

```php
global $redux_demo;

foreach ( $redux_demo['opt-social-profiles'] as $idx => $arr ) {
    echo 'Profile ID: ' . $arr['id'];
    echo 'Enabled: '    . $arr['enabled'];
    echo 'Icon: '       . $arr['icon'];
    echo 'Icon: '       . $arr['class'];
    echo 'Name: '       . $arr['name'];
    echo 'URL: '        . $arr['url'];
    echo 'Color: '      . $arr['color'];
    echo 'Background: ' . $arr['background'];
}

// Or do the following for full icon rendering
foreach ( $redux_demo['opt-social-profiles'] as $idx => $arr ) {
    if ( isset( $arr['enabled'] ) && !empty( $arr['enabled'] ) ) {
        $id     = $arr['id'];
        $id     = $arr['class'];
        $url    = $arr['url'];
        $icons .= '';
        $icons .= '</pre><ul><li class="' . $class . ' ' . $id . '"><a href="' . esc_attr( esc_url( $url ) ) . '" target="_blank"><i class="' . esc_attr( $arr['icon'] ) . '"></i></a></li></ul><pre>';
    }

    $output = '</pre><ul class="icons">';
    $output .= $icons;
    $output .= '</ul><pre>';
}
```

## Helper Functions
The Social Profiles extension includes two helper functions.

### redux_render_icon_from_id()
This function, based on the echo parameter, will either echo a fully rendered icon or return the HTML for use with your 
own rendering purposes.

**Function Parameters in Order**

|Parameter|Type|Default|Description|
|--|--|--|--|
|[opt_name](../configuration/global_arguments.md#opt-name)|string||Required. The [opt_name](../configuration/global_arguments.md#opt-name) specified in your arguments|
|id|string||Required. ID of the social profile field whose information is to be rendered.|
|echo|bool|`true`|Optional. When set to true, the function automatically echos the rendered HTML. When set to false, the HTML is returned.|
|a_class|bool||Optional. Sets the passed class name to the <a> tag of the rendered icon HTML.|

::: tip
The rendered icon will be its normal small size.  It's up to you, the developer, to style the 
icon via CSS as desired.
::: 

#### Usage

```php

// Please remember to replace 'redux_demo' with your project's unique opt_name.
// Example assumes Facebook social profile is enabled and URL properly filled out.
$html = redux_render_icon_from_id( 'OPT_NAME', 'facebook', false );

echo $html;

// Result:
// <a class="" href="https://www.facebook.com/my_facebook_name">
//     <i class="fa fa-2x fa-facebook" style="color: #3b5998; background-color: transparent;" title=""></i>
// </a>
```

### redux_social_profile_value_from_id( )
This function returns the specified value data of the specified social profile ID.

**Function Parameters in Order**

|Parameter| Description                                                                                                                                                                                   |
|--|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[opt_name](../configuration/global_arguments.md#opt-name)| Required. The [opt_name](../configuration/global_arguments.md#opt-name) specified in your arguments                                                                                           |
|id| Required. ID of the social profile field whose information is to be rendered.                                                                                                                 |
|value| Required. Value of the social profile for which whose data you would like returned.  Value options include `id`, `icon`, `class`, `enabled`, `name`, `color`, `background`, `label`, or `url`. |

#### Usage

```php
// Example assumes Facebook social profile is enabled and URL properly filled out.
$url = redux_social_profile_value_from_id( 'OPT_NAME', 'facebook', 'url');

echo 'Facebook URL: ' $url;

// Result:  
// Facebook URL: https://www.facebook.com/my_facebook_name
```

