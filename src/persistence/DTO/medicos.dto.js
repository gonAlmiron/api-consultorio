export default class MedicosDTO {
    constructor({name, area, _id, description, category}) {
        this.name = name
        this.area = area
        this.id = _id
        this.description = description
        this.category = category
    }
}

export const asDto = (medics) => {
        if(Array.isArray(medics)) 
            return medics.map(p => new MedicosDTO(p))
        else
            return new MedicosDTO(medics)
        }


