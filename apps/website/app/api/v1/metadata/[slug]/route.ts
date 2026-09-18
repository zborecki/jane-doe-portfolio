import { MetadataResponseAPI } from '@/types/api/pages';

export async function GET(): Promise<Response> {
  const response: MetadataResponseAPI = {
    data: {
      description: 'Where does the hedgehog toddle at night?',
      keywords: ['zborecki', 'laravel', 'nextjs'],
      title: 'Home'
    }
  };

  return Response.json(response, { status: 200 });
}
