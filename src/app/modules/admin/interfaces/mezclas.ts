/* eslint-disable @typescript-eslint/naming-convention */
export interface MezclasResponse {
    mezclas: Mezcla[];
}

export interface Mezcla {
    mzc_codigo: string;
    mzc_nombre: string;
    mzc_resist: number;
    mzc_cement: number;
    mzc_agua: number;
    mzc_arena: number;
    mzc_pie_pi: number;
    mzc_can_ro: number;
    cd_arena: number;
    cd_piedra: number;
    mzc_asenta: number;
    mzc_fracti: number;
    mzc_precio: number;
    mzc_act: number;
    mzc_act_pre: number;
}
