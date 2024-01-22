import { createClient } from '@supabase/supabase-js';

import { API_KEY } from '../util/config'

const supabaseUrl = 'https://qbobtqltrfhexlhwbjig.supabase.co';
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;