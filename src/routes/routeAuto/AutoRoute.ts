import { Router } from "express";
import { AutoController } from "../../controllers/controllerAuto/AutoController";
import multer from "multer";
import { authMiddleware } from "../../middleware/AuthMiddleware";

const router = Router();
// Ruta para obtener auto por id
router.get('/:id', async (req, res) => {
  await autoController.getAutoById(req, res);
});

const autoController = new AutoController();

// Ruta para obtener todos los autos
router.get('/', async (req, res) => {
  await autoController.getAllAutos(req, res);
});

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
router.get("/mis-autos", authMiddleware, async (req, res) => {
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
