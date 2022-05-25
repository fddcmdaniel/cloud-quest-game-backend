import { DataTypes, Model, Sequelize } from "sequelize";

export class Modules extends Model {

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: DataTypes.STRING,
      title: DataTypes.STRING,
    },
      { sequelize: sequelize, timestamps: false, modelName: 'modules' })
  }
}
