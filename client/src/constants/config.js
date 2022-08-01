// API_NOTIFICATION_MESSAGES
 export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'loading...',
        message: 'Data is being loaded, please wait '
    },
    success: {
        title: 'Success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error', 
        message: 'An error occured while fetching response from the server. please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server . please check internet connectivity and try again lates'
    }
 }

 // API SERVICE CALL 
 //SAMPLE REQUEST 
 // NEED SERVICE CALL: { URL: '/', method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false}
 export const SERVICE_URLS = {
    userSingup: { url: '/signup', method: 'POST'},
    userLogin: { url: '/login', method: 'POST'}

 }