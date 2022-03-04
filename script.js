//steo 01:
var request=new XMLHttpRequest();
//step 02:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:
request.send();
//step 04:
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
for(i=0;i<data.length;i++)
{
    //2.print 250 countries names in the console
    //     console.log(data[i].name);

    //3.print  all  the country name along with the capital 
    //     console.log(`Name:${data[i].name} capital:${data[i].capital}`);

    //4.print the first 10 countires flag in the console
    //flag in URL 
    //for(var i=0;i<10;i++){ (this loop used for printing a only 10 country details)
      //  console.log(`flag:${data[i].flag}`);
      
      //print all the countries(250)  name as well as their logitute and latitude values
    //Expected Output:name:afganisthan Lat:32 long 33
    console.log(`name:${data[i].name} lat:${data[i].latlng[0]} long:${data[i].latlng[1]}`);
}
}