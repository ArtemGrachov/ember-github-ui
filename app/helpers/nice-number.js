import { helper } from '@ember/component/helper';

export default helper(function niceNumber(params/*, hash*/) {
  if (!params) return '';

  const [num] = params;

  if (!num) return '';

  if (parseInt(num, 10) >= 1000) {
    return (Math.round(num * .01) * .1).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
});
