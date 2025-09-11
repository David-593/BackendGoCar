	// ...existing code...
import { Request, Response } from 'express';
import { AutoService } from '../../service/serviceAuto/AutoService';
import { CreateAutoDto } from '../../dto/dtoAuto/AutoDto';

const autoService = new AutoService();

export class AutoController {
	// Obtener todos los autos
	async getAllAutos(req: Request, res: Response) {
		try {
			const autos = await autoService.getAllAutos();
			res.json(autos);
		} catch (error: any) {
			res.status(400).json({ message: error.message });
		}
	}
	// Obtener auto por id
	async getAutoById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const auto = await autoService.getAutoById(Number(id));
			if (!auto) {
				return res.status(404).json({ message: 'Auto no encontrado' });
			}
			res.json(auto);
		} catch (error: any) {
			res.status(400).json({ message: error.message });
		}
	}
	// Agregar auto
	async addAuto(req: Request, res: Response) {
		try {
			const data: CreateAutoDto = req.body;
			// Si se subió imagen, guardar la ruta
					const file = (req as any).file;
											if (file) {
												// Solo guardar el nombre del archivo, sin prefijo ni ruta
												const fileName = file.filename || file.path.split(/[/\\]/).pop();
												data.imagenUrl = fileName;
											}
			const auto = await autoService.addAuto(data);
			res.status(201).json({ message: 'Auto agregado', auto });
		} catch (error: any) {
			res.status(400).json({ message: error.message });
		}
	}

		// Buscar autos por usuario (cedula extraída del token)
		async findAutosByUsuario(req: Request, res: Response) {
			try {
				// Suponiendo que el middleware de autenticación agrega el usuario al request
				const cedula = (req as any).user?.cedula;
				if (!cedula) {
					return res.status(401).json({ message: 'No se encontró la cédula en el token' });
				}
				const autos = await autoService.findAutosByUsuario(cedula);
				res.json(autos);
			} catch (error: any) {
				res.status(400).json({ message: error.message });
			}
		}

	// Marcar auto como vendido
	async marcarAutoComoVendido(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const auto = await autoService.marcarAutoComoVendido(Number(id));
			res.json({ message: 'Auto marcado como vendido', auto });
		} catch (error: any) {
			res.status(400).json({ message: error.message });
		}
	}

	// Buscar autos disponibles (para la tienda)
	async findAutosDisponibles(req: Request, res: Response) {
		try {
			const autos = await autoService.findAutosDisponibles();
			res.json(autos);
		} catch (error: any) {
			res.status(400).json({ message: error.message });
		}
	}
}
