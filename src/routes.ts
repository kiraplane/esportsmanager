import { websiteConfig } from './config/website';

/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // legal pages
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  // Esports Manager 2026 wiki routes
  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  CreateOrganization = '/guides/create-organization',
  ScoutingTransfers = '/guides/scouting-transfers',
  ContractsBudget = '/guides/contracts-budget',
  TrainingMorale = '/guides/training-morale',
  BestTactics = '/best-tactics',
  TournamentsMajors = '/guides/tournaments-majors',
  SponsorsBrand = '/guides/sponsors-brand',
  ReleaseDate = '/release-date',
  Demo = '/demo',
  Platforms = '/platforms',
  SteamDeck = '/steam-deck',
  Emdb = '/emdb',
  Review = '/review',
  ModsAndCheats = '/mods-and-cheats',
  Download = '/download',
  Discord = '/discord',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers: Routes[] = [];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes: Routes[] = [];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
