import { DataTypes, Model, Sequelize } from "sequelize";

export class Questions extends Model {
  getQuestions(arg0: { raw: boolean; }) {
    throw new Error("Method not implemented.");
  }

  public static initialize(sequelize: Sequelize) {
    this.init({
      question: DataTypes.STRING,
      enable: DataTypes.NUMBER,
      module_id: DataTypes.NUMBER
    },
      { sequelize: sequelize, timestamps: false, modelName: 'questions' })
  }
}
