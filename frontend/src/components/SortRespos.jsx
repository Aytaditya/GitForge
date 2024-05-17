/* eslint-disable no-unused-vars */

const SortRespos = ({onSort,sortType}) => {
	return (
		<div className='mb-2 flex justify-center lg:justify-end'>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:bg-gray-800

				${sortType==='recent' ? 'border-blue-500 border-[2px]' : 'border-none'}
				
				`}

				

				onClick={()=>onSort('recent')}
			>
				Most Recent
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:bg-gray-800

				${sortType==='stars' ? 'border-blue-500 border-[2px]' : 'border-none'}
				
				`}

				onClick={()=>onSort('stars')}
			>
				Most Stars
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:bg-gray-800

				${sortType==='forks' ? 'border-blue-500 border-[2px]' : 'border-none'}
				
				`}

				onClick={()=>onSort('forks')}
			>
				Most Forks
			</button>
		</div>
	);
};
export default SortRespos
