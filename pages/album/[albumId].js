import axios from "axios";
import AlbumPage from "../../src/pagesContainer/albumPage/AlbumPage";

const index = ({ songs }) => <AlbumPage songs={songs} />;

export default index;

// export async function getStaticProps(context) {
//     const { albumId } = context.params;
//     const { data } = await axios.get(`${process.env.base_url}/songs/${albumId.replace(/-/g, " ")}`);

//     // if (!data?.length) {
//     //     return { notFound: true };
//     // }

//     return {
//         props: {
//             songs: data,
//         },
//         revalidate: 1800,
//     };
// }

// export async function getStaticPaths() {
//     const albumIds = [
//         "Love Divine 7",
//         "Love Divine 6",
//         "Love Divine 5",
//         "Love Divine 4",
//         "Love Divine 3",
//         "Love Divine 2",
//         "Love Divine 1",
//     ];
//     const pathWithParams = albumIds.map((id) => ({ params: { albumId: id } }));

//     // if you provide all possible ids so "next" will pre-generate all pages in advance of these ids so the use { fallback:false } otherwise use { fallback:true }.
//     return {
//         paths: pathWithParams,
//         fallback: true,

//         // paths: [{ params: { albumId: "p1" } }, { params: { albumId: "p2" } }],
//         // fallback: true,

//         // by this replacement of this file will execute after the page fully loaded on server-side.
//         // fallback: "blocking",
//     };
// }
