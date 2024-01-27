const Pagination = ({page,lastPage,  setPage}) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        } )
    }
    
    const handleNextPage =(event)=> {
        event.prefentDefault
        if (page != lastPage) {

            setPage(page + 1)
            scrollTop()
        }
    }
    const handlePrevPage =(event)=> {
        event.prefentDefault
        if (page != 1) {

            setPage(page - 1)
            scrollTop()
        }
        
    }
    return (
        <div className="flex flex-row items-center justify-center py-4 px-2 gap-4 text-color-primary font-bold text-xl">
            
           <button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>Prev</button>
            
           <p>{page} of 1048  </p>
           <button className="transition-all hover:text-color-accent" onClick={handleNextPage}  >Next</button>
        </div>
    )
}

export default Pagination