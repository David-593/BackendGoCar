import { CreateAutoDto } from '../../dto/dtoAuto/AutoDto';
export declare class AutoService {
    getAllAutos(): Promise<any[]>;
    getAutoById(id: number): Promise<any>;
    addAuto(data: CreateAutoDto): Promise<any>;
    findAutosByUsuario(cedula: string): Promise<any[]>;
    marcarAutoComoVendido(id: number): Promise<any>;
    eliminarAuto(id: number): Promise<any>;
    findAutosDisponibles(): Promise<any[]>;
}
