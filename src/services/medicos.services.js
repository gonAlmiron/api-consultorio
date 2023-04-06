import MedicosRepository from "../persistence/repository/medicos.repository";

const medicosRepository = new MedicosRepository

export const saveMedico = async (medico) => {
    const medic = await medicosRepository.save(medico)
    return medic;
};

export const getAllMedicos = async() => {

    const medicos = await medicosRepository.getAll();
    return medicos;
};

export const getMedico = async(id) => {
    const medico = await medicosRepository.getMedico(id)
    return medico;
}

export const deleteMedico = async(id) => {
    const medicoDelete = await medicosRepository.deleteMedico(id)
    return medicoDelete
}

export const updateMedico = async(id, medico) => {
    const medicoUpdate = await medicosRepository.updateMedico(id, medico)
    return medicoUpdate
}
