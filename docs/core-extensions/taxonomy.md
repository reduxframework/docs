# Taxonomy <Badge text="enhancement" type="warn"/>

If you are accustomed to the Redux Framework declaration arrays, you know Redux Taxonomy. They're one and the same! The only difference is a parent array. 
We'll go through a few examples to get you up and running. Please know, you MUST have an option page for taxonomy to work. 
They're interconnected. You can, however, make a fake options panel and hide it from the admin menu. 

::: warning Table of Contents
[[toc]]
:::

## Arguments

|Name|Type|Description|
|--- |--- |--- |
|id|string|You must provide an ID of some kind. This can be shared with your keys from your panel, and if so the values will be overridden for that given page in your global variable.|
|title|string|This is the title that appears on the box|
|taxonomy_types|array|Provide any number of taxonomy slugs for a given "term" box to appear.|
|sidebar|boolean|Sidebar with default Redux designs. If only one section is defined, this will be set to true.|
|add_visibility|boolean|All fields are by default hidden on the add term (edit-term.php) page. By specifying true to a "term" box, section, or field, it will be visible on this page.|
|style|string|`wp`, `wordpress` Removes the Redux box & sections styles to look like standard WordPress input fields. Must be used at the "box" level.|
|permissions|array|Just like standard Redux, you can set permission levels for "term" boxes, sections, or fields.|
|sections|array|Your sections array, the same style as a standard Redux config file.|

## Example Config
Since we've kept the structure exactly the same, start by constructing a section array like you normally would. We then 
add a level above called a "term" box, and away we go!

```php
Redux_Taxonomy::set_term( 
    $opt_name, 
    array(
        'id'             => 'demo-taxonomy',
        'title'          => esc_html__( 'Cool Options', 'your-textdomain-here' ),
        'taxonomy_types' => array( 'category', 'post_tag' ),
        'sidebar'        => false,
        'style'       => 'wp',
        //'add_visibility' => true, // Can bet set on term, section, or field level. Denotes what fields are displayed on the add {TERM} pages.
        'sections'       => array(
            array(
                'title'  => esc_html__( 'Home Settings', 'your-textdomain-here' ),
                'icon'   => 'el-icon-home',
                'fields' => array(
                    array(
                        'id'             => 'tax-text-1',
                        'type'           => 'text',
                        'add_visibility' => true,
                        'title'          => esc_html__( 'Test Input', 'your-textdomain-here' ),
                    ),
                    array(
                        'id'    => 'tax-text-2',
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
                        'id'             => 'tax-homepage_blocks',
                        'type'           => 'sorter',
                        'title'          => 'Homepage Layout Manager',
                        'desc'           => 'Organize how you want the layout to appear on the homepage',
                        'compiler'       => 'true',
                        'add_visibility' => true,
                        'required'       => array( 'layout', '=', '1' ),
                        'options'        => array(
                            'enabled'  => array(
                                'highlights' => 'Highlights',
                                'slider'     => 'Slider',
                                'staticpage' => 'Static Page',
                            ),
                            'disabled' => array(
                                'services'   => 'Services'
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
Retrieving the data from a taxonomy term is as simple as using regular WordPress, and the `get_term_meta()` function. 
However, to keep things slim, Redux_Taxonomy never saves defaults to the database. If you want the default values, you 
need to use our custom function.

```php
    $data = Redux_Taxonomy::get_term_meta( 
        array( 
            'taxonomy' => $tag_id,  // Taxonomy ID, also required
            'opt_name'=> $opt_name, // Required
            'key'=> false,          // If you only want one value instead of the full array
        ) 
    );
```

This will return an array with all the meta for that taxonomy, as well as all the defaults. You will, however, have to 
know the ID of the term you wish to grab the defaults from.

### Missing Sidebar?!
For boxes with only one section, the sidebar is omitted when the HTML is output. If you want a sidebar, use at least 
two sections within any given "term" box.

### How are the Redux Taxonomy Values Stored?
Redux Taxonomy stores each value as its own key in the taxonomy meta using the new WordPress [update_term_meta()](https://developer.wordpress.org/reference/functions/update_term_meta/) 
and [delete_term_meta()](https://developer.wordpress.org/reference/functions/delete_term_meta/) functions. 
In this way, you can query against specific taxonomy values. If a value is default, our extension deletes it from the 
database to reduce on bloat, so be aware of this and use a default if nothing is returned.