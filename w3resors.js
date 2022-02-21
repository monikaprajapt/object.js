function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
  }
console.log(is_dom_element(jQuery('body')[0]));



student={"name ": "David Rayy","sclass" : "VI","rollno" : 12 }
for (i in student){
  console.log(student[i])
}
//   // Sample Output: name,sclass,rollno



delit 
var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);