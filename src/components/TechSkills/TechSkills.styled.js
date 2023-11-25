import styled from "styled-components";
import { ReactComponent as CrossIconPrimal } from "./icon/cross.svg";
import { ReactComponent as CheckmarkIconPrimal } from "./icon/checkmark.svg";
import { ReactComponent as DeleteIconPrimal } from "./icon/delete.svg";
import { ReactComponent as PencilIconPrimal } from "./icon/pencil.svg";

export const TechSkillsContainer = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
`;

export const TechSkillsTitle = styled.h2`
  pointer-events: none;
  margin-bottom: 8px;
`;

export const TechSkillsAddButton = styled.button`
  margin-left: auto;
  width: 85px;
  height: 19.5px;
  background: #425168;
  color: #fff;
  transition: 250ms;
  cursor: pointer;
  margin-top: 8px;
  &:hover,
  &:focus {
    background: #fff;
    color: #425168;
    outline: 1px solid #425168;
  }
`;

export const TechSkillsAddButtonBox = styled.div`
  position: absolute;
  right: 0;
  background: #425168;
  border-radius: 3px;
  width: 85px;
  height: 100%;
  align-items: center;
  display: flex;
`;

export const CheckmarkIcon = styled(CheckmarkIconPrimal)`
  height: 16px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;
export const CrossIcon = styled(CrossIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;
export const DeleteIcon = styled(DeleteIconPrimal)`
  height: 12px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;
export const PencilIcon = styled(PencilIconPrimal)`
  height: 12px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;

export const TechSkillAddInputBox = styled.div`
  margin-top: 3px;
  position: relative;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  height: 19px;
`;

export const TechSkillsAddButtonVariant = styled.button`
  background: none;
  width: 100%;
  background: #425168;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 250ms;
  fill: #fff;
  &:hover,
  &:focus {
    background: #fff;
    fill: #425168;
    box-shadow: 0px 0px 1px #425168;
  }
`;

export const TechSkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style: none;
`;

export const TechSkillsListItem = styled.li`
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
  }
`;

export const TechSkillsItemEditBox = styled.div`
  margin-left: auto;
  width: 64px;
  display: flex;
  height: 19.5px;
  border-radius: 3px;
`;

export const TechSkillsItemEditButton = styled.button`
  min-width: 85px;
  fill: #fff;
  background: #425168;
  height: 19.5px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    fill: #425168;
    background: #fff;
    outline: 1px solid #425168;
  }
`;

export const TechSkillsInput = styled.input`
  width: 100%;
  background: none;
  cursor: pointer;
`;