import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }
  // Dummy example sitemap report
  return NextResponse.json({
    mode: 'sitemap',
    target: url,
    reports: [
      { url: url + '/page1', title: 'Page 1' },
      { url: url + '/page2', title: 'Page 2' },
    ],
  });
}
