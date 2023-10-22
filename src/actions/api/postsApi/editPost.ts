import { toast } from 'react-toastify';
import { ApiError, BadRequestError, NetworkError } from '@/lib/errors';
import { PostType } from '@/validation/interfaces/IPost';

const JSON_CONTENT_TYPE = 'application/json';

export const editPost = async (
  options: Partial<PostType>
): Promise<PostType> => {
  const { id: postId, ...restOptions } = options;
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new NetworkError('Erro ao recuperar URL da API');
  }

  try {
    const response = await fetch(`${apiUrl}/${postId}/`, {
      method: 'PATCH',
      body: JSON.stringify(restOptions),
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

    return await (response.json() as Promise<PostType>);
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
