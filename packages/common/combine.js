import { map, reduce, flatten, without, union } from 'ramda';

export default (features, extractor) => {
  // console.log('FEATURES IN COMBINE:::', features);
  return without('undefined', flatten(map(res => {
    // console.log('HUUHHHHH', extractor(res));
    return extractor(res);
  }, features)))
}
