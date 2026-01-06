// Variable para almacenar el cliente de Supabase
let supabaseClient = null;

/**
 * Obtiene o inicializa el cliente de Supabase pidiendo las claves al servidor.
 * Retorna null si falla.
 */
async function getSupabase() {
    // Si ya existe, lo devolvemos (Singleton)
    if (supabaseClient) return supabaseClient;

    try {
        // 1. Pedir credenciales a tu endpoint seguro
        const response = await fetch('/api/config');
        if (!response.ok) throw new Error('Error al obtener configuración del servidor');
        
        const config = await response.json();

        if (!config.supabaseUrl || !config.supabaseKey) {
            console.error("Faltan las credenciales de Supabase en Vercel.");
            return null;
        }

        // 2. Inicializar Supabase si la librería está cargada
        if (window.supabase) {
            supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseKey);
            console.log("✅ Supabase inicializado correctamente.");
            return supabaseClient;
        } else {
            console.error("La librería @supabase/supabase-js no está cargada en el HTML.");
            return null;
        }

    } catch (error) {
        console.error("Error crítico inicializando Supabase:", error);
        return null;
    }
}

/**
 * Redirige al usuario al inicio (index.html)
 */
function redirectToHome() {
    console.log("Redirigiendo al inicio...");
    window.location.href = '/';
}