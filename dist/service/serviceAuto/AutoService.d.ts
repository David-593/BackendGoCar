import { CreateAutoDto } from '../../dto/dtoAuto/AutoDto';
export declare class AutoService {
    addAuto(data: CreateAutoDto): Promise<any>;
    findAutosByUsuario(cedula: string): Promise<any[]>;
    marcarAutoComoVendido(id: number): Promise<any>;
    eliminarAuto(id: number): Promise<any>;
    findAutosDisponibles(): Promise<any[]>;
}
