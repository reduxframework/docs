# ACE Editor

The ACE Editor field offers the ability to edit back-end code in an easy to use and easy to read embedded interface.  In 
addition to matching the features of native code editors such as [Sublime Text](https://www.sublimetext.com/), 
[Vim](http://www.vim.org), [CodeLobster](https://codelobster.com) and [TextMate](http://macromates.com), ACE offers real-time checking for code accuracy.

<span style="display:block;text-align:center">![](./img/ace_editor.png)</span>

::: warning Table of Contents
[[toc]]
:::

## Arguments
Array containing the `content` and optional `title` arguments for the [hint](../configuration/fields/hints.md) tooltip.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|type|string|`ace_editor`|Value identifying the field type.|
|mode|string|`javascript`|Sets the language mode of the editor.  Accepts:  `css` `html` `javascript ` `json` `less` `markdown` `mysql` `php` `plain_text` `sass` `scss` `text` `xml`|
|theme|string|`monokai`|Sets the theme of the editor.  Accepts: `chrome` or `monokai`|
|options|array|<pre class="language-php codecopy-enabled"><code><span class="token keyword">array</span>(<br/>&nbsp;&nbsp;<span class="token single-quoted-string string">'minLines'</span> => <span class="token number">12</span>, <br/>&nbsp;&nbsp;<span class="token single-quoted-string string">'maxLines'</span> => <span class="token number">30</span><br/>)</code></pre>|Pass any option to the Ace Editor object. For more details visit: http://ace.c9.io/ and the Configuring Ace Wiki.|

::: tip Also See
- [Using Global Field Arguments](../configuration/fields/arguments.md)
- [Using the `compiler` Argument](../configuration/fields/compiler.md)
- [Using the `required` Argument](../configuration/fields/required.md)
- [Using the `validate` Argument](../configuration/fields/validate.md)
:::

## Build Config
<script>
import builder from './ace-editor.json';
export default {
    data () {
        return {
            builder: builder,
            defaults: {}
        };
    }
}
</script>
<builder :builder_json="builder" :builder_defaults="defaults" />

## Example Config

```php
Redux::set_field( 'OPT_NAME', 'SECTION_ID', array(
    'id'       => 'css_editor',
    'type'     => 'ace_editor',
    'title'    => esc_html__('CSS Code', 'your-project-name'),
    'subtitle' => esc_html__('Paste your CSS code here.', 'your-project-name'),
    'mode'     => 'css',
    'theme'    => 'monokai',
    'desc'     => 'Possible modes can be found at https://ace.c9.io/.',
    'default'  => "#header{\nmargin: 0 auto;\n}"
) );
```

## Example Usage
This example in based on the code above. Be sure to change `$redux_demo` to the value you specified 
in your [opt_name](../configuration/global_arguments.md#opt_name) argument.

```php
global $redux_demo;

echo 'ACE Editor output: ' . $redux_demo['css-editor'];
```


