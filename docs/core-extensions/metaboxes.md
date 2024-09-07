# Metaboxes <Badge text="enhancement" type="warn"/>

If you are accustomed to the Redux Framework declaration arrays, then you know Redux Metaboxes. They're one and the same! The only 
difference is the parent array. We'll go through a few examples to get you up and running. Please know, you MUST have a global option panel 
for metaboxes to work. They're interconnected. You can, however, make a fake options panel and hide it 
from the admin menu. But metaboxes works best when united with a panel.

::: warning Table of Contents
[[toc]]
:::

## Arguments

|Name|Type|Description|
|--- |--- |--- |
|id|string|You must provide an ID of some kind. This can be shared with your keys from your panel, and if so the values will be overridden for that given page in your global variable.|
|title|string|This is the title that appears on the box|
|post_types|array|Provide any number of post_types for a given metabox to appear.|
|page_template|array|Bind visibility of a metabox to any number of page templates. The value will be equal to the filename of the custom page template.|
|post_format|array|Bind the visibility of a metabox to a given post format. [List of post formats](http://codex.wordpress.org/Post_Formats).|
|position|normal / advanced / side|Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.|
|priority|high / core / default / low|Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.|
|sections|array|Your sections array, the same style as ReduxFramework.|

## Metaboxes API
To ease the use of Metaboxes, a metaboxes API has been implemented. Nearly all the methods match with the ones had in the
standard Redux API. However, with metaboxes there is an additional concept of a `box`.

## Example Config
Since we've kept the structure exactly the same, start by constructing a section array like you normally would.  For more detailed information and examples, please view the `metaboxes.php` file in the sample folder included with Redux.

```php
// Change this variable to the opt_name of YOUR project.
$opt_name = 'your_opt_name';

// Standard metabox.
Redux_Metaboxes::set_box(
	$opt_name,
	array(
		'id'         => 'opt-metaboxes',
		'title'      => esc_html__( 'Metabox Options', 'your-textdomain-here' ),
		'post_types' => array( 'page', 'post' ),
		'position'   => 'normal', // normal, advanced, side.
		'priority'   => 'high',   // high, core, default, low.
		'sections'   => array(
			array(
				'title'  => esc_html__( 'Basic Field', 'your-textdomain-here' ),
				'id'     => 'opt-basic-fields',
				'desc'   => esc_html__( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the Github repo at:', 'your-textdomain-here' ) . '  <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>',
				'icon'   => 'el-icon-cogs',
				'fields' => array(
					array(
						'id'       => 'opt-checkbox',
						'type'     => 'checkbox',
						'title'    => esc_html__( 'Checkbox', 'your-textdomain-here' ),
						'subtitle' => esc_html__( 'Basic Checkbox field.', 'your-textdomain-here' ),
						'default'  => true,
					),
					array(
						'id'       => 'switch-on',
						'type'     => 'switch',
						'title'    => esc_html__( 'Switch On', 'your-textdomain-here' ),
						'subtitle' => esc_html__( 'Look, it\'s on!', 'your-textdomain-here' ),
						'default'  => 1,
					),
				),
			),
			array(
				'title'      => esc_html__( 'Text Field', 'your-textdomain-here' ),
				'desc'       => esc_html__( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the Github repo at:', 'your-textdomain-here' ) . '  <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>',
				'icon'       => 'el-icon-cog',
				'id'         => 'opt-text-fields',
				'subsection' => true,
				'fields'     => array(
					array(
						'title' => esc_html__( 'Text Field', 'your-textdomain-here' ),
						'id'    => 'opt-text',
						'type'  => 'text',
					),
				),
			),
			array(
				'title'  => esc_html__( 'Color Field', 'your-textdomain-here' ),
				'desc'   => esc_html__( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the Github repo at:', 'your-textdomain-here' ) . '  <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>',
				'icon'   => 'el-icon-pencil',
				'id'     => 'color-section',
				'fields' => array(
					array(
						'id'       => 'opt-color',
						'type'     => 'color',
						'title'    => esc_html__( 'Color Field', 'your-textdomain-here' ),
						'default'  => '#333333',
						'required' => array( 'opt-layout', '=', 'on' ),
					),
				),
			),
		),
	)
);

// Metabox sidebar.
Redux_Metaboxes::set_box(
	$opt_name,
	array(
		'id'         => 'opt-metaboxes-3',
		'post_types' => array( 'page', 'post' ),
		'position'   => 'side', // normal, advanced, side.
		'priority'   => 'high', // high, core, default, low.
		'sections'   => array(
			array(
				'icon_class' => 'icon-large',
				'icon'       => 'el-icon-home',
				'fields'     => array(
					array(
						'id'      => 'sidebar',
						'title'   => esc_html__( 'Sidebar', 'your-textdomain-here' ),
						'desc'    => esc_html__( 'Please select the sidebar you would like to display on this page. Note: You must first create the sidebar under Appearance > Widgets.', 'your-textdomain-here' ),
						'type'    => 'select',
						'data'    => 'sidebars',
						'default' => 'None',
					),
				),
			),
		),
	)
);
```

## Example Usage
Accessing the metabox values is simple. Redux creates a global variable in which to access panel options. For example, if your opt_name is `redux_demo`, 
then you can use the global variable `$redux_demo` to access your values. The metaboxes code overrides those values! That means you only need to code 
your functions ONCE. Let's say your project contains a layout field in your panel and on your pages.  If a value on a post is changed to `3` while the 
global value is `2`, the value exposed to your data will be `3`. Redux metaboxes does it all for you.

### Accessing Data Within Loops
Within loops, Redux will automatically update the global variable with the appropriate values. If you're attempting to do it another way, you'll need 
to use the following function:

```php
$value = redux_post_meta( "OPT_NAME", "POST_ID", "META_KEY" )
```

This function may be used anywhere to grab a specific value or all values. The `OPT_NAME` and `POST_ID` are the required parameters. `OPT_NAME` is 
your Redux opt_name. `POST_ID` can be a post object or just a post ID. If no `META_KEY` is specified, an array of all meta will be returned. If you 
specify the `META_KEY` only that value will be returned.

#### Help! The defaults are not in the array!
The global argument of `metaboxes_save_defaults` may be set to `true` to enable the saving of default values to the database.

### Missing Sidebar?!
For boxes in the `standard` position with only one section, the sidebar is omitted when the HTML is output. If you want a sidebar, use at least 
two sections within any given standard position metabox.

### Binding Metabox Visibility to Page Template &amp; Post Formats
Metaboxes also supports these options. As noted above, you need only declare `page_template` or `post_format` on the box array for a given metabox. 
Visibility is affected accordingly. You can provide an array for each. `page_templates` won't affect a box that only appears on the post type.

For a full list of post formats see <a target="_blank">http://codex.wordpress.org/Post_Formats</a>.

The value of your `page_template` will be the actual filename of the selected template.

### How are the Redux Metabox Values Stored?
Redux Metaboxes stores each value as its own key in the meta. You can query against specific meta-values. If a value is default, it deletes that value 
to free up the database.