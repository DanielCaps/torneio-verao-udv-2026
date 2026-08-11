const SHEETS = { teams: 'Teams', matches: 'Matches', scorers: 'Scorers' };

const INITIAL_TEAMS = [
  {
    "id": "vilaplano",
    "name": "VILAPLANO",
    "group": "A",
    "category": "masculino"
  },
  {
    "id": "formacao",
    "name": "FORMAÇÃO BAILE DE MUNIQUE",
    "group": "A",
    "category": "masculino"
  },
  {
    "id": "lla",
    "name": "LLA",
    "group": "A",
    "category": "masculino"
  },
  {
    "id": "fle-biana",
    "name": "FLECHAS BIANA",
    "group": "A",
    "category": "masculino"
  },
  {
    "id": "lepo-lepo",
    "name": "LEPO LEPO",
    "group": "B",
    "category": "masculino"
  },
  {
    "id": "os-coxos",
    "name": "OS COXOS",
    "group": "B",
    "category": "masculino"
  },
  {
    "id": "kuikos",
    "name": "KUIKOS",
    "group": "B",
    "category": "masculino"
  },
  {
    "id": "seca-adegas",
    "name": "SECA ADEGAS",
    "group": "B",
    "category": "masculino"
  },
  {
    "id": "j-do-mato",
    "name": "JÓIAS DO MATO",
    "group": "B",
    "category": "masculino"
  },
  {
    "id": "rondeiras",
    "name": "RONDEIRAS",
    "group": "F",
    "category": "feminino/amigavel"
  },
  {
    "id": "kuikas",
    "name": "KUIKAS",
    "group": "F",
    "category": "feminino/amigavel"
  },
  {
    "id": "amigas",
    "name": "AMIGAS DE S. LOURENÇO",
    "group": "F",
    "category": "feminino/amigavel"
  }
];
const INITIAL_MATCHES = [
  {
    "id": "1",
    "date": "2026-08-11",
    "time": "19:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "LEPO LEPO",
    "away": "OS COXOS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 1
  },
  {
    "id": "2",
    "date": "2026-08-11",
    "time": "20:00",
    "phase": "1ª Fase",
    "group": "A",
    "field": "1",
    "home": "VILAPLANO",
    "away": "FORMAÇÃO BAILE DE MUNIQUE",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 2
  },
  {
    "id": "FEM1",
    "date": "2026-08-11",
    "time": "21:00",
    "phase": "Feminino",
    "group": "F",
    "field": "1",
    "home": "RONDEIRAS",
    "away": "AMIGAS DE S. LOURENÇO",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 3
  },
  {
    "id": "3",
    "date": "2026-08-11",
    "time": "22:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "KUIKOS",
    "away": "SECA ADEGAS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 4
  },
  {
    "id": "4",
    "date": "2026-08-11",
    "time": "23:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "JÓIAS DO MATO",
    "away": "LEPO LEPO",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 5
  },
  {
    "id": "5",
    "date": "2026-08-12",
    "time": "19:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "OS COXOS",
    "away": "JÓIAS DO MATO",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 6
  },
  {
    "id": "6",
    "date": "2026-08-12",
    "time": "20:00",
    "phase": "1ª Fase",
    "group": "A",
    "field": "1",
    "home": "FORMAÇÃO BAILE DE MUNIQUE",
    "away": "LLA",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 7
  },
  {
    "id": "7",
    "date": "2026-08-12",
    "time": "21:00",
    "phase": "1ª Fase",
    "group": "A",
    "field": "1",
    "home": "FLECHAS BIANA",
    "away": "VILAPLANO",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 8
  },
  {
    "id": "8",
    "date": "2026-08-12",
    "time": "22:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "JÓIAS DO MATO",
    "away": "SECA ADEGAS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 9
  },
  {
    "id": "FEM2",
    "date": "2026-08-12",
    "time": "23:00",
    "phase": "Feminino",
    "group": "F",
    "field": "1",
    "home": "KUIKAS",
    "away": "RONDEIRAS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 10
  },
  {
    "id": "9",
    "date": "2026-08-13",
    "time": "20:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "OS COXOS",
    "away": "KUIKOS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 11
  },
  {
    "id": "10",
    "date": "2026-08-13",
    "time": "21:00",
    "phase": "1ª Fase",
    "group": "A",
    "field": "1",
    "home": "LLA",
    "away": "FLECHAS BIANA",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 12
  },
  {
    "id": "11",
    "date": "2026-08-13",
    "time": "22:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "SECA ADEGAS",
    "away": "LEPO LEPO",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 13
  },
  {
    "id": "12",
    "date": "2026-08-13",
    "time": "23:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "KUIKOS",
    "away": "JÓIAS DO MATO",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 14
  },
  {
    "id": "13",
    "date": "2026-08-14",
    "time": "20:00",
    "phase": "1ª Fase",
    "group": "A",
    "field": "1",
    "home": "VILAPLANO",
    "away": "LLA",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 15
  },
  {
    "id": "14",
    "date": "2026-08-14",
    "time": "21:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "LEPO LEPO",
    "away": "KUIKOS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 16
  },
  {
    "id": "FEM3",
    "date": "2026-08-14",
    "time": "22:00",
    "phase": "Feminino",
    "group": "F",
    "field": "1",
    "home": "AMIGAS DE S. LOURENÇO",
    "away": "KUIKAS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 17
  },
  {
    "id": "15",
    "date": "2026-08-14",
    "time": "23:00",
    "phase": "1ª Fase",
    "group": "A",
    "field": "1",
    "home": "FORMAÇÃO BAILE DE MUNIQUE",
    "away": "FLECHAS BIANA",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 18
  },
  {
    "id": "16",
    "date": "2026-08-15",
    "time": "00:00",
    "phase": "1ª Fase",
    "group": "B",
    "field": "1",
    "home": "SECA ADEGAS",
    "away": "OS COXOS",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 19
  },
  {
    "id": "MF1",
    "date": "2026-08-15",
    "time": "15:00",
    "phase": "2ª Fase",
    "group": "",
    "field": "1",
    "home": "1º Grupo A",
    "away": "2º Grupo B",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 20
  },
  {
    "id": "MF2",
    "date": "2026-08-15",
    "time": "16:00",
    "phase": "2ª Fase",
    "group": "",
    "field": "1",
    "home": "1º Grupo B",
    "away": "2º Grupo A",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 21
  },
  {
    "id": "7-8",
    "date": "2026-08-15",
    "time": "17:00",
    "phase": "2ª Fase",
    "group": "",
    "field": "1",
    "home": "4º Grupo A",
    "away": "4º Grupo B",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 22
  },
  {
    "id": "5-6",
    "date": "2026-08-15",
    "time": "18:00",
    "phase": "2ª Fase",
    "group": "",
    "field": "1",
    "home": "3º Grupo A",
    "away": "3º Grupo B",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 23
  },
  {
    "id": "3-4",
    "date": "2026-08-15",
    "time": "19:00",
    "phase": "2ª Fase",
    "group": "",
    "field": "1",
    "home": "Derrotado MF1",
    "away": "Derrotado MF2",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 24
  },
  {
    "id": "FINAL",
    "date": "2026-08-15",
    "time": "20:00",
    "phase": "2ª Fase",
    "group": "",
    "field": "1",
    "home": "Vencedor MF1",
    "away": "Vencedor MF2",
    "homeGoals": "",
    "awayGoals": "",
    "status": "por_jogar",
    "order": 25
  }
];

