$('#emailBtn').click(function(){
	var flag1=0,flag2=0,flag3=0;
	var email=$('#email').val();//邮箱号
	var emailVilidate=$('#vilidate').val() //验证码
	var emailPwd=$('#busPwd').val();//密码
	var emailPwdAgain=$('#busAgainPwd').val();//重复输入密码
	var bankCard=$('#bankCard').val();//身份证号
	var state=$('.radio').attr("data-check");
	//邮箱判断
	if(email==""){
		alert("邮箱不能为空");
	}else if(email!="" && email !="1111111111@163.com" && ! /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email)){
		alert("请输入正确的邮箱");
	}else{
		flag1=1;
	}
	//密码判断
	if(emailPwdAgain==""){
		alert("密码不能为空");
	}else if(emailPwdAgain!="" &&emailPwdAgain !="111111111"){
		if(emailPwd==""){
			alert("密码不能为空");
		}else if(emailPwd!="" && emailPwd !="111111111"){
			if(emailPwdAgain==emailPwd){
				flag2=1;
			}
		}
	}
	
//	if(emailIdCard==""){
//		alert("身份证号码不能为空");
//	}else if(emailIdCard!="" && !  /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(emailIdCard)){
//		alert("请输入正确的身份证号码");
//	}else{
//		flag3=1;
//	}
	
	if(flag1==1 && flag2==1){
		alert("注册成功");
	}
})
//绑定机构按钮控制
$('.radio').click(function(){
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
	if($(this).is('#email')){
		var email=$('#email').val();
		if(email=="1111111111@163.com"){
			$('#email').val("");
		}else{
			$('#email').val(email);
		}
	}
	if($(this).is('#busPwd')){
		var emailPwd=$('#busPwd').val();//密码
		if(emailPwd=="111111111"){
			$('#busPwd').val("");
		}else{
			$('#busPwd').val(emailPwd);
		}
	}
	if($(this).is('#busAgainPwd')){
		var emailPwdAgain=$('#busAgainPwd').val();//重复输入面膜
		if(emailPwdAgain=="111111111"){
			$('#busAgainPwd').val("");
		}else{
			$('#busAgainPwd').val(emailPwdAgain);
		}
	}
})
//失去焦点判断
$('input').blur(function(){
	if($(this).is('#email')){
		var email=$('#email').val();
		if(email==""){
			$('#email').val("1111111111@163.com");
		}else{
			$('#email').val(email);
		}
	}
	if($(this).is('#busPwd')){
		var emailPwd=$('#busPwd').val();//密码
		if(emailPwd==""){
			$('#busPwd').val("111111111");
		}else{
			$('#busPwd').val(emailPwd);
		}
	}
	if($(this).is('#busAgainPwd')){
		var emailPwdAgain=$('#busAgainPwd').val();//重复输入面膜
		if(emailPwdAgain==""){
			$('#busAgainPwd').val("111111111");
		}else{
			$('#busAgainPwd').val(emailPwdAgain);
		}
	}
})