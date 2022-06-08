
import { Sequelize, Model } from 'sequelize';

class Music extends Model {
    static init(sequelize) {
        super.init({
            id: Sequelize.INTEGER,
            nome: Sequelize.STRING,
            artista: Sequelize.STRING,
        },
        {
            sequelize
        });
    }

    static associate(models) {
        
    }
}

export default Music;