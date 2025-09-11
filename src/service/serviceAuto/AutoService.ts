	import { PrismaClient } from '../../generated/prisma/client';
	import { CreateAutoDto } from '../../dto/dtoAuto/AutoDto';

	const prisma = new PrismaClient();

	export class AutoService {
	// Obtener todos los autos
	async getAllAutos(): Promise<any[]> {
		return await prisma.auto.findMany();
	}
	// Obtener auto por id
	async getAutoById(id: number): Promise<any> {
		return await prisma.auto.findUnique({
			where: { id }
		});
	}
	// Agregar un auto
			async addAuto(data: CreateAutoDto): Promise<any> {
				// Si no se envía estado, usar DISPONIBLE por defecto
					const autoData = {
						marca: data.marca,
						modelo: data.modelo,
									year: Number(data.year),
						precio: Number(data.precio),
						kilometraje: Number(data.kilometraje),
						color: data.color,
						descripcion: data.descripcion,
						imagenUrl: data.imagenUrl,
						contacto: data.contacto,
						estado: (data.estado as 'DISPONIBLE' | 'VENDIDO') || 'DISPONIBLE',
						vendedor: { connect: { cedula: data.vendedorCedula } }
					};
					return await prisma.auto.create({ data: autoData });
			}

	// Buscar autos por usuario (cedula)
	async findAutosByUsuario(cedula: string): Promise<any[]> {
		return await prisma.auto.findMany({
			where: {
				vendedorCedula: cedula,
				estado: 'DISPONIBLE',
			},
		});
	}

	// Marcar auto como vendido (no se elimina físicamente)
	async marcarAutoComoVendido(id: number): Promise<any> {
		return await prisma.auto.update({
			where: { id },
			data: { estado: 'VENDIDO' },
		});
	}

	// Eliminar auto (opcional, si quieres eliminar físicamente)
	async eliminarAuto(id: number): Promise<any> {
		return await prisma.auto.delete({
			where: { id },
		});
	}

	// Buscar autos disponibles (para mostrar en la tienda)
	async findAutosDisponibles(): Promise<any[]> {
		return await prisma.auto.findMany({
			where: { estado: 'DISPONIBLE' },
		});
	}
}
