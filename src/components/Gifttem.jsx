
const Gifttem = ({ title, url}) => {
  return (
    <div className="card">
        <h2>{title}</h2>
        <img src={url} alt={title} />
        <a href={url} target="_blank" rel="noopener noreferrer">Open in a new tab</a>            

    </div>
  )
}

export default Gifttem