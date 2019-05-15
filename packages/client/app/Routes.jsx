import modules from '../modules';
// console.log('MODULES;:: IN ROUTES FILES', modules);
if (!modules.router) {
  throw new Error('At least one router must be defined in modules');
}
// console.log('MODULES ROUTER:::', modules.router);
export default modules.router;
