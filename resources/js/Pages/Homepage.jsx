import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/Newslist";
import Paginator from "@/Components/Homepage/Paginator";


export default function Homepage(props) {
    // console.log('props :', props);
    
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col items-center gap-4 m-4 p-4 lg:flex-row lg:flex-wrap lg:items-stretch">
                <NewsLists news={props.news.data} /> 
            </div>
            <div className="flex justify-center m-4">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
