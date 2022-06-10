module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  // Usuário e senha para acesso a usuário do banco
  username: 'postgres',
  password: 'root',
  database: 'projeto_musicas',
  // Padronizar nome de tabelas e colunas
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};