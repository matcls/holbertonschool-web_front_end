function createElement(data) {
  const p = document.createElement('p');
  p.innerText = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(xhttp.response.query.pages["21721040"].extract);
    }
  };
  xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
  xhttp.responseType = "json";
  xhttp.send(null);
}

queryWikipedia(createElement);
