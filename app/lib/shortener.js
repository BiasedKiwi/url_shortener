// https://cleanuri.com/api/v1/shorten
const shortener_url = "localhost:8010/proxy/api/v1/shorten";

export default function shorten() {
  const link = document.querySelector("#link_input").value;
  console.log(link);
  console.log(shortener_url);
  const response = fetch(shortener_url, {
    method: "POST",
    body: JSON.stringify({ url: link }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
