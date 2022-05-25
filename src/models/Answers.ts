import { DataTypes, Model, Sequelize } from "sequelize";
import { Questions } from "./Questions";

export class Answers extends Model {

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      answer: DataTypes.STRING,
      correct: DataTypes.NUMBER,
      enable: DataTypes.NUMBER,
      question_id: {
        type: DataTypes.INTEGER,
        references: { model: Questions, key: 'id' }
      },
    },
      { sequelize: sequelize, timestamps: false, modelName: 'answers' })
  }
}
