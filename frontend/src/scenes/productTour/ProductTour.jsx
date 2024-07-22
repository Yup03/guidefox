import React, { useState } from 'react';
import List from '../../components/List/List';
import ContentArea from '../../components/ContentArea/ContentArea';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import ConfirmationPopup from '../../components/ConfirmationPopup/ConfirmationPopup';
import Button from '../../components/Button/Button';
import './ProductTourStyles.css';
import CustomCheckbox from '../../components/Checkbox/Checkbox';

const ProductPage = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showDemoItems, setShowDemoItems] = useState(false);

  const handleSelect = (idItem) => {
    setSelectedItem(idItem);
  };

  const handleDelete = () => {
    setPopupOpen(false);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleCreateItem = () => {
    setShowDemoItems(true);
  };

  const demoItems = [
    {
      title: 'Main dashboard - first login tour',
      timestamp: '10:00 AM',
      idItem: '184293',
      text: 'This pops up the first time the user logins to the dashboard.',
      onDelete: () => { },
      onEdit: () => { }
    },
  ];

  return (
    <div className="product-page-container">
      <div className="product-page">
        <ContentHeader title={showDemoItems ? "Demo Items" : "All Items"} />
        <ContentArea>
          <List items={items || demoItems} onSelectItem={handleSelect} />
          <Button text="Create an item" variant="contained" className="button-primary" onClick={handleCreateItem} />
          {/* CustomCheckbox component */}
          <div className="checkbox-section">
            <CustomCheckbox
              label="Parent Checkbox"
              childrenCheckboxes={["Child 1", "Child 2"]}
            />
            <CustomCheckbox
              label="Single Checkbox"
            />
            <CustomCheckbox
              label="Indeterminate Checkbox"
              indeterminate={true}
            />
          </div>
          {/* <TourDescriptionText description="A product onboarding tour is a guided walkthrough or tutorial..." />
          <InfoTooltip text="More info here" title="What is a product tour?" /> */}
          <ConfirmationPopup open={isPopupOpen} onConfirm={handleDelete} onCancel={handleClosePopup} />
        </ContentArea>
      </div>
    </div>
  );
};

export default ProductPage;