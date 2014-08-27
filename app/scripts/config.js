/**
 * # config
 *
 * Some settings
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

var config = {};

/**
 * @type {String}
 */
config.storage = 'STITCHES';

/**
 * @type {Array}
 */
config.layouts = [
	{type: 'compact', label: 'Compact'},
	{type: 'horizontal', label: 'Horizontal'},
	{type: 'vertical', label: 'Vertical'}
];

/**
 * @type {Array}
 */
config.stylesheets = [
	{type: 'css', label: 'CSS'},
	{type: 'less', label: 'LESS'},
	{type: 'sass', label: 'SASS'},
	{type: 'stylus', label: 'Stylus'}
];

/**
 * @type {Object}
 */
config.settings = {
	// sprite sheet layout
	layout: 'compact',

	// selected format
	stylesheet: 'css',

	// default stylesheet class prefix
	prefix: 'sprite',

	// default padding around sprites in pixels
	padding: 5,

	// whether or not to include the data-uri image (quite large)
	uri: true,

	// max passes for sprite placement
	tries: 5
};

/**
 * @type {Object}
 */
config.canvas = {
	width: 100,
	height: 100
};

/**
 * @type {Object}
 */
config.events = {
	// open the about palette
	about: 'ABOUT',

	// open the downloads palette
	downloads: 'DOWNLOADS',

	// open the properties palette
	properties: 'PROPERTIES',

	// open the settings palette
	settings: 'SETTINGS',

	// close a palette or all palettes
	close: 'CLOSE',

	// show the overlay
	busy: 'BUSY',

	// hide the overlay
	idle: 'IDLE',

	// display progress percentage
	progress: 'PROGRESS',

	// process submitted files into sprites
	process: 'PROCESS',

	// place sprites onto sprite sheet
	stitch: 'STITCH',

	// generate final products
	generate: 'GENERATE',

	// any kind of error
	error: 'ERROR'
};

/**
 * @return {Object}
 */
module.exports = config;