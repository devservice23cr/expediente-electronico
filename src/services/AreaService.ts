import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAreas = async () => {
  const areas = await prisma.areas.findMany();
  return areas;
};

const getAreasById = async (id: number) => {
  const areas = await prisma.areas.findUnique({
    where: {
      id: id,
    },
  });
  return areas;
};

const saveArea = async (area: any) => {
  const newArea = await prisma.areas.create({ data: area });
  return newArea;
};

const updateArea = async (area: any) => {
  const updatedArea = await prisma.areas.update({
    where: {
      id: area.id,
    },
    data: area,
  });
  return updatedArea;
};

const deleteArea = async (area: any) => {
  const deletedArea = await prisma.areas.delete({
    where: {
      id: area.id,
    },
  });
  return deletedArea;
};

export { getAreas, getAreasById, saveArea, updateArea, deleteArea };
