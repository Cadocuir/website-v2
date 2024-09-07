import './index-4dc5572a.js';
import prisma from '@prisma/client';

const db = new prisma.PrismaClient();
async function handle({ event, resolve }) {
  const session = event.cookies.get("session");
  if (!session) {
    return await resolve(event);
  }
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true, role: true }
  });
  if (user) {
    event.locals.user = {
      name: user.username,
      role: user.role.name
    };
  }
  return await resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-2ed425fb.js.map
