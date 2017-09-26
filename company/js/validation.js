var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#eat-form").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                companyName:
	                {
	                    required: true
	                },
	                companyCity:
	                {
	                    required: true
	                },
	                companyArea:
	                {
	                    required: true
	                },
	                companyAddress:
	                {
	                    required: true
	                },
	                companyDepartment:
	                {
	                    required: true
	                },
	                eatPeople:
	                {
	                    required: true
	                },
	                eatTimerand:
	                {
	                    required: true
	                },
	                companyDemand:
	                {
	                    required: true
	                },
	                userName:
	                {
	                    required: true
	                },
	                userPosition:
	                {
	                    required: true
	                },
	                userTel:
	                {
	                    required: true
	                },
	                userMobile:
	                {
	                    required: true,
	                    minlength:11
	                },
	                userEmail:
	                {
	                    required: true,
	                    email : true
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                companyName:
	                {
	                    required: '请输入公司全名'
	                },
	                companyCity:
	                {
	                    required: '请选择城市'
	                },
	                companyArea:
	                {
	                    required: '请选择区域'
	                },
	                companyAddress:
	                {
	                    required: '请输入公司地址'
	                },
	                companyDepartment:
	                {
	                    required: '请输入部门信息'
	                },
	                eatPeople:
	                {
	                    required: '请选择试吃人员数量'
	                },
	                eatTimerand:
	                {
	                    required: '请选择试吃时间段'
	                },
	                companyDemand:
	                {
	                    required: '请选择潜在需求'
	                },
	                userName:
	                {
	                    required: '请输入您的名字'
	                },
	                userPosition:
	                {
	                    required: '请输入您的部门信息'
	                },
	                userTel:
	                {
	                    required: '请输入您的办公电话'
	                },
	                userMobile:
	                {
	                    required: '请输入您的联系手机',
	                    minlength:'请输入正确的手机格式'
	                },
	                userEmail:
	                {
	                    required: '请输入您的邮箱地址',
	                    email : '请输入正确的邮箱地址'
	                },
	                userMessage:
	                {
	                    required: '请输入您的留言信息'
	                }
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });
        }

    };
}();