import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 環境変数からURLとService Role Keyを読み込む
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Supabaseのテーブル(inquiriesなど)に挿入
    const { error } = await supabase
      .from('inquiries')
      .insert([{ name, email, detail: message }]);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: 'お問い合わせを受け付けました。' }, { status: 200 });
  } catch (error) {
    console.error('Error handling inquiry:', error);
    return NextResponse.json({ message: 'エラーが発生しました。' }, { status: 500 });
  }
}
