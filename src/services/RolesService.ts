import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getRoles = async () => {
  const roles = await prisma.roles.findMany({
    include: {
      areas: true,
    },
  });

  const areasSaved = await prisma.areas.findMany();

  const rolesWithAreaName = assignAreaName(roles, areasSaved);

  return rolesWithAreaName;
};

const assignAreaName = (roles: any, areasSaved: any) => {
  roles.forEach((role: any) => {
    role.areas.forEach((roleArea: any) => {
      const areaName = areasSaved.find(
        (areaSaved: any) => areaSaved.id === roleArea.area_id
      );
      roleArea.name = areaName?.name ? areaName.name : "Sin nombre";
    });
  });
  return roles;
};

const getRoleById = async (id: number) => {
  const role = await prisma.roles.findUnique({
    where: {
      id: id,
    },
    include: {
      areas: true,
    },
  });

  const areasSaved = await prisma.areas.findMany();

  const roleWithAreaName = assignAreaName([role], areasSaved);

  return roleWithAreaName;
};

const saveRole = async (role: any, areas: any) => {
  const newRole = await prisma.roles.create({
    data: role,
  });

  const roleAreas = areas.map((area: any) => ({
    role_id: newRole.id,
    area_id: area,
  }));

  await prisma.rOLES_AREAS.createMany({
    data: roleAreas,
  });

  return { newRole, roleAreas };
};

const updateRole = async (role: any, areas: any) => {
  const updatedRole = await prisma.roles.update({
    where: {
      id: role.id,
    },
    data: {
      name: role.name,
      description: role.description,
    },
  });

  //delete all areas from role for update
  await prisma.rOLES_AREAS.deleteMany({
    where: {
      role_id: role.id,
    },
  });

  //insert new areas for role
  const roleAreas = areas.map((area: any) => ({
    role_id: role.id,
    area_id: area,
  }));

  await prisma.rOLES_AREAS.createMany({
    data: roleAreas,
  });

  return { updatedRole, roleAreas };
};

const deleteRole = async (role: any) => {
  const deletedRole = await prisma.roles.delete({
    where: {
      id: role.id,
    },
  });

  await prisma.rOLES_AREAS.deleteMany({
    where: {
      role_id: role.id,
    },
  });
  return deletedRole;
};

export { getRoles, getRoleById, saveRole, updateRole, deleteRole };
