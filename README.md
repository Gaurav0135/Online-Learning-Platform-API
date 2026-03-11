# 📚 Online Learning Platform API

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![License](https://img.shields.io/badge/License-MIT-blue)

A **RESTful backend API** for an **Online Learning Platform** similar to **Udemy / Coursera**.

This project demonstrates:

✔ REST API design
✔ MVC architecture
✔ MongoDB relationships
✔ Course enrollment system
✔ Instructor course creation
✔ Student reviews

Built with **Node.js, Express, MongoDB, and Mongoose**.

---

# 🚀 Tech Stack

| Technology | Description     |
| ---------- | --------------- |
| Node.js    | Backend runtime |
| Express.js | Web framework   |
| MongoDB    | NoSQL database  |
| Mongoose   | MongoDB ODM     |
| Postman    | API testing     |

---

# 🏗️ System Architecture

```
Client (Postman / Frontend)
        │
        ▼
      Routes
        │
        ▼
    Controllers
        │
        ▼
      Models
        │
        ▼
      MongoDB
```


---

# 🧠 Database Relationships

| Relationship | Example                       |
| ------------ | ----------------------------- |
| One-to-One   | Student → StudentProfile      |
| One-to-Many  | Course → Lessons              |
| Many-to-One  | Course → Instructor           |
| Many-to-Many | Student ↔ Course (Enrollment) |
| One-to-Many  | Course → Reviews              |
| Many-to-Many | Course ↔ Category             |

---

# 🗄️ Database Models

### Student

```
name
email
```

### StudentProfile

```
address
phone
student (ObjectId)
```

### Instructor

```
name
email
```

### Course

```
title
description
instructor (ObjectId)
```

### Lesson

```
title
videoUrl
course (ObjectId)
```

### Review

```
rating
comment
student (ObjectId)
course (ObjectId)
```

### Category

```
name
```

### Enrollment

```
student (ObjectId)
course (ObjectId)
enrollDate
```

---

# ⚙️ Installation

Clone repository

```
git clone https://github.com/Gaurav0135/Online-Learning-Platform-API.git
```

Navigate to project folder

```
cd Online-Learning-Platform-API
```

Install dependencies

```
npm install
```

---

# 🔧 Environment Variables

Create `.env`

```
PORT=8080

```

---

# ▶️ Run the Application

```
node app.js
or
npm start
```

Server will start at

```
http://localhost:8080
```

---

# 🌐 API Base URL

```
http://localhost:8080/api
```

---

# 🔗 Quick API Routes (Direct Testing)

You can test these directly in **browser or Postman**.

| Route            | Method | Description      |
| ---------------- | ------ | ---------------- |
| /api/students    | GET    | Get all students |
| /api/instructors | GET    | Get instructors  |
| /api/courses     | GET    | Get courses      |
| /api/lessons     | GET    | Get lessons      |
| /api/reviews     | GET    | Get reviews      |
| /api/categories  | GET    | Get categories   |
| /api/enrollments | GET    | Get enrollments  |

Example

```
http://localhost:8080/api/students
```

---

# 📬 API Endpoints

## 👨‍🎓 Student

| Method | Endpoint          |
| ------ | ----------------- |
| POST   | /api/students     |
| GET    | /api/students     |
| GET    | /api/students/:id |
| PUT    | /api/students/:id |
| DELETE | /api/students/:id |

Example

```json
{
"name":"Rahul",
"email":"rahul@gmail.com"
}
```

---

## 👨‍🏫 Instructor

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | /api/instructors     |
| GET    | /api/instructors     |
| GET    | /api/instructors/:id |
| PUT    | /api/instructors/:id |
| DELETE | /api/instructors/:id |

---

## 📚 Course

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/courses     |
| GET    | /api/courses     |
| GET    | /api/courses/:id |
| PUT    | /api/courses/:id |
| DELETE | /api/courses/:id |

Example

```json
{
"title":"NodeJS Bootcamp",
"description":"Learn NodeJS",
"instructor":"INSTRUCTOR_ID"
}
```

---

## 📖 Lesson

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/lessons     |
| GET    | /api/lessons     |
| GET    | /api/lessons/:id |
| PUT    | /api/lessons/:id |
| DELETE | /api/lessons/:id |

---

## ⭐ Review

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/reviews     |
| GET    | /api/reviews     |
| DELETE | /api/reviews/:id |

---

## 🏷 Category

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /api/categories     |
| GET    | /api/categories     |
| DELETE | /api/categories/:id |

---

## 🎓 Enrollment

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | /api/enrollments     |
| GET    | /api/enrollments     |
| DELETE | /api/enrollments/:id |

---

# 🧪 Recommended Testing Order

```
1. Create Instructor
2. Create Student
3. Create Course
4. Create Lesson
5. Enroll Student
6. Add Review
```

---

# ✨ Features

✔ RESTful API
✔ MVC Architecture
✔ MongoDB Relationships
✔ Student Course Enrollment
✔ Instructor Course Creation
✔ Lesson Management
✔ Course Reviews

---

# 📈 Future Improvements

* JWT Authentication
* Role-based access control
* Pagination
* Search & filtering
* Video uploads for courses

---

# 👨‍💻 Author

**Gaurav Patel**

B.Tech CSE
Acropolis Institute of Technology and Research
Indore, India

---

# ⭐ Support

If you like this project, please give it a **star ⭐ on GitHub**.

