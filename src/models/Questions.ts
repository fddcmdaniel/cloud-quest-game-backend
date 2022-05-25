import { DataTypes, Model, Sequelize } from "sequelize";
import { Modules } from "./Modules";

export class Questions extends Model {

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      question: DataTypes.STRING,
      enable: DataTypes.NUMBER,
      type: DataTypes.INTEGER,
      module_id: {
        type: DataTypes.INTEGER,
        references: { model: Modules, key: 'id' }
      }
    },
      { sequelize: sequelize, timestamps: false, modelName: 'questions' })
  }
}
