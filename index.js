/**
 * KEONLABS - Application Initialization
 * 
 * This module initializes the application and coordinates
 * between all services and the UI engine.
 */

class KeonLabsApp {
    constructor() {
        this.user = null;
        this.businessLogic = null;
        this.dbService = null;
        this.uiEngine = null;
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            console.log('Initializing KLPB Budget App...');

            // Initialize UI Engine
            if (typeof uiEngine !== 'undefined') {
                this.uiEngine = uiEngine;
                this.uiEngine.init();
            }

            // Initialize Business Logic
            if (typeof businessLogic !== 'undefined') {
                this.businessLogic = businessLogic;
            }

            // Initialize Database Service
            if (typeof dbService !== 'undefined') {
                this.dbService = dbService;
            }

            // Load user data if available
            const userId = localStorage.getItem('userId');
            if (userId) {
                await this.loadUserData(userId);
            }

            console.log('KLPB Budget App initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showError('Failed to initialize application');
        }
    }

    /**
     * Load user data from database
     * @param {string} userId - User ID
     */
    async loadUserData(userId) {
        try {
            if (this.dbService) {
                const userData = await this.dbService.loadUserData(userId);
                if (userData) {
                    this.user = userData;
                    if (this.uiEngine) {
                        this.uiEngine.updateProfileDisplay(userData);
                    }
                }
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }

    /**
     * Save user data to database
     * @param {object} data - Data to save
     */
    async saveUserData(data) {
        try {
            const userId = localStorage.getItem('userId');
            if (userId && this.dbService) {
                await this.dbService.syncUserData(userId, data);
                this.user = { ...this.user, ...data };
                if (this.uiEngine) {
                    this.uiEngine.showNotification('Data saved successfully');
                }
            }
        } catch (error) {
            console.error('Error saving user data:', error);
            this.showError('Failed to save data');
        }
    }

    /**
     * Show error message
     * @param {string} message - Error message
     */
    showError(message) {
        if (this.uiEngine) {
            this.uiEngine.showNotification(message, 5000);
        }
    }
}

// Create global app instance
const app = new KeonLabsApp();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KeonLabsApp, app };
}
