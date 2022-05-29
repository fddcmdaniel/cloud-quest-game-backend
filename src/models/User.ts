import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
      enable: DataTypes.INTEGER,
      level1: DataTypes.INTEGER,
      level2: DataTypes.INTEGER,
      level3: DataTypes.INTEGER,
      level4: DataTypes.INTEGER,
      level5: DataTypes.INTEGER
    },
      { sequelize: sequelize, timestamps: false, modelName: 'user' })
  }

}
