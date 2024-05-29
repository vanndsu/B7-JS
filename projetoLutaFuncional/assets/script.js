import { createKnight, createSorcerer,defaultCharacter,Stage} from './functions.js'
//const { createSorcerer, createKnight, defaultCharacter } = require ('./functions.js')

const char = createSorcerer('Vandim')
const char2 = createKnight('Satanás')

const stage =  Stage;

stage.start(char,char2,document.querySelector('#char'),document.querySelector('#char2'))


