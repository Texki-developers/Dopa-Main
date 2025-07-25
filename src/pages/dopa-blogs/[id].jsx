// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { starpiInstance } from '@/config/strapiInstance';
// import MainLayout from '@/Layouts/MainLayout';

// // Enhanced rich text renderer
// const renderRichText = (content) => {
//   if (!content || !Array.isArray(content)) return null;
  
//   return content.map((block, index) => {
//     switch (block.type) {
//       case 'paragraph':
//         return (
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             key={index} 
//             className="mb-8 text-gray-700 leading-relaxed text-lg"
//           >
//             {block.children?.map((child, i) => {
//               if (child.bold) return <strong key={i} className="font-semibold text-gray-900">{child.text}</strong>;
//               if (child.italic) return <em key={i} className="italic">{child.text}</em>;
//               if (child.underline) return <u key={i} className="underline decoration-primary-300">{child.text}</u>;
//               return <span key={i}>{child.text}</span>;
//             })}
//           </motion.p>
//         );
//       case 'heading':
//         const HeadingTag = `h${block.level || 2}`;
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <HeadingTag 
//               key={index} 
//               className={`text-${7 - (block.level || 2)}xl font-bold my-8 text-darkBlue`}
//             >
//               {block.children?.[0]?.text || ''}
//             </HeadingTag>
//           </motion.div>
//         );
//       case 'image':
//         return (
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             key={index} 
//             className="my-12"
//           >
//             <div className="rounded-lg overflow-hidden">
//               <img
//                 src={block.image?.url}
//                 alt={block.caption?.[0]?.text || 'Blog content image'}
//                 className="w-full h-auto"
//               />
//             </div>
//             {block.caption?.[0]?.text && (
//               <p className="text-center text-sm text-gray-500 mt-4 italic">
//                 {block.caption[0].text}
//               </p>
//             )}
//           </motion.div>
//         );
//       case 'list':
//         const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
//         return (
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <ListTag 
//               key={index} 
//               className={`my-6 ${block.format === 'ordered' ? 'list-decimal pl-8' : 'list-disc pl-8'}`}
//             >
//               {block.children?.map((item, itemIndex) => (
//                 <li key={itemIndex} className="mb-3 text-gray-700 text-lg">
//                   {item.children?.[0]?.text}
//                 </li>
//               ))}
//             </ListTag>
//           </motion.div>
//         );
//       default:
//         return null;
//     }
//   });
// };

// export default function BlogPost({ blog, recommendedBlogs, error }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-pulse flex space-x-6 p-8">
//           <div className="rounded-full bg-primary-100 h-16 w-16"></div>
//           <div className="flex-1 space-y-6 py-2">
//             <div className="h-4 bg-primary-100 rounded w-3/4"></div>
//             <div className="space-y-4">
//               <div className="h-4 bg-primary-100 rounded"></div>
//               <div className="h-4 bg-primary-100 rounded w-5/6"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !blog) {
//     return (
//       <MainLayout>
//         <div className="min-h-[70vh] flex items-center justify-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-md w-full text-center"
//           >
//             <h2 className="text-2xl font-bold text-red-500 mb-4">Error Loading Blog Post</h2>
//             <p className="text-gray-600 mb-6">
//               {error || 'The requested blog post could not be found.'}
//             </p>
//             <Link 
//               href="/dopa-blogs" 
//               className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300"
//             >
//               Back to Blogs
//             </Link>
//           </motion.div>
//         </div>
//       </MainLayout>
//     );
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <MainLayout>
//       <Head>
//         <title>{blog?.data?.attributes?.blogtitle || 'Blog Post'} | Dopa Blogs</title>
//         <meta name="description" content={blog?.data?.attributes?.description || ''} />
//         <meta property="og:title" content={blog?.data?.attributes?.blogtitle || 'Blog Post'} />
//         <meta property="og:description" content={blog?.data?.attributes?.description || ''} />
//         {blog?.data?.attributes?.thumbnail?.data && (
//           <meta property="og:image" content={`${process.env.NEXT_PUBLIC_STRAPIE_IMAGE}${blog?.data?.attributes?.thumbnail?.data?.attributes?.url}`} />
//         )}
//       </Head>

//       <main className="min-h-screen bg-white mt-[3rem]">
//         <div className="w-[80%] mx-auto py-12">
//           {/* Breadcrumbs */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-8"
//           >
//             <nav className="flex items-center space-x-2 text-sm text-gray-500">
//               <Link href="/" className="hover:text-primary-500 transition-colors">
//                 Home
//               </Link>
//               <span>/</span>
//               <Link href="/dopa-blogs" className="hover:text-primary-500 transition-colors">
//                 Blogs
//               </Link>
//               <span>/</span>
//               <span className="text-primary-500 truncate max-w-[200px]">
//                 {blog?.data?.attributes?.blogtitle}
//               </span>
//             </nav>
//           </motion.div>

//           <article>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-8"
//             >
//               <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
//                 <time>{formatDate(blog?.data?.attributes?.publishedAt)}</time>
//                 {blog?.data?.attributes?.category && (
//                   <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
//                     {blog?.data?.attributes?.category}
//                   </span>
//                 )}
//               </div>

