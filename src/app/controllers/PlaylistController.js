import * as Yup from 'yup';
import Playlist from "../models/Playlist";
import User from '../models/User';

class PlaylistController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            user_id: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const { id, name, user_id } = await Playlist.create(req.body);

        return res.json({ id, name, user_id })
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            user_id: Yup.number().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const playlist = await Playlist.findByPk(req.params.id);

        if(playlist == null) {
            return res.status(400).json({ error: "Validação ID playlist inválido." })
        }

        const user = await User.findByPk(req.body.user_id);

        if(user == null) {
            return res.status(400).json({ error: "Validação ID usuário associado inválido." })
        }      

        const { id, name, user_id } = await playlist.update(req.body)

        return res.json({ id, name, user_id })
    }

    async getById(req, res) {
        const playlist = await Playlist.findByPk(req.params.id);

        if(playlist == null) {
            return res.status(400).json({ error: "Validação ID playlist inválido." })
        }

        return res.json(playlist)
    }

    async getAll(req, res) {
        const playlists = await Playlist.findAll();

        return res.json(playlists)
    }
}


export default new PlaylistController();