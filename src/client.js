import * as sapper from '@sapper/app';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize'

M.AutoInit();

sapper.start({
	target: document.querySelector('#sapper')
});