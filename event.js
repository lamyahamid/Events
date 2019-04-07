var container=document.querySelector('.container')

var city = "london"

axios({
    method: 'GET',
    url: `https://www.eventbriteapi.com/v3/events/search/?token=CVD5XRWWRO3RNU6HMRWN&location.address=${city}`
  })

  .then(response => {
   console.log(response.data.events[20].logo.url)
    
    
  })


//   for (var i=0; i<5; i++){
//     console.log(response.data[i].name);
//     container.innerHTML+=`<p>${response.data[i].name}</p>`
//     container.innerHTML+=`<img src="${response.data[i].image}"/>`
//   }