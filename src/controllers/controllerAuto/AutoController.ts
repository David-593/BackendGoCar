import { Request, Response } from 'express';
import { AutoService } from '../../service/serviceAuto/AutoService';
import { CreateAutoDto } from '../../dto/dtoAuto/AutoDto';

const autoService = new AutoService();

export class AutoController {
	// Agregar auto
	async addAuto(req: Request, res: Response) {
		try {
			const data: CreateAutoDto = req.body;
			// Si se subió imagen, guardar la ruta
					const file = (req as any).file;
					if (file) {
						data.imagenUrl = file.path;
					}
			const auto = await autoService.addAuto(data);
			res.status(201).json({ message: 'Auto agregado', auto });
		} catch (error: any) {
			res.status(400).json({ message: error.message });
		}
	}

	// Buscar autos por usuario
	async findAutosByUsuario(req: Request, res: Response) {
		try {
			const { cedula } = req.params;
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
