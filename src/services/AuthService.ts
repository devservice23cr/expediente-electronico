import { tokenSign } from "../utils/HandleToken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUserByMail = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

function exclude(element: any, keys: any[]): any {
  return Object.fromEntries(
    Object.entries(element).filter(([key]) => !keys.includes(key))
  );
}

const login = async (user: any) => {
  let userLogin = await getUserByMail(user.email);
  if (
    userLogin != null &&
    userLogin.password == user.password &&
    userLogin.email == user.email
  ) {
    //exclude password from user
    userLogin = exclude(userLogin, ["password"]);
    let token = await tokenSign(userLogin);
    return { user: userLogin, token: token, generatedDate: new Date() };
  } else {
    return null;
  }
};

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

const deleteUser = async (id: number) => {
  const deletedUser = await prisma.users.delete({
    where: {
      id: id,
    },
  });
  return deletedUser;
};

export { getUsers, getUserByMail, saveUser, updateUser, deleteUser, login };
