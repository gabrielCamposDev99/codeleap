/* eslint-disable max-classes-per-file */
type ErrorResponse = {
  statusCode: number;
  message: string;
};

export class ApiError extends Error {
  constructor(
    public response: ErrorResponse,
    public status: number
  ) {
    super(response.message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}
