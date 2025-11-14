import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/api/:path*', // Apply only to API routes
};

export default function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');

  const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://id8u.satria.fr', 'https://dev.id8u.satria.fr']
    : ['http://localhost:3000', 'http://localhost:3001'];

  const isAllowedOrigin = origin && allowedOrigins.includes(origin);

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  return response;
}