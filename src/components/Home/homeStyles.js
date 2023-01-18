import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #64766a;
`;
export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 500px;
  font-size:0.8rem;
  background: trasparent;
`;
export const EmployeeForm = styled(EmployeeList)`
  flex-direction: row;
  margin:  50px 0;
  padding-top: 0;
  justify-content: space-between;
  align-items: center;
`;
export const EmployeeItem = styled.div`
  display: block;
  height: 30px;
  padding: 0 15px;
  align-content:left;
  justify-content: center;
  padding-top: 5px;
  justify-content: space-between;
  background-color: #f4f2f3;
  &:nth-child(even) {
    background-color: #c0a9bd;
  }
`;
export const DeleteEmployee = styled.div`
  display: flex;
  position: relative;
  z-index: 50;
  height: 20px;
  width: 20px;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  color: red;
  top: -20px;
  border-radius: 50%;
  border: 1px solid red;
  cursor: pointer;
`;
export const Buttons = styled(EmployeeForm)`
  margin: 30px 0;
  height: 40px;
`;
export const TabButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 48%;
  border 1px solid white;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  
`;
