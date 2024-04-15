const request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send();
 request.onload=function(){
  var data = request.response;
  var result = JSON.parse(data)

//----------------------------------------------------------------------------------------------------------------
    console.log("\n","<-----------------------Task-a----------------------->","\n","\n");

  //* a) Get all the countries from Asia continent /region using Filter function
  console.log(`            ${"Countries from Asia region"} `);
  console.log("\n");
  var res = result.filter((ele)=>ele.region==="Asia" || ele.continents==="Asia")
  res.map((ele)=>console.log(`Country Name : ${ele.name.common}`))

//----------------------------------------------------------------------------------------------------------------
  console.log("\n","<-----------------------Task-b----------------------->","\n","\n");

 //* b) Get all the countries with a population of less than 2 lakhs using Filter function 

  console.log(`            ${"Countries with a population of less than 2 lakhs"} `);
  console.log("\n");
  var res1 = result.filter((ele)=>ele.population<200000)
  res1.map((ele)=>console.log(`${ele.name.common} : `, ele.population))

//----------------------------------------------------------------------------------------------------------------
  console.log("\n","<-----------------------Task-c----------------------->","\n","\n");

 //* c) Print the following details name, capital, flag, using forEach function 

  console.log(`            ${"Printing name, capital, flag, using forEach function "} `);
  console.log("\n");
  result.forEach((ele) =>console.log(`
  Name : ${ele.name.common} ,
  Capital : ${ele.capital} , 
  Flag : ${ele.flag}
  `)) 

//----------------------------------------------------------------------------------------------------------------
  console.log("\n","<-----------------------Task-d----------------------->","\n","\n");

 //* d) Print the total population of countries using reduce function 

  console.log(`            ${"Total population of countries using reduce function "} `);
  console.log("\n");
  const res2 = result.reduce((acc, country) => acc + country.population, 0);
  console.log(`Total Population: ${res2}`);

//----------------------------------------------------------------------------------------------------------------
  console.log("\n","<-----------------------Task-e----------------------->","\n","\n");

 //* e) Print the country that uses US dollars as currency

  console.log(`            ${"Countries that uses US dollars as currency"} `);
  console.log("\n");
  var currency = result.filter((ele)=>ele.currencies && ele.currencies.USD && ele.currencies.USD)
  currency.forEach((ele)=>console.log(ele.name.common));
} 