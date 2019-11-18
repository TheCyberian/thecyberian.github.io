const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
  if(this.readyState==4 && this.status==200){
    console.log(Http.responseText)
  }
}
