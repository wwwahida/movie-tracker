import db from '../database/connect.js'

class Shows {
    constructor({ id, name, genres, rating, summary, image_url, premiered }) {
        this.id = id
        this.name = name
        this.rating = rating
        this.image_url = image_url
        this.summary = summary
        this.genres = genres
        this.premiered = premiered
    }

    static async getAll() {
        const response = await db.query('SELECT * FROM shows;')
        return response.rows.map(row => new Shows(row))
    }

    static async findByName(name) {
        const response = await db.query('SELECT * FROM shows WHERE LOWER(name) LIKE LOWER($1);', [`%${name}%`])
        if (response.rowCount === 0) {
            return null
        }
        return response.rows.map(row => new Shows(row))
    }
    
    static async addShow(data) {
        const { name, genres, rating, summary, image_url, premiered } = data
        const response = await db.query(
            'INSERT INTO shows (name, genres, rating, summary, image_url, premiered) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',
            [name, genres, rating, summary, image_url, premiered]
        )
        return new Shows(response.rows[0])
    }

    static async delete(id) {
        const response = await db.query('DELETE FROM shows WHERE id = $1;', [id])
        if (response.rowCount === 0) {
            return null
        }
        return { message: `Show with id ${id} deleted successfully` }
    }
}

export default Shows