$('#telBtn').click(function(){
	var flag1=0,flag2=0,flag3=0;
	var tel=$('#tel').val();//邮箱号
	var vilidateTel=$('#vilidateTel').val() //验证码
	var busPwdtel=$('#busPwdtel').val();//密码
	var busAgainPwdtel=$('#busAgainPwdtel').val();//重复输入密码
	var idCardtel=$('#idCardtel').val();//身份证号
	var statetel=$('.radiotel').attr("data-check");
	//判断手机号
	if(tel==""){
		alert("电话号码不能为空");
	}else if(tel!="" && tel !="18724561234" && ! /^(((13[0-9]{1})|(18[0-9]{1})|(17[6-9]{1})|(15[0-9]{1}))+\d{8})$/.test(tel)){
		alert("请输入正确的电话号码");
	}else{
		flag1=1;
	}
	//密码判断
	if(busAgainPwdtel==""){
		alert("密码不能为空");
	}else if(busAgainPwdtel!="" && busAgainPwdtel !="111111111"){
		if(busPwdtel==""){
			alert("密码不能为空");
		}else if(busPwdtel!="" && busPwdtel !="111111111"){
			if(busAgainPwdtel==busPwdtel){
				flag2=1;
			}
		}
	}
	
//	if(idCardtel==""){
//		alert("身份证号码不能为空");
//	}else if(idCardtel!="" && !  /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCardtel)){
//		alert("请输入正确的身份证号码");
//	}else{
//		flag3=1;
//	}
	
	if(flag1==1 && flag2==1){
		alert("注册成功");
	}
})
//绑定机构按钮控制
$('.radiotel').click(function(){
	if($(this).attr('data-check')==0){
		$(this).css('background','url(img/radio-check.png)  no-repeat left center');
		$(this).attr('data-check',1);
	}else if($(this).attr('data-check')==1){
		$(this).css('background','url(img/radio.png)  no-repeat left center');
		$(this).attr('data-check',0);
	}
})
//得到脚垫判断
$('input').focus(function(){
	if($(this).is('#tel')){
		var tel=$('#tel').val();
		if(tel=="18724561234"){
			$('#tel').val("");
		}else{
			$('#tel').val(email);
		}
	}
	if($(this).is('#busPwdtel')){
		var busPwdtel=$('#busPwdtel').val();//密码
		if(busPwdtel=="111111111"){
			$('#busPwdtel').val("");
		}else{
			$('#busPwdtel').val(busPwdtel);
		}
	}
	if($(this).is('#busAgainPwdtel')){
		var busAgainPwdtel=$('#busAgainPwdtel').val();//重复输入面膜
		if(busAgainPwdtel=="111111111"){
			$('#busAgainPwdtel').val("");
		}else{
			$('#busAgainPwdtel').val(busAgainPwdtel);
		}
	}
})
//失去焦点判断
$('input').blur(function(){
	if($(this).is('#tel')){
		var tel=$('#tel').val();
		if(tel==""){
			$('#tel').val("18724561234");
		}else{
			$('#tel').val(tel);
		}
	}
	if($(this).is('#busPwdtel')){
		var busPwdtel=$('#busPwdtel').val();//密码
		if(busPwdtel==""){
			$('#busPwdtel').val("111111111");
		}else{
			$('#busPwdtel').val(busPwdtel);
		}
	}
	if($(this).is('#busAgainPwdtel')){
		var busAgainPwdtel=$('#busAgainPwdtel').val();//重复输入面膜
		if(busAgainPwdtel==""){
			$('#busAgainPwdtel').val("111111111");
		}else{
			$('#busAgainPwdtel').val(busAgainPwdtel);
		}
	}
})