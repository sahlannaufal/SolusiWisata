'use client'
import ArticleForm from '@/component/article/ArticleForm';
import ArmadaForm from '@/component/armada/ArmadaForm';
import PaketForm from '@/component/paketTour/PaketForm';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getTokenUserFromLocalStorage } from '@/utils/TokenManager';

function AdminPage() {

  const router = useRouter();

  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = getTokenUserFromLocalStorage();
    if (token) {
      setIsLogin(true);
    } else {
      router.push('/auth/login')
    }
  }, []);

  if (!isLogin) {
    return null; // Render nothing while redirecting
  }

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
