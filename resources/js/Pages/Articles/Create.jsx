import React from "react";
import { useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/articles");
    };

    return (
        <AppLayout>
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-extrabold mb-8 text-gray-900">
                    Créer un article
                </h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-6">
                        <label
                            htmlFor="title"
                            className="block mb-2 font-semibold text-gray-700"
                        >
                            Titre
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className={`w-full rounded-md border px-4 py-3 text-gray-900 placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            transition-shadow duration-200
                            ${
                                errors.title
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="Entrez le titre de l'article"
                        />
                        {errors.title && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.title}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="content"
                            className="block mb-2 font-semibold text-gray-700"
                        >
                            Contenu
                        </label>
                        <textarea
                            id="content"
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                            rows={8}
                            className={`w-full rounded-md border px-4 py-3 text-gray-900 placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            transition-shadow duration-200 resize vertical
                            ${
                                errors.content
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="Rédigez le contenu de l'article ici..."
                        />
                        {errors.content && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.content}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className={`w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                        text-white font-semibold py-3 rounded-md shadow-md
                        transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {processing ? "Enregistrement..." : "Enregistrer"}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
