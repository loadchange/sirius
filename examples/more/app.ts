import rhone from '../../src'

document.cookie = 'a=b'

rhone.get('/more/get').then(res => {
  console.log(res)
})

rhone.post('http://127.0.0.1:8088/more/server2', {}, {
  withCredentials: true
}).then(res => {
  console.log(res)
})

