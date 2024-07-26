import styled from 'styled-components'

export const VisitCountriesContainer = styled.div`
  background-color: #161624;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 30px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #f8fafc;
  font-weight: 400;
`
export const NoCountryVisitedText = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #f8fafc;
  font-weight: 400;
`
export const CountriesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-height: 385px;
  overflow-y: scroll;
`

export const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`

export const ListItemName = styled.p`
  color: #f1f5f9;
`

export const VisitBtn = styled.button`
  border: none;
  background-color: #3b82f6;
  height: 30px;
  width: 80px;
  color: #ffffff;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 13px;
  cursor: pointer;
`
export const VisitedText = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 13px;
  padding-right: 20px;
`
export const VisitedCountriesContainer = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`
