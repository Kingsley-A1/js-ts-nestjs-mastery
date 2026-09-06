// ============================================================
// 🏋️ DAY 19: Interfaces — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ⚔️ Challenge 1 — The Base Entity Hierarchy
// Create BaseEntity, User, and Product interfaces. Create and log objects.

interface BaseEntity {
    id: number,
    createdAt: Date
}
interface User extends BaseEntity {
    userName: string,
    email: string
}

interface Product extends BaseEntity {
    name: string,
    price: number
}
const user: User = {
    userName: 'King',
    email: 'king@nestdev',
    id: 1,
    createdAt: new Date
}
// ⚔️ Challenge 2 — The Repository Contract
// Define UserRepository interface with findById, save, delete methods. Create a mockUserRepository object.


interface UserRepository {
    findById(id: number): User | undefined,
    save(user: User): void,
    delete(id: number): boolean
}
const mockUserRepository: UserRepository = {
    findById: (id: number) => {
        return user;
    },
    save: (user: User) => {
        console.log('Saving user:', user);
    },
    delete: (id: number) => {
        console.log('Deleting user:', id);
        return true;
    }
}
console.log(mockUserRepository)
// ⚔️ Challenge 3 — Declaration Merging (The Express Trick)
// Create Request interface. Then create it AGAIN to add `user?: User`. Create an object.
interface Request {
    url: string,
    method: string
}
interface Request {
    user?: User
}

const req: Request = {
    url: '/api/users',
    method: 'GET',
    user: user
}
console.log(req)

// ⚔️ Challenge 4 — Refactoring `type` to `interface`
// Convert TimestampConfig, SoftDeleteConfig, and AdminSettings to interfaces using `extends`.

type TimestampConfig = {
    createdAt: Date,
    updatedAt: Date
}
type SoftDeleteConfig = {
    deletedAt?: Date,
    isDeleted: boolean
}
type AdminSettings = TimestampConfig1 & SoftDeleteConfig1 & {
    darkMode: boolean,
    notifications: boolean
}

interface TimestampConfig1 {
    createdAt: Date,
    updatedAt: Date
}
interface SoftDeleteConfig1 {
    deletedAt?: Date,
    isDeleted: boolean
}
interface AdminSettings1 extends TimestampConfig1, SoftDeleteConfig1 {
    darkMode: boolean,
    notifications: boolean
}

const settings: AdminSettings1 = {
    darkMode: true,
    notifications: false,
    createdAt: new Date,
    updatedAt: new Date,
    isDeleted: false
}
console.log(settings)