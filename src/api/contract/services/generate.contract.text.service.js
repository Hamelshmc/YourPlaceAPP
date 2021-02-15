'use strict';

const { format } = require('date-fns');

const pag1 = (booking, tenant, landlord) => `
                                                        CONTRATO DE ARRENDAMIENTO DE TEMPORADA

        En ${booking.city}, a ${new Date().getDate()} de ${new Date().getMonth()} de ${new Date().getFullYear()}

                                                                                        REUNIDOS

        De una parte, D. ${tenant.fullname}, mayor de edad, con DNI ${tenant.dni}, y con domicilio en la ciudad de ${tenant.city}
        C/ ${tenant.street}.
        De otra parte, D. ${landlord.fullname}, mayor de edad, con DNI ${landlord.dni}, y con domicilio a efecto de notificaciones
        en la ciudad de ${landlord.city}, C/ ${landlord.street}.

                                                                                        INTERVIENEN

        D. ${tenant.fullname}, en su propio nombre y derecho, como parte arrendadora.
        D. ${landlord.fullname}, igualmente en su propio nombre y derecho, como parte arrendataria.

        Reconociéndose ambas partes capacidad legal suficiente para el otorgamiento del presente contrato de arrendamiento.

                                                                                        EXPONEN

        PRIMERO.- Que la parte arrendadora es propietaria en pleno dominio de la vivienda ubicada en la C/ ${booking.street}.
        de la ciudad de ${booking.city}, de ${booking.area} metros cuadrados de superficie divididos en ${booking.rooms} habitaciones, ${booking.bathrooms} cuartos de baño y cocina,
        cuya superficie y composición así como demás características son perfectamente conocidas por los intervinientes.

        SEGUNDO.- Que interesando a la parte arrendataria tomar en arrendamiento la vivienda descrita en el expositivo primero
        (en adelante, “el inmueble”) y, estando la parte arrendadora interesada en arrendárselo, ésta lo ofrece y aquella lo
        acepta, y ambas partes convienen en celebrar el presente contrato de arrendamiento de uso distinto a vivienda regido
        por las siguientes.`;

const pag2 = (booking, landlord) => `
                                                                                            ESTIPULACIONES
        PRIMERA.- OBJETO Y DESTINO.
        Por medio del presente contrato, la parte arrendadora arrienda a la parte arrendataria el inmueble, quien lo acepta en las
        condiciones pactadas en este documento. El inmueble se arrienda como cuerpo cierto, por lo que la posible discrepancia
        entre la superficie real y la descrita en este contrato no afectará en más o en menos a la renta fijada en este documento
        La parte arrendataria se obliga a utilizar el inmueble arrendado como vivienda temporal, durante el plazo de duración
        pactado, por motivo de ALQUILER, no pudiéndose variar dicho uso sin consentimiento escrito de la parte arrendadora.
        El incumplimiento de este precepto será motivo de resolución del contrato. Por tanto, la vivienda objeto de este contrato
        no tendrá en ningún caso la finalidad de vivienda permanente del arrendatario, por lo que el destino del contrato es
        para uso distinto a vivienda.

        SEGUNDA.- ESTADO. El arrendatario declara recibir el inmueble en un buen estado de uso y conservación y se compromete
        a devolverlo en el mismo estado a la conclusión de la relación contractual.

        TERCERA.- DURACIÓN. El presente contrato se acuerda por la temporada comprendida entre el ${format(booking.start_date, 'dd/MM/yyyy')} y el ${format(booking.end_date, 'dd/MM/yyyy')}.
        El arrendatario deberá abonar al arrendador una indemnización igual a 2 meses de renta en caso de que pretenda o ejerza
        unilateralmente la finalización del contrato, independientemente de otras responsabilidades en que incurra por estas acciones.

        CUARTA.- RENTA. El arrendatario abonará al arrendador, en concepto de renta, la cantidad de ${booking.price} euros mensuales,
        dentro de los cinco primeros días de cada mes, mediante ingreso o transferencia bancaria o pago en la plataforma, debiendo
        enviar justificante de la misma dentro de ese mismo plazo al arrendador a la cuenta de correo electrónico
        ${landlord.email}. El incumplimiento de la obligación de pago o notificación del justificante del pago
        en el periodo fijado será motivo de resolución del contrato, dando derecho al arrendador a solicitar el desahucio, siendo por
        cuenta del arrendatario los gastos que estas acciones originen. Se hace entrega en este acto del primer mes de renta,
        sirviendo este documento como la más eficaz carta de pago.

        QUINTA.- CESIÓN Y SUBARRIENDO. Con expresa renuncia a lo dispuesto en el artículo 32 de la LAU., el arrendatario
        se obliga a no subarrendar, en todo o en parte, ni ceder o traspasar el inmueble arrendado sin el consentimiento
        expreso y escrito del arrendador. El incumplimiento de esta cláusula será causa de resolución del contrato.

`;

