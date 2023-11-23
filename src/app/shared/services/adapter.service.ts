/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
import { Injectable } from '@angular/core';
import {
    Dashboard,
    EndPointDash0,
    EndpointDash2,
} from '@modules/admin/dashboards/models/dashboards.model';
import {
    Cliente,
    EndpointCliente,
    TotalGestiones,
} from '@shared/models/cliente.model';
import { Cobranza, EndpointCobranza } from '@shared/models/cobranza.model';
import { Cuenta, EndpointCuenta } from '@shared/models/cuenta.model';
import {
    EndpointCierre,
    Cierre,
    EndpointRut,
    Rut,
} from '@shared/models/reportes.model';

@Injectable({
    providedIn: 'root',
})
export class AdapterService {
    private tipoGestiones = {
        BITACORA: {
            icono: 'mat_solid:history',
        },
        SMS: {
            icono: 'mat_solid:perm_phone_msg',
        },
        'LLAMADA SALIENTE': {
            icono: 'mat_solid:phone_forwarded',
        },
        PAGOS: {
            icono: 'mat_solid:attach_money',
        },
        'EMAIL ENVIADO': {
            icono: 'mat_solid:mail',
        },
        'EMAIL RECIBIDO': {
            icono: 'mat_solid:move_to_inbox',
        },
        'LLAMADA RECIBIDA': {
            icono: 'mat_solid:phone_callback',
        },
        WHATSAPP: {
            icono: 'mat_solid:chat',
        },
    };

    constructor() {}
    // public createAddaptedDashboard(
    //     dash0: EndPointDash0[],
    //     dash2: EndpointDash2[]
    // ): Dashboard {
    //     const dashboardTwo: {
    //         hora: string;
    //         ejecutivo: string;
    //         idFiscal: string;
    //         razonSocial: string;
    //         tipo: string;
    //         asunto: string;
    //         contenido: string;
    //         fecProxGestion: Date;
    //     }[] = [];

    //     const dashboardOne: {
    //         primero?: {
    //             titulo: string;
    //             icon: string;
    //             datos: {
    //                 clientGest: number;
    //                 clientGestEje: number;
    //                 pagosInf: number;
    //                 mtoPagosInf: number;
    //                 clientGestHora: number;
    //                 tiempGestMin: number;
    //             };
    //         };
    //         segundo?: {
    //             titulo: string;
    //             icon: string;
    //             datos: {
    //                 clientGest: number;
    //                 clientGestEje: number;
    //                 pagosInf: number;
    //                 mtoPagosInf: number;
    //                 clientGestHora: number;
    //                 tiempGestMin: number;
    //             };
    //         };
    //         tercero?: {
    //             titulo: string;
    //             icon: string;
    //             datos: {
    //                 emailEnv: number;
    //                 emailRec: number;
    //                 llamSal: number;
    //                 llamRec: number;
    //                 whatsapp: number;
    //                 bitacora: number;
    //                 pagos: number;
    //             };
    //         };
    //         cuarto?: {
    //             titulo: string;
    //             icon: string;
    //             datos: {
    //                 emailEnv: number;
    //                 emailRec: number;
    //                 llamSal: number;
    //                 llamRec: number;
    //                 whatsapp: number;
    //                 bitacora: number;
    //                 pagos: number;
    //             };
    //         };
    //     }[] = [];
    //     let i = 0;
    //     dash0.forEach((dash) => {
    //         if (dash.titulo.includes('Resumen')) {
    //             console.log(dash);
    //             if (i === 0) {
    //                 dashboardOne.push({
    //                     primero: {
    //                         titulo: dash.titulo,
    //                         icon: dash.icon,
    //                         datos: {
    //                             clientGest: dash.datos['clientes gestionados'],
    //                             clientGestEje:
    //                                 dash.datos[
    //                                     'clientes gestionados (ejecutivo)'
    //                                 ],
    //                             pagosInf: dash.datos['pagos informados'],
    //                             mtoPagosInf:
    //                                 dash.datos['monto pagos informados'],
    //                             clientGestHora:
    //                                 dash.datos['clientes gestionados/hora'],
    //                             tiempGestMin:
    //                                 dash.datos['tiempo gestion minutos'],
    //                         },
    //                     },
    //                 });
    //             } else if (i === 1) {
    //                 dashboardOne.push({
    //                     segundo: {
    //                         titulo: dash.titulo,
    //                         icon: dash.icon,
    //                         datos: {
    //                             clientGest: dash.datos['clientes gestionados'],
    //                             clientGestEje:
    //                                 dash.datos[
    //                                     'clientes gestionados (ejecutivo)'
    //                                 ],
    //                             pagosInf: dash.datos['pagos informados'],
    //                             mtoPagosInf:
    //                                 dash.datos['monto pagos informados'],
    //                             clientGestHora:
    //                                 dash.datos['clientes gestionados/hora'],
    //                             tiempGestMin:
    //                                 dash.datos['tiempo gestion minutos'],
    //                         },
    //                     },
    //                 });
    //             }
    //             console.log(dashboardOne);
    //         } else if (dash.titulo.includes('Gestiones')) {
    //             console.log(dash);
    //             if (i === 0) {
    //                 dashboardOne.push({
    //                     tercero: {
    //                         titulo: dash.titulo,
    //                         icon: dash.icon,
    //                         datos: {
    //                             emailEnv: dash.datos['email enviado'],
    //                             emailRec: dash.datos['email recibido'],
    //                             llamSal: dash.datos['llamada saliente'],
    //                             llamRec: dash.datos['llamada recibida'],
    //                             whatsapp: dash.datos.whatsapp,
    //                             bitacora: dash.datos.bitacora,
    //                             pagos: dash.datos['pagos'],
    //                         },
    //                     },
    //                 });
    //             } else if (i === 1) {
    //                 dashboardOne.push({
    //                     cuarto: {
    //                         titulo: dash.titulo,
    //                         icon: dash.icon,
    //                         datos: {
    //                             emailEnv: dash.datos['email enviado'],
    //                             emailRec: dash.datos['email recibido'],
    //                             llamSal: dash.datos['llamada saliente'],
    //                             llamRec: dash.datos['llamada recibida'],
    //                             whatsapp: dash.datos.whatsapp,
    //                             bitacora: dash.datos.bitacora,
    //                             pagos: dash.datos['pagos'],
    //                         },
    //                     },
    //                 });
    //             }
    //         }
    //         i++;
    //     });

