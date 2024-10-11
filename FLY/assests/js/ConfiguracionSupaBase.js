// Inicialisamos supabase
const { createClient } = supabase;
const supabaseUrl = 'https://nyewhvfiotmawjvzuiot.supabase.com';// url de supabase
const supabaseKey = 'process.env.SUPABASE_KEY'; // kay que ya nos da supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Función para obtener datos de una tabla
async function fetchData() {
    const { data, error } = await supabase
        .from('nombre_de_tu_tabla')
        .select('*');
    
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data:', data);
    }
}

// Llama a la función para obtener los datos
fetchData();
