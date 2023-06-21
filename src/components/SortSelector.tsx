import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;    // to display label in 'Order button' dynamically
}


const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  // reverse sort if "-" (hyphen)
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Released date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
      // Drpodown List
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
              {/* to display label in 'Ordey' button dynamically */}
              Order By: { currentSortOrder?.label || 'Relevance' }
          </MenuButton>
          {/* Items */}
          <MenuList>
              {
                sortOrders.map(order =>
                  <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                    {order.label}
                  </MenuItem>
                )
              }
          </MenuList>
      </Menu>
  );
};

export default SortSelector;