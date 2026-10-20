"use client";

import { useEffect } from "react";

const loaderSrc = "https://widgets.leadconnectorhq.com/loader.js";

export function ChatWidget() {
  useEffect(() => {
    if (document.querySelector(`script[src="${loaderSrc}"]`)) return;

    const script = document.createElement("script");
    script.src = loaderSrc;
    script.async = true;
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    document.body.appendChild(script);
  }, []);

  return (
    <chat-widget
      location-id="mfox5fBMFQDxjwLxVgXL"
      legal-msg=""
      agency-name="LeadConnector"
      agency-website="https://www.leadconnectorhq.com"
      source="WEB_USER"
    />
  );
}
