import { User } from "../models/User";

export class UserController {

  // public static async search(req, res) {
  //   const name = req.query.name;
  //   const findings = await User.findAll({
  //     where: {
  //       name: { [Op.like]: "%" + name + "%" }
  //     }
  //   })

  //   return res.json(findings)
  // }

  // public static async get(req, res) {
  //   const id = req.session.userId;
  //   const user = await User.findOne({
  //     where: { id: id },
  //     attributes: { exclude: ['password'] }
  //   });

  //   res.send(user);
  // }

  public static async create(req, res) {
    const { user } = req.body;
    const addedUser = await User.create({ name: user.name, email: user.email, password: user.password });

    if (!addedUser) return res.sendStatus(406);

    res.json(addedUser);
  }

  // public static async updatePassword(req, res) {
  //   const { currentPassword, newPassword } = req.body
  //   const id = req.session.userId;

  //   const user = await User.findByPk(id)

  //   if (user) {
  //     //@ts-ignore
  //     const match = await bcrypt.compare(currentPassword, user.password)
  //     if (match) {
  //       const password = await bcrypt.hash(newPassword, 10)
  //       //@ts-ignore
  //       user.password = password.replace("$2a", "$2y")
  //       await user.save({})
  //       res.json({ message: "Password alterada com sucesso" });
  //     } else {
  //       res.json({ message: "Password actual não é válida!" });
  //     }
  //   } else {
  //     res.sendStatus(404)
  //   }
  // }



  // public static async update(req, res) {
  //   const id = req.session.userId;
  //   const user = await User.findOne({
  //     where: { id: id },
  //     attributes: { exclude: ['password'] }
  //   });
  //   const { name, genre, id_doc, doc_number } = req.body

  //   if (user === null) {
  //     return res.sendStatus(404)
  //   }
  //   // @ts-ignore
  //   user.name = name
  //   // @ts-ignore
  //   user.genre = genre
  //   // @ts-ignore
  //   user.id_doc = id_doc
  //   // @ts-ignore
  //   user.doc_number = doc_number


  //   await user.save({})

  //   res.json(user)
  // }

  public static async authenticate(req, res) {
    const { email, password } = req.body;
    console.log("Pass: ", password);
    const user = await User.findOne({ where: { email: email }, raw: true });

    if (user) {
      //@ts-ignore
      console.log("DB Pass: ", user.password);

      //@ts-ignore
      //const match = await bcrypt.compare(password, hash);
      //const match = await bcrypt.compare(password, hash);
      if (password === user.password) {
        //@ts-ignore
        delete user.password;
        req.session.loggedIn = true;
        //@ts-ignore
        req.session.userId = user.id;
        res.status(200).json({ message: "Dados corretos!", login: true, user });
      } else {
        res.status(404).json({ message: "Password não é válida!" });
      }
    } else {
      res.status(404).json({ message: "E-mail não registado!" });
    }
  }

  // public static async logout(req, res) {
  //   if (req.session.loggedIn) {
  //     req.session.loggedIn = false
  //     req.session.destroy(err => {
  //       if (err) {
  //         res.status(400).send('Unable to log out')
  //       } else {
  //         res.send(false)
  //       }
  //     });
  //   } else {
  //     res.end()
  //   }
  // }

}