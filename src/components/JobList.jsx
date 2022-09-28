import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFilter } from 'redux/filters/filter-actions';
import { selectFilters } from 'redux/filters/filter-selects';
import { selectVisiblePositions } from 'redux/positions/position-selectors';
import { JobPosition } from './JobPosition';

const JobList = () => {



  const dispatch = useDispatch()
  const currentFilter = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilter))

  const handlerAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition onHandlerAddFilter={handlerAddFilter} key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList };