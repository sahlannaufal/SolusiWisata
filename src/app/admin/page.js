import ArticleForm from '@/component/article/ArticleForm';
import ArmadaForm from '@/component/armada/ArmadaForm';
import PaketForm from '@/component/paketTour/PaketForm';
import Tiptap from '@/component/Tiptap';

const AdminPage = async () => {



  return (
    <section>
      <div className='container'>
      </div>
      <ArticleForm/>
      <ArmadaForm/>
      <PaketForm />
    </section>
  )
}

export default AdminPage;
