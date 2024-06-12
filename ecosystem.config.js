module.exports = {
    apps: [{
        name: 'webrtc',
        script: 'app.js',
        watch: true,
        error_file : "err.log",
        ignore_watch: ["node_modules", "public", "arquivos", "locales", "src/migration", "*.log"],
        env: {
            NODE_ENV: 'development',
            NTBA_FIX_319: 1
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};
