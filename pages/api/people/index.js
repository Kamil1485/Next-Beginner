export default function handler(req, res) {
  if (req.method === "GET") {
    // GET isteği işleme alınıyor
    return res.status(200).json({ message: "GET isteği alındı" });
  } else if (req.method === "POST") {
    // POST isteği işleme alınıyor
    return res.status(200).json({ message: "POST isteği alındı" });
  }

  // Desteklenmeyen metodlar işleme alınıyor
  return res.status(405).json({ message: "Method Not Allowed" });
}