function setupTournament() {
  const ss = SpreadsheetApp.getActive();
  writeSheet_(ss, SHEETS.teams, ['id','name','group','category'], INITIAL_TEAMS.map(t => [t.id,t.name,t.group,t.category]));
  writeSheet_(ss, SHEETS.matches, ['id','date','time','phase','group','field','home','away','homeGoals','awayGoals','status','order'], INITIAL_MATCHES.map(m => [m.id,m.date,m.time,m.phase,m.group,m.field,m.home,m.away,m.homeGoals,m.awayGoals,m.status,m.order]));
  writeSheet_(ss, SHEETS.scorers, ['matchId','player','team','goals'], []);
  PropertiesService.getScriptProperties().setProperty('ADMIN_KEY', 'muda-esta-chave-udv-2026');
}

function doGet(e) {
  const ss = SpreadsheetApp.getActive();
  const data = {
    teams: readObjects_(ss.getSheetByName(SHEETS.teams)),
    matches: readObjects_(ss.getSheetByName(SHEETS.matches)),
    scorers: readObjects_(ss.getSheetByName(SHEETS.scorers))
  };
  if (e && e.parameter && e.parameter.callback) {
    return ContentService.createTextOutput(e.parameter.callback + '(' + JSON.stringify(data) + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return json_(data);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const adminKey = PropertiesService.getScriptProperties().getProperty('ADMIN_KEY');
    if (payload.key !== adminKey) return json_({ok:false,error:'Chave admin invalida'});
    const ss = SpreadsheetApp.getActive();
    updateMatch_(ss.getSheetByName(SHEETS.matches), payload.matchId, payload.homeGoals, payload.awayGoals);
    replaceScorers_(ss.getSheetByName(SHEETS.scorers), payload.matchId, payload.scorers || []);
    return json_({ok:true});
  } catch (err) {
    return json_({ok:false,error:String(err)});
  }
}

function writeSheet_(ss, name, headers, rows) {
  let sh = ss.getSheetByName(name) || ss.insertSheet(name);
  sh.clearContents();
  sh.getRange(1,1,1,headers.length).setNumberFormat('@').setValues([headers]);
  if (rows.length) {
    const range = sh.getRange(2,1,rows.length,headers.length);
    range.setNumberFormat('@');
    range.setValues(rows);
  }
  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, headers.length);
}

