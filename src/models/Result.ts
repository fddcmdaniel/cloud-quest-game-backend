import { DataTypes, Model, Sequelize } from "sequelize";

export class Result extends Model {

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_module_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
      answer_id: DataTypes.INTEGER
    },
      { sequelize: sequelize, timestamps: false, modelName: 'results' })
  }

}