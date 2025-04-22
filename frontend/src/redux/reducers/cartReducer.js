const initialState = {
    items: []
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Verifica si el producto ya está en el carrito
        const existingItem = state.items.find(item => item.id === action.payload.id);
        
        if (existingItem) {
          // Si existe, actualiza la cantidad
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        } else {
          // Si no existe, agrégalo al carrito
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }]
          };
        }
        
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        };
        
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        };
        
      default:
        return state;
    }
  };
  
  export default cartReducer;