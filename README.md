# SmartERP Website

A standalone React + Vite marketing site for SmartBilling ERP and Smart School ERP.

## Run locally

```sh
npm install
npm run dev
```

The development server proxies `/api` to the API at `http://localhost:8085`. Start the Spring Boot API to receive direct email enquiries.

## Build

```sh
npm run build
npm run preview
```

## Enquiry delivery

The enquiry actions are build-time feature flags. Set either or both to `true` before building:

- `ENQUIRY_EMAIL_ENABLED=true` shows the email action. It submits directly through the API SMTP configuration to `CONTACT_ENQUIRY_TO` (defaults to `smartbill.sb@gmail.com`). The API must allow the deployed website origin in `CORS_ALLOWED_ORIGINS`.
- `ENQUIRY_WHATSAPP_ENABLED=true` shows the WhatsApp action when `WHATSAPP_NUMBER` is set. It opens a prefilled chat; the visitor taps Send in WhatsApp to deliver it.
- Set `API_BASE_URL` to the deployed API URL and `WHATSAPP_NUMBER` to the international-format number (digits only) before building the production website.

Vite embeds these selected public values during the build, so update them in the website hosting provider and redeploy after changing feature flags.
