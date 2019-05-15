import home from './home';
import router from './router';

import Feature from './Connector';

// console.log('Test:::', Feature);
export default new Feature(router, home);
