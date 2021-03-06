const schedule = {
  data: [
    {
      periodo: '1', codigo: '1411311', turma: '01', disciplina: 'FUND DE MATEMATICA P/ C.DA COMPUTACAO I', horarios: ['3 10:00-12:00 (CAA405)', '6 08:00-10:00 (CAA405)'], oferta: '65/65'
    },
    {
      periodo: '1', codigo: '1411311', turma: '02', disciplina: 'FUND DE MATEMATICA P/ C.DA COMPUTACAO I', horarios: ['3 10:00-12:00 (CAA406)', '6 08:00-10:00 (CAA406)'], oferta: '65/65'
    },
    {
      periodo: '1', codigo: '1411174', turma: '01', disciplina: 'INTRODUÇÃO A COMPUTAÇÃO', horarios: ['3 08:00-10:00 (RE-08)', '5 10:00-12:00 (RE-08)'], oferta: '45/45'
    },
    {
      periodo: '1', codigo: '1411174', turma: '02', disciplina: 'INTRODUÇÃO A COMPUTAÇÃO', horarios: ['3 08:00-10:00 (CAA401)', '5 10:00-12:00 (CAA401)'], oferta: '60/60'
    },
    {
      periodo: '1', codigo: '1411180', turma: '01', disciplina: 'LABORATÓRIO DE PROGRAMAÇÃO I', horarios: ['2 10:00-12:00 (LCC3a)', '5 08:00-10:00 (LCC3a)'], oferta: '40/40'
    },
    {
      periodo: '1', codigo: '1411180', turma: '02', disciplina: 'LABORATÓRIO DE PROGRAMAÇÃO I', horarios: ['2 10:00-12:00 (LCC3b)', '5 08:00-10:00 (LCC3b)'], oferta: '40/40'
    },
    {
      periodo: '1', codigo: '1411180', turma: '03', disciplina: 'LABORATÓRIO DE PROGRAMAÇÃO I', horarios: ['2 10:00-12:00 (LCC3c)', '5 08:00-10:00 (LCC3c)'], oferta: '40/40'
    },
    {
      periodo: '1', codigo: '1411167', turma: '01', disciplina: 'PROGRAMAÇÃO I', horarios: ['2 08:00-10:00 (CAA405)', '4 10:00-12:00 (CAA405)'], oferta: '40/40'
    },
    {
      periodo: '1', codigo: '1411167', turma: '02', disciplina: 'PROGRAMAÇÃO I', horarios: ['2 08:00-10:00 (CAA406)', '4 10:00-12:00 (CAA406)'], oferta: '40/40'
    },
    {
      periodo: '1', codigo: '1411167', turma: '03', disciplina: 'PROGRAMAÇÃO I', horarios: ['2 08:00-10:00 (RE-08)', '4 10:00-12:00 (RE-08)'], oferta: '40/40'
    },
    {
      periodo: '2', codigo: '1109126', turma: '06', disciplina: 'CALCULO DIFERENCIAL E INTEGRAL I', horarios: ['', '(Bloqueada para matrícula)'], oferta: '1/1'
    },
    {
      periodo: '2', codigo: '1109126', turma: '07', disciplina: 'CALCULO DIFERENCIAL E INTEGRAL I', horarios: ['2 14:00-16:00 (CAA102)', '4 16:00-18:00 (CAA102)'], oferta: '80/80'
    },
    {
      periodo: '2', codigo: '1411312', turma: '01', disciplina: 'FUND DE MATEMATICA P/ C.DA COMPUTACAO II', horarios: ['2 10:00-12:00 (CAA402)', '5 08:00-10:00 (CAA402)'], oferta: '65/65'
    },
    {
      periodo: '2', codigo: '1411312', turma: '02', disciplina: 'FUND DE MATEMATICA P/ C.DA COMPUTACAO II', horarios: ['2 10:00-12:00 (CAA407)', '5 08:00-10:00 (CAA407)'], oferta: '65/65'
    },
    {
      periodo: '2', codigo: '1411181', turma: '01', disciplina: 'LABORATÓRIO DE PROGRAMAÇÃO II', horarios: ['3 08:00-10:00 (LCC3a)', '5 10:00-12:00 (LCC3a)'], oferta: '40/40'
    },
    {
      periodo: '2', codigo: '1411181', turma: '02', disciplina: 'LABORATÓRIO DE PROGRAMAÇÃO II', horarios: ['3 08:00-10:00 (LCC3b)', '5 10:00-12:00 (LCC3b)'], oferta: '40/40'
    },
    {
      periodo: '2', codigo: '1411181', turma: '03', disciplina: 'LABORATÓRIO DE PROGRAMAÇÃO II', horarios: ['3 08:00-10:00 (LCC3c)', '5 10:00-12:00 (LCC3c)'], oferta: '40/40'
    },
    {
      periodo: '2', codigo: '1411168', turma: '01', disciplina: 'PROGRAMAÇÃO II', horarios: ['4 08:00-10:00 (RE-01)', '6 10:00-12:00 (RE-01)'], oferta: '50/50'
    },
    {
      periodo: '2', codigo: '1411168', turma: '02', disciplina: 'PROGRAMAÇÃO II', horarios: ['4 08:00-10:00 (CAA404)', '6 10:00-12:00 (CAA404)'], oferta: '50/50'
    },
    {
      periodo: '3', codigo: '1109049', turma: '04', disciplina: 'ALGEBRA LINEAR I', horarios: ['3 14:00-16:00 (CAA202)', '5 16:00-18:00 (CAA202)'], oferta: '80/80'
    },
    {
      periodo: '3', codigo: '1109131', turma: '04', disciplina: 'CALCULO DIFERENCIAL E INTEGRAL II', horarios: ['2 14:00-16:00 (CAA203)', '4 16:00-18:00 (CAA203)'], oferta: '60/60'
    },
    {
      periodo: '3', codigo: '1411305', turma: '01', disciplina: 'ESTRUTURA DE DADOS', horarios: ['2 10:00-12:00 (CAA403)', '5 08:00-10:00 (CAA403)'], oferta: '55/55'
    },
    {
      periodo: '3', codigo: '1411305', turma: '02', disciplina: 'ESTRUTURA DE DADOS', horarios: ['3 08:00-10:00 (CAA402)', '5 10:00-12:00 (CAA402)'], oferta: '55/55'
    },
    {
      periodo: '3', codigo: '1411306', turma: '01', disciplina: 'LABORATORIO DE ESTRUTURA DE DADOS', horarios: ['2 16:00-18:00 (LCC3a)', '5 14:00-16:00 (LCC3a)'], oferta: '60/60'
    },
    {
      periodo: '3', codigo: '1411306', turma: '02', disciplina: 'LABORATORIO DE ESTRUTURA DE DADOS', horarios: ['2 16:00-18:00 (LCC3b)', '5 14:00-16:00 (LCC3b)'], oferta: '55/55'
    },
    {
      periodo: '3', codigo: '1411307', turma: '01', disciplina: 'LOGICA PARA COMPUTACAO', horarios: ['4 08:00-10:00 (CAA405)', '6 10:00-12:00 (CAA405)'], oferta: '60/60'
    },
    {
      periodo: '3', codigo: '1411307', turma: '02', disciplina: 'LOGICA PARA COMPUTACAO', horarios: ['4 08:00-10:00 (CD105)', '6 10:00-12:00 (CD105)'], oferta: '40/40'
    },
    {
      periodo: '3', codigo: '1411304', turma: '02', disciplina: 'TEORIA DOS GRAFOS', horarios: ['3 10:00-12:00 (CAA101)', '6 08:00-10:00 (CAA101)'], oferta: '80/80'
    },
    {
      periodo: '4', codigo: '1411193', turma: '01', disciplina: 'BANCO DE DADOS I', horarios: ['3 14:00-16:00 (RE-08)', '5 16:00-18:00 (RE-08)'], oferta: '40/40'
    },
    {
      periodo: '4', codigo: '1411193', turma: '02', disciplina: 'BANCO DE DADOS I', horarios: ['2 08:00-10:00 (RE-04)', '4 10:00-12:00 (RE-04)'], oferta: '40/40'
    },
    {
      periodo: '4', codigo: '1114129', turma: '02', disciplina: 'INTRODUÇÃO À PROBABILIDADE', horarios: ['2 10:00-12:00 (CAA305)', '5 08:00-10:00 (CAA305)'], oferta: '70/70'
    },
    {
      periodo: '4', codigo: '1411182', turma: '01', disciplina: 'LAB.DE ORG.E ARQUITETURA DE COMPUTADORES', horarios: ['4 08:00-10:00 (LCC3a)', '6 10:00-12:00 (LCC3a)'], oferta: '40/40'
    },
    {
      periodo: '4', codigo: '1411182', turma: '02', disciplina: 'LAB.DE ORG.E ARQUITETURA DE COMPUTADORES', horarios: ['3 14:00-16:00 (LCC3a)', '5 16:00-18:00 (LCC3a)'], oferta: '40/40'
    },
    {
      periodo: '4', codigo: '1411182', turma: '03', disciplina: 'LAB.DE ORG.E ARQUITETURA DE COMPUTADORES', horarios: ['4 14:00-16:00 (LCC3a)', '6 16:00-18:00 (LCC3a)'], oferta: '40/40'
    },
    {
      periodo: '4', codigo: '1411310', turma: '01', disciplina: 'ORGANIZACAO E ARQUIT. DE COMPUTADORES', horarios: ['3 10:00-12:00 (CAA404)', '6 08:00-10:00 (CAA404)'], oferta: '65/65'
    },
    {
      periodo: '4', codigo: '1411309', turma: '01', disciplina: 'PARADIGMAS DE LINGUAGEM DE PROGRAMACAO', horarios: ['3 16:00-18:00 (CAA306)', '6 14:00-16:00 (CAA306)'], oferta: '50/50'
    },
    {
      periodo: '4', codigo: '1411309', turma: '02', disciplina: 'PARADIGMAS DE LINGUAGEM DE PROGRAMACAO', horarios: ['3 16:00-18:00 (CD107)', '6 14:00-16:00 (CD107)'], oferta: '30/30'
    },
    {
      periodo: '4', codigo: '1411308', turma: '01', disciplina: 'PROJETO DE SOFTWARE', horarios: ['2 14:00-16:00 (LCC3a)', '4 16:00-18:00 (LCC3a)'], oferta: '50/50'
    },
    {
      periodo: '4', codigo: '1411308', turma: '02', disciplina: 'PROJETO DE SOFTWARE', horarios: ['2 14:00-16:00 (LCC3b)', '4 16:00-18:00 (LCC3b)'], oferta: '50/50'
    },
    {
      periodo: '5', codigo: '1411313', turma: '01', disciplina: 'ANALISE DE SISTEMAS', horarios: ['3 10:00-12:00 (RE-08)', '6 08:00-10:00 (RE-08)'], oferta: '40/40'
    },
    {
      periodo: '5', codigo: '1411313', turma: '02', disciplina: 'ANALISE DE SISTEMAS', horarios: ['3 10:00-12:00 (CD105)', '6 08:00-10:00 (CD105)'], oferta: '40/40'
    },
    {
      periodo: '5', codigo: '1411314', turma: '01', disciplina: 'ENGENHARIA DE SOFTWARE', horarios: ['2 14:00-16:00 (CAA406)', '4 16:00-18:00 (CAA406)'], oferta: '70/70'
    },
    {
      periodo: '5', codigo: '1114222', turma: '01', disciplina: 'ESTATISTICA APLICADA', horarios: ['2 10:00-12:00 (CAA104)', '5 08:00-10:00 (CAA104)'], oferta: '80/80'
    },
    {
      periodo: '5', codigo: '1411190', turma: '01', disciplina: 'REDES DE COMPUTADORES', horarios: ['3 08:00-10:00 (CAA405)', '5 10:00-12:00 (CAA405)'], oferta: '50/50'
    },
    {
      periodo: '5', codigo: '1411190', turma: '02', disciplina: 'REDES DE COMPUTADORES', horarios: ['2 16:00-18:00 (CD107)', '5 14:00-16:00 (CD107)'], oferta: '35/35'
    },
    {
      periodo: '5', codigo: '1411192', turma: '01', disciplina: 'SISTEMAS OPERACIONAIS', horarios: ['2 08:00-10:00 (CAA402)', '4 10:00-12:00 (CAA402)'], oferta: '70/70'
    },
    {
      periodo: '5', codigo: '1411192', turma: '02', disciplina: 'SISTEMAS OPERACIONAIS', horarios: ['2 14:00-16:00 (RE-08)', '4 16:00-18:00 (RE-08)'], oferta: '30/30'
    },
    {
      periodo: '5', codigo: '1411171', turma: '01', disciplina: 'TEORIA DA COMPUTAÇÃO', horarios: ['3 16:00-18:00 (CAA303)', '6 14:00-16:00 (CAA303)'], oferta: '70/70'
    },
    {
      periodo: '6', codigo: '1411320', turma: '01', disciplina: 'ADMINISTRACAO DE SISTEMAS', horarios: ['4 08:00-10:00 (LCC1)', '6 10:00-12:00 (LCC1)'], oferta: '35/35'
    },
    {
      periodo: '6', codigo: '1411321', turma: '01', disciplina: 'ALGORITMOS AVANCADOS I', horarios: ['3 18:00-20:00 (RE-08)', '5 18:00-20:00 (RE-08)'], oferta: '40/40'
    },
    {
      periodo: '6', codigo: '1411325', turma: '01', disciplina: 'ARQUITETURA DE SOFTWARE', horarios: ['3 14:00-16:00 (CAA308)', '5 16:00-18:00 (CAA308)'], oferta: '50/50'
    },
    {
      periodo: '6', codigo: '1411328', turma: '01', disciplina: 'ECONOMIA DE TECNOLOGIA DA INFORMACAO', horarios: ['2 08:00-10:00 (CD105)', '4 10:00-12:00 (CD105)'], oferta: '35/35'
    },
    {
      periodo: '6', codigo: '1411329', turma: '01', disciplina: 'EMPREENDEDORISMO EM SOFTWARE', horarios: ['2 14:00-16:00 (LCC1)', '2 16:00-18:00 (LCC1)'], oferta: '35/35'
    },
    {
      periodo: '6', codigo: '1411316', turma: '01', disciplina: 'INTELIGENCIA ARTIFICIAL', horarios: ['3 10:00-12:00 (CAA401)', '6 08:00-10:00 (CAA401)'], oferta: '60/60'
    },
    {
      periodo: '6', codigo: '1305218', turma: '03', disciplina: 'METODOLOGIA CIENTÍFICA', horarios: ['2 08:00-10:00 (S/S)', '4 10:00-12:00 (S/S)'], oferta: '55/55'
    },
    {
      periodo: '6', codigo: '1411333', turma: '01', disciplina: 'PRATICA DE ENSINO DE COMPUTACAO I', horarios: ['2 22:00-23:55 (CD105)', ''], oferta: '55/55'
    },
    {
      periodo: '6', codigo: '1411334', turma: '01', disciplina: 'PRATICA DE ENSINO DE COMPUTACAO II', horarios: ['6 20:00-22:00 (CD105)', ''], oferta: '23/23'
    },
    {
      periodo: '6', codigo: '1411335', turma: '01', disciplina: 'PRINCIPIOS DE DESENVOLVIMENTO WEB', horarios: ['3 16:00-18:00 (LCC3a)', '6 14:00-16:00 (LCC3a)'], oferta: '45/45'
    },
    {
      periodo: '6', codigo: '1411315', turma: '01', disciplina: 'PROGRAMACAO CONCORRENTE', horarios: ['2 10:00-12:00 (CAA404)', '5 08:00-10:00 (CAA404)'], oferta: '60/60'
    },
    {
      periodo: '6', codigo: '1411315', turma: '02', disciplina: 'PROGRAMACAO CONCORRENTE', horarios: ['2 16:00-18:00 (CAA402)', '5 14:00-16:00 (CAA402)'], oferta: '60/60'
    },
    {
      periodo: '6', codigo: '1411336', turma: '01', disciplina: 'PROGRAMACAO EM BANCOS DE DADOS', horarios: ['3 14:00-16:00 (LCC1)', '5 16:00-18:00 (LCC1)'], oferta: '35/35'
    },
    {
      periodo: '6', codigo: '1411217', turma: '01', disciplina: 'PROJETO DE REDES DE COMPUTADORES', horarios: ['3 10:00-12:00 (CD107)', '6 08:00-10:00 (CD107)'], oferta: '35/35'
    },
    {
      periodo: '6', codigo: '1411339', turma: '01', disciplina: 'RECUP. DE INFORMACAO E BUSCA NA WEB', horarios: ['2 08:00-10:00 (LCC3a)', '4 10:00-12:00 (LCC3a)'], oferta: '50/50'
    },
    {
      periodo: '6', codigo: '1411340', turma: '01', disciplina: 'SEGURANCA DE SISTEMAS', horarios: ['3 08:00-10:00 (CD105)', '5 10:00-12:00 (CD105)'], oferta: '40/40'
    },
    {
      periodo: '6', codigo: '1411342', turma: '01', disciplina: 'SISTEMAS DE APOIOA DECISAO', horarios: ['3 08:00-10:00 (RE-02)', '5 10:00-12:00 (RE-02)'], oferta: '35/35'
    },
    {
      periodo: '6', codigo: '1411343', turma: '01', disciplina: 'VERIFICACAO E VALIDACAO DE SOFTWARE', horarios: ['3 16:00-18:00 (RE-08)', '6 14:00-16:00 (RE-08)'], oferta: '45/45'
    },
    {
      periodo: '7', codigo: '1411187', turma: '01', disciplina: 'ANÁLISE E TÉCNICA DE ALGORITMOS', horarios: ['3 10:00-12:00 (CAA307)', '6 08:00-10:00 (CAA307)'], oferta: '60/60'
    },
    {
      periodo: '7', codigo: '1411189', turma: '01', disciplina: 'COMPILADORES', horarios: ['3 08:00-10:00 (RE-04)', '5 10:00-12:00 (RE-04)'], oferta: '45/45'
    },
    {
      periodo: '8', codigo: '1411317', turma: '01', disciplina: 'PROJETO DE TRAB. DE CONCLUSAO DE CURSO', horarios: ['3 16:00-18:00 (CAA406)', '6 14:00-16:00 (CAA406)'], oferta: '60/60'
    },
    {
      periodo: '8', codigo: '1411185', turma: '01', disciplina: 'PROJETO EM COMPUTAÇÃO I', horarios: ['2 08:00-10:00 (CAA401)', '4 10:00-12:00 (CAA401)'], oferta: '55/55'
    },
    {
      periodo: '9', codigo: '1411318', turma: '01', disciplina: 'TRABALHO DE CONCLUSAO DE CURSO', horarios: ['4 14:00-16:00 (CD107)', '6 16:00-18:00 (CD107)'], oferta: '55/55'
    },
    {
      periodo: '', codigo: '1301123', turma: '01', disciplina: 'ADMINISTRACAO E EMPREENDEDORISMO', horarios: ['3 10:00-12:00 (S/S)', '6 08:00-10:00 (S/S)'], oferta: '30/30'
    },
    {
      periodo: '', codigo: '1109035', turma: '01', disciplina: 'ALGEBRA VETORIAL E GEOMETRIA ANALÍTICA', horarios: ['', '(Bloqueada para matrícula)'], oferta: '2/2'
    },
    {
      periodo: '', codigo: '1109035', turma: '06', disciplina: 'ALGEBRA VETORIAL E GEOMETRIA ANALÍTICA', horarios: ['', '(Bloqueada para matrícula)'], oferta: '2/2'
    },
    {
      periodo: '', codigo: '1109128', turma: '01', disciplina: 'CALCULO DIFERENCIAL E INTEGRAL III', horarios: ['', '(Bloqueada para matrícula)'], oferta: '2/2'
    },
    {
      periodo: '', codigo: '1305219', turma: '01', disciplina: 'DIREITO E CIDADANIA', horarios: ['3 10:00-12:00 (S/S)', '6 08:00-10:00 (S/S)'], oferta: '40/40'
    },
    {
      periodo: '', codigo: '1303021', turma: '02', disciplina: 'ECONOMIA', horarios: ['2 14:00-16:00 (S/S)', '4 16:00-18:00 (S/S)'], oferta: '10/10'
    },
    {
      periodo: '', codigo: '1303021', turma: '03', disciplina: 'ECONOMIA', horarios: ['3 14:00-16:00 (BZ104)', '5 16:00-18:00 (BZ104)'], oferta: '15/15'
    },
    {
      periodo: '', codigo: '1303021', turma: '04', disciplina: 'ECONOMIA', horarios: ['3 16:00-18:00 (BZ104)', '6 14:00-16:00 (BZ104)'], oferta: '10/10'
    },
    {
      periodo: '', codigo: '1411345', turma: '01', disciplina: 'INFORMATICA E SOCIEDADE', horarios: ['2 16:00-18:00 (RE-08)', '4 14:00-16:00 (RE-08)'], oferta: '40/40'
    },
    {
      periodo: '', codigo: '1307150', turma: '01', disciplina: 'INGLÊS', horarios: ['3 14:00-16:00 (SALA-5)', '5 16:00-18:00 (SALA-5)'], oferta: '10/10'
    },
    {
      periodo: '', codigo: '1307169', turma: '04', disciplina: 'LINGUA PORTUGUESA', horarios: ['4 08:00-10:00 (S/S)', '6 10:00-12:00 (S/S)'], oferta: '50/50'
    },
    {
      periodo: '', codigo: '1307169', turma: '05', disciplina: 'LINGUA PORTUGUESA', horarios: ['4 08:00-10:00 (S/S)', '6 10:00-12:00 (S/S)'], oferta: '50/50'
    },
    {
      periodo: '', codigo: '1411350', turma: '01', disciplina: 'TECC(GESTAO DE PROJETOS)', horarios: ['3 08:00-10:00 (CD107)', '5 10:00-12:00 (CD107)'], oferta: '30/30'
    },
    {
      periodo: '', codigo: '1411357', turma: '01', disciplina: 'TECC(GOVERNANCA DA INTERNET)', horarios: ['2 10:00-12:00 (CAA308)', '5 08:00-10:00 (CAA308)'], oferta: '50/50'
    },
    {
      periodo: '', codigo: '1411352', turma: '01', disciplina: 'TECC(PERCEPCAO COMPUTACIONAL', horarios: ['3 16:00-18:00 (CD105)', '6 14:00-16:00 (CD105)'], oferta: '35/35'
    },
    {
      periodo: '', codigo: '1411302', turma: '01', disciplina: 'TECC(PROGRAMACAO FUNCIONAL)', horarios: ['2 14:00-16:00 (CD105)', '4 16:00-18:00 (CD105)'], oferta: '40/40'
    }
  ]
}

export default schedule
