import styled from 'styled-components'
import { List } from 'antd'

export const Container = styled('div')`
  display: inline-block;
  width: 100%;
  padding: 5px 0px;
`

export const StyledList = styled(List)`
  //   margin-top: 8px;
  //   max-height: 200px;
  //   overflow-y: auto;
  //   background-color: white;
  //   border: 1px solid #ddd;
  //   border-radius: 6px;
  //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  //   width: 100%;
  padding: 0px 5px;
  .ant-list-items {
    padding: 0;
  }
`

export const StyledListElement = styled(List.Item)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    // color: #fff;
    // border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92, 0.1);
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`

// export const Input = styled()
