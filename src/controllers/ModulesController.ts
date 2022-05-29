import { Modules } from "../models/Modules";

export class ModulesController {

  // public static async get(req, res) {
  //   const id = req.session.userId;
  //   const user = await User.findByPk(id);
  //   if (!user) return res.sendStatus(404);
  //   //@ts-ignore
  //   const userModules = await user.getModules({ raw: true }); // Modules By user
  //   const modules = await Modules.findAll({ where: { enable: 1 }, raw: true }); // All modules

  //   userModules.map((value: number) => {
  //     Object.keys(modules).map((key) => {
  //       if (value['id'] === modules[key].id) {
  //         return modules[key] = { ...modules[key], alreadyDone: true, result: value['users_modules.result'] };
  //       } else if (modules[key].alreadyDone !== true) {
  //         modules[key] = { ...modules[key], alreadyDone: false, result: null };
  //       }
  //     });
  //   });

  //   res.json(modules);
  // }

  public static async get(req, res) {
    const levels = await Modules.findAll({ raw: true });
    if (!levels) res.sendStatus(404);

    res.json(levels);
  }

  // public static async update(req, res) {
  //   const { module } = req.body;
  //   console.log("Hi", module);
  //   const editModule = await Modules.findOne({
  //     where: { id: module.id }
  //   });

  //   if (!editModule) return res.sendStatus(404);

  //   // @ts-ignore
  //   editModule.title = module.title;
  //   // @ts-ignore
  //   editModule.description = module.description;
  //   // @ts-ignore
  //   editModule.url = (module.url).split("watch?v=")[1];
  //   await editModule.save({});

  //   const modules = await Modules.findAll({ raw: true });
  //   Object.keys(modules).map((value, i) => modules[value] = { ...modules[value], key: i });
  //   res.json(modules);
  // }

  // public static async create(req, res) {
  //   const { module } = req.body;
  //   const splitedURL = module.url.split("watch?v=")[1];
  //   const newModule = await Modules.create({ title: module.title, description: module.description, url: splitedURL });

  //   newModule ? await Modules.findAll().then((modules) => res.json(modules)) : res.sendStatus(404);
  // }

}