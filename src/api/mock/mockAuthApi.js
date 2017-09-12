import delay from './delay';

class AuthApi {
  static getToken(email, password) {


    return new Promise((resolve, reject) => {

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let myInit = { method: 'POST', headers: myHeaders, body: JSON.stringify({ username: email, password }) };
      let request = new Request('http://localhost:61469/api/v1/account/token', myInit);
      /* TODO constants for API bases */
      fetch(request).then( function(response) {
        debugger;

      });

      setTimeout(() => {
        //Obviously implement this
        if ((email == 'dun_edwards@yahoo.com') && (password == 'test')) {
          //Token is expired for now
          resolve('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJURVNUIiwianRpIjoiNWI0MDFmM2UtYTBkNS00YjdkLTkwMjYtZjFlZWQ2YTM0NjVjIiwiaWF0IjoxNTAzOTEyMTk4LCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNTAzOTEyMTk4LCJleHAiOjE1MDM5OTg1OTgsImlzcyI6IkV4YW1wbGVJc3N1ZXIiLCJhdWQiOiJFeGFtcGxlQXVkaWVuY2UifQ.Z6edDLAmdM-n62fMhtNfmjdupyAtw1br6JRVpokH430');
        } else {
          resolve(null);
        }
      }, delay);
    });
  }

  static resetPassword(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Obviously implement this
        resolve(true);
      }, delay);
    });
  }
}

export default AuthApi;
