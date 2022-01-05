module.exports = {
  apps: [{
    name: "koa-api",
    script: "./dist/index.js",
    instances: 2,
    exec_mode: 'cluster',
    max_memory_restart: '400M',
    env: { NODE_ENV: 'production', PORT: 8080 },
  }],
}