import ButtonPesanSekarang from '../button/ButtonPesanSekarang'

function CardArmada({item}) {
  return (
          <div key={item.id} className=' w-80 rounded-3xl border-2'>
              <div className='relative h-80 overflow-hidden rounded-t-3xl'>
                <img className='absolute' src={`http://103.149.177.42:3333/${item.foto}`} alt="foto" />
              </div>
              <div className='space-y-4 mx-8 my-4'>
                <div className='space-y-1'>
                  <p className='font-bold text-xl leading-tight'>{item.merk} ({item.jenis})</p>
                      <ul class="list-disc text-base text-gray-600">
                          <li>{item.seat}</li>
                          <li>{item.fitur}</li>
                          <li>Tarif: {item.harga}</li>
                      </ul>
                </div>
                <div className='flex justify-end'>
                  <div className=''>
                  <ButtonPesanSekarang nama="Pesan Armada" />
                  </div>
                </div>
              </div>
            </div>
  );
}

export default CardArmada