var student_name =[];
function submit(){
var displaystudent_name =[];
for(var i =1;i<=4;i++){ 
var name_of_the_student=document.getElementById("name_of_the_student_"+i).value;
console.log (name_of_the_student);
student_name.push(name_of_the_student);
}
console.log(student_name);
var len=student_name.length;
console.log (len);

for(var j =0;j<len;j++){ 
displaystudent_name.push("<h4>Name: "+student_name[j]+"</h4>");
    console.log (displaystudent_name);
}
console.log (displaystudent_name);
document.getElementById ("display_name_with_commas").innerHTML=displaystudent_name;
var removecomma=displaystudent_name.join(" ");
console.log (removecomma);
document.getElementById ("display_name_without_commas").innerHTML=removecomma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting (){
student_name.sort();
console.log (student_name);
var displaystudent_namesorting=[]; 
var len=student_name.length;
console.log (len);

for(var j =0;j<len;j++){ 
displaystudent_namesorting.push("<h4>Name: "+student_name[j]+"</h4>");
    console.log (displaystudent_namesorting);
}
var removecomma=displaystudent_namesorting.join(" ");
console.log (removecomma);
document.getElementById ("display_name_without_commas").innerHTML=removecomma;
}

