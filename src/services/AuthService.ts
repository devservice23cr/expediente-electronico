import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUsers = async () => {
  const users = await prisma.users.findMany(
    //ordenador por updatedAt
    {
      orderBy: [
        {
          updated_at: "desc",
        },
      ],
    }
  );
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

const updateUser = async (user: any) => {
  const updatedUser = await prisma.users.update({
    where: {
      id: user.id,

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

export { getUsers, getUserById, saveUser, updateUser, deleteUser};
