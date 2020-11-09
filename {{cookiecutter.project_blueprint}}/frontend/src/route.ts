import { publicRoutes } from "./services/routes/public"
import { protectedRoutes } from "./services/routes/protected"

const routes = [...publicRoutes, ...protectedRoutes];

export { routes };
