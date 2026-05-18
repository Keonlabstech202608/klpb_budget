/**
 * KEONLABS - Database Service Layer
 * 
 * This module handles all database operations with Supabase.
 * It provides a clean API for data persistence and retrieval.
 * 
 * All database calls should go through this module to ensure:
 * - Consistent error handling
 * - Centralized data validation
 * - Easy testing and mocking
 * - Protection of database credentials
 */

class DatabaseService {
    constructor(supabaseClient) {
        this.client = supabaseClient;
    }

    /**
     * Sync user data to the database
     * @param {string} userId - The user ID
     * @param {object} payload - The data to sync (businessData, stockHistory, etc.)
     * @returns {Promise<object>} - The sync result
     */
    async syncUserData(userId, payload) {
        try {
            const result = await this.client
                .from('user_budgets')
                .upsert({
                    user_id: userId,
                    payload: payload,
                    updated_at: new Date().toISOString()
                });
            
            if (result.error) {
                throw new Error(`Database sync failed: ${result.error.message}`);
            }
            
            return result;
        } catch (error) {
            console.error('DatabaseService.syncUserData error:', error);
            throw error;
        }
    }

    /**
     * Load user data from the database
     * @param {string} userId - The user ID
     * @returns {Promise<object>} - The user data
     */
    async loadUserData(userId) {
        try {
            const result = await this.client
                .from('user_budgets')
                .select('payload')
                .eq('user_id', userId)
                .maybeSingle();
            
            if (result.error) {
                throw new Error(`Database load failed: ${result.error.message}`);
            }
            
            return result.data?.payload || null;
        } catch (error) {
            console.error('DatabaseService.loadUserData error:', error);
            throw error;
        }
    }

    /**
     * Delete all user data
     * @param {string} userId - The user ID
     * @returns {Promise<object>} - The delete result
     */
    async deleteUserData(userId) {
        try {
            const result = await this.client
                .from('user_budgets')
                .delete()
                .eq('user_id', userId);
            
            if (result.error) {
                throw new Error(`Database delete failed: ${result.error.message}`);
            }
            
            return result;
        } catch (error) {
            console.error('DatabaseService.deleteUserData error:', error);
            throw error;
        }
    }

    /**
     * Subscribe to real-time updates for user data
     * @param {string} userId - The user ID
     * @param {function} callback - Callback function when data changes
     * @returns {object} - The subscription object
     */
    subscribeToUserData(userId, callback) {
        try {
            return this.client
                .channel(`public:user_budgets:${userId}`)
                .on(
                    'postgres_changes',
                    {
                        event: 'UPDATE',
                        schema: 'public',
                        table: 'user_budgets',
                        filter: `user_id=eq.${userId}`
                    },
                    (payload) => {
                        if (payload.new?.payload) {
                            callback(payload.new.payload);
                        }
                    }
                )
                .subscribe();
        } catch (error) {
            console.error('DatabaseService.subscribeToUserData error:', error);
            throw error;
        }
    }

    /**
     * Upload a file to Supabase storage
     * @param {string} bucket - The storage bucket name
     * @param {string} path - The file path
     * @param {File} file - The file to upload
     * @returns {Promise<object>} - The upload result
     */
    async uploadFile(bucket, path, file) {
        try {
            const result = await this.client
                .storage
                .from(bucket)
                .upload(path, file, { upsert: true });
            
            if (result.error) {
                throw new Error(`File upload failed: ${result.error.message}`);
            }
            
            return result;
        } catch (error) {
            console.error('DatabaseService.uploadFile error:', error);
            throw error;
        }
    }

    /**
     * Get public URL for a file
     * @param {string} bucket - The storage bucket name
     * @param {string} path - The file path
     * @returns {object} - The public URL data
     */
    getPublicUrl(bucket, path) {
        try {
            return this.client
                .storage
                .from(bucket)
                .getPublicUrl(path);
        } catch (error) {
            console.error('DatabaseService.getPublicUrl error:', error);
            throw error;
        }
    }
}

// Create and export the database service instance
const dbService = new DatabaseService(supabaseClient);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DatabaseService, dbService };
}
