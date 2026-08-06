```typescript
import {v4} from "uuid";

type Project = {
    id: number,
    href: string,
    description: string,
    createdAt: Date
}

const projects: Project[] = [
    {
        id: 1,
        href: "https://rapid-test-02.vercel.app",
        description: "An online question banks repository.",
        createdAt: new Date("July, 2026")
    }
]

const github_user = {
    id: v4(),
    fname: "Olawoyin",
    lname: "Temidayo",
    age: 27,
    pronoun: "he/him",
    occupation: "computer programmer",
    specialty: "web development",
    codename: "tsolawoyin"
    tech_stack: [
        "typescript", // programming language
        "next.js",  // fullstack framework
        "supabase", // database
        "dexie", // indexed db manager
        "shadcn+tailwind", // user interface
    ],
    education: {
        university: "University of Ibadan, Nigeria",
        course: "Medicine and Surgery"
        currentLevel: 200,
        expectedGraduation: "203sth"
    },
    projects: projects,
}

console.log(github.user); // oops. can't compile.
// Adding comment. 
// Stop using llms to write software(s). It's bad for your mental health and your users. Honestly.
```
