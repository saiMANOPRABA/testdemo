//steo 01:
var request=new XMLHttpRequest();
//step 02:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:
request.send();
//step 04:
request.onload=function(){
var data=JSON.parse(request.response);
//console.log(data);
var res=data.filter((element)=>element.region==="Asia");
//console.log(res);
for(i=0;i<res.length;i++)
{
    console.log(res[i].name);
}
var final=res.map((ele)=>ele.population);
var pop=final.reduce((sum,cv)=>sum+cv);
console.log(pop);
}