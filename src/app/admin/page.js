import { redirect } from 'next/navigation';
import ArticleForm from '@/component/article/ArticleForm';

const AdminPage = async () => {



  return (
    <section>
      <div className='container'>
        <h2> you are logged in as:</h2>
      </div>
      <ArticleForm/>
    </section>
  )
}

export default AdminPage;
