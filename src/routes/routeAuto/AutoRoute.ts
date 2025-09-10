import { Router } from "express";
import { AutoController } from "../../controllers/controllerAuto/AutoController";
import multer from "multer";
import { authMiddleware } from "../../middleware/AuthMiddleware";

const router = Router();
const autoController = new AutoController();

// Configuración de multer para guardar imágenes en la carpeta uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Ruta para agregar auto con imagen
router.post("/add", authMiddleware, upload.single("imagen"), async (req, res) => {
  await autoController.addAuto(req, res);
});

// Solo usuarios autenticados pueden ver sus autos
router.get("/mis-autos/:cedula", authMiddleware, async (req, res) => {
  await autoController.findAutosByUsuario(req, res);
});

// Solo usuarios autenticados pueden marcar autos como vendidos
router.patch("/vender/:id", authMiddleware, async (req, res) => {
  await autoController.marcarAutoComoVendido(req, res);
});

// Ruta pública para ver autos disponibles
router.get("/disponibles", async (req, res) => {
  await autoController.findAutosDisponibles(req, res);
});

export default router;