    //     dash2.forEach((dash) => {
    //         dashboardTwo.push({
    //             hora: dash.hora,
    //             ejecutivo: dash.ejecutivo,
    //             idFiscal: dash.gest_id_fiscal_cliente,
    //             razonSocial: dash.cli_razon_social,
    //             tipo: dash.gest_tipo,
    //             asunto: dash.gest_asunto,
    //             contenido: dash.gest_contenido,
    //             fecProxGestion: dash.gest_fec_prox_gestion,
    //         });
    //     });

    // const dashboard: Dashboard = {
    // dasboardOne: {
    //     primero: {
    //         clientGest: dash0['1er objeto']['clientes gestionados'],
    //         clientGestEje:
    //             dash0['1er objeto']['clientes gestionados (ejecutivo)'],
    //         pagosInf: dash0['1er objeto']['pagos informados'],
    //         mtoPagosInf: dash0['1er objeto']['monto pagos informados'],
    //         clientGestHora:
    //             dash0['1er objeto']['clientes gestionados/hora'],
    //         tiempGestMin: dash0['1er objeto']['tiempo gestion minutos'],
    //     },
    //     segundo: {
    //         clientGest: dash0['1er objeto']['clientes gestionados'],
    //         clientGestEje:
    //             dash0['1er objeto']['clientes gestionados (ejecutivo)'],
    //         pagosInf: dash0['1er objeto']['pagos informados'],
    //         mtoPagosInf: dash0['1er objeto']['monto pagos informados'],
    //         clientGestHora:
    //             dash0['1er objeto']['clientes gestionados/hora'],
    //         tiempGestMin: dash0['1er objeto']['tiempo gestion minutos'],
    //     },
    //     tercero: {
    //         emailEnv: dash0['3er objeto']['email enviado'],
    //         emailRec: dash0['3er objeto']['email recibido'],
    //         llamSal: dash0['3er objeto']['llamada saliente'],
    //         llamRec: dash0['3er objeto']['llamada recibida'],
    //         whatsapp: dash0['3er objeto'].whatsapp,
    //         bitacora: dash0['3er objeto'].bitacora,
    //         pagos: dash0['3er objeto']['pagos'],
    //     },
    //     cuarto: {
    //         emailEnv: dash0['4to objeto']['email enviado'],
    //         emailRec: dash0['4to objeto']['email recibido'],
    //         llamSal: dash0['4to objeto']['llamada saliente'],
    //         llamRec: dash0['4to objeto']['llamada recibida'],
    //         whatsapp: dash0['4to objeto'].whatsapp,
    //         bitacora: dash0['4to objeto'].bitacora,
    //         pagos: dash0['4to objeto']['pagos'],
    //     },
    // },
    //         dashboardOne: dashboardOne,
    //         dashboardTwo: dashboardTwo,
    //     };
    //     return dashboard;
    // }

