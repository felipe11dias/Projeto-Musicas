
import { Sequelize, Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            age: Sequelize.INTEGER,
        },
        {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Playlist, {
            foreignKey: 'user_id',
            as: 'playlists'
        });
        models.Playlist.belongsTo(models.User, { foreignKey: 'user_id', as: 'users'}); 
    }
}

export default User;