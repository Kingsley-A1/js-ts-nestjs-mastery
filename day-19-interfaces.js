// ============================================================
// 📘 DAY 19: Interfaces — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
const playerOne = {
    id: 1,
    username: "Kingsley",
    email: "king@dev.com",
    isActive: true
};
console.log("Player:", playerOne);
const myArticle = {
    id: 101,
    title: "TypeScript Interfaces in NestJS",
    content: "Interfaces are powerful for building scalable apps...",
    authorId: playerOne.id,
    createdAt: new Date(),
    updatedAt: new Date()
};
console.log("\nArticle:", myArticle.title, "created at", myArticle.createdAt);
const adminRecord = {
    id: 99,
    role: "admin",
    isDeleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
};
// An object that fulfills the ArticleRepository contract
const mockRepo = {
    find: (id) => {
        console.log(`Finding article ${id}...`);
        return myArticle;
    },
    save: (article) => {
        console.log(`Saving article: ${article.title}`);
    },
    delete: (id) => {
        console.log(`Deleting article ${id}...`);
        return true;
    }
};
console.log("\nTesting Mock Repository:");
mockRepo.save(myArticle);
mockRepo.find(101);
// The final GlobalWindow object must have BOTH title and resize()
const myAppWindow = {
    title: "Nest Mastery App",
    resize: () => console.log("Window is resizing...")
};
console.log("\nApp Window Title:", myAppWindow.title);
myAppWindow.resize();
export {};
//# sourceMappingURL=day-19-interfaces.js.map