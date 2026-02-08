import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Initialize the Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body?.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    if (!body.first_name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    // Using the client instead of fetch handles the headers for you
    const { data, error } = await supabase
      .from('Leads') // Ensure this matches your table name exactly
      .insert([
        {
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          message: body.message,
        }
      ])
      .select()

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 401 })
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}