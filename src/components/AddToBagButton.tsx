import React from "react";
import { BAG_ICON } from "../constants/appConstants";
import { AddToBag } from "../styles/common";

interface AddToBagButtonProps {
  isSelected: boolean;
}

const AddToBagButton = ({ isSelected }: AddToBagButtonProps) => {
  return (
    <AddToBag>
      {isSelected ? <span>Added to the bag</span> : <span>Add to the bag</span>}
      <img src={BAG_ICON} alt="bag icon" />
    </AddToBag>
  );
};

export default AddToBagButton;
