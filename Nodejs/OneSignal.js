const OneSignal = require('onesignal-node');

const client = new OneSignal.Client('f1e498d4-7720-477a-b7e5-a33aad423a94', 'ZTE1YmFiMGEtMzJiNi00M2EzLTg4ODQtMjhkNjMzNGIxYWNl');


  function sendNotification() {
    const notification = {
        contents: {
            tr: 'Yeni bildiri',
            en: 'New notification',
        },
        included_segments: ['All'],
    }
    
    
    client.createNotification(notification).then(response => {
        console.log(response);
    }).catch(error => {
        console.log('Error1: ',error);
    })
}


module.exports = sendNotification
  