import {
  VisitedCountryItem,
  VisitedCountryImg,
  VisitedCountryNameAndButtonContainer,
  VisitedCountryName,
  RemoveBtn,
} from './styledComponents'

const CountryItem = props => {
  const {details, onRemoveVisitedCountry} = props
  console.log(details)
  const {imageUrl, name, id} = details
  return (
    <VisitedCountryItem>
      <VisitedCountryImg src={imageUrl} alt="thumbnail" />
      <VisitedCountryNameAndButtonContainer>
        <VisitedCountryName>{name}</VisitedCountryName>
        <RemoveBtn type="button" onClick={() => onRemoveVisitedCountry(id)}>
          Remove
        </RemoveBtn>
      </VisitedCountryNameAndButtonContainer>
    </VisitedCountryItem>
  )
}

export default CountryItem
