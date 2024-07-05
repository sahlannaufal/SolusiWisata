import { redirect } from 'next/navigation';
import ArticleForm from '@/component/article/ArticleForm';
import ArmadaForm from '@/component/armada/ArmadaForm';

const AdminPage = async () => {



  return (
    <section>
      <div className='container'>
      </div>
      <ArticleForm/>
      <ArmadaForm/>
    </section>
  )
}

export default AdminPage;
