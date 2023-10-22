import { toast } from 'react-toastify';
import { ApiError, BadRequestError, NetworkError } from '@/lib/errors';

const JSON_CONTENT_TYPE = 'application/json';

// @TODO fix Promise<unknown>
export const getPosts = async (): Promise<unknown> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new NetworkError('Erro ao recuperar URL da API');
  }

  try {
    const response = await fetch(`${apiUrl}/`, {
      method: 'GET',
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      if (response.status === 400) {
        throw new BadRequestError(errorResponse.message);
      } else {
        throw new NetworkError('Erro na comunicação com a API');
      }
    }

    // @TODO fix Promise<unknown>
    return await (response.json() as Promise<unknown>);
  } catch (error) {
    if (
      error instanceof ApiError
      || error instanceof BadRequestError
      || error instanceof NetworkError
    ) {
      toast(error.message, { type: 'error' });
      throw error;
    } else {
      toast('Erro desconhecido', { type: 'error' });
      throw new Error('Erro desconhecido ao realizar a solicitação da API');
    }
  }
};
