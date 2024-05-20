function reqListener() {
    const countryArr=JSON.parse(this.responseText);
    console.log(countryArr)
    for(let i=0;i<=countryArr.length-1;i++)
        {
            console.log(countryArr[i].flags.png)
            console.log(countryArr[i].name.common)
            console.log(countryArr[i].region)
            console.log(countryArr[i].subregion)
            console.log(countryArr[i].population)
          
        } 
    
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  