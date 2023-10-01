
interface Props {
  style : string
}

function Search({ style}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className={`${style}`}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  )
}

export default Search