"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      onAccept={() => {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }}
      onDecline={() => {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }}
    >
      Este sitio usa cookies para analytics.
    </CookieConsent>
  );
}