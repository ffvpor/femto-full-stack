import { publicRoutes } from "./core/routes/public"
import { protectedRoutes } from "./core/routes/protected"

const routes = [...publicRoutes, ...protectedRoutes];

export { routes };
