import * as Yup from 'yup';
import User from "../models/User";

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            idade: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const { id, nome, idade } = await User.create(req.body);

        return res.json({ id, nome, idade })
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            nome: Yup.string().required(),
            idade: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const user = await User.findByPk(req.body.id);

        const { id, nome, idade } = await user.update(req.body)

        return res.json({ id, nome, idade })
    }

    async getById(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const users = await User.findByPk(req.body.id);

        return res.json(users)
    }

    async getAll(req, res) {
        const users = await User.findAll();

        return res.json(users)
    }
}


export default new UserController();