//  Micro-Challenge #1: Create Your Profile
// const profile = {
//     name: "Kingsley",
//     age: 25,
//     isLearning: true,

// }
// console.log(`${profile.name} is ${profile.age} years old and  is he learning ${profile.isLearning}`)

// const skills = ["JavaScript", "TypeScript", "NestJS"]
// console.log(`I am taking ${skills[0]} first, after wards, I will take ${skills[1]} and finally ${skills[2]}!`)


//Object nested in an object 
const profile = {
    name: "Kingsley",
    age: 25,
    isLearning: true,
    skills: ["JavaScript", "TypeScript", "NestJS"]

}
console.log(`${profile.name} is ${profile.age} years old and he is currenly learning ${profile.skills[0]}!`)
//Destructuring objects
const {name, skills} = profile;
console.log(profile);
console.log(name);
console.log(skills);

//Micro Challange 3
//Destructuring arrays
const [firstSkill, secondSkill] = skills;
console.log(firstSkill);
console.log(secondSkill);

//Micro Challange 4: The  Spread operator(...)
const allSkills = [...skills, "PostgreSQL", "Docker"];
// console.log(allSkills); 

const updatedProfile = {...profile, isLearning: false, level: "intermediate"};
console.log(updatedProfile, ...allSkills);


























const product = {
    name2: "Laptop",
    price: 999,
    tags: ["electronics", "computers", "sale"]
};

const {name2, tags} = product;

const allTags = [...tags, featured = "brand new"];
console.log(allTags);