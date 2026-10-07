export interface ContactPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  location?: string;
  message: string;
}

export interface ContactResponse {
  message: string;
}