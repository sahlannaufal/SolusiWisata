
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const AdminPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  console.log(session);
  return (
    <section>
      <div className='container'>
        <h2> you are logged in as:</h2>
        <p>{session?.user?.email}</p>
      </div>
    </section>
  )
}



export default AdminPage;
