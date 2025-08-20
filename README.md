 Contact System - Contact Management Application
 * Introduction

The Contact System is a simple and user-friendly Contact Management Web Application built using Angular for the frontend and Spring Boot for the backend, with PostgreSQL as the database.
It allows users to add new contacts and view all saved contacts through a responsive and attractive UI.

Technologies Used
* Frontend:
   . Angular
   . TypeScript
   . HTML.

* Backend:
  .  Spring Boot (Java)
  .  REST API
  
* Database:
  . PostgreSQL

* Build Tools:
    . Maven
    . Node.js & NPM
   
Features

✅ Add new contacts with details (Name, Email, Phone, etc.)
✅ Store contact information in PostgreSQL
✅ Simple and clean user interface
✅ REST API integration between Angular & Spring Boot

** Prerequisites

Make sure you have the following installed:
 - Java 17+
 - Maven
 - PostgreSQL
 - Node.js & NPM
 -  Angular CLI
 -  Ports Used
 -  Component	Port
 -  Spring Boot API	http://localhost:8080/
 -  Angular Frontend	http://localhost:4200/
 -  postgreSQL DB	Default: 5432

* Database contents

How to Run the Project
1. Run the Backend
cd backend
mvn spring-boot:run

The backend server will start at http://localhost:8080/

2. Run the Frontend
cd frontend
npm install
ng serve

The frontend app will run at http://localhost:4200/
.
API  ENDPOINTS
| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | /api/contacts | Add a new contact   |
| GET    | /api/contacts | Get all contacts    |

## 📸 Screenshots

### **1. Add Contact Page**
(![Screenshot 2025-08-20 155346](https://github.com/user-attachments/assets/d7ce3be6-2125-4a5e-9e21-67336b1af203)
)

### **2. Contact List in database **
(![Screenshot 2025-08-20 234150](https://github.com/user-attachments/assets/cb1a0bec-e8e0-4914-9007-4bc9c0ea98b1)
)


**Developers (group member) :
1. Divya Kamble: 31divyakamble@gmail.com
   
3. Tejaswini Kale: tejaswinikale494@gmail.com
   
5. Priyadarshani pathrut: priyadpathrut@gmail.com


