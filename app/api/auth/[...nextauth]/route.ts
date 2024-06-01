import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

export const authOptions = {
  providers: [
    Github({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
};

export const AuthHandler = NextAuth(authOptions);

export { AuthHandler as GET, AuthHandler as POST };
