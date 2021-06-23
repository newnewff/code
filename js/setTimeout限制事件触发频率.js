var timeoutId=null;
$(searchField).bind('input propertychange',function(){
	var _keywords=$(this).val();
	if(_keywords!=$(this).attr('oldValue') && _keywords.length>0){
		$(this).attr('oldValue',_keywords);
		if(timeoutId){
			clearTimeout(timeoutId);
		}
		timeoutId=setTimeout(function(){
			SearchFn();
		},500);
	}
});
