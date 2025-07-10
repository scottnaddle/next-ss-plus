# Next Samsung Plus

A modern web platform for Samsung regional and channel management, including admin, FSM, RSA, and SEC dashboards, store and user management, rewards, tax, and analytics.

## Features
- Admin, FSM, RSA, SEC dashboards
- Store and user management
- Rewards and sweepstakes management
- Tax compliance and reporting
- Responsive web UI (mobile/tablet/desktop)
- Modern React + TypeScript + Tailwind CSS frontend
- Node.js/Express backend (API, DB)

## Folder Structure
```
next-ss-plus/
  backend/           # Node.js/Express backend API
  next-ss-plus/ # React frontend (Vite, Tailwind)
```

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/scottnaddle/next-ss-plus.git
cd next-ss-plus/next-ss-plus
```

### 2. Install dependencies (frontend)
```sh
npm install
```

### 3. Start the frontend
```sh
npm run dev
```

### 4. Start the backend (in another terminal)
```sh
cd ../backend
npm install
npm run dev
```

## License
MIT 

## Syncing with GitHub Repository

### 1. Check and update remote repository settings
If a remote repository is already registered, check the address and update it if necessary.

```sh
git remote -v
```
If the existing remote repository (origin) has an old address, change it to the new address with the following command:

```sh
git remote set-url origin https://github.com/scottnaddle/next-ss-plus.git
```

### 2. Commit changes
Commit any changes made (e.g., README.md modifications).

```sh
git add .
git commit -m "Folder name and README.md, GitHub address synchronization"
```

### 3. Push to remote repository
```sh
git push origin main
```