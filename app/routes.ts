import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("app/routes/home.tsx"),
  route("auth", "app/routes/auth.tsx"),
  route("upload", "app/routes/upload.tsx"),
  route("resume/:id", "app/routes/resume.tsx"),
] satisfies RouteConfig;
