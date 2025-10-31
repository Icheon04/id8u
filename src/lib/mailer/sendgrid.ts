import sendgridApi from "@sendgrid/mail"

import {EmailFormat, Mailer} from "@/lib/mailer/mailer";

export class Sendgrid implements Mailer {
  private api: typeof sendgridApi;

  constructor() {
    const sendgridApiKey = process.env.SENDGRID_API_KEY ?? ""; //TODO not that good...
    this.api = sendgridApi;
    this.api.setApiKey(sendgridApiKey);
  }

  async send(data: EmailFormat) {
    await sendgridApi.send(data);
  }
}