const pag3 = (booking) => `

        SEXTA.- DERECHO DE ADQUISICIÓN PREFERENTE. Con expresa renuncia de las partes a lo dispuesto en el artículo 31
        de la LAU., se acuerda que en caso de venta del inmueble arrendado no tendrá el arrendatario derecho de adquisición
        preferente sobre el mismo. El arrendador comunicará al arrendatario con treinta días de antelación a la fecha de
        formalización del contrato de compraventa su intención de vender el inmueble.

        SÉPTIMA.- OBRAS. Las pequeñas reparaciones que exija el desgaste por el uso ordinario del inmueble serán de cargo
        del arrendatario. No podrá realizar la parte arrendataria ningún otro tipo de obra o modificación en el inmueble o
        edificio al que pertenece sin el consentimiento expreso de la parte arrendadora.
        A pesar de no tener la consideración de obra, se prohibe expresamente al arrendatario la realización de agujeros
        o perforaciones en las paredes del inmueble, descontándose de la fianza el importe que sea necesario para que las
        paredes recuperen su estado original en su caso.

        OCTAVA.- GASTOS GENERALES. Los gastos de comunidad serán de cuenta de la parte arrendataria.
        Los gastos por servicios con que cuente el inmueble arrendado que se individualicen mediante aparatos contadores
        (agua, luz, gas, teléfono etc.) serán de cuenta del arrendatario, así como el alta y la baja en los referidos
        suministros si ello fuese necesario. Los gastos comunes extraordinarios y el Impuesto sobre Bienes Inmuebles
        será de cuenta del arrendador.

        NOVENA.- CLAUSULA DE PENALIZACIÓN EXPRESA. La parte arrendataria hará entrega de las llaves del inmueble en la
        fecha de finalización del presente contrato. De realizar la entrega más tarde, el arrendatario abonará al arrendador
        la cantidad de ${booking.price * 0.03} euros por cada día de retraso en la puesta a disposición de las llaves de la vivienda, en
        concepto de cláusula penal, además de todos los gastos que directos e indirectos que dicho retraso generen de cara
        a la recuperación de la vivienda.

        DÉCIMA.- NORMAS DE CONVIVENCIA. La parte arrendataria se someterá durante toda la vigencia del contrato a las normas
        de la comunidad de propietarios, especialmente las relativas a la convivencia. Se prohibe expresamente la estancia de
        cualquier tipo de animal en la vivienda.

        DÉCIMO PRIMERA.- FIANZA. A la firma de este contrato el arrendatario hace entrega al arrendador en concepto de fianza
        de la cantidad de ${booking.deposit} euros en metálico, equivalente a las mensualidades de renta.
        El saldo de la fianza en metálico que deba ser restituido al arrendatario al final del arriendo, devengará el interés
        legal, transcurrido un mes desde la entrega de las llaves por el mismo sin que se hubiere hecho efectiva dicha restitución.

`;

const pag4 = () => `

        DÉCIMO SEGUNDA.- INCUMPLIMIENTO DE OBLIGACIONES. El incumplimiento por cualquiera de las partes de las
        obligaciones resultantes del contrato dará derecho a la parte que hubiere cumplido las suyas a exigir
        el cumplimiento de la obligación o a promover la resolución del contrato de acuerdo con lo dispuesto
        en el artículo 1.124 del Código Civil.
        Además, el arrendador podrá resolver de pleno derecho el contrato por las siguientes causas:
        a) La falta de pago de la renta o, en su caso, de cualquiera de las cantidades cuyo pago haya asumido o
        corresponda al arrendatario.
        b) La falta de pago del importe de la fianza
        c) La realización de daños causados dolosamente en la finca o de obras no consentidas por el arrendador cuando el
        consentimiento de éste sea necesario.
        d) Cuando en el inmueble tengan lugar actividades molestas, insalubres, nocivas, peligrosas o ilícitas.

        DÉCIMO TERCERA.- DOMICILIO A EFECTO DE NOTIFICACIONES. Las partes fijan como domicilio a efectos de
        notificaciones derivadas de la relación contractual el que figura para cada uno de ellos en el encabezamiento
        del contrato. Deberán notificarse mutuamente una parte a la otra cualquier cambio que se produzca en este sentido.

        DÉCIMO CUARTA.- LEGISLACIÓN APLICABLE. La presente relación se regirá por el siguiente orden de prelación: de forma
        imperativa por los títulos I y IV de la Ley 29/1.994, de 24 de Noviembre, de Arrendamientos Urbanos (LAU); por las
        normas del presente contrato y en su defecto por las normas del título III LAU; y supletoriamente por lo dispuesto
        en el Código Civil.

        DÉCIMO QUINTA.- SUMISIÓN. Los contratantes se someten expresamente a los Juzgados y Tribunales de la ciudad en la
        que se encuentra ubicado el inmueble, para todas aquellas cuestiones litigiosas que pudieran derivarse del mismo.

        Y con el carácter expresado en la intervención, firman el presente contrato por duplicado en el lugar y fecha indicados.



                                ARRENDADOR/A                                                                    ARRENDATARIO/A


`;

async function generateContractText(booking, tenant, landlord) {
  const contractText = {
    pag1: pag1(booking, tenant, landlord),
    pag2: pag2(booking, landlord),
    pag3: pag3(booking),
    pag4: pag4(),
  };
  return contractText;
}

module.exports = generateContractText;
