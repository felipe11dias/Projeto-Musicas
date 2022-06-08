
import { Sequelize, Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            id: Sequelize.INTEGER,
            nome: Sequelize.STRING,
            idade: Sequelize.INTEGER
        },
        {
            sequelize
        });
    }

    static associate(models) {
        //this.belongsTo(models.File , { foreignKey: 'avatar_id', as: 'avatar' });
    }
}

export default User;