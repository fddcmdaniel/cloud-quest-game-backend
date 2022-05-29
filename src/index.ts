import cors from "cors";
import express from "express";
import session from "express-session";
import { Sequelize } from 'sequelize';
import { AnswersController } from "./controllers/AnswersController";
import { ModulesController } from "./controllers/ModulesController";
import { QuestionsController } from "./controllers/QuestionsController";
import { UserController } from "./controllers/UserController";
import { Answers } from "./models/Answers";
import { Modules } from "./models/Modules";
import { Questions } from "./models/Questions";
import { Result } from "./models/Result";
import { User } from "./models/User";
import { UsersModules } from "./models/UsersModules";

export const sequelize = new Sequelize("cloud-quest-db", "sa", "Joao1234!", {
  dialect: "mssql",
  host: "jduart.ddns.net",
  port: 8080
});

const main = async () => {

  const app = express();

  app.use(express.json());
  app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
  app.use(session({ secret: 'teste', name: 'SessionID', saveUninitialized: false, resave: true }));

  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true }) / / alter database based on modals structure
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error(error);
    process.exit();
  }

  // Sequelize Models e associações
  const modals = [User, Modules, Questions, Answers, Result, UsersModules];
  modals.forEach((modal) => modal.initialize(sequelize));

  // Modules.hasMany(Questions, { foreignKey: "module_id" });
  // Questions.hasMany(Answers, { foreignKey: "question_id" });

  // User.belongsToMany(Modules, { through: 'users_modules', foreignKey: 'user_id', timestamps: false });
  // Modules.belongsToMany(User, { through: 'users_modules', foreignKey: 'module_id', timestamps: false });

  //Middlewares de autenticação
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   //@ts-ignore
  //   if (req.session.loggedIn === true) {
  //     next()
  //   } else if (req.path === '/users/authenticate') {
  //     next()
  //   } else {
  //     res.sendStatus(401)
  //   }
  // })


  //User
  app.post('/user/authenticate', UserController.authenticate);
  app.post('/user', UserController.create);

  //Results
  app.post('/user/result', UserController.updateLevel);

  // Levels
  app.get('/levels', ModulesController.get);

  //Questions
  app.post('/question', QuestionsController.create);
  app.get('/level/:id/questions', QuestionsController.get);

  //Answers
  app.post('/answer', AnswersController.create);
  app.get('/question/:id/answers', AnswersController.get);

  // Users

  app.listen(3001, () => console.log("Server started on port 3001"));
}

main();

