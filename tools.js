// ✅ Class: Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  // ✅ Async & Promises: simulate fetching data
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Fetched data successfully!");
      }, 1000);
    });
  }
  
  async function getData() {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      return "Error fetching data.";
    }
  }
  
  // ✅ Map: sample key-value store
  const userRoles = new Map();
  userRoles.set("alice", "admin");
  userRoles.set("bob", "editor");
  userRoles.set("carol", "viewer");
  
  // ✅ Export everything (Modularity)
  export { Person, fetchData, getData, userRoles };