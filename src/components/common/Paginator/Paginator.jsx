import { useState } from 'react'
import { connect } from 'react-redux'
import styles from './Paginator.module.css'
import {changePage} from '../../../redux/reducers/usersReducer'

 function Paginator(props) {
const pagesPortion = 10;
const [currentPortion, setCurrentPortion] = useState(1);
const totalPages = Math.ceil(props.totalUsersCount / props.portionCount);
const totalPortions = Math.ceil(totalPages / pagesPortion );
const firstPortionPage = (currentPortion - 1) * props.portionCount + 1;
const lastPortionPage = currentPortion * props.portionCount;

function changePage(e) {
console.log(e.target.innerText);
props.changePage(e.target.innerText)

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
                ${props.currentPage == page && styles.currentPage}`}>
                {page}
                </span>})
            }
        </div>
    {currentPortion < totalPortions &&
     <div className={styles.nextPage} onClick={nextPage}>{'>'}</div>}
        </div>
    )
}

const mapStateToProps = (state) => { 
    return {
        totalUsersCount:state.UsersPage.totalUsersCount,
        portionCount:state.UsersPage.portionCount,
        currentPage:state.UsersPage.currentPage
    }
}

export default connect(mapStateToProps,{changePage})(Paginator)