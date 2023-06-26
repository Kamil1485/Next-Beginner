import Data from "@/data.json";
export default function personHandler(req, res) {
  const { method, cookies, query } = req;
  const id = query.id;
  console.log(method, cookies, query);
  const filteredPeople = Data.people.find((p) => p.id === id);
  console.log(filteredPeople);
  if (!filteredPeople) {
    return res
      .status(404)
      .send(
        `<div><span style="color:red">${id}</span> Numarali kullanici bulunamadi!</div> `
      );
  }

  return res.status(400)
    .send(`<div><span s<tyle="color:green">${id}</span> Numarali kullanici verileri
    <p>${filteredPeople.name}</p>
    <p>${filteredPeople.age}</p>
    </div> `);
}
