import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';


export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        
        try {
            const response = await fetch('http://103.149.177.42:3333/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const user = await response.json();
            return user; // Assuming the endpoint returns user data on successful login
        } catch (error) {
            console.error('Error during authorization:', error);
            return null;
        }

      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
