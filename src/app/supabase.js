
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_API_URL, process.env.NEXT_PUBLIC_API_KEY);

export default supabase;