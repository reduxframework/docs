---
title: "Redux WP_Filesystem Proxy"
---

# Using the Redux WP_Filesystem Proxy
Redux has a WordPress filesystem proxy built in to help you read and write files that will pass Theme Check. These calls are available
the moment a Redux object has been loaded (your Redux config has been run).

::: warning Table of Contents
[[toc]]
:::

## Getting Started
First, get the Redux object. The easiest method is as follows:

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
```

Once the Redux object has been obtained, the filesystem is now available to use. It's easy to do.  Run the following call:

```php
$redux->filesystem->execute( 'action', PATH, $args );
```

Below is a list of available commands and the arguments associated with each.

## Chmod / File Permissions
By default, the WP_FileSystem API uses default values for chmod (read/write permissions). These are in the form of the 
declared `FS_CHMOD_DIR` for directories or `FS_CHMOD_FILE` for files. Do not worry about setting these values yourself.

::: tip
If you **must** override the default chmod settings, you may pass in a chmod argument for all actions except 
object and unzip. To do so, pass a string or int: `0644` as this argument's value.
:::

## Possible Calls & Arguments.

### `mkdir`
Create a directory. It will even make multiple child directories even it if it doesn't exist.

```php
$redux = Redux::get_instance( 'OPT_NAME' ); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
if ( ! is_dir( $path ) ) {
  $redux->filesystem->execute( "mkdir", $path );
}
```

### `copy`
Copy files from one location to another.

|name|type|required|description|
|--- |--- |--- |--- |
|destination|string|required|The destination file path.|
|overwrite|boolean|optional|Overwrite the files if exist, or by default the WP_FileSystem will skip existing if the file exists.|

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
$destination = "DESTINATION_PATH"; // TODO - Replace with target/destination path

$redux->filesystem->execute( 
	'copy', 
	$path,
	array( 
		'destination' => $destination // TODO - Replace with target/destination path
	) 
);
```

### `put_contents`
The same as `file_put_contents` in PHP, but uses the WordPress filesystem API. Writes the contents of a variable 
to file. This will override any file if it already exists.

|name|type|required|description|
|--- |--- |--- |--- |
|content|string|required|The content of the file.|

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
$contents = "This is the content of the file." # TODO - Replace with contents

$redux->filesystem->execute( 
	'put_contents', 
	$path,
	array( 
		'content' => $contents
	) 
);
```

### `get_contents`
Retrieve the contents of a file. This command will attempt to use the WordPress filesystem first. 
However, if the file does not have the standard WordPress read permissions, it will fall back to `file_get_contents`.

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path

$file_contents = $redux->filesystem->execute( 
	'get_contents', 
	$path
);
```

### `object`
Return a valid WordPress FileSystem API object.

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$object = $redux->filesystem->execute( 'object' );
```

### `unzip`
Unzips an existing zip file to a new location.

##### Arguments
|name|type|required|description|
|--- |--- |--- |--- |
|destination|string|required|The destination to unzip the zip file contents.|

```php
$redux = Redux::get_instance('OPT_NAME'); // TODO - Use your opt_name
$path = "THE_PATH"; // TODO - Replace with path
$destination = "DESTINATION_PATH"; // TODO - Replace with target/destination path

$redux->filesystem->execute( 
	'unzip', 
	$path, 
	array( 
		'destination' => $destination 
	) 
);
```
