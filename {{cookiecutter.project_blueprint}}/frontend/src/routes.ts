import { publicRoutes } from "./services/routes/public.index"
import { protectedRoutes } from "./services/routes/protected.index"

const routes = [...publicRoutes, ...protectedRoutes];

export { routes };
