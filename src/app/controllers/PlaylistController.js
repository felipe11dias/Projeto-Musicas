import * as Yup from 'yup';
import Playlist from "../models/Playlist";

class PlaylistController {
    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const { id, nome } = await Playlist.create(req.body);

        return res.json({ id, nome })
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            nome: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const playlist = await Playlist.findByPk(req.body.id);

        const { id, nome } = await playlist.update(req.body)

        return res.json({ id, nome })
    }

    async getById(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const playlists = await Playlist.findByPk(req.body.id);

        return res.json(playlists)
    }

    async getAll(req, res) {
        const playlists = await Playlist.findAll();

        return res.json(playlists)
    }
}


export default new PlaylistController();