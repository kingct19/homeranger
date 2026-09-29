import { redirect } from "next/navigation";
import { servicePath } from "@/lib/paths";

export default function MaintenanceAlias() {
  redirect(servicePath("maintenance-plans"));
}
