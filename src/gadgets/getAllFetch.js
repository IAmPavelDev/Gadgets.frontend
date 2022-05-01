export default async function getAllFetch(reject, response) {
  await fetch("https://localhost:7013/api/gadgets", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    Authorization: "Bearer " + localStorage.getItem("token"),
  })
    .then((result) => {
     
      result;
    })
    .then((data) => {
      console.log("data ", data);
      response(data);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
}
