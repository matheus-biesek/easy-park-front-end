export interface Vacancy {
    id: number;
    position: number;
    status: EnumStatusVacancy;
}
  
export enum EnumStatusVacancy {
    Available = 'available',
    Busy = 'busy',
    Reserved = 'reserved'
}