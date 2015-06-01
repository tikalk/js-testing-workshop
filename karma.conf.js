var isDebug = process.env.DEBUG || false;
var browsers = [isDebug ? 'Chrome' : 'PhantomJS'];

module.exports = function(config) {
	config.set({
		basePath: '.',
		browsers: browsers,
		frameworks: ['jasmine'],
		files: [
			'node_modules/jquery/dist/jquery.min.js',
			'bower_components/jasmine-jquery/lib/jasmine-jquery.js',

			'src/app.js',
			'src/js/TodoItem.js',
			'src/js/TodoList.js',
			'src/js/ItemView.js',
			'src/js/ListView.js',
			'src/js/filters/Filter.js',
			'src/js/filters/FilterView.js',
			'src/js/filters/FiltersView.js',

			'test/spec/SpecHelper.js',
			'test/**/*.spec.js',
			// 'test/**/*.html',
			// '../tests/mocks/**/*mock.json'
	    ],
	    autoWatch: true,
	    singleRun: false,
        preprocessors: {
        	// 'test/**/*.html': ['html2js']
	        // '../tests/mocks/**/*mock.json': ['json_fixtures']
	    },
	    jsonFixturesPreprocessor: {
	      // strip this from the file path \ fixture name
	      stripPrefix: '.+mocks/',
	      // strip this to the file path \ fixture name
	      // prependPrefix: 'mock/',
	      // change the global fixtures variable name
	      variableName: 'mocks'
	    },
	    plugins : [
	        'karma-phantomjs-launcher',
	        'karma-chrome-launcher',
	        'karma-jasmine',
	        // 'karma-html2js-preprocessor',
	        'karma-spec-reporter',
	        'karma-mocha-reporter'
	        // 'karma-json-fixtures-preprocessor'
	    ],
	    reporters: [
	    	// 'progress', 
	    	// 'dots',
	    	// 'spec'
	    	'mocha'
	    ]
  });
};