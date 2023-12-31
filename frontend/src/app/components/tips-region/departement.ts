export interface DepartementsParRegion {
  [key: string]: string[]; // structure des régions et de leurs départements
}

export const departementsParRegion: DepartementsParRegion = {
  // les DEPARTEMENTS doivent être écrit sans accent ni caracteres speciaux. Ils doivent être écrit de la meme maniere que dans le BDD.
  'Auvergne-Rhône-Alpes': [
    'AIN - 01',
    'ALLIER - 03',
    'ARDECHE - 07',
    'CANTAL - 15',
    'DROME - 26',
    'ISERE - 38',
    'LOIRE - 42',
    'HAUTE LOIRE - 43',
    'PUY DE DOME - 63',
    'RHONE - 69',
    'SAVOIE - 73',
    'HAUTE SAVOIE - 74',
  ],
  'Bourgogne-Franche-Comté': [
    "COTE D'OR - 21",
    'DOUBS - 25',
    'JURA - 39',
    'NIEVRE - 58',
    'HAUTE SAONE - 70',
    'SAONE ET LOIRE - 71',
    'YONNE - 89',
    'TERRITOIRE DE BELFORT - 90',
  ],
  Bretagne: [
    "COTES D'ARMOR - 22",
    'FINISTERE - 29',
    'ILLE ET VILAINE - 35',
    'MORBIHAN - 56',
  ],
  'Centre-Val de Loire': [
    'CHER - 18',
    'EURE ET LOIR - 28',
    'INDRE - 36',
    'INDRE ET LOIRE - 37',
    'LOIR ET CHER - 41',
    'LOIRET - 45',
  ],
  Corse: ['CORSE DU SUD - 2A', 'HAUTE CORSE - 2B'],
  'Grand Est': [
    'ARDENNES - 08',
    'AUBE - 10',
    'MARNE - 51',
    'HAUTE MARNE - 52',
    'MEURTHE ET MOSELLE - 54',
    'MEUSE - 55',
    'MOSELLE - 57',
    'BAS RHIN - 67',
    'HAUT RHIN - 68',
    'VOSGES - 88',
  ],
  'Hauts-de-France': [
    'NORD - 59',
    'PAS DE CALAIS - 62',
    'SOMME - 80',
    'OISE - 60',
    'AISNE - 02',
  ],
  'Ile-de-France': [
    'PARIS - 75',
    'SEINE ET MARNE - 77',
    'YVELINES - 78',
    'ESSONNE - 91',
    'HAUTS DE SEINE - 92',
    'SEINE SAINT DENIS - 93',
    'VAL DE MARNE - 94',
    "VAL D'OISE - 95",
  ],
  Normandie: [
    'CALVADOS - 14',
    'EURE - 27',
    'MANCHE - 50',
    'ORNE - 61',
    'SEINE MARITIME - 76',
  ],
  'Nouvelle-Aquitaine': [
    'CHARENTE - 16',
    'CHARENTE MARITIME - 17',
    'CORREZE - 19',
    'CREUSE - 23',
    'DORDOGNE - 24',
    'GIRONDE - 33',
    'LANDES - 40',
    'LOT ET GARONNE - 47',
    'PYRENEES ATLANTIQUES - 64',
    'DEUX SEVRES - 79',
    'VIENNE - 86',
    'HAUTE VIENNE - 87',
  ],
  Occitanie: [
    'ARIEGE - 09',
    'AUDE - 11',
    'AVEYRON - 12',
    'GARD - 30',
    'HAUTE GARONNE - 31',
    'GERS - 32',
    'HERAULT - 34',
    'LOT - 46',
    'LOZERE - 48',
    'HAUTES PYRENEES - 65',
    'PYRENEES ORIENTALES - 66',
    'TARN - 81',
    'TARN ET GARONNE - 82',
  ],
  'Pays de la Loire': [
    'LOIRE ATLANTIQUE - 44',
    'MAINE ET LOIRE - 49',
    'MAYENNE - 53',
    'SARTHE - 72',
    'VENDEE - 85',
  ],
  "Provence-Alpes-Côte d'Azur": [
    'ALPES DE HAUTE PROVENCE - 04',
    'HAUTES ALPES - 05',
    'ALPES MARITIMES - 06',
    'BOUCHES DU RHONE - 13',
    'VAR - 83',
    'VAUCLUSE - 84',
  ],
};
