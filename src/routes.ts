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

  // Orb of Creation wiki routes
  Play = '/play-online',
  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  Spells = '/spells',
  Research = '/research',
  Rituals = '/rituals',
  AlchemyDruidry = '/guides/alchemy-druidry',
  NewGamePlus = '/guides/new-game-plus',
  Steam = '/steam',
  Download = '/download',
  ItchIo = '/itch-io',
  Discord = '/discord',
  Mobile = '/mobile',

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
