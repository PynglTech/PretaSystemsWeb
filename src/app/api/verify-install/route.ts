import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ success: false, message: 'URL is required' }, { status: 400 });
        }

        // Fetch the website content
        const response = await fetch(url);
        const html = await response.text();

        // Specific scripts to look for
        const script1 = '<script src="pyngl-init.js"></script>';
        const script2 = 'https://anamaria-reserveless-inflatedly.ngrok-free.dev/api';

        // Check for scripts (using simple includes for now, could be more robust with regex)
        const hasScript1 = html.includes(script1);
        const hasScript2 = html.includes(script2);

        if (hasScript1 && hasScript2) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Scripts not found. Please ensure both tags are in the <head> of your page.',
                details: {
                    hasScript1,
                    hasScript2,
                }
            });
        }
    } catch (error) {
        console.error('Verification error:', error);
        return NextResponse.json({ success: false, message: 'Failed to fetch the website. Make sure it is publicly accessible.' }, { status: 500 });
    }
}
