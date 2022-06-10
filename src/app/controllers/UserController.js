import * as Yup from 'yup';
import User from "../models/User";

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            age: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const { id, name, age } = await User.create(req.body);

        return res.json({ id, name, age })
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            age: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const user = await User.findByPk(req.params.id);

        if(user == null) {
            return res.status(400).json({ error: "Validação ID usuário inválido." })
        }

        const { id, name, age } = await user.update(req.body)

        return res.json({ id, name, age })
    }

    async getById(req, res) {
        const user = await User.findByPk(req.params.id);

        if(user == null) {
            return res.status(400).json({ error: "Validação ID usuário inválido." })
        }

        return res.json(user)
    }

    async getAll(req, res) {
        const users = await User.findAll();

        return res.json(users)
    }
}


export default new UserController();