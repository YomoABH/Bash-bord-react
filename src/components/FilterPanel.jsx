import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'redux/filters/filter-actions';
import { selectFilters } from 'redux/filters/filter-selects';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {


  const dispatch = useDispatch()
  const currentFilter = useSelector(selectFilters)

  if (currentFilter.length === 0) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map(filter => {
            return (<Badge
              variant="clearable"
              onClear={() => (dispatch(removeFilter(filter)))}
              key={filter}>
              {filter}</Badge>)
          })
          }
        </Stack>

        <button
          className='link'
          onClick={() => { dispatch(clearFilter()) }}
        >Clear</button>
      </div>
    </Card >
  )
}

export { FilterPanel };