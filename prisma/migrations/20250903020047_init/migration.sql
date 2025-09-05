-- CreateEnum
CREATE TYPE "public"."Estado" AS ENUM ('DISPONIBLE', 'VENDIDO');

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "cedula" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefono" TEXT,
    "redSocial" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("cedula")
);

-- CreateTable
CREATE TABLE "public"."Auto" (
    "id" SERIAL NOT NULL,
    "vendedorCedula" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "kilometraje" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "estado" "public"."Estado" NOT NULL DEFAULT 'DISPONIBLE',
    "descripcion" TEXT NOT NULL,
    "imagenUrl" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "fechaPublicacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Auto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."Auto" ADD CONSTRAINT "Auto_vendedorCedula_fkey" FOREIGN KEY ("vendedorCedula") REFERENCES "public"."Usuario"("cedula") ON DELETE RESTRICT ON UPDATE CASCADE;
