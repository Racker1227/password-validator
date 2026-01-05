
```markdown
# 🔐 Password Validator - HTML App

This is a simple HTML page that validates passwords based on a custom set of rules. The application is served using a lightweight **Nginx** server in a Docker container.

## ✅ Password Validation Rules

1. Password must be **8 to 15 characters** long.
2. Must include at least **one uppercase letter, one lowercase letter, one digit, and one special character** (`!@#$%_`).
3. Should **not contain consecutive characters** like `abc`, `123`.
4. Should **not include month or day names** like `Jan`, `Monday`, etc.
5. Should **not contain 10-digit mobile numbers**.

## 🛠️ Tech Stack

- HTML + JavaScript (frontend validation)
- Docker
- Nginx (static file web server)

## 🚀 How to Run

### 1. Clone or Download the Project

> Make sure you have `index.html` and `Dockerfile` in the project root.

### 2. Build and run the Docker Image

```bash
docker compose up
```

Now open your browser and navigate to:  
👉 [http://localhost:8080](http://localhost:8080)

You should see the password validator page.

## 🧹 To Stop and Remove the Container

```bash
docker compose down
```

---

### 📁 Project Structure

```
password-validator-html/
├── Dockerfile
├── docker-compose.yml
├── index.html
└── README.md
```

---

## ✍️ Author

TechEllitpica Education 
https://techelliptica.com

```
