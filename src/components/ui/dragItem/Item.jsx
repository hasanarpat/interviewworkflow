import React, { forwardRef } from "react";
const Item = forwardRef(({ id, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {id}
    </div>
  );
});
Item.displayName = "Item";
export default Item;
