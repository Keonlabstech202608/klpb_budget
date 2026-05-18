/**
 * KEONLABS - Supabase Client Configuration
 * 
 * This module initializes and exports the Supabase client.
 * It acts as the single point of configuration for all database operations.
 * 
 * IMPORTANT: Keep this file isolated from business logic and UI rendering.
 * Only configuration and client initialization should be here.
 */

const SUPABASE_CONFIG = {
    url: 'https://osloiqymubajtacarwze.supabase.co',
    key: 'sb_publishable_bEVd8mvJlf4Z2bcll61a7g_r8eQe_Ad'
};

// Initialize Supabase client
const supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { supabaseClient, SUPABASE_CONFIG };
}
