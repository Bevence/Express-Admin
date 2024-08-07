import AdminJS from 'adminjs';

import { generateAdminJSConfig } from './admin.config.js';
import { expressAuthenticatedRouter } from './admin.router.js';
import { APP_CONFIG } from '../config/env.config.js';
import initialize from './prisma.config.js';

export const setupAdminJS = async () => {
  await initialize();
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);

  const adminRouter = expressAuthenticatedRouter(adminJS);

  if (APP_CONFIG.NODE_ENV === 'production') {
    await adminJS.initialize();
  } else {
    console.log('first');
    adminJS.watch();
  }

  return { adminJS, adminRouter };
};
