// membuat variable router dengan require atau export variabel express
// Dan menggunakan metode Router
const router = require("express").Router();
// export controller yang ingin dipakai
const mahasiswaController = require("../controllers/mahasiswaController");

// endpoint mahasiswa
router.get("/", mahasiswaController.viewMahasiswa); // Untuk view
router.post("/", mahasiswaController.addMahasiswa); // Untuk menambah data mahasiswa
router.put("/", mahasiswaController.editMahasiswa); // Untuk edit data mahasiswa
router.delete("/:id", mahasiswaController.deleteMahasiswa); // Untuk delete dataMahasiswa

// Lalu export routernya
module.exports = router;
