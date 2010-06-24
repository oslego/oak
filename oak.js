var Oak = oak = function(){
	var _dictionaries = {},
		_defaultLocale = null,
		_replaceWithParams = function(string, params){
			for (var i=0; i<params.length; i++){
				string = string.replace(/\{\d+\}/, params[i])
			}
			
			return string
		},
		
		_getValue = function(locale, key){
			var path = key.split('.');
			var value = _dictionaries[locale];
			
			for (var i=0; i<path.length; i++){
				value = value[path[i]]
			}
			
			return value.toString();
		}
	
	return{
		setDefaultLocale: function(locale){
			_defaultLocale = locale
		},
		
		getDefaultLocale: function(){
			return _defaultLocale
		},
		
		setDictionary: function(locale, dictionary, isDefault){
			_dictionaries[locale] = dictionary;
			
			//set default locale if true or no default exists
			if (isDefault || !_defaultLocale){
				_defaultLocale = locale
			}
		},
		
		getDictionary: function(locale){
			return _dictionaries[locale]
		},
		
		getString: function(label){
			var len = arguments.length;
			var params = [];
			
			for (var i=1; i<len; i++){
				params.push(arguments[i])
			}
			
			return _replaceWithParams(_getValue(_defaultLocale, label), params)
		}
	}
}
