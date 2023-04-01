const isNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl ">
                <figure>
                    <img src="https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.category}</div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        
            
            
        
    })
}

const noNews = () =>{
    return <div>saat ini belum ada berita yang tersedia</div>
}

const NewsLists = ({ news }) => {
    return !news ?noNews() : isNews(news)
}

export default NewsLists
