
const Orders = [
  {
    id: 1,
    BloodGroup: "A+",
    BagNumber: "BAG001",
    paymentStatus: "Due",
    shipping: "Pending",
    date: "2023-05-01"
  },
  {
    id: 2,
    BloodGroup: "B-",
    BagNumber: "BAG002",
    paymentStatus: "Paid",
    shipping: "Completed",
    date: "2023-05-02"
  },
  {
    id: 3,
    BloodGroup: "O+",
    BagNumber: "BAG003",
    paymentStatus: "Partial",
    shipping: "Pending",
    date: "2023-05-03"
  },
  {
    id: 4,
    BloodGroup: "AB+",
    BagNumber: "BAG004",
    paymentStatus: "Paid",
    shipping: "Completed",
    date: "2023-05-04"
  },
  {
    id: 5,
    BloodGroup: "A-",
    BagNumber: "BAG005",
    paymentStatus: "Due",
    shipping: "Declined",
    date: "2023-05-05"
  }
];

function updateStatus(tr, order) {
  const updateForm = document.createElement('div');
  updateForm.className = 'update-form';
  updateForm.innerHTML = `
    <h3>Update Order #${order.id}</h3>
    <select id="paymentStatus">
      <option value="Due" ${order.paymentStatus === 'Due' ? 'selected' : ''}>Due</option>
      <option value="Paid" ${order.paymentStatus === 'Paid' ? 'selected' : ''}>Paid</option>
      <option value="Partial" ${order.paymentStatus === 'Partial' ? 'selected' : ''}>Partial Payment</option>
    </select>
    <select id="shippingStatus">
      <option value="Pending" ${order.shipping === 'Pending' ? 'selected' : ''}>Pending</option>
      <option value="Completed" ${order.shipping === 'Completed' ? 'selected' : ''}>Completed</option>
      <option value="Declined" ${order.shipping === 'Declined' ? 'selected' : ''}>Declined</option>
    </select>
    <button id="saveUpdate">Save Changes</button>
    <button id="cancelUpdate">Cancel</button>
  `;
  
  document.body.appendChild(updateForm);
  
  document.getElementById('saveUpdate').addEventListener('click', () => {
    const newPaymentStatus = document.getElementById('paymentStatus').value;
    const newShippingStatus = document.getElementById('shippingStatus').value;

    const orderIndex = Orders.findIndex(o => o.id === order.id);
    if (orderIndex !== -1) {
      Orders[orderIndex].paymentStatus = newPaymentStatus;
      Orders[orderIndex].shipping = newShippingStatus;
      
      tr.innerHTML = `
        <td>${order.BloodGroup}</td>
        <td>${order.BagNumber}</td>
        <td>${newPaymentStatus}</td>
        <td class="${newShippingStatus === "Declined" ? "danger" : newShippingStatus === "Pending" ? "warning" : "primary"}">
          ${newShippingStatus}
        </td>
        <td>
          <button class="update-btn">Update</button>
          <button class="delete-btn" data-id="${order.id}">Delete</button>
        </td>
      `;
      
      tr.querySelector('.update-btn').addEventListener('click', () => updateStatus(tr, Orders[orderIndex]));
      tr.querySelector('.delete-btn').addEventListener('click', () => deleteOrder(order.id, tr));
    }
    
    document.body.removeChild(updateForm);
  });
  
  document.getElementById('cancelUpdate').addEventListener('click', () => {
    document.body.removeChild(updateForm);
  });
}

