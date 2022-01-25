//---- Configs
import { sequelize } from './postgres';

//---- Models
import UserModel from '../models/user.model';

(async () => {
    UserModel
    await sequelize.sync()
})()