function readObjects_(sh) {
  const values = sh.getDataRange().getValues();
  const headers = values.shift();
  const tz = Session.getScriptTimeZone();
  return values.filter(r => r.join('') !== '').map(r => Object.fromEntries(headers.map((h,i) => {
    let v = r[i];
    if (v instanceof Date) {
      if (h === 'date') v = Utilities.formatDate(v, tz, 'yyyy-MM-dd');
      else if (h === 'time') v = Utilities.formatDate(v, tz, 'HH:mm');
      else v = Utilities.formatDate(v, tz, 'yyyy-MM-dd HH:mm');
    }
    return [h, v];
  })));
}

function updateMatch_(sh, matchId, homeGoals, awayGoals) {
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const idCol = headers.indexOf('id');
  const hgCol = headers.indexOf('homeGoals');
  const agCol = headers.indexOf('awayGoals');
  const statusCol = headers.indexOf('status');
  for (let i=1;i<values.length;i++) {
    if (String(values[i][idCol]) === String(matchId)) {
      sh.getRange(i+1,hgCol+1).setValue(Number(homeGoals));
      sh.getRange(i+1,agCol+1).setValue(Number(awayGoals));
      sh.getRange(i+1,statusCol+1).setValue('finalizado');
      return;
    }
  }
  throw new Error('Jogo nao encontrado: ' + matchId);
}

function replaceScorers_(sh, matchId, scorers) {
  const values = sh.getDataRange().getValues();
  for (let i=values.length; i>=2; i--) {
    if (String(sh.getRange(i,1).getValue()) === String(matchId)) sh.deleteRow(i);
  }
  scorers.forEach(s => sh.appendRow([matchId, s.player, s.team, Number(s.goals || 1)]));
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
