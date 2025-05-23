import React from "react";
import { Link, usePage, router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Index() {
    const { articles, authUserId } = usePage().props;

    const handleDelete = (id) => {
        if (confirm("Voulez-vous vraiment supprimer cet article ?")) {
            router.delete(`/articles/${id}`);
        }
    };

    return (
        <AppLayout>
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Articles
                    </h1>
                    <Link
                        href="/articles/create"
                        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                               text-white px-5 py-2 rounded-md shadow-md
                               transition-colors duration-200"
                    >
                        + Nouvel article
                    </Link>
                </div>

                {articles.data.length === 0 ? (
                    <p className="text-gray-600 text-lg">
                        Aucun article trouvé.
                    </p>
                ) : (
                    <div className="space-y-6">
                        {articles.data.map((article) => (
                            <div
                                key={article.id}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-200
                                       hover:shadow-lg transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {article.title}
                                </h2>
                                <p
                                    className="text-gray-700 mt-3 line-clamp-3"
                                    title={article.content}
                                >
                                    {article.content}
                                </p>

                                {authUserId === article.user_id && (
                                    <div className="flex items-center justify-end mt-5 space-x-6">
                                        <Link
                                            href={`/articles/${article.id}/edit`}
                                            className="px-3 py-1 rounded bg-blue-100 text-blue-700
                                                   hover:bg-blue-200 transition-colors duration-200"
                                        >
                                            Modifier
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(article.id)
                                            }
                                            className="px-3 py-1 rounded bg-red-100 text-red-700
                                                   hover:bg-red-200 transition-colors duration-200"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
