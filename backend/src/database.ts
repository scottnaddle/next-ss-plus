
import sqlite3 from 'sqlite3';
import { MOCK_USERS, STORES_DATA, LEARNING_MODULES } from './data/initialData';
import fs from 'fs';

const DBSOURCE = "database.db";

if (fs.existsSync(DBSOURCE)) {
  fs.unlinkSync(DBSOURCE);
}

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');

  // Create tables
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS UserRoles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role_name TEXT NOT NULL UNIQUE
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      affiliationCode TEXT,
      storeLocation TEXT,
      region TEXT,
      points INTEGER DEFAULT 0,
      isActive BOOLEAN DEFAULT true,
      lastLogin DATETIME,
      totalEarnings REAL DEFAULT 0,
      taxReportingRequired BOOLEAN DEFAULT false,
      dateJoined DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Stores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT,
      region TEXT,
      district TEXT,
      area TEXT,
      healthScore INTEGER,
      lastVisit DATETIME,
      nextVisit DATETIME,
      zeroSales BOOLEAN,
      activeRSAs INTEGER,
      totalRSAs INTEGER,
      monthlySales INTEGER,
      target INTEGER,
      status TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS LearningModules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT,
      status TEXT,
      estimatedTime INTEGER,
      points INTEGER,
      difficulty TEXT,
      views INTEGER DEFAULT 0,
      completions INTEGER DEFAULT 0,
      rating REAL DEFAULT 0,
      lastUpdated DATETIME,
      author TEXT
    )`);

    // Insert initial data
    const insertUser = db.prepare(`INSERT INTO Users (firstName, lastName, email, password, role, affiliationCode, storeLocation, region, points, isActive, lastLogin, totalEarnings, taxReportingRequired, dateJoined) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
    MOCK_USERS.forEach(user => {
      insertUser.run(user.firstName, user.lastName, user.email, 'password', user.role, user.affiliationCode, user.storeLocation, user.region, user.points, user.isActive, user.lastLogin, user.totalEarnings, user.taxReportingRequired, user.dateJoined);
    });
    insertUser.finalize();

    const insertStore = db.prepare(`INSERT INTO Stores (name, location, region, district, area, healthScore, lastVisit, nextVisit, zeroSales, activeRSAs, totalRSAs, monthlySales, target, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
    STORES_DATA.forEach(store => {
      insertStore.run(store.name, store.location, store.region, store.district, store.area, store.healthScore, store.lastVisit, store.nextVisit, store.zeroSales, store.activeRSAs, store.totalRSAs, store.monthlySales, store.target, store.status);
    });
    insertStore.finalize();

    const insertLearningModule = db.prepare(`INSERT INTO LearningModules (title, description, category, status, estimatedTime, points, difficulty, views, completions, rating, lastUpdated, author) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`);
    LEARNING_MODULES.forEach(module => {
      insertLearningModule.run(module.title, module.description, module.category, module.status, module.estimatedTime, module.points, module.difficulty, module.views, module.completions, module.rating, module.lastUpdated, module.author);
    });
    insertLearningModule.finalize();

    console.log('Tables created and initial data inserted.');
  });
});

export default db;
