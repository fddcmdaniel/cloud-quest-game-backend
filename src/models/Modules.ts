import { DataTypes, Model, Sequelize } from "sequelize";

export class Modules extends Model {
  getQuestions(arg0: { raw: boolean; }) {
    throw new Error("Method not implemented.");
  }

  public static initialize(sequelize: Sequelize) {
    this.init({
      description: DataTypes.STRING,
      title: DataTypes.STRING,
      enable: DataTypes.NUMBER,
      url: DataTypes.STRING
    },
      { sequelize: sequelize, timestamps: false, modelName: 'modules' })
  }
}
