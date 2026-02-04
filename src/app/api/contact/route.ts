import { NextResponse } from 'next/server';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number, lastReset: number }>();
const LIMIT = 5;
const WINDOW = 60 * 60 * 1000; // 1 hour

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  const rateData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - rateData.lastReset > WINDOW) {
    rateData.count = 0;
    rateData.lastReset = now;
  }

  if (rateData.count >= LIMIT) {
    return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  rateData.count++;
  rateLimitMap.set(ip, rateData);

  try {
    const body = await req.json();

    // In a real app, you would save this to the DB or send an email
    console.log('Contact form submission:', body);

    return NextResponse.json({ success: true });
  } catch (_error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
