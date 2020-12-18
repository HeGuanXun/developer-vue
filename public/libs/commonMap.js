/*
 * 
 * JavaScript - CommonUtils
 */

// js模拟java中map，提供Map的add get remove cut方法----start
(function(win) {
	var FastMap = function(){
		this.version = '1.0'; // 版本标识
		this.buf = new Object(); // 缓存Key和Value的对象
	};
	
	FastMap.prototype = {
		put:function(sKey, oValue){
			this.buf[sKey] = oValue;
		},
		get:function(sKey){
			return this.buf[sKey];
		},
		remove:function(sKey){
			delete(this.buf[sKey]);
		},
		cut:function(sKey){
			var buf = this.buf;
			var result = buf[sKey];
			delete buf[sKey];
			return result;
		},
		getBuf:function(){
			return this.buf;
		},
		size:function(){
			var buf = this.buf;
			var i = 0; 
			for(var ele in buf){
				i++;
			}
			return i;
		},
		toJson:function(){
			var b = this.buf;
			var buf = [];
			for(var ele in b){
				buf.push('Key:');
				buf.push(ele);
				buf.push(' Value:');
				buf.push(b[ele]);
				buf.push('\n');
			}
			return buf.join('');
		},
		toString:function(){
			var b = this.buf;
			var buf = [];
			buf.push("{");
			var index = 0
			for(var ele in b){
				if(index == 0){
					buf.push("\""+ele+"\":");
				}else{
					buf.push(",\""+ele+"\":");
				}
				if(b[ele].constructor==String){
					buf.push("\""+b[ele]+"\"");
				}else{
					buf.push(b[ele]);
				}
				index++;
			}
			buf.push("}");
			return buf.join('');
		},
		toIterator:function(){
			var key = [];
			var b = this.buf;
			for(var ele in b){
				key.push(ele);
			}
			return key;
		},
		clear:function(){
			var b = this.buf;
			for(var ele in b){
				delete(this.buf[ele]);
			}
		},
		toStrings:function(){
			var b = this.buf;
			var buf = [];
			for(var ele in b){
				buf.push(b[ele]);
			}
			return buf.join('');
		},
		toStringKeys:function(){
			var key = [];
			var b = this.buf;
			for(var ele in b){
				key.push(ele);
			}
			return key.toString();
		}
	};
	win.FastMap = FastMap;
})(window);
//js模拟java中map，提供Map的add get remove cut方法----end



