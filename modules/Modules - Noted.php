<?php
//@ Property Validation
//? Dalam memvalidasi properti component, React merekomendasikan kita untuk menggunakan tools bernama PropTypes
//? agar kita tidak perlu menulis secara manual menggunakan if untuk memvalidasi type data
//? PropTypes.arrayOf; untuk validasi array, dengan type spesifik ( string/number/bool)
//? PropTypes.objectOf; untuk validasi object, dengan type yg sama dlm satu obj ( string/number/bool)
//? PropTypes.oneOf: Nilai props yang diberikan pada component harus salah satu nilai sesuai yang didefinisikan pada PropTypes.oneOf.
//? PropTypes.func: Nilai props yang diberikan pada component harus bertipe function.
//? dll

//@ React Router
//? SPA, akan mengunduh seluruh konten website sekaligus, jdi web tidak akan render lg ketika pindah halaman
//? tetapi biasanya konten yang diunduh hanya konten statis yang esensial dalam menampilkan UI ( header, sidebar dll)
//~ React Router component
/// BrowserRouter; berperan sebagai pembungkus (wrapper) | <BrowserRouter>
/// Link; sama seperti tag a | <Link to={user.id}>{user.name}</Link>
/// Routes dan Route; mendefinisikan komponen atau halaman apa yang ditampilkan berdasarkan URL | <Route path="/" element={<Dashboard />} />
//~ Path dan Query Parameter
//? path; menyisipkan sebuah data dengan memanfaatkan URL, jadi seperti dynamic param
/// <Route path="/company/:name" element={<CompanyDetailPage />} />
/// param name diambil dari component companyDetailPage
//? query param; url yg memiliki 2 param, /company/search?name=dicoding&location=bandung
//? useParams(): mengembalikan objek yang nilai propertinya merupakan path parameter dari URL yang aktif.
//? useNavigate(): mengembalikan fungsi yang digunakan untuk menavigasi halaman secara terprogram (programatically).
//? hooks, tidak dapat digunakan pada class, hanya pada functional component
