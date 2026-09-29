import { redirect } from "next/navigation";
import { servicePath } from "@/lib/paths";

export default function CommercialAlias() {
  redirect(servicePath("commercial-hvac"));
}
