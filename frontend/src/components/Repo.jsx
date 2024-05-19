import toast from "react-hot-toast";
import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const Repo = ({repos}) => {

	let language = repos.language ? repos.language.toLowerCase() : '';

      
	return (
		<li className='mb-10 ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-white'
			>
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={repos.html_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{repos.name}
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> {repos.stargazers_count}
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork /> {repos.forks_count}
				</span>
				<span
					className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'

					onClick={() => {
						navigator.clipboard.writeText(repos.clone_url);
						toast.success('Repo URL Copied to Clipboard');
					}}
				>
					<FaCopy /> Clone
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				Released on {repos.created_at.slice(0, 10)}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>
				{repos.description ? repos.description.slice(0,500) : 'No Description Provided'}
			</p>
			{language ? <img src={`/${language}.svg`} alt='language icon' className='h-8 cursor-pointer' title={repos.language} /> : null}


		</li>
	);
};

export default Repo