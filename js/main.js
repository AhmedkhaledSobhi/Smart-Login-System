var nameUser=document.getElementById('userNameinput');
var emailUser=document.getElementById('userEmailinput');
var passUser=document.getElementById('userPasswordinput');

var emailOfUser=document.getElementById('emailUser');
var passOfUser=document.getElementById('passUser');

var newUserInContainer;
var addNewoUser=document.getElementById('addNewoUser');
var openNewoUser=document.getElementById('openNewoUser');
var openLoginSignUp=document.getElementById('openLoginSignUp');
var openLoginSignIn=document.getElementById('openLoginSignIn');



if(localStorage.getItem('myAcoinutUser')!=null)
{
    newUserInContainer=JSON.parse(localStorage.getItem('myAcoinutUser'));
}
else
{
    newUserInContainer=[];
}

// تخزين بيانات مستخدم جديد
function addNewUser()
{
    // شرط تحقيق انه كتب بيانات
        if(nameUser.value==""&& emailUser.value==""&& passUser.value=="")
    {
        document.getElementById('errorInformSignUp').classList.remove('d-none');
    }
    else
    {                                                                                       

        var fileUser=
        {
            name:nameUser.value,
            email:emailUser.value,
            pass:passUser.value,
        }
        newUserInContainer.push(fileUser);
        localStorage.setItem('myAcoinutUser' , JSON.stringify(newUserInContainer));
        document.getElementById('errorInformSignUp').classList.add('d-none');
        document.getElementById('confirmation message').classList.remove('d-none');
        

        clearFormUser();
        addoroudact(newUserInContainer);
        
    }  
}
    addNewoUser.addEventListener('click',addNewUser );


    // تسجيل دخول ببيانات مستخدم موجود
function openNewUser()
{
    // شرط تحقيق انه كتب بيانات
    if(emailOfUser.value==""&& passOfUser.value=="")
    {
        document.getElementById('errorInformSignIn').classList.remove('d-none');
    }
    else
    {
        var email=emailOfUser.value;
        var password=passOfUser.value;
        for(var i=0; i<newUserInContainer.length;i++)
        {
            if(newUserInContainer[i].email==email&&newUserInContainer[i].pass==password)
            {
                // console.log(newUserInContainer[i].name)
                document.getElementById('masseg').innerHTML='welcom'+' '+newUserInContainer[i].name;
                document.getElementById('replaceSign').classList.remove('d-none');
                document.getElementById('navbare').classList.remove('d-none');

                document.getElementById('replaceSignIn').classList.add('d-none');
                document.getElementById('replaceSignUp').classList.add('d-none');
            }
            else
            {  
                document.getElementById('errorInformSignIn').classList.remove('d-none');
            }
        }
        clearFormSignIn();
    }
}
openNewoUser.addEventListener('click',openNewUser)

// clearform
function clearFormUser()
{
    nameUser.value="";
    emailUser.value="";
    passUser.value="";
};

// form SignIn
openLoginSignUp.addEventListener('click',function(){
    document.getElementById('replaceSignUp').classList.add('d-none');
    document.getElementById('replaceSignIn').classList.remove('d-none');

    // console.log('hello');

});
// formSignup
openLoginSignIn.addEventListener('click',function(){
    document.getElementById('replaceSignUp').classList.remove('d-none');
    document.getElementById('replaceSignIn').classList.add('d-none');

    // console.log('hello');

});


function addoroudact()
{
    var cartona=``;
    for( var i=0 ; i<newUserInContainer.length ; i++ )
    {
       cartona+=newUserInContainer[i].name;
       newUserInContainer[i].emailUser;
       newUserInContainer[i].pass;
    }
}

function lougOut()
{
    document.getElementById('replaceSignIn').classList.remove('d-none');
    document.getElementById('replaceSign').classList.add('d-none');
    document.getElementById('navbare').classList.add('d-none');
    document.getElementById('errorInformSignIn').classList.add('d-none');
    // clearFormSignIn();

}

function clearFormSignIn() 
{
    
    emailOfUser.value="";
    passOfUser.value="";
    
}


