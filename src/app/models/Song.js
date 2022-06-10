
import { Sequelize, Model } from 'sequelize';

class Song extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            artist: Sequelize.STRING,
        },
        {
            sequelize
        });
    }

    static associate(models) {
        /*this.hasMany(models.Playlist, {
            foreignKey: 'id',
            as: 'playlists'
        });*/
    }
}

export default Song;