function deleteOrder(orderId, row) {
  const orderIndex = Orders.findIndex(o => o.id === orderId);
  
  if (orderIndex !== -1) {
    Orders.splice(orderIndex, 1);
    row.remove();
    
    if (Orders.length > 0) {
      const newOrderIndex = Math.min(orderIndex, Orders.length - 1);
      const newOrder = Orders[newOrderIndex];
      
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${newOrder.BloodGroup}</td>
        <td>${newOrder.BagNumber}</td>
        <td>${newOrder.paymentStatus}</td>
        <td class="${newOrder.shipping === "Declined" ? "danger" : newOrder.shipping === "Pending" ? "warning" : "primary"}">
          ${newOrder.shipping}
        </td>
        <td>
          <button class="update-btn">Update</button>
          <button class="delete-btn" data-id="${newOrder.id}">Delete</button>
        </td>
      `;
      
      const tableBody = document.querySelector("table tbody");
      const rows = tableBody.querySelectorAll('tr');
      if (newOrderIndex < rows.length) {
        tableBody.insertBefore(newRow, rows[newOrderIndex]);
      } else {
        tableBody.appendChild(newRow);
      }
      
      newRow.querySelector('.update-btn').addEventListener('click', () => updateStatus(newRow, newOrder));
      newRow.querySelector('.delete-btn').addEventListener('click', () => deleteOrder(newOrder.id, newRow));
    }
  }
}

function addNewOrder() {
  const newOrder = {
    id: Orders.length + 1,
    BloodGroup: ['A+', 'B-', 'O+', 'AB+', 'A-', 'B+', 'O-', 'AB-'][Math.floor(Math.random() * 8)],
    BagNumber: `BAG${String(Orders.length + 1).padStart(3, '0')}`,
    paymentStatus: ['Due', 'Paid', 'Partial'][Math.floor(Math.random() * 3)],
    shipping: ['Pending', 'Completed', 'Declined'][Math.floor(Math.random() * 3)],
    date: new Date().toISOString().split('T')[0]
  };
  
  Orders.push(newOrder);
  
  const tr = document.createElement("tr");
  const trContent = `
    <td>${newOrder.BloodGroup}</td>
    <td>${newOrder.BagNumber}</td>
    <td>${newOrder.paymentStatus}</td>
    <td class="${newOrder.shipping === "Declined" ? "danger" : newOrder.shipping === "Pending" ? "warning" : "primary"}">
      ${newOrder.shipping}
    </td>
    <td>
      <button class="update-btn">Update</button>
      <button class="delete-btn" data-id="${newOrder.id}">Delete</button>
    </td>
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
  
  tr.querySelector('.update-btn').addEventListener('click', () => updateStatus(tr, newOrder));
  tr.querySelector('.delete-btn').addEventListener('click', () => deleteOrder(newOrder.id, tr));
}

function cleanOldRecords() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const oldOrders = Orders.filter(order => new Date(order.date) < thirtyDaysAgo);
  
  oldOrders.forEach(order => {
    const orderIndex = Orders.findIndex(o => o.id === order.id);
    if (orderIndex !== -1) {
      Orders.splice(orderIndex, 1);
    }
    
    const rows = document.querySelectorAll('table tbody tr');
    rows.forEach(row => {
      if (row.querySelector('td:nth-child(2)').textContent === order.BagNumber) {
        row.remove();
      }
    });
  });
}

// Initialize orders table
document.addEventListener('DOMContentLoaded', function() {
  Orders.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
      <td>${order.BloodGroup}</td>
      <td>${order.BagNumber}</td>
      <td>${order.paymentStatus}</td>
      <td class="${order.shipping === "Declined" ? "danger" : order.shipping === "Pending" ? "warning" : "primary"}">
        ${order.shipping}
      </td>
      <td>
        <button class="update-btn">Update</button>
        <button class="delete-btn" data-id="${order.id}">Delete</button>
      </td>
    `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
    
    tr.querySelector('.update-btn').addEventListener('click', () => updateStatus(tr, order));
    tr.querySelector('.delete-btn').addEventListener('click', () => deleteOrder(order.id, tr));
  });
  
  // Clean old records every 24 hours
  setInterval(cleanOldRecords, 24 * 60 * 60 * 1000);
});

document.querySelector('.add-product').addEventListener('click', addNewOrder);
