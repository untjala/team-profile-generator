class Employee {
   constructor( name, id, email ) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
   };
   getName () {
    return this.name;
   };
   getId () {
    return this.name;
   };
   getEmail () {
    return this.name;
   };
   getRole () {
    return this.role;
   };
}
module.exports = Employee;