(function($){
	var methods = 
	{
		init:function(url1,url2){
			var me = this;
			var url1 = url1;
			var url2 = url2;

			me.append('<div id="small_pic"></div>');
			me.find('#small_pic').append('<img id="img1" src='+url1+'><div id="lens_box"></div>');
			me.find('#small_pic').find('#lens_box').append('<img id="big_pic" src='+url2+'>');

			var lens_box = me.find('#small_pic').find('#lens_box');
			var big_pic = me.find('#small_pic').find('#lens_box').find('#big_pic');

			me.find('#small_pic').mouseenter(function(e1)
			{
				var $this = $this;
				lens_box.css({
					'opacity': 1,
				});
			})

			me.find('#small_pic').mousemove(function(e2){
			var smx = e2.pageX - 425;
			var smy = e2.pageY - 175;
			var bgx = -2*smx - 75;
			var bgy = -2*smy - 75;
			if(smx > 0 && smx <= 450)
			{
				lens_box.css({
				'left': smx,
				})
				big_pic.css({
					'left':bgx,
				})
			}
			if(smx > 450 && smx < 485 || smx > -25 && smx < 0)
			{
				big_pic.css({
				'left':bgx,
				})
			}
			if(smy > 0 && smy <= 280)
			{
				lens_box.css({
				'top': smy,
				})
				big_pic.css({
					'top':bgy,
				})				
			}
			if(smy > 280 && smy < 315 || smy > -25 && smy < 0)
			{
				big_pic.css({
				'top':bgy,
				})
			}
			})

			me.find('#small_pic').mouseleave(function(e3){
				lens_box.css({
					'opacity':0,
				});
			})
		}
	}

	$.fn.lens = function(){
		var method = arguments[0];
 
		if(methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if( typeof(method) == 'object' || !method ) {
			method = methods.init;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.move' );
			return this;
		}
		return method.apply(this, arguments);
	}
})(jQuery)