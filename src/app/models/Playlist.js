
import { Sequelize, Model } from 'sequelize';

class Playlist extends Model {
    static init(sequelize) {
        super.init({
            id: Sequelize.INTEGER,
            nome: Sequelize.STRING,
        },
        {
            sequelize
        });
    }

    static associate(models) {
        
    }
}

export default Playlist;