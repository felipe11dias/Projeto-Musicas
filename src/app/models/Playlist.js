
import { Sequelize, Model } from 'sequelize';

class Playlist extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            user_id: Sequelize.INTEGER
        },
        {
            sequelize
        });
    }

    static associate(models) {
        
        /*this.hasMany(models.Music, {
            foreignKey: 'id_musica',
            as: 'musicas'
        });*/
    }
}

export default Playlist;