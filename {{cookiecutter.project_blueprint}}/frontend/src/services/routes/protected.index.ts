import { adminRoutes } from "./protected.admin"
import { userRoutes } from "./protected.user"

const protectedRoutes = [...adminRoutes, ...userRoutes];

export { protectedRoutes };
