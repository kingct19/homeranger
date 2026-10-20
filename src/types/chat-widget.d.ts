import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "chat-widget": HTMLAttributes<HTMLElement> & {
        "location-id": string;
        "legal-msg"?: string;
        "agency-name"?: string;
        "agency-website"?: string;
        source?: string;
      };
    }
  }
}
