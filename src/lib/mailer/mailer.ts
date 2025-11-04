
export interface EmailFormat {
  to: string[] | string;
  from: string;
  subject: string;
  text: string;
  html: string,
}

export interface Mailer {
  send: (data: EmailFormat) => void;
}