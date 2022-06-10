import * as Yup from 'yup';
import Song from "../models/Song";

class SongController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            artist: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const { id, name, artist } = await Song.create(req.body);

        return res.json({ id, name, artist })
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string().required(),
            artist: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validação inválida." })
        }

        const song = await Song.findByPk(req.params.id);

        if(song == null) {
            return res.status(400).json({ error: "Validação ID músicas inválido." })
        }

        const { id, name, artist } = await song.update(req.body)

        return res.json({ id, name, artist })
    }

    async getById(req, res) {
        const song = await Song.findByPk(req.params.id);

        if(song == null) {
            return res.status(400).json({ error: "Validação ID músicas inválido." })
        }

        return res.json(song)
    }

    async getAll(req, res) {
        await Song.findAll().then(songs => res.json(songs)).catch(error => console.log(error))
    }
}


export default new SongController();