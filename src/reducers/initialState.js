import Authorizer from '../components/authorizer/authorizer';

export default {
  user:Authorizer.GetUser(),
  userData:{users:[],pagination:null},
  ajaxCallsInProgress:0
};
