//datos radiologia
const radiologia = [{
        hora: '11:00',
        especilista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especilista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especilista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especilista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especilista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    },
];

//tabla radiología
var texto = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (let i = 0; i < radiologia.length; i++) {
    texto += `<tr>
<td>${radiologia[i].hora}</td>
<td>${radiologia[i].especilista}</td>
<td>${radiologia[i].paciente}</td>
<td>${radiologia[i].rut}</td>
<td>${radiologia[i].prevision}</td>
</tr>`;

}
document.getElementById("cuerpo-tabla").innerHTML = texto; //Ingreso datos a la tabla

//datos traumatología
const traumatologia = [{
        hora: '8:00',
        especilista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especilista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especilista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especilista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especilista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especilista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especilista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    },

];

//tabla traumatología
var texto =
    "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (let i = 0; i < traumatologia.length; i++) {
    texto += `<tr>
<td>${traumatologia[i].hora}</td>
<td>${traumatologia[i].especilista}</td>
<td>${traumatologia[i].paciente}</td>
<td>${traumatologia[i].rut}</td>
<td>${traumatologia[i].prevision}</td>
</tr>`;
}
document.getElementById("cuerpo-tabla1").innerHTML = texto; //Ingreso datos a la tabla

//datos dental
const dental = [{
        hora: '8:30',
        especilista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especilista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especilista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especilista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especilista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especilista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    },

];

//tabla dental
var texto =
    "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (let i = 0; i < dental.length; i++) {
    texto += `<tr>
<td>${dental[i].hora}</td>
<td>${dental[i].especilista}</td>
<td>${dental[i].paciente}</td>
<td>${dental[i].rut}</td>
<td>${dental[i].prevision}</td>
</tr>`;

    document.getElementById("cuerpo-tabla2").innerHTML = texto; //Ingresa datos a la tabla
}

//primer y ultimo paciente + previsión
const imprimirPrimeroUltimo = (id, tipoCon) => {
    document.querySelector(id).innerHTML = `<p>Primera atención: ${tipoCon[0].paciente} - ${tipoCon[0].prevision} | Última atención: ${tipoCon[tipoCon.length - 1].paciente} - ${tipoCon[tipoCon.length - 1].prevision}</p>`;
};

//muestra primer y ultimo paciente
imprimirPrimeroUltimo("#texto1", radiologia);

imprimirPrimeroUltimo("#texto2", traumatologia);

imprimirPrimeroUltimo("#texto3", dental);