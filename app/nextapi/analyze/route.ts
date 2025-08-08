import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }
  // Dummy example result
  return NextResponse.json({
    mode: 'single',
    target: url,
    reports: [{ title: 'Dummy SEO report for ' + url }],
  });
}
