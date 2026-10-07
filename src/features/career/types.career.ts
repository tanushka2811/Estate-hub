export interface CareerPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  portfolio?: string;
  resume: File;
}

export interface CareerResponse {
  message: string;
  data: unknown;
}