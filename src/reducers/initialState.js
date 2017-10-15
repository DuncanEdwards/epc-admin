import Authorizer from '../components/authorization/authorizer';

export default {
  user:Authorizer.GetUser(),
  userData:{users:[],pagination:null},
  ajaxCallsInProgress:0
};
