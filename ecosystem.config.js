module.exports = {
  apps : [
    {
      name : "nuxt-app",
      exec_mode : "cluster",
      instances : 2,
      script: "nuxt-start",
      watch: true,
      out_file: "/var/log/nuxt-app-out.log",
      error_file: "/var/log/nuxt-app-error.log",
      env: {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "NODE_ENV": "production"
      }
    },
    {
      name : "nuxt-staging-app",
      exec_mode : "cluster",
      instances : 2,
      script: "nuxt-start",
      watch: true,
      out_file: "/var/log/nuxt-staging-app-out.log",
      error_file: "/var/log/nuxt-staging-app-error.log",
      env: {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "NODE_ENV": "production"
      }
    }
  ]
};
