import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    // console.log("object", props);
    useEffect(() => {
        if (!props.myNews) {
            router.get("/news");
        }
        console.log("propss", props);
        return;
    }, []);
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            erorrs={props.erorrs}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {isNotif && (
                            <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input input-bordered w-full m-2"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="input input-bordered w-full m-2"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="input input-bordered w-full m-2"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <button
                            className="btn bg-white text-blue-950 m-2 hover:text-white hover:bg-primary"
                            onClick={() => handleSubmit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="p-6 overflow-hidden sm:rounded-lg">
                            {props.myNews && props.myNews.length > 0 ? (
                                props.myNews.map((news, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="card w-full bg-white shadow-xl m-2 "
                                        >
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {news.title}
                                                </h2>
                                                <p>{news.description}</p>
                                                <div className="card-actions justify-end">
                                                    <div className="badge badge-inline">
                                                        {news.category}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="flex justify-center">Anda belum memiliki berita 😥</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
