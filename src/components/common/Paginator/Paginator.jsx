import { useState } from 'react'
import styles from './Paginator.module.css'

export default function Paginator({pagesPortion = 10, totalItems, portionCount, currentPage, changePageFn}) {

    const [currentPortion, setCurrentPortion] = useState(1);
    const totalPages = Math.ceil(totalItems / portionCount);
    const totalPortions = Math.ceil(totalPages / pagesPortion );
    const firstPortionPage = (currentPortion - 1) * portionCount + 1;
    const lastPortionPage = currentPortion * portionCount;
    
    function changePage(e) {
    changePageFn(e.target.innerText)
    
    }
    function prevPage() {
        setCurrentPortion((prev) => {
            return prev - 1 
        })
    }
    
    function nextPage() {
        setCurrentPortion((prev) => {
            return prev + 1}
            )
    }
    
    const pagesArr = [];
    for (let i = 0; i < totalPages; i++) {pagesArr.push(i)}
        return (<div className={styles.pagination_container}>
        {currentPortion > 1 && <div className={styles.prevPage} onClick={prevPage}>{'<'}</div>}
            <div>
                {
                    pagesArr
                    .filter((page) => {
                    return page >= firstPortionPage && page <= lastPortionPage})
                    .map((page) => { return <span 
                    id={page}
                    onClick={(e)=>{changePage(e)}}
                    className={`${styles.page}
                    ${currentPage == page && styles.currentPage}`}>
                    {page}
                    </span>})
                }
            </div>
        {currentPortion < totalPortions &&
         <div className={styles.nextPage} onClick={nextPage}>{'>'}</div>}
            </div>
        )
    }
