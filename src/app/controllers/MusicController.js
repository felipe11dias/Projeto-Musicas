import * as Yup from 'yup';
import Music from "../models/Music";

class MusicController {
    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            artista: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const { id, nome, artista } = await Music.create(req.body);

        return res.json({ id, nome, artista })
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            nome: Yup.string().required(),
            artista: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const music = await Music.findByPk(req.body.id);

        const { id, nome, artista } = await music.update(req.body)

        return res.json({ id, nome, artista })
    }

    async getById(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const musics = await Music.findByPk(req.body.id);

        return res.json(musics)
    }

    async getAll(req, res) {
        const musics = await Music.findAll();

        return res.json(musics)
    }
}


export default new MusicController();