import Authorizer from '../components/authorizer/authorizer'

export default {
  user:Authorizer.GetUser(),
  users:[],
  ajaxCallsInProgress:0
};
