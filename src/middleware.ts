import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get('myTokenName');
  const secretKey = new TextEncoder().encode(
    `${process.env.NEXT_PUBLIC_SECRET_KEY}`,
  );
  if (!jwtToken)
    return NextResponse.redirect(new URL('/auth/login', request.url));

  try {
    /* const { payload } = await jwtVerify(jwtToken, secretKey);
    console.log({ payload }); */
    await jwtVerify(jwtToken, secretKey);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
