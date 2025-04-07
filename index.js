import { Person, getData, userRoles } from './tools.js';

const user = new Person("Alex", 30);
console.log(user.introduce());

getData().then(console.log);

console.log("User roles:");
for (const [name, role] of userRoles) {
  console.log(`${name}: ${role}`);
}