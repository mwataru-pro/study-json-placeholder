async function callApi() {
  const res = await fetch("https://my-json-server.typicode.com/mwataru-pro/myJSONServer/person/1")
  .then(res => res.json())
  .then(json => {
      console.log(json);
  })
  .catch(e => console.error(e.message));

};

callApi();
