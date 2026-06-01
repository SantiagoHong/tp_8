import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class ProvinceRepository {
	getAllAsync = async () => {
		let returnArray = null;
		const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `SELECT * FROM provincias`;
			const result = await client.query(sql);
			await client.end();
			returnArray = result.rows;
		} catch (error) {
			console.log(error);
		}
		return returnArray;
	}

	getByIdAsync = async (id) => {
        let returnObject = null;
        const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `SELECT * FROM provincias WHERE id = ${id}`;
			const result = await client.query(sql);
			await client.end();
			returnObject = result.rows[0];
		} catch (error) {
			console.log(error);
		}
		return returnObject;
    }

	createAsync = async (entity) => { 
        let error = null;
        const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `INSERT INTO provincias (name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5)`;
			const values = [entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order];
            const result = await client.query(sql, values);
            await client.end();
		} catch (error) {
			console.log(error);
			error = new Error('Error al crear la provincia.');
		}
		return error;
     }

	updateAsync = async (entity) => {
        let error = null;
        const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `UPDATE provincias SET name = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5 WHERE id = $6`;
			const values = [entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order, entity.id];
            const result = await client.query(sql, values);
            await client.end();
		} catch (error) {
			console.log(error);
			error = new Error('Error al actualizar la provincia.');
		}
		return error;
    }
	deleteByIdAsync = async (id) => {
        let error = null;
        const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `DELETE FROM provincias WHERE id = $1`;
			const values = [id];
            const result = await client.query(sql, values);
            await client.end();
		} catch (error) {
			console.log(error);
			error = new Error('Error al eliminar la provincia.');
		}
		return error;
    }
}

