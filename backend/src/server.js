require('dotenv').config();
const app = require('./app');
const config = require('./config');
const database = require('./config/database');
const Logger = require('./utils/logger');

async function startServer() {
  try {
    // Connect to MongoDB
    await database.connect();

    // Start Express server
    const server = app.listen(config.port, () => {
      console.log('\n' + '='.repeat(60));
      Logger.success(`Blueprint Series API running on port ${config.port}`);
      Logger.info(`Environment: ${config.nodeEnv}`);
      Logger.info(`Database: Connected`);
      console.log('='.repeat(60));
      
      console.log('\n📍 Test URLs:');
      console.log(`   Health:     http://localhost:${config.port}/health`);
      console.log(`   All Events: http://localhost:${config.port}/api/events`);
      console.log(`   Frontend:   http://localhost:3000`);
      
      console.log('\n🔌 API Endpoints:');
      console.log(`   GET  /health                     - Health check`);
      console.log(`   GET  /api/events                 - List all events`);
      console.log(`   GET  /api/event/:id              - Complete event data`);
      console.log(`   POST /api/event                  - Create new event`);
      console.log(`   PUT  /api/event/:id              - Update event`);
      console.log(`   DELETE /api/event/:id            - Delete event`);
      
      console.log('\n💡 Quick Test:');
      console.log(`   curl http://localhost:${config.port}/health`);
      console.log(`   curl http://localhost:${config.port}/api/events`);
      console.log('\n' + '='.repeat(60) + '\n');
    });

    // Graceful shutdown
    const shutdown = async (signal) => {
      Logger.info(`${signal} signal received: closing server`);
      
      server.close(async () => {
        Logger.info('HTTP server closed');
        await database.disconnect();
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));

  } catch (error) {
    Logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
