// ============================================================
// 📘 DAY 19: Interfaces — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: Defining Interfaces
// ─────────────────────────────────────────────────────────────

interface User {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
}

const playerOne: User = {
    id: 1,
    username: "Kingsley",
    email: "king@dev.com",
    isActive: true
};

console.log("Player:", playerOne);

// ─────────────────────────────────────────────────────────────
// SECTION 2: Extending Interfaces (`extends`)
// ─────────────────────────────────────────────────────────────

// Base contract for any database entity
interface BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

// Article inherits the id, createdAt, and updatedAt from BaseEntity
interface Article extends BaseEntity {
    title: string;
    content: string;
    authorId: number;
}

const myArticle: Article = {
    id: 101,
    title: "TypeScript Interfaces in NestJS",
    content: "Interfaces are powerful for building scalable apps...",
    authorId: playerOne.id,
    createdAt: new Date(),
    updatedAt: new Date()
};

console.log("\nArticle:", myArticle.title, "created at", myArticle.createdAt);

// Extending MULTIPLE interfaces
interface HasSoftDelete {
    isDeleted: boolean;
    deletedAt?: Date;
}

// UserRecord inherits from both BaseEntity AND HasSoftDelete
interface UserRecord extends BaseEntity, HasSoftDelete {
    role: "admin" | "user";
}

const adminRecord: UserRecord = {
    id: 99,
    role: "admin",
    isDeleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
};

// ─────────────────────────────────────────────────────────────
// SECTION 3: Method Signatures in Interfaces (Contracts)
// ─────────────────────────────────────────────────────────────

// Interfaces can dictate what methods an object/class MUST have.
// Extremely useful for defining Repositories and Services in NestJS.

interface ArticleRepository {
    find(id: number): Article | undefined;
    save(article: Article): void;
    delete(id: number): boolean;
}

// An object that fulfills the ArticleRepository contract
const mockRepo: ArticleRepository = {
    find: (id: number) => {
        console.log(`Finding article ${id}...`);
        return myArticle; 
    },
    save: (article: Article) => {
        console.log(`Saving article: ${article.title}`);
    },
    delete: (id: number) => {
        console.log(`Deleting article ${id}...`);
        return true;
    }
};

console.log("\nTesting Mock Repository:");
mockRepo.save(myArticle);
mockRepo.find(101);

// ─────────────────────────────────────────────────────────────
// SECTION 4: Declaration Merging
// ─────────────────────────────────────────────────────────────

// You can define the SAME interface multiple times.
// TypeScript will merge them together into one unified interface.

interface GlobalWindow {
    title: string;
}

// Let's pretend this is further down in the file or in another file
interface GlobalWindow {
    resize(): void;
}

// The final GlobalWindow object must have BOTH title and resize()
const myAppWindow: GlobalWindow = {
    title: "Nest Mastery App",
    resize: () => console.log("Window is resizing...")
};

console.log("\nApp Window Title:", myAppWindow.title);
myAppWindow.resize();

// ─────────────────────────────────────────────────────────────
// SECTION 5: `interface` vs `type`
// ─────────────────────────────────────────────────────────────

// USE TYPES for unions, primitives, tuples:
type Status = "pending" | "approved" | "rejected"; // Cannot do this with interface!
type ID = string | number;

// USE INTERFACES for object shapes that might grow or be implemented by classes.
interface Payment {
    amount: number;
    currency: string;
    status: Status; // Using the type alias inside the interface!
}
