import ReactPaginate from 'react-paginate';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export default function Pagination() {
    const pageCount = 10;
    return (
        <ReactPaginate
          activeClassName={'bg-teal-500 text-white'}
          breakClassName={'py-[0.075rem] px-2 border border-r-0 border-teal-500 text-teal-800'}
          breakLabel={'...'}
          containerClassName={'flex items-center'}
          disabledClassName={'disabled-page'}
          marginPagesDisplayed={2}
          nextClassName={"py-[0.075rem] border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white"}
          nextLabel={<BiRightArrowAlt className='w-full h-full py-1 px-1' />}
          onPageChange={() => null}
          pageCount={pageCount}
          pageLinkClassName={'px-2 py-[0.0.075rem] text-xs'}
          pageClassName={'py-[0.075rem] border border-r-0 border-teal-500  text-teal-600 hover:bg-teal-500 hover:text-white font-semibold '}
          pageRangeDisplayed={2}
          previousClassName={"py-[0.075rem] border border-r-0 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white"}
          previousLabel={<BiLeftArrowAlt className='w-full h-full py-1 px-1 ' />}
        />
    )
}
