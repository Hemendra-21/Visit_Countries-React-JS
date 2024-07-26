import styled from 'styled-components'

export const VisitedCountryItem = styled.li`
  list-style-type: none;
  width: 23%;
  background-color: #1f1f2f;
  margin-right: 20px;
  margin-bottom: 30px;
`

export const VisitedCountryImg = styled.img`
  height: 140px;
  width: 100%;
`
export const VisitedCountryName = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const RemoveBtn = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #cbd5e1;
  font-size: 13px;
  font-family: 'Roboto';
  height: 30px;
  width: 70px;
  border-radius: 5px;
  cursor: pointer;
`
export const VisitedCountryNameAndButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
