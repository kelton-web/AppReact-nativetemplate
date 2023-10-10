import BasicHttpRequests from '../base';
import config from '../../../template.config';

export default (() => {
  return {
    ...BasicHttpRequests(config.mainApiOrigin),
  };
})();