    public createAddaptedClient(client: EndpointCliente): Cliente {
        const totalGestion: TotalGestiones[] = [];
        if (client.gestiones.length > 0) {
            client.gestiones.forEach((gestion) => {
                totalGestion.push({
                    icono: this.tipoGestiones[gestion.gest_tipo].icono,
                    tipo: gestion.gest_tipo,
                    total: +gestion.total,
                });
            });
        }

        const formattedClient: Cliente = {
            idFiscal: client.cli_id_fiscal,
            razonSocial: client.cli_razon_social,
            comentarios: client.cli_comentarios,
            direccionFiscal: client.cli_direccion_fiscal,
            emailPrefactura: client.prefact_contacto_email,
            contactoPrefactura: client.prefact_contacto_nombre,
            giroPrefactura: client.prefact_giro,
            zona: client.cli_zona,
            ciudad: client.cli_ciudad,
            pais: client.cli_pais,
            contacto: client.cli_contacto,
            telefonos: client.cli_tlf_contacto,
            correos: client.cli_email_contacto,
            deudaVigente: client.cli_deuda_vigente,
            deudaVencida: client.cli_deuda_vencida,
            deudaTotal: client.cli_deuda_total,
            fecUltGestion: client.cli_fec_ult_gestion,
            fecProxGestion: client.cli_fec_prox_gestion,
            usrAsignado: client.cli_usr_asignado,
            whatsappTlf: client.cli_whatsapp_tlf,
            estado: !client.cli_estado ? 'SIN GESTION' : client.cli_estado,
            emailTmp1:
                client.cli_email_tmp1 == null
                    ? {
                          contenido: null,
                          asunto: null,
                      }
                    : {
                          contenido: client.cli_email_tmp1.contenido,
                          asunto: client.cli_email_tmp1.asunto,
                      },
            emailTmp2: client.cli_email_tmp2,
            swMasivo: client.cli_sw_masivo === '1' ? true : false,
            motivoMasivoOff: client.cli_motivo_masivo_off,
            montoRna: client.cli_monto_rna,
            gestiones: totalGestion,
            totales: {
                deudaTotal: +client.totales.deuda_total,
                deudaVencida: +client.totales.deuda_vencida,
                deudaVigente: +client.totales.deuda_vigente,
            },
            cuentas: this.createAddaptedCxc(client.cuentas),
        };
        return formattedClient;
    }
    public createAddaptedClients(client: EndpointCliente[]): Cliente[] {
        const clientes: Cliente[] = [];

        client.forEach((client) => {
            clientes.push({
                idFiscal: client.cli_id_fiscal,
                razonSocial: client.cli_razon_social,
                comentarios: client.cli_comentarios,
                direccionFiscal: client.cli_direccion_fiscal,
                zona: client.cli_zona,
                ciudad: client.cli_ciudad,
                emailPrefactura: client.prefact_contacto_email,
                contactoPrefactura: client.prefact_contacto_nombre,
                giroPrefactura: client.prefact_giro,
                pais: client.cli_pais,
                contacto: client.cli_contacto,
                telefonos: client.cli_tlf_contacto,
                correos: client.cli_email_contacto,
                deudaVigente: client.cli_deuda_vigente,
                deudaVencida: client.cli_deuda_vencida,
                deudaTotal: client.cli_deuda_total,
                fecUltGestion: client.cli_fec_ult_gestion,
                fecProxGestion: client.cli_fec_prox_gestion,
                usrAsignado: client.cli_usr_asignado,
                whatsappTlf: client.cli_whatsapp_tlf,
                estado: !client.cli_estado ? 'SIN GESTION' : client.cli_estado,
                emailTmp1:
                    client.cli_email_tmp1 == null
                        ? {
                              contenido: null,
                              asunto: null,
                          }
                        : {
                              contenido: client.cli_email_tmp1.contenido,
                              asunto: client.cli_email_tmp1.asunto,
                          },
                emailTmp2: client.cli_email_tmp2,
                swMasivo: client.cli_sw_masivo === '1' ? true : false,
                motivoMasivoOff: client.cli_motivo_masivo_off,
                montoRna: client.cli_monto_rna,
                cantCxc: client.cant_cxc,
                ejecutivo: client.ejecutivo,
            });
        });
        return clientes;
    }
    public createAddaptedCxc(cxc: {
        gestionables: EndpointCuenta[];
        pagadas: EndpointCuenta[];
        abonadas: EndpointCuenta[];
        anuladas: EndpointCuenta[];
    }): {
        gestionables: Cuenta[];
        pagadas: Cuenta[];
        abonadas: Cuenta[];
        anuladas: Cuenta[];
    } {
        const gestionables: Cuenta[] = [];
        const pagadas: Cuenta[] = [];
        const abonadas: Cuenta[] = [];
        const anuladas: Cuenta[] = [];

        cxc.gestionables.forEach((elemento) => {
            gestionables.push({
                clave: elemento.clave,
                idFiscalCliente: elemento.id_fiscal_cliente,
                docTipo: elemento.doc_tipo,
                docNro: elemento.doc_nro,
                fecEmis: elemento.fec_emis,
                fecVenc: elemento.fec_venc,
                fecCarga: elemento.fec_carga,
                fecDevengo: elemento.fec_devengo,
                montoOriginal: Number(elemento.monto_original),
                saldoActual: Number(elemento.saldo_actual),
                tramoDias: elemento.tramo_dias,
                tramoMonto: elemento.tramo_monto,
                estado: elemento.estado_doc,
                empresa: elemento.empresa,
                concepto: elemento.concepto,
                diasAntiguedad: elemento.dias_antiguedad,
                ordenCompra: elemento.orden_compra,
                abonoAnterior: +elemento.abono_anterior,
                abonoMes: +elemento.abono_mes_actual,
                montoAbono: +elemento.monto_pago,
                fecPago: elemento.fec_pago,

                dsctoProcentaje: 0,
                montoRestante: +elemento.saldo_actual,
                montoPendiente: +elemento.saldo_actual,
                montoPago: 0,
                montoDscto: 0,
                comprobante: '',
                comentarioIndividual: '',
            });
        });
        cxc.pagadas.forEach((elemento) => {
            pagadas.push({
                clave: elemento.clave,
                idFiscalCliente: elemento.id_fiscal_cliente,
                docTipo: elemento.doc_tipo,
                docNro: elemento.doc_nro,
                fecEmis: elemento.fec_emis,
                fecVenc: elemento.fec_venc,
                fecCarga: elemento.fec_carga,
                fecDevengo: elemento.fec_devengo,
                montoOriginal: +elemento.monto_original,
                saldoActual: +elemento.saldo_actual,
                tramoDias: elemento.tramo_dias,
                tramoMonto: elemento.tramo_monto,
                estado: elemento.estado_doc,
                empresa: elemento.empresa,
                concepto: elemento.concepto,
                diasAntiguedad: elemento.dias_antiguedad,
                ordenCompra: elemento.orden_compra,
                abonoAnterior: +elemento.abono_anterior,
                abonoMes: +elemento.abono_mes_actual,
                montoAbono: +elemento.monto_pago,
                fecPago: elemento.fec_pago,

                dsctoProcentaje: 0,
                montoRestante: +elemento.saldo_actual,
                montoPendiente: +elemento.saldo_actual,
                montoPago: 0,
                montoDscto: 0,
                comprobante: '',
                comentarioIndividual: '',
            });
        });
        cxc.abonadas.forEach((elemento) => {
            abonadas.push({
                clave: elemento.clave,
                idFiscalCliente: elemento.id_fiscal_cliente,
                docTipo: elemento.doc_tipo,
                docNro: elemento.doc_nro,
                fecEmis: elemento.fec_emis,
                fecVenc: elemento.fec_venc,
                fecCarga: elemento.fec_carga,
                fecDevengo: elemento.fec_devengo,
                montoOriginal: +elemento.monto_original,
                saldoActual: +elemento.saldo_actual,
                tramoDias: elemento.tramo_dias,
                tramoMonto: elemento.tramo_monto,
                estado: elemento.estado_doc,
                empresa: elemento.empresa,
                concepto: elemento.concepto,
                diasAntiguedad: elemento.dias_antiguedad,
                ordenCompra: elemento.orden_compra,
                abonoAnterior: +elemento.abono_anterior,
                abonoMes: +elemento.abono_mes_actual,
                montoAbono: +elemento.monto_pago,
                fecPago: elemento.fec_pago,

                dsctoProcentaje: 0,
                montoRestante: +elemento.saldo_actual,
                montoPendiente: +elemento.saldo_actual,
                montoPago: 0,
                montoDscto: 0,
                comprobante: '',
                comentarioIndividual: '',
            });
        });
        cxc.anuladas.forEach((elemento) => {
            anuladas.push({
                clave: elemento.clave,
                idFiscalCliente: elemento.id_fiscal_cliente,
                docTipo: elemento.doc_tipo,
                docNro: elemento.doc_nro,
                fecEmis: elemento.fec_emis,
                fecVenc: elemento.fec_venc,
                fecCarga: elemento.fec_carga,
                fecDevengo: elemento.fec_devengo,
                montoOriginal: +elemento.monto_original,
                saldoActual: +elemento.saldo_actual,
                tramoDias: elemento.tramo_dias,
                tramoMonto: elemento.tramo_monto,
                estado: elemento.estado_doc,
                empresa: elemento.empresa,
                concepto: elemento.concepto,
                diasAntiguedad: elemento.dias_antiguedad,
                ordenCompra: elemento.orden_compra,
                abonoAnterior: +elemento.abono_anterior,
                abonoMes: +elemento.abono_mes_actual,
                montoAbono: +elemento.monto_pago,
                fecPago: elemento.fec_pago,

                dsctoProcentaje: 0,
                montoRestante: +elemento.saldo_actual,
                montoPendiente: +elemento.saldo_actual,
                montoPago: 0,
                montoDscto: 0,
                comprobante: '',
                comentarioIndividual: '',
            });
        });

        return { gestionables, pagadas, abonadas, anuladas };
    }
    public createAddaptedRepCierre(cierre: EndpointCierre[]): Cierre[] {
        const repCierre: Cierre[] = [];
        cierre.forEach((reporte) => {
            repCierre.push({
                fecPagoSf: reporte.fec_pago_sf,
                fecPago: reporte.fec_pago,
                idFiscalCliente: reporte.id_fiscal_cliente,
                razonSocial: reporte.razon_social,
                clave: reporte.clave,
                montoOriginal: reporte.monto_original,
                monto: reporte.monto,
                condicion: reporte.condicion,
                diasAntiguedad: reporte.dias_antiguedad,
                empresa: reporte.empresa,
                clase: reporte.clase,
                tramoDias: reporte.tramo_dias,
                comision: reporte.comision,
                tramoMonto: reporte.tramo_monto,
                tipo: reporte.doc_tipo,
                nro: reporte.doc_nro,
                montoComision: reporte.monto_comision,
                montoOriginalSf: reporte.monto_original_sf,
                nroSf: reporte.doc_nro_sf,
            });
        });
        return repCierre;
    }
    public createAddaptedRepRut(rut: EndpointRut[]): Rut[] {
        const ruts: Rut[] = [];
        rut.forEach((rut) => {
            ruts.push({
                idFiscal: rut.id_fiscal_cliente,
                razonSocial: rut.razon_social,
                cxcVencidas: rut.cxc_vencidas,
                cxcVigentes: rut.cxc_vigentes,
                cxcPagadas: rut.cxc_pagadas,
                totalVencido: rut.total_vencido,
                totalVigente: rut.total_vigente,
                totalPagado: rut.total_pagado,
                bitacora: !rut.bitacora ? 0 : rut.bitacora,
                acuBitacora: rut['acu bitacora'],
                emailEnviado: !rut['email enviado'] ? 0 : rut['email enviado'],
                acuEmailEnviado: rut['acu email enviado'],
                emailRecibido: !rut['email recibido']
                    ? 0
                    : rut['email recibido'],
                acuEmailRecibido: rut['acu email recibido'],
                llamadaSaliente: !rut['llamada saliente']
                    ? 0
                    : rut['llamada saliente'],
                acuLlamadaSaliente: rut['acu llamada saliente'],
                llamadaRecibida: !rut['llamada recibida']
                    ? 0
                    : rut['llamada recibida'],
                acuLlamadaRecibida: rut['acu llamada recibida'],
                pagos: !rut.pagos ? 0 : rut.pagos,
                acuPagos: rut['acu pagos'],
                whatsapp: !rut.whatsapp ? 0 : rut.whatsapp,
                acuWhatsapp: rut['acu whatsapp'],
                total: rut.total,
            });
        });
        return ruts;
    }
    public createAddaptedCobranza(cobro: EndpointCobranza[]): Cobranza[] {
        const cobranza: Cobranza[] = [];
        cobro.forEach((cob) => {
            cobranza.push({
                fecPagoSf: cob.fec_pago_sf,
                fecPago: cob.fec_pago,
                idFiscal: cob.id_fiscal_cliente,
                razonSocial: cob.razon_social,
                clave: cob.clave,
                montoOriginal: +cob.monto_original,
                monto: cob.monto,
                condicion: cob.condicion,
                diasAntiguedad: cob.dias_antiguedad,
                empresa: cob.empresa,
                clase: cob.clase,
                tramoDias: cob.tramo_dias,
                tramoMonto: cob.tramo_monto,
                docTipo: cob.doc_tipo,
                docNro: cob.doc_nro,
            });
        });
        return cobranza;
    }
}
