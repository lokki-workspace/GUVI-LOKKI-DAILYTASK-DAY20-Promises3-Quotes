
async function quotes(){
  try{
    var number = document.getElementById('stquote').value
     var result = await fetch(`https://strangerthings-quotes.vercel.app/api/quotes/${number}`);
      var data = await result.json()
      console.log(data)
    var result=document.querySelector('.answer')
    
      result.innerHTML=`
      <div class="section"><h4> QUOTES --> "${data[0].quote}"</h4></div><br>
      <div class="section"><h3> AUTHOR  --> ${data[0].author}</h3></div>
      `
     }

  catch{
      console.log(err);
      }   
    }

     quotes()
  
  var button = document.querySelector('.btn')
  button.addEventListener('click',quotes)


