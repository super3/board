// GitHub Integration for Dashban Kanban Board - Main Coordinator
// This file coordinates the three GitHub modules: Auth, API, and UI

// Initialize GitHub integration when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Initializing GitHub integration...');
    
    // Initialize authentication modal listeners
    window.GitHubAuth.initializeAuthModalListeners();
    
    // Initialize GitHub authentication
    window.GitHubAuth.initializeGitHubAuth();
    
    // Load GitHub issues
    window.GitHubAPI.initializeGitHubIssues();
    
    console.log('✅ GitHub integration initialized');
});

// Export functions to global scope for access from kanban.js and backward compatibility
// This maintains the original window.GitHub interface
window.GitHub = {
    // Configuration (from GitHubAuth)
    GITHUB_CONFIG: window.GitHubAuth.GITHUB_CONFIG,
    githubAuth: window.GitHubAuth.githubAuth,
    
    // Authentication functions (from GitHubAuth)
    initializeGitHubAuth: window.GitHubAuth.initializeGitHubAuth,
    signInWithGitHub: window.GitHubAuth.signInWithGitHub,
    handleInstallationCallback: window.GitHubAuth.handleInstallationCallback,
    validateAndSetToken: window.GitHubAuth.validateAndSetToken,
    validateAndSetInstallation: window.GitHubAuth.validateAndSetInstallation,
    signOutGitHub: window.GitHubAuth.signOutGitHub,
    updateGitHubSignInUI: window.GitHubAuth.updateGitHubSignInUI,
    updateGitHubOptionUI: window.GitHubAuth.updateGitHubOptionUI,
    promptForAccessToken: window.GitHubAuth.promptForAccessToken,
    
    // Modal functions (from GitHubAuth)
    showGitHubTokenModal: window.GitHubAuth.showGitHubTokenModal,
    hideGitHubTokenModal: window.GitHubAuth.hideGitHubTokenModal,
    
    // API functions (from GitHubAPI)
    createGitHubIssue: window.GitHubAPI.createGitHubIssue,
    loadGitHubIssues: window.GitHubAPI.loadGitHubIssues,
    archiveGitHubIssue: window.GitHubAPI.archiveGitHubIssue,
    updateGitHubIssueLabels: window.GitHubAPI.updateGitHubIssueLabels,
    closeGitHubIssue: window.GitHubAPI.closeGitHubIssue,
    initializeGitHubIssues: window.GitHubAPI.initializeGitHubIssues,
    
    // UI functions (from GitHubUI)
    renderMarkdown: window.GitHubUI.renderMarkdown,
    createGitHubIssueElement: window.GitHubUI.createGitHubIssueElement,
    extractPriorityFromLabels: window.GitHubUI.extractPriorityFromLabels,
    extractCategoryFromLabels: window.GitHubUI.extractCategoryFromLabels,
    createSkeletonCard: window.GitHubUI.createSkeletonCard,
    updateCardIndicators: window.GitHubUI.updateCardIndicators,
    applyReviewIndicatorsToColumn: window.GitHubUI.applyReviewIndicatorsToColumn,
    applyCompletedSectionsToColumn: window.GitHubUI.applyCompletedSectionsToColumn,
    addReviewIndicator: window.GitHubUI.addReviewIndicator,
    removeReviewIndicator: window.GitHubUI.removeReviewIndicator,
    addCompletedSection: window.GitHubUI.addCompletedSection,
    removeCompletedSection: window.GitHubUI.removeCompletedSection
}; 