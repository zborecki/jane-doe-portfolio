import { ResponseAPI } from '@/types/api/common';

export async function GET(): Promise<Response> {
  const response: ResponseAPI<unknown> = {
    data: {
      text: 'dd'
    }
  };

  return Response.json(response, { status: 200 });
}
