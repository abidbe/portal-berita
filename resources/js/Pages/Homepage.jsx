import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/Newslist";


export default function Homepage(props) {
    console.log("props :" ,props);
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <div className="m-4">
                { <NewsLists news={props.news.data} /> }
            </div>
        </div>
    );
}