//               <h1 className="text-4xl font-bold text-darkBlue mb-8">
//                 {blog?.data?.attributes?.blogtitle || 'Untitled Blog'}
//               </h1>
//             </motion.div>

//             {blog?.data?.attributes?.thumbnail?.data && (
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-12"
//               >
//                 <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
//                   <img
//                     src={`${process.env.NEXT_PUBLIC_STRAPIE_IMAGE}${blog?.data?.attributes?.thumbnail?.data?.attributes?.url}`}
//                     alt={blog?.data?.attributes?.blogtitle || 'Blog Thumbnail'}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             )}
            
//             <div className="prose prose-lg max-w-none">
//               {blog?.data?.attributes?.content && renderRichText(blog?.data?.attributes?.content)}
//             </div>
//           </article>

//           {/* Recommended Blogs Section */}
//           {recommendedBlogs?.length > 0 && (
//             <motion.section
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mt-24 border-t border-gray-100 pt-16"
//             >
//               <h2 className="text-3xl font-bold text-darkBlue mb-8">
//                 Recommended Reads
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {recommendedBlogs.map((recBlog) => (
//                   <Link
//                     key={recBlog.id}
//                     href={`/dopa-blogs/${recBlog.id}`}
//                     className="group block bg-white rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 border border-primary-100 hover:border-primary-200"
//                   >
//                     {recBlog.attributes.thumbnail?.data && (
//                       <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
//                         <img
//                           src={`${process.env.NEXT_PUBLIC_STRAPIE_IMAGE}${recBlog.attributes.thumbnail.data.attributes.formats.thumbnail.url}`}
//                           alt={recBlog.attributes.blogtitle}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                       </div>
//                     )}
//                     <div className="p-6">
//                       <div className="flex items-center space-x-4 mb-4">
//                         <time className="text-sm text-gray-500 font-medium">
//                           {new Date(recBlog.attributes.publishedAt).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                           })}
//                         </time>
//                         {recBlog.attributes.category && (
//                           <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
//                             {recBlog.attributes.category}
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="text-xl font-bold text-darkBlue mb-3 group-hover:text-primary-500 transition-colors line-clamp-2 min-h-[3rem]">
//                         {recBlog.attributes.blogtitle}
//                       </h3>
//                       <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">
//                         {recBlog.attributes.description || "No description available"}
//                       </p>
//                       <div className="flex items-center text-primary-500 font-medium pt-3 border-t border-gray-100">
//                         Read Article
//                         <svg
//                           className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </motion.section>
//           )}

//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-16 pt-8 border-t border-gray-100"
//           >
//             <Link 
//               href="/dopa-blogs" 
//               className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group"
//             >
//               <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//               Back to All Blogs
//             </Link>
//           </motion.div>
//         </div>
//       </main>
//     </MainLayout>
//   );
// }

// export async function getStaticPaths() {
//   try {
//     starpiInstance.defaults.headers.common["Authorization"] = 
//       `Bearer ${process.env.NEXT_PUBLIC_STRAPIE_TOKEN}`;
//     starpiInstance.defaults.headers.common["Content-Type"] = "application/json";

//     const response = await starpiInstance.get(
//       "/api/dopa-blogs?fields[0]=id&pagination[pageSize]=100"
//     );

//     const blogs = response.data?.data || [];
//     const paths = blogs.map((blog) => ({
//       params: { id: blog.id.toString() },
//     }));

//     return {
//       paths,
//       fallback: 'blocking',
//     };
//   } catch (error) {
//     console.error("Error generating paths:", error);
//     return {
//       paths: [],
//       fallback: 'blocking',
//     };
//   }
// }

// export async function getStaticProps({ params }) {
//   try {
//     starpiInstance.defaults.headers.common["Authorization"] = 
//       `Bearer ${process.env.NEXT_PUBLIC_STRAPIE_TOKEN}`;
//     starpiInstance.defaults.headers.common["Content-Type"] = "application/json";

//     // Fetch current blog
//     const response = await starpiInstance.get(
//       `/api/dopa-blogs/${params.id}?populate=*`
//     );

//     if (!response.data?.data) {
//       return {
//         notFound: true,
//       };
//     }

//     // Fetch recommended blogs (excluding current blog)
//     const currentBlog = response.data.data;
//     const recommendedResponse = await starpiInstance.get(
//       `/api/dopa-blogs?populate=*&filters[id][$ne]=${params.id}&pagination[limit]=3&sort=publishedAt:desc`
//     );

//     return {
//       props: {
//         blog: response.data,
//         recommendedBlogs: recommendedResponse.data?.data || [],
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error(`Error fetching blog post ${params.id}:`, error);
//     return {
//       props: {
//         blog: null,
//         recommendedBlogs: [],
//         error: 'Failed to load blog post. Please try again later.',
//       },
//       revalidate: 10,
//     };
//   }
// }

import React from 'react'

export default function  index() {
  return (
    <div>index</div>
  )
}
