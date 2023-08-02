import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};

const getUserById = async (id: number) => {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

const saveUser = async (user: any) => {
  const newUser = await prisma.users.create({
    data: user,
  });
  return newUser;
};

const updateUser = async (id: number, user: any) => {
  const updatedUser = await prisma.users.update({
    where: {
      id: id,
    },
    data: user,
  });
  return updatedUser;
};

const deleteUser = async (id:number) => {
  const deletedUser = await prisma.users.delete({
    where: {
      id: id,
    },
  });
  return deletedUser;
};

export { getUsers, getUserById, saveUser, updateUser};
