//Getting all datas
const form = document.querySelector('#form');
const Name = document.querySelector('#Name');
const Email = document.querySelector('#Email');
const Address = document.querySelector('#Address');
const StudentID = document.querySelector('#Student');
const Department = document.querySelector('#Department');
const Username = document.querySelector('#Username');
const Password = document.querySelector('#Password');
const Confirm = document.querySelector('#Confirm');

//Showing datas
const sname=document.querySelector('#sname');
const semail=document.querySelector('#semail');
const saddress=document.querySelector('#saddress');
const sid=document.querySelector('#sid');
const sdep=document.querySelector('#sdep');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    Checking();
    showing();   
})

//Validation function
function Checking() {
    //Name
    if (Name.value == '') {

        setError(Name, "Username is required");
    }
    else {

        setSucess(Name);
    }
    //Email
    if(Email.value==''){

        setError(Email,"Email is required");
    }
    else if(!validemail(Email.value)){
        setError(Email,"Invlaid Email ID");
    }
    else if(Email.value.length<8){
        
        setError(Email,"Lessthan 8 characters");
    }
    else{
        setSucess(Email);
    }
    //Address
    if(Address.value==''){
        setError(Address,"Address is required");
    }
    else{
        setSucess(Address);
    }
    //StudentId
    if(StudentID.value==''){
        setError(StudentID,"StudentID is required");
    }
    else{
        setSucess(StudentID);
    }
    //Department
    if(Department.value==''){
        setError(Department,"Department is required");
    }
    else{
        setSucess(Department);
    }
    //Username
    if(Username.value==''){
        setError(Username,"Username is required");
    }
    else{
        setSucess(Username);
    }
    //Password
    if(Password.value==''){
        setError(Password,"Password is required");
    }
    else if(Password.value.length<8){
        setError(Password,"Password must contain 8 characters");

    }
    else{
        setSucess(Password);
    }
    //confirm
    
    if(Confirm.value==''){
        setError(Confirm,"Confirm Password is required");
    }
    else if(Password.value==Confirm.value){
        setSucess(Confirm);
    }
    else if(Password.value!==Confirm.value){
        setError(Confirm,"Does not Match !");
    }
    else if(Password.value==''){
        setError(Confirm,"Fill the Password");
    }


    
    
}
function showing(){
    
    document.querySelector('#details').style.display='block';
    sname.innerText=Name.value;
    semail.innerText=Email.value;
    saddress.innerText=Address.value;
    sid.innerText=StudentID.value;
    sdep.innerText=Department.value;
}
function setError(element, msg) {
    const inputgroups = element.parentElement;
    const errorparent = inputgroups.querySelector('.errormsg');

    errorparent.innerText = msg;
    inputgroups.classList.add('error');
    inputgroups.classList.remove('success');

}
function setSucess(element) {
    const inputgroups = element.parentElement;
    const errorparent = inputgroups.querySelector('.errormsg');

    errorparent.innerText = '';
    inputgroups.classList.add('success');
    inputgroups.classList.remove('error');

}
const validemail = (Email) => {
    return String(Email)
        .toLowerCase()
        .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        );
};

function showvalue(){
    const a=document.querySelector('#Password');
}