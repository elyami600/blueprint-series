/**
 * Database Connection Manager
 * --------------------------------------------------
 * Centralized MongoDB connection handler using Mongoose.
 * - Manages connecting and disconnecting from MongoDB
 * - Logs connection lifecycle events
 * - Provides utility methods for test environments
 *
 * This abstraction keeps database logic isolated,
 * improves maintainability, and supports clean testing.
 */


const mongoose = require('mongoose');
const Logger = require('../utils/logger');

class Database {
  constructor() {
    this.connection = null;
  }
  

  async connect() {
  try {
    // const options = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   };
    // Simply pass the URI without the extra options object
    this.connection = await mongoose.connect(process.env.MONGODB_URI);

    Logger.success(`MongoDB connected: ${this.connection.connection.host}`);

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      Logger.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      Logger.warn('MongoDB disconnected');
    });

    return this.connection;
  } catch (error) {
    Logger.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}
  async disconnect() {
    try {
      await mongoose.connection.close();
      Logger.info('MongoDB disconnected successfully');
    } catch (error) {
      Logger.error('Error disconnecting from MongoDB:', error);
    }
  }

  async clearDatabase() {
    if (process.env.NODE_ENV === 'test') {
      const collections = mongoose.connection.collections;
      for (const key in collections) {
        await collections[key].deleteMany();
      }
      Logger.info('Database cleared');
    }
  }
}

module.exports = new Database();