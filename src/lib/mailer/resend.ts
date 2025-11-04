import {Resend} from "resend";

import {EmailFormat, Mailer} from "@/lib/mailer/mailer";

export class ResendApi implements Mailer {
  private api: Resend;

  constructor() {
    const resendApiKey = process.env.RESEND_API_KEY ?? ""; //TODO not that good...
    this.api = new Resend(resendApiKey);
  }

  async send(data: EmailFormat) {
    const resendData: EmailFormat = {
      ...data,
      to: Array.isArray(data.to) ? data.to : [data.to],
    }
    await this.api.emails.send(resendData);
  }
}