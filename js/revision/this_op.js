
function student(){
   this.name="Avinash",
   this.age=22,
   this.dest="Backend developer"
   console.log(this)
}

let newStudent=new student();
newStudent.name="Anita"
newStudent.age=20
newStudent.dest="full stack developer"
console.log(newStudent.name,newStudent.age,newStudent.dest)