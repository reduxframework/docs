# User Metaboxes <Badge text="enhancement" type="warn"/>

If you are accostomed to the Redux Framework declaration arrays, you know Redux User Metaboxes. They're one and the same! The only difference is a 
parent array. We'll go through a few examples to get you up and running. Please know, you MUST have a Redux global options page for user metaboxes 
taxonomy to work. They're interconnected. You can, however, make a fake options panel and hide it from the admin menu. 

::: warning Table of Contents
[[toc]]
:::

## Arguments

|Name|Type| Description                                                                                                                                                                  |
|--- |--- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|id|string| You must provide an ID of some kind. This can be shared with your keys from your panel, and if so the values will be overridden for that given page in your global variable. |
|title|string| This is the title that appears on the box                                                                                                                                    |
|add_visibility|boolean| All fields are by default hidden on the add term (edit-user.php) page. By specifying true to a "user" box, section, or field, it will be visible on this page.               |
|style|string| `wp`, `wordpress` Removes the Redux box & sections styles to look like standard WordPress input fields. Must be used at the "box" level.                                     |
|permissions|array| Just like standard Redux, you can set permission levels for "term" boxes, sections, or fields.                                                                               |
|sections|array| Your sections array, the same style as a standard Redux config file.                                                                                                         |

## Example Config
Since we've kept the structure exactly the same, start by constructing a section array like you normally would. We then 
add a level above called a "user" box, and away we go!

```php
// Change the priority the Redux_Users boxes appear.
Redux_Users::set_Args(
	$opt_name,
	array(
		'user_priority' => 50,
	)
);

Redux_Users::set_profile( 
    $opt_name, 
    array(
        'id'             => 'demo-user',
        'title'          => esc_html__( 'Cool Options', 'your-textdomain-here' ),

        // Removes the Redux box/section styles. Makes Redux Taxonomy look like standard WP fields.
        'style'       => 'wp',
        
        'sections'       => array(
            array(
                'title'  => esc_html__( 'USer Settings', 'your-textdomain-here' ),
                'icon'   => 'el-icon-home',
                'fields' => array(
                    array(
                        'id'             => 'text1',
                        'type'           => 'text',
                        'add_visibility' => true,
                        'title'          => esc_html__( 'Test Input', 'your-textdomain-here' ),
                    ),
                    array(
                        'id'    => 'text1',
                        'type'  => 'text',
                        'title' => esc_html__( 'Test Input2', 'your-textdomain-here' ),
                    ),
                )
            ),
            array(
                'title'  => esc_html__( 'Home Layout', 'your-textdomain-here' ),
                'desc'   => esc_html__( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the GitHub repo at: <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>', 'your-textdomain-here' ),
                'icon'   => 'el-icon-home',
                'fields' => array(
                    array(
                        "id"             => "homepage_blocks",
                        "type"           => "sorter",
                        "title"          => "Homepage Layout Manager",
                        "desc"           => "Organize how you want the layout to appear on the homepage",
                        "compiler"       => 'true',
                        'add_visibility' => true,
                        'required'       => array( 'layout', '=', '1' ),
                        'options'        => array(
                            "enabled"  => array(
                                "placebo"    => "placebo", //REQUIRED!
                                "highlights" => "Highlights",
                                "slider"     => "Slider",
                                "staticpage" => "Static Page",
                                "services"   => "Services"
                            ),
                            "disabled" => array(
                                "placebo" => "placebo", //REQUIRED!
                            ),
                        ),
                    ),
                ),
            )
        )
    )
);
```

## Example Usage
Getting the data from a user profile metabox is as simple as using regular WordPress, and the `get_user_meta()` function. 
However, to keep things slim, Redux_Users never saves the default values to the database. If you want the default values, you 
need to use our custom function.

```php
    $data = Redux_Users::get_user_meta( 
        array( 
            'key'     => $field_id, // If you're only looking for a key within the meta, otherwise all values will be returned.
            'opt_name'=> $opt_name, // Required.
            'user'    => '',        // User id, else current user ID is returned.
        ) 
    );
```

This will return a single value or array with all the meta for that user, as well as all the defaults. 

### How are the Redux User Metabox values Stored?
Redux USer Metaboxes stores each value as its own key in the user meta using the new WordPress [update_user_meta()](https://developer.wordpress.org/reference/functions/update_user_meta/) 
and [delete_user_meta()](https://developer.wordpress.org/reference/functions/delete_user_meta/) functions. 
In this way, you can query against specific user values. If a value is default, our extension deletes it from the 
database to reduce on bloat, so be aware of this and use a default if nothing is returned.