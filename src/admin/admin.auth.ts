import { prisma } from './prisma.config.js';

export const authenticateUser = async (email: string, password: string) => {
  const admin = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (admin) {
    return { email };
  }
  return null;
};
