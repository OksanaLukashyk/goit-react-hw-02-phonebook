import css from './Filter.module.css';

export const Filter = ({filterValue, handleFilterInputChange}) => { 
        return (
            <label   className={css.filterLabel}>
                Find contacts by name
                <input
                    className="filterInput"
                    type="text"
                    name="filter"
                    placeholder="Enter name"
                    value={filterValue}
                    onChange={handleFilterInputChange}
                />
            </label>
        );
    };
