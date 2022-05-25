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
      level_one: DataTypes.INTEGER,
      level_two: DataTypes.INTEGER,
      level_three: DataTypes.INTEGER,
      level_four: DataTypes.INTEGER,
      level_five: DataTypes.INTEGER,
    },
      { sequelize: sequelize, timestamps: false, modelName: 'users' })
  }

}
