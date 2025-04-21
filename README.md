# 🛠️ CI/CD Pipeline Demo

This is a demo Node.js project showcasing a complete CI/CD workflow using **GitHub Actions**. It includes linting, unit testing, and Docker image build & push to DockerHub.

## 🚀 What It Does
- Lints code with ESLint
- Runs unit tests with Jest
- Builds and pushes Docker image to DockerHub

## 🧰 Tech Stack
- Node.js
- GitHub Actions
- Docker

## 📦 Run Locally

```bash
npm install
npm start
```

## 🧪 Run Tests

```bash
npm test
```

## 🐳 Docker

```bash
docker build -t yourname/cicd-pipeline-demo .
docker run -p 3000:3000 yourname/cicd-pipeline-demo
```

## 🔐 Secrets Needed

In your GitHub repo settings → **Secrets**:
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

## 📂 Workflow Summary

1. On `push` to `main`, GitHub Actions:
   - Installs dependencies
   - Lints and tests code
   - Builds Docker image
   - Pushes to DockerHub

---

Made with ❤️ for DevOps learners.
