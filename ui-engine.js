/**
 * KEONLABS - UI Engine
 * 
 * This module handles all user interface rendering and interactions.
 * It's completely separated from business logic and database operations.
 */

class UIEngine {
    constructor() {
        this.currentPage = 'dashboard';
        this.init();
    }

    /**
     * Initialize UI engine and set up event listeners
     */
    init() {
        try {
            this.setupNavigation();
            this.setupModals();
            this.setupIntroSplash();
            console.log('UI Engine initialized');
        } catch (error) {
            console.error('Error initializing UI Engine:', error);
        }
    }

    /**
     * Setup navigation listeners
     */
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const pageName = e.target.dataset.page;
                this.switchPage(pageName);
            });
        });

        const profileBtn = document.getElementById('profileBtn');
        if (profileBtn) {
            profileBtn.addEventListener('click', () => this.openProfileModal());
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
    }

    /**
     * Switch to a different page
     * @param {string} pageName - Page name to switch to
     */
    switchPage(pageName) {
        // Remove active class from all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        // Remove active class from all nav items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));

        // Add active class to current page
        const currentPage = document.getElementById(`page-${pageName}`);
        if (currentPage) {
            currentPage.classList.add('active');
        }

        // Add active class to current nav item
        const currentNavItem = document.querySelector(`[data-page="${pageName}"]`);
        if (currentNavItem) {
            currentNavItem.classList.add('active');
        }

        this.currentPage = pageName;
    }

    /**
     * Setup modal listeners
     */
    setupModals() {
        const modalCancel = document.getElementById('modalCancel');
        if (modalCancel) {
            modalCancel.addEventListener('click', () => this.closeModal());
        }

        const closeProfileBtn = document.getElementById('closeProfileModal');
        if (closeProfileBtn) {
            closeProfileBtn.addEventListener('click', () => this.closeProfileModal());
        }

        const editProfileBtn = document.getElementById('editProfileBtn');
        if (editProfileBtn) {
            editProfileBtn.addEventListener('click', () => this.editProfile());
        }
    }

    /**
     * Setup intro splash screen
     */
    setupIntroSplash() {
        const skipBtn = document.querySelector('#introSplash .skip-btn');
        const introSplash = document.getElementById('introSplash');
        const video = introSplash?.querySelector('video');

        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                this.hideIntroSplash();
            });
        }

        if (video) {
            video.addEventListener('ended', () => {
                this.hideIntroSplash();
            });
        }

        // Auto-hide splash after 10 seconds
        setTimeout(() => {
            this.hideIntroSplash();
        }, 10000);
    }

    /**
     * Hide intro splash screen and show app
     */
    hideIntroSplash() {
        const introSplash = document.getElementById('introSplash');
        const appContainer = document.getElementById('app');

        if (introSplash && !introSplash.classList.contains('hidden')) {
            introSplash.classList.add('hidden');
            if (appContainer) {
                appContainer.style.display = 'flex';
            }
        }
    }

    /**
     * Open custom modal
     * @param {string} title - Modal title
     * @param {string} content - Modal content HTML
     * @param {function} onConfirm - Callback on confirm
     */
    openModal(title, content, onConfirm) {
        const modal = document.getElementById('customModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        const modalConfirm = document.getElementById('modalConfirm');

        if (modalTitle) modalTitle.textContent = title;
        if (modalContent) modalContent.innerHTML = content;

        if (modalConfirm) {
            modalConfirm.onclick = () => {
                if (onConfirm) onConfirm();
                this.closeModal();
            };
        }

        if (modal) {
            modal.classList.add('open');
        }
    }

    /**
     * Close custom modal
     */
    closeModal() {
        const modal = document.getElementById('customModal');
        if (modal) {
            modal.classList.remove('open');
        }
    }

    /**
     * Open profile modal
     */
    openProfileModal() {
        const profileModal = document.getElementById('profileModal');
        if (profileModal) {
            profileModal.classList.add('open');
        }
    }

    /**
     * Close profile modal
     */
    closeProfileModal() {
        const profileModal = document.getElementById('profileModal');
        if (profileModal) {
            profileModal.classList.remove('open');
        }
    }

    /**
     * Edit user profile
     */
    editProfile() {
        this.openModal('Edit Profile', '<p>Profile editing feature coming soon</p>', () => {
            this.showNotification('Profile updated');
        });
    }

    /**
     * Show notification message
     * @param {string} message - Message to show
     * @param {number} duration - Duration in ms (default: 3000)
     */
    showNotification(message, duration = 3000) {
        const notification = document.getElementById('customNotification');
        if (notification) {
            notification.textContent = message;
            notification.style.display = 'block';

            setTimeout(() => {
                notification.style.display = 'none';
            }, duration);
        }
    }

    /**
     * Update profile display
     * @param {object} userData - User data object
     */
    updateProfileDisplay(userData) {
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileAvatar = document.getElementById('profileAvatar');

        if (profileName && userData.name) {
            profileName.textContent = userData.name;
        }
        if (profileEmail && userData.email) {
            profileEmail.textContent = userData.email;
        }
        if (profileAvatar && userData.avatar) {
            profileAvatar.src = userData.avatar;
        }
    }

    /**
     * Logout user
     */
    logout() {
        localStorage.removeItem('userId');
        this.showNotification('Logged out successfully');
        // Reload page or redirect to login
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

// Create and export UI engine instance
const uiEngine = new UIEngine();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UIEngine, uiEngine };
}
