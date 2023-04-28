import React from 'react'
import FormLeft from '../layouts/Form/FormLeft'
import ContentTicket from 'layouts/ContentTicket'

type Props = {}

const EventDetailPage = (props: Props) => {
  return (
    <div>
      <h2 className='title'>Sự kiện 1</h2>
      <div className='mt-10 w-full'>
        <FormLeft>
          <div className='flex gap-x-5'>
            <div className='w-[30%] flex-shrink-0'>
              <div className='flex flex-col gap-5'>
                <div className='h-[200px]'>
                  <img
                    src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80'
                    alt=''
                    className='h-full w-full object-cover'
                  />
                </div>
                <ContentTicket
                  title='Đầm sen Park'
                  dayTime='30/05/2021 - 01/06/2021'
                  price={'25.000 VNĐ'}
                ></ContentTicket>
              </div>
            </div>
            <div className='flex-grow'>
              <div className='columns-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quisquam quia soluta saepe recusandae,
                eveniet tempore ea, sequi aperiam mollitia nesciunt quasi modi doloremque? Eius eos hic alias odio
                magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere reprehenderit quae
                accusamus repellat ex ducimus in soluta commodi, natus quia exercitationem perspiciatis dolorem ipsam
                nisi error ullam hic delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quisquam
                quia soluta saepe recusandae, eveniet tempore ea, sequi aperiam mollitia nesciunt quasi modi doloremque?
                Eius eos hic alias odio magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere
                reprehenderit quae accusamus repellat ex ducimus in soluta commodi, natus quia exercitationem
                perspiciatis dolorem ipsam nisi error ullam hic delectus. Lorem ipsum dolyaor sit amet consectetur,
                adipisicing elit. Nobis, quisquam quia soluta saepe recusandae, eveniet tempore ea, sequi aperiam
                mollitia nesciunt quasi modi doloremque? Eius eos hic alias odio magnam. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nobis, quisquam quia soluta saepe recusandae, eveniet tempore ea, sequi
                aperiam mollitia nesciunt quasi modi doloremque? Eius eos hic alias odio magnam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Omnis facere reprehenderit quae accusamus repellat ex ducimus in
                soluta commodi, natus quia exercitationem perspiciatis dolorem ipsam nisi error ullam hic delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quisquam quia soluta saepe recusandae,
                eveniet tempore ea, sequi aperiam mollitia nesciunt quasi modi doloremque? Eius eos hic alias odio
                magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere reprehenderit quae
                accusamus repellat ex ducimus in soluta commodi, natus quia exercitationem perspiciatis dolorem ipsam
                nisi error ullam hic delectus. Lorem ipsum dolyaor sit amet consectetur, adipisicing elit. Nobis,
                quisquam quia soluta saepe recusandae, eveniet tempore ea, sequi aperiam mollitia nesciunt quasi modi
                doloremque? Eius eos hic alias odio magnam.
              </div>
            </div>
          </div>
        </FormLeft>
      </div>
    </div>
  )
}

export default EventDetailPage
