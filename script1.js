//24-02-2022
//steo 01:
var request=new XMLHttpRequest();
//step 02:
request.open("GET","https://www.anapioficeandfire.com/api/books/1")
//step 03:
request.send();
//step 04:
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
    console.log(`Authorname:${data.authors} ISBN:${data.isbn} number of pages:${data.numberOfPages} Publisher:${data.publisher}`);
}