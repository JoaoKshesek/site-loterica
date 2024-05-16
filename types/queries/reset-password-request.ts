export interface ResetPasswordRequest {
  client_id: number;
  code: string;
  password: string;
  password_confirmation: string;
}
