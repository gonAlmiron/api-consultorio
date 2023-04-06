import { asDto } from "../DTO/medicos.dto";
import { getDao} from "../DAOS/medicos.factory";

export default class MedicosRepository {
    constructor() {
        this.dao = getDao();
    }
    async save (medic) {
        const medico = await this.dao.save(medic);
        return medico 
    }

    async getAll() {  
        const medicos = await this.dao.getAll();
        const medicsDTO = asDto(medicos)
        return medicsDTO;
    }

    async getMedico(id) {
        const medico = await this.dao.getById(id);
        return medico
    }
    
    async deleteMedico(id) {
        const medico = await this.dao.deleteById(id)
        return medico
    }

    async updateMedico(id, medico) {
        const medicoUpdate = await this.dao.updateById(id, medico)
        return medicoUpdate
    }
}

