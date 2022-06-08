import Sequelize from 'sequelize';

// Database config
import databaseConfig from '../config/database';

// Models   
import User from '../app/models/User';
import Playlist from '../app/models/Playlist';

const models = [User, Playlist];

class Database {
    constructor() {
        this.init();
    }
    
    init() {
        this.connection = new Sequelize(databaseConfig);
        
        // Adicionando conecção e associações com o banco de dados para todos os Models
        models.map(model => model.init(this.connection),
                   model => {
                     if (model.associate) {
                       model.associate(this.connection.models);
                     }
                   })
    }

}

export default new Database();