import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
    
            const data = await response.json();
            const user = data?.data?.user;
            const token = data?.data?.token;

            console.log(user);
            return {
              ...user,
              ...token,
            }; // Assuming the endpoint returns user data on successful login
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
  callbacks: {
    jwt({token, user}) {
    if(!user) return token

      return {
      ...token,
      id: user.id
    }
  },
  session({session, token}) {
    return {
      ...session,
      id: token.id
    }
  },
},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
