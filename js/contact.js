$('.contactBtn').click(function(){
	var name=$('#name').val();//姓名
	var tel=$('#tel').val();//电话
	var idea=$('#idea').val();//意见
	if(name!="" && tel!="" && idea!="" && /^(((13[0-9]{1})|(18[0-9]{1})|(17[6-9]{1})|(15[0-9]{1}))+\d{8})$/.test(tel)){
		alert("提交成功");
	}else{
		alert("dddd");
	}
})
