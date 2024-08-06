import type { NextAuthConfig } from 'next-auth';
import { locales } from './get-locale';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnDashboard = locales
        .map((locale) => `/${locale}/dashboard`)
        .some((dashboardPath) => nextUrl.pathname.startsWith(dashboardPath));
      console.log(`***** authorized isLoggedIn: ${isLoggedIn}, isOnDashboard: ${isOnDashboard}`);
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;