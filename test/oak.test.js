$(document).ready(function(){
    
	module("Oak - Dictionaries");
	
	test("Dictionary", function(){
		
		var oak = new Oak();
		var	dictionary = {
				label:{
					key1: "value1",
					key2: "value2"
				}
			};
		
		var locale = "en_US";
		
		ok(true, oak.setDictionary(locale, dictionary), "oak.setDictionary() successful");
		same(dictionary, oak.getDictionary(locale), "oak.getDictionary() same as input");
		
		dictionary2 = {}
		oak.setDictionary(locale, dictionary2)
		
		same({}, oak.getDictionary(locale),  "oak.getDictionary() correctly updated")
	})
	
	
	module("Oak - Locales");
	
	test("Default locale", function(){
		var oak = new Oak();
		var locale_en = "en_US";
		var locale_ro = "ro_RO";
		
		
		oak.setDefaultLocale("en_US");
		same(locale_en, oak.getDefaultLocale(), "Default locale en_US");
		oak.setDefaultLocale("ro_RO");
		same(locale_ro, oak.getDefaultLocale(), "Default locale ro_RO");
	})
	
});