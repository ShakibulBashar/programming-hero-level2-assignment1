# programming-hero-level2-assignment1
Assignment submission for TypeScript_Technocrat(programming-hero/level2)– includes code + blogs in README.

Assalamualaikum; in this short blog - In this short blog, I will talk about **three important TypeScript topics** that I learned while solving my Programming Hero Level 2 assignment. I’ll keep it simple and also, I’ll give some examples that I can personally relate to as a student of public administration, and sometimes I’ll mention our awesome Programming Hero team — like our instructor **Mezba bhai** and the CEO **Jhankar bhai**

## 1️) Interface vs Type in TypeScript:- 
When I first started with TypeScript, I got confused between **interface** and **type**. I was thinking if they both help us define the shape of an object — then what’s the difference!!

Imagine **Mezba bhai** tells us to create a student object for our Programming Hero platform. We could do it using either an interface or a type:

### Using Interface:

```ts
interface Student {
  name: string;
  course: string;
}

interface Student {
  level: number; //We can update or extend interface like this
}

const learner: Student = {
  name: "Rakib",
  course: "Level 2",
  level: 2,
};
```

### Using Type:

```ts
type StudentType = {
  name: string;
  course: string;
};

// here we cannot declare "StudentType" again to extend it
```
### 2)any vs unknown vs never –
These three are TypeScript types that I make me dumbfounded at first. But once I saw them like types of public feedback in a complaint system, it made more sense to me.

### a) any: we’re allowing anything.
It's like letting anyone file any complaint — no checking. we won’t get any error, but things can get messy. How? 

```
let anything: any = "Dhaka University";
anything = 1216;       // no error
anything = true;     // again no error 
```

### b) unknown: we accept anything, but we verify before using it.
This is like receiving anonymous feedback — we keep it but we verify before taking any action.

```
let userInput: unknown = "University";

// Safe usage only after checking
if (userInput !== "school") {
  console.log(`${userInput} students aren't allowed`);
}
```

### c) never: we're saying here in this type it can never happen.
This reminds me of a policies of Bangladesh government that’s declared but never gets used.

```
function throwError(): never {
  throw new Error("Something went wrong");
}
```

### 3) keyof in TypeScript – 
The keyof keyword helps us get the names of properties of an object as a type. We can think of it like getting a list of ministries in a government — you can only assign people to those existing ministries.

Let’s say Jhankar Mahbub bhai has an object of his employees:
```
type Team = {
  frontend: string;
  backend: string;
  devOps: string;
};
```

Now if we want to make a function that only accepts valid stack's names, we can use keyof:

```
function getTeamMember(team: Team, department: keyof Team): string {
  return team[department];
}
const myTeam: Team = {
  frontend: "Arafat",
  backend: "Mezba",
  devOps: "Jhankar"
};
console.log(getTeamMember(myTeam, "backend")); // Output: Mezba
```

If we try to use something like "marketing" — TypeScript will stop us. That’s the power of keyof.

### Last words:
I really enjoyed solving these problems and writing this blog. I started to code lately, TypeScript gave me a lot of confidence. The way Mezba bhai teaches and how the Programming Hero platform works — it all helps us think deeply and build real-world logic.

Let’s keep learning and keep building!
### "Code like a developer, think like a policymaker." — Yours truly




