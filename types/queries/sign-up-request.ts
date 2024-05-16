export interface SignUpRequest {
  name: string;
  email: string;
  email_confirmation: string;
  whatsapp_number: string;
  password: string;
  password_confirmation: string;
  terms_accepted: boolean;
  receive_news_letter: boolean;
}
