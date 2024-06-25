// import React, { useContext, useState } from "react";
// import { usePagination } from "react-paginate"; // استيراد الدالة من المكتبة
// import { Pagination } from "react-paginate"; // استيراد مكون Pagination
// import { MoviesContext } from "../MovieContext/MovieContext";
// function PageMovies() {
//   const { moviesList } = useContext(MoviesContext);
//   // const [items, setItems] = useState([
//   //   // بياناتك هنا
//   // ]);

//   const itemsPerPage = 10; // عدد العناصر في كل صفحة
//   const {
//     pageCount, // عدد الصفحات الإجمالي
//     handlePageClick, // دالة تُنفذ عند النقر على زر الدفع
//     currentPage, // رقم الصفحة الحالية
//   } = usePagination({
//     itemCount: moviesList.length, // عدد العناصر الإجمالي
//     perPage: itemsPerPage, // عدد العناصر في كل صفحة
//   });

//   const displayedItems = moviesList.slice(
//     (currentPage - 1) * itemsPerPage, // بداية العناصر التي سيتم عرضها
//     currentPage * itemsPerPage // نهاية العناصر التي سيتم عرضها
//   );

//   return (
//     <div>
//       {/* عرض العناصر */}
//       {displayedItems.map((item, index) => (
//         <div key={index}>{item}</div>
//       ))}

//       {/* أزرار الدفع */}
//       <Pagination
//         pageCount={pageCount} // عدد الصفحات الإجمالي
//         onPageChange={handlePageClick} // دالة تُنفذ عند النقر على زر الدفع
//         currentPage={currentPage} // رقم الصفحة الحالية
//       />
//     </div>
//   );
// }

// export default PageMovies;
