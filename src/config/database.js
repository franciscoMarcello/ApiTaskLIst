module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'senhaDoBanco',
    database: 'NomeDoBanco',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
