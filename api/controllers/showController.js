import Shows from '../models/Shows.js'

async function index(req, res) {
    try {
        const shows = await Shows.getAll()
        res.status(200).json(shows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
async function show(req, res) {
    try {
        const show = await Shows.findByName(req.params.name)
        if (!show) {
            return res.status(404).json({ error: `No show found for name ${req.params.name}` })
        }
        res.status(200).json(show)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function addShow(req, res) {
    try {
        const newShow = await Shows.addShow(req.body)
        res.status(201).json(newShow)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function destroy (req, res) {
    try {
        const id = req.params.id
        const deletedShow = await Shows.delete(id)

        if (!deletedShow) {
            return res.status(404).json({ error: `Show with id ${id} not found` })
        }
        
        res.status(200).json({ message: `Show with id ${id} deleted successfully` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export default {
    index,
    show,
    addShow,
    destroy
}