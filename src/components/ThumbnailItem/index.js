import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = thumbnailDetails
  const thumbnailClassName = isActive ? 'active' : 'blur'
  const onImageChange = () => {
    onClickImage(id)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onImageChange} className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`button ${thumbnailClassName}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
