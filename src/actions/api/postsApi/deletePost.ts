import { toast } from 'react-toastify';
import { ApiError, BadRequestError, NetworkError } from '@/lib/errors';
import { PostType } from '@/validation/interfaces/IPost';

const JSON_CONTENT_TYPE = 'application/json';

export const deletePost = async (
  options: Pick<PostType, 'id'>
): Promise<void> => {
  const { id: postId } = options;
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new NetworkError('Erro ao recuperar URL da API');
  }

  try {
    await fetch(`${apiUrl}/${postId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
      },
    });
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
