import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { authenticatedStrapiInstance } from "@/config/strapiInstance";
import MainLayout from "@/Layouts/MainLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BlogList({ initialBlogs, pagination, error }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [currentPage, setCurrentPage] = useState(pagination?.page || 1);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = async (page) => {
    if (page < 1 || page > pagination.pageCount || isLoading) return;

    setIsLoading(true);
    try {
      const response = await starpiInstance.get(
        `/api/dopa-blogs?populate=*&pagination[page]=${page}&sort=publishedAt:desc`
      );

      const newData = response.data?.data || [];
      setBlogs(newData);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Error fetching paginated blogs:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <MainLayout>
        <div className="min-h-[70vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full text-center"
          >
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Head>
        <title>Dopa Blogs</title>
        <meta name="description" content="Latest blogs from Dopa" />
      </Head>

      <main className="min-h-screen bg-white mt-[3rem]">
        <div className="w-[80%] mx-auto py-12">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-primary-500">Blogs</span>
            </nav>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold text-darkBlue mb-4 font-montserrat">
              Dopa Blogs
            </h1>
            <p className="text-gray-600 text-lg">
              Stay updated with our latest news, articles, and educational
              content.
            </p>
          </motion.div>

          {isLoading && (
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-primary-100 border-opacity-20"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-t-primary-500 animate-spin"></div>
                </div>
                <p className="mt-6 text-gray-700 font-medium">
                  Loading blogs...
                </p>
              </div>
            </div>
          )}

          {blogs?.length > 0 ? (
            <>
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
              >
                {blogs.map((blog) => (
                  <motion.div key={blog.id} variants={item}>
                    <Link
                      href={`/dopa-blogs/${blog.id}`}
                      className="group block bg-white rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 border border-primary-100 hover:border-primary-200"
                    >
                      {blog.attributes.thumbnail?.data && (
                        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                          <img
                            src={`${process.env.NEXT_PUBLIC_STRAPIE_IMAGE}${blog.attributes.thumbnail.data.attributes.formats.thumbnail.url}`}
                            alt={blog.attributes.blogtitle}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <time className="text-sm text-gray-500 font-medium">
                            {new Date(blog.attributes.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                          {blog.attributes.category && (
                            <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                              {blog.attributes.category}
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold text-darkBlue mb-4 group-hover:text-primary-500 transition-colors line-clamp-2 min-h-[4rem]">
                          {blog.attributes.blogtitle}
                        </h2>
                        <p className="text-gray-600 mb-6 line-clamp-3 min-h-[4.5rem]">
                          {blog.attributes.description ||
                            "No description available"}
                        </p>
                        <div className="flex items-center text-primary-500 font-medium pt-4 border-t border-gray-100">
                          Read Article
                          <svg
                            className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {pagination?.pageCount >= 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center mt-16"
                >
                  <nav className="flex items-center gap-3 bg-white rounded-xl p-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1 || isLoading}
                      className="px-5 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-gray-50 flex items-center font-medium transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    
                    {Array.from(
                      { length: Math.min(5, pagination.pageCount) },
                      (_, i) => {
                        const pageNum = Math.max(
                          1,
                          Math.min(
                            currentPage - 2 + i,
                            pagination.pageCount -
                              4 +
                              Math.max(
                                0,
                                4 - (pagination.pageCount - currentPage + 1)
                              )
                          )
                        );
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center font-medium transition-all duration-300 ${
                              currentPage === pageNum
                                ? "bg-primary-500 text-white"
                                : "bg-gray-50 hover:bg-gray-100"
                            }`}
                            disabled={isLoading}
                          >
                            {pageNum}
                          </button>
                        );
                      }
                    )}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={
                        currentPage === pagination.pageCount || isLoading
                      }
                      className="px-5 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-gray-50 flex items-center font-medium transition-all duration-300"
                    >
                      Next
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </nav>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-xl"
            >
              <p className="text-gray-600 text-lg">
                No blogs found at the moment.
              </p>
              <p className="text-gray-500 mt-2">
                Please check back later for new content.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </MainLayout>
  );
}

export async function getStaticProps() {
  try {
   

    const response = await authenticatedStrapiInstance.get(
      "/api/dopa-blogs?populate=*&pagination[page]=1&pagination[pageSize]=9&sort=publishedAt:desc"
    );
    console.log(response.data.meta.pagination);
    return {
      props: {
        initialBlogs: response.data?.data || [],
        pagination: response.data?.meta?.pagination || {
          page: 1,
          pageCount: 1,
          total: 0,
          pageSize: 9,
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        initialBlogs: [],
        pagination: { page: 1, pageCount: 1, total: 0, pageSize: 9 },
        error: "Failed to load blogs. Please try again later.",
      },
      revalidate: 10,
    };
  }
}
