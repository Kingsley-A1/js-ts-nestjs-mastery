🚀 Project NestJS Mastery: From Zero to Mastery (NestJS)

Student: Kingsley
Stack: NestJS, TypeScript, TypeORM, Postgres
Goal: Build a production-ready Backend API for NestJS Mastery.
Motto: "Tactical Learning Only. No Fluff."

🗓️ Phase 1: The Architect (Completed) ✅

Goal: Stop thinking in "Files" (Express) and start thinking in "Modules" (NestJS).
Achievements:

Initialized NestJS project.

Built UsersModule and ProductsModule.

Implemented DTO Validation (class-validator).

Understood Dependency Injection.

🗓️ Phase 2: The Database Engineer (Week 2 - CURRENT) 💾

Goal: Persistence. Connect NestJS to Postgres using TypeORM.
Deliverable: Real data storage. Users and Products are saved in the database, not RAM.

Day

Topic

The Concept

The Practical Exercise (NestJS Mastery)

Day 8 (Done)

Docker & Postgres

Containerization, Running DB locally.

COMPLETED: Docker container running on port 5433. NestJS connected successfully.

Day 9

Entities (Users)

Tables vs. Classes, Columns, Primary Keys.

Create user.entity.ts. Define columns: id, email, password. Register in TypeORM.

Day 10

Repositories

The Repository Pattern, save, find.

Refactor UsersService to use @InjectRepository(). Replace the fake array with real DB calls.

Day 11

Entities (Products)

Relationships (One-to-Many).

Create product.entity.ts. Link it: A User can have Many Products (@OneToMany).

Day 12

Complex Queries

Joins, Filtering.

Update ProductsService to find products and show who posted them (Relations).

Day 13

Async/Await Refactor

Handling Latency, Try/Catch.

Audit all services. Ensure every DB call is awaited. Add error handling for duplicate emails.

Day 14

Rest Day / Buffer

Catch up if behind.

--

🗓️ Phase 3: The Security Chief (Week 3) 🛡️

Goal: Authentication & Authorization. Locking down the API.
Deliverable: A secure Login system using JWT (JSON Web Tokens).

Day

Topic

The Concept

The Practical Exercise (NestJS Mastery)

Day 15

Hashing Passwords

Bcrypt, Salting.

Modify signup to hash passwords. Never store plain text!

Day 16

JWT Strategy

What is a Token? Stateless Auth.

Install passport and jwt. Generate a token when a user logs in.

Day 17

Guards (The Bouncer)

@UseGuards(), Protecting Routes.

Create JwtAuthGuard. Protect POST /products.

Day 18

Custom Decorators

Getting "Current User".

Create @GetUser() decorator to assign uploaded products to the logged-in user.

Day 19

Interceptors

Transforming Data.

Use ClassSerializerInterceptor to hide passwords in responses.

Day 20

Roles (RBAC)

Admin vs. User permissions.

Add role column. Create AdminGuard.

Day 21

Rest Day / Buffer

Catch up if behind.

--

🗓️ Phase 4: The Advanced Engineer (Week 4) 🚀

Goal: Professional Features. File Uploads, Documentation, Deployment.
Deliverable: A deployed API on the cloud.

Day

Topic

The Concept

The Practical Exercise (NestJS Mastery)

Day 22

File Uploads

Multer, Streams.

Allow users to upload product images.

Day 23

Swagger Docs

OpenAPI, Auto-docs.

Setup Swagger to document endpoints.

Day 24

Unit Testing

Jest, Spec files.

Write tests for UsersService.

Day 25

Optimization

Production Builds.

Multi-stage Docker build (from flashcards).

Day 26

Deployment Prep

Procfiles, Environment config.

Prepare for Render/Railway.

Day 27

Go Live!

CI/CD, Cloud DB.

Deploy NestJS Mastery to the web.

Day 28

Celebration

Project Review.

YOU ARE A BACKEND ENGINEER.

🛠️ The "Tactical" Rules of Engagement

No Copy-Pasting: You must type every line.

The "Why" Rule: If you use a Decorator and don't know what it does, ask.

Daily Commits: Push code to GitHub daily.

One Tab Policy: Focus mode ON.