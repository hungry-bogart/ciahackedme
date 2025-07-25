// For CommonJS (.cjs)
module.exports = {
    apps: [{
      name: "cia-hacked-me",
      script: "node_modules/vite/bin/vite.js",
      args: "preview --host --port 5173",  // Updated port
      cwd: process.cwd(),
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: "production",
        PORT: 5173  // Updated port
      }
    }]